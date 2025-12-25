import React, { useState, useEffect, useRef } from 'react';
import {
    StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList,
    Image, SafeAreaView, Modal, ActivityIndicator, Keyboard, KeyboardAvoidingView, Platform, Alert
} from 'react-native';
import { initializeApp } from "firebase/app";
// [수정] GoogleAuthProvider, signInWithCredential 추가 임포트
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged, GoogleAuthProvider, signInWithCredential } from "firebase/auth";
import {
    getFirestore, collection, query, orderBy, onSnapshot,
    addDoc, serverTimestamp, doc, updateDoc, arrayUnion, arrayRemove
} from "firebase/firestore";
import axios from 'axios';

// [추가] 구글 로그인 라이브러리 임포트
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';

// [추가] 웹 브라우저 팝업 처리를 위해 필수
WebBrowser.maybeCompleteAuthSession();

// =================================================================
// ⚙️ 1. 설정 (API Key & Firebase Config)
// =================================================================

const TMDB_API_KEY = "2880ac77339fca10a79bd2e5fd5119d1";

const firebaseConfig = {
    apiKey: "AIzaSyCMRPD1unHZ_nVaA5rSLmbvbfaLdRBLKCY",
    authDomain: "term-project-web-app.firebaseapp.com",
    projectId: "term-project-web-app",
    storageBucket: "term-project-web-app.firebasestorage.app",
    messagingSenderId: "676001090912",
    appId: "1:676001090912:web:d0c7c947c4e9b9b9186205",
    measurementId: "G-XG33C395Y0"
};

// Firebase 초기화
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// =================================================================
// 🚀 메인 앱 컴포넌트
// =================================================================
export default function App() {
    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (u) => setUser(u));
        return unsubscribe;
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            {user ? <MainTabScreen user={user} /> : <LoginScreen />}
        </SafeAreaView>
    );
}

// =================================================================
// 🔐 로그인 화면 (구글 로그인 추가됨)
// =================================================================
function LoginScreen() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // [추가] 구글 로그인 요청 훅
    const [request, response, promptAsync] = Google.useAuthRequest({
        // ⚠️ TODO: 아까 구글 클라우드 콘솔에서 복사한 '웹 클라이언트 ID'를 아래 따옴표 안에 넣으세요!
        webClientId: '676001090912-spqscd6d8qur62dr9gv6l3unjfh0nt4l.apps.googleusercontent.com',

        androidClientId: '676001090912-dvaqvqdc3jdbhlepulej6edvs018c9g6.apps.googleusercontent.com',

        responseType: "id_token",
    });

    // [추가] 구글 로그인 응답 처리
    useEffect(() => {
        if (response?.type === 'success') {
            // 1. 응답 데이터가 제대로 왔는지 콘솔에 출력해봅니다.
            console.log("구글 응답 데이터:", JSON.stringify(response, null, 2));

            const { id_token } = response.params;

            // 2. [중요] 토큰이 있는지 먼저 확인하고, 없으면 에러 처리를 합니다.
            if (!id_token) {
                Alert.alert("설정 오류", "구글에서 ID Token을 반환하지 않았습니다.\nClient ID 설정을 확인해주세요.");
                return;
            }

            // 토큰이 있을 때만 Firebase 로그인을 시도합니다.
            const credential = GoogleAuthProvider.credential(id_token);

            signInWithCredential(auth, credential)
                .then(() => {
                    console.log("Firebase 로그인 성공!");
                })
                .catch((error) => {
                    Alert.alert("로그인 실패", error.message);
                });
        }
        else if (response?.type === 'error') {
            Alert.alert("인증 오류", "구글 로그인 과정에서 오류가 발생했습니다.");
        }
    }, [response]);

    const handleLogin = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
        } catch (error) {
            alert("로그인 실패: 이메일과 비밀번호를 확인하세요.");
        }
    };

    return (
        <View style={styles.centerContainer}>
            <Text style={styles.logoText}>YJYFLIX</Text>
            <Text style={styles.subText}>Mobile App</Text>
            <TextInput
                style={styles.input} placeholder="이메일" placeholderTextColor="#888"
                value={email} onChangeText={setEmail} autoCapitalize="none"
            />
            <TextInput
                style={styles.input} placeholder="비밀번호" placeholderTextColor="#888"
                value={password} onChangeText={setPassword} secureTextEntry
            />

            {/* 이메일 로그인 버튼 */}
            <TouchableOpacity style={styles.redBtn} onPress={handleLogin}>
                <Text style={styles.btnText}>로그인</Text>
            </TouchableOpacity>

            {/* [추가] 구글 로그인 버튼 */}
            <TouchableOpacity
                style={[styles.googleBtn, { marginTop: 15 }]}
                disabled={!request}
                onPress={() => promptAsync()}
            >
                <Text style={[styles.btnText, { color: '#000' }]}>Google 계정으로 로그인</Text>
            </TouchableOpacity>
        </View>
    );
}

// =================================================================
// 🏠 메인 탭 화면
// =================================================================
function MainTabScreen({ user }: { user: any }) {
    const [currentTab, setCurrentTab] = useState('home');
    const [selectedMovie, setSelectedMovie] = useState<any>(null);
    const [wishlist, setWishlist] = useState<any[]>([]);

    useEffect(() => {
        const userRef = doc(db, "users", user.uid);
        const unsubscribe = onSnapshot(userRef, (docSnap) => {
            if (docSnap.exists()) {
                const data = docSnap.data();
                setWishlist(data.wishlist || []);
            }
        });
        return unsubscribe;
    }, [user.uid]);

    const renderContent = () => {
        switch (currentTab) {
            case 'wishlist': return <WishlistScreen wishlist={wishlist} onSelectMovie={setSelectedMovie} />;
            case 'home': return <HomeScreen onSelectMovie={setSelectedMovie} />;
            case 'search': return <SearchScreen onSelectMovie={setSelectedMovie} />;
            default: return <HomeScreen onSelectMovie={setSelectedMovie} />;
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => setCurrentTab('home')}>
                    <Text style={styles.headerLogo}>YJYFLIX</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => signOut(auth)}>
                    <Text style={styles.logoutText}>로그아웃</Text>
                </TouchableOpacity>
            </View>

            <View style={{ flex: 1 }}>
                {renderContent()}
            </View>

            <View style={styles.tabBar}>
                <TabButton title="❤️ 찜 목록" isActive={currentTab === 'wishlist'} onPress={() => setCurrentTab('wishlist')} />
                <TabButton title="🏠 홈" isActive={currentTab === 'home'} onPress={() => setCurrentTab('home')} />
                <TabButton title="🔍 검색" isActive={currentTab === 'search'} onPress={() => setCurrentTab('search')} />
            </View>

            <Modal visible={!!selectedMovie} animationType="slide" onRequestClose={() => setSelectedMovie(null)}>
                {selectedMovie && (
                    <ChatRoom
                        user={user}
                        movie={selectedMovie}
                        wishlist={wishlist}
                        onClose={() => setSelectedMovie(null)}
                    />
                )}
            </Modal>
        </View>
    );
}

const TabButton = ({ title, isActive, onPress }: any) => (
    <TouchableOpacity style={[styles.tabItem, isActive && styles.activeTab]} onPress={onPress}>
        <Text style={[styles.tabText, isActive && styles.activeTabText]}>{title}</Text>
    </TouchableOpacity>
);

// =================================================================
// 1️⃣ 홈 화면
// =================================================================
function HomeScreen({ onSelectMovie }: any) {
    const [movies, setMovies] = useState<any[]>([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    const fetchMovies = async (pageNum: number) => {
        if (loading) return;
        setLoading(true);
        try {
            const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_API_KEY}&language=ko-KR&page=${pageNum}`);
            const newMovies = res.data.results;

            setMovies(prev => {
                const combinedMovies = pageNum === 1 ? newMovies : [...prev, ...newMovies];
                const uniqueMoviesMap = new Map(combinedMovies.map((m: any) => [m.id, m]));
                return Array.from(uniqueMoviesMap.values());
            });

        } catch (e) { console.error(e); }
        finally { setLoading(false); }
    };

    useEffect(() => { fetchMovies(1); }, []);

    const loadMore = () => {
        if (!loading) {
            const nextPage = page + 1;
            setPage(nextPage);
            fetchMovies(nextPage);
        }
    };

    return (
        <View style={styles.pageContainer}>
            <Text style={styles.pageTitle}>🔥 인기 콘텐츠</Text>
            <MovieGrid
                movies={movies}
                onSelectMovie={onSelectMovie}
                onEndReached={loadMore}
                loading={loading}
            />
        </View>
    );
}

// =================================================================
// 2️⃣ 검색 화면
// =================================================================
function SearchScreen({ onSelectMovie }: any) {
    const [queryText, setQueryText] = useState("");
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);

    const searchMovies = async () => {
        if (!queryText.trim()) return;
        setLoading(true);
        Keyboard.dismiss();
        try {
            const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&language=ko-KR&query=${queryText}`);
            const uniqueMoviesMap = new Map(res.data.results.map((m: any) => [m.id, m]));
            setMovies(Array.from(uniqueMoviesMap.values()) as any);
        } catch (e) { alert("검색 실패"); } finally { setLoading(false); }
    };

    return (
        <View style={styles.pageContainer}>
            <View style={styles.searchBar}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="영화 제목 검색..."
                    placeholderTextColor="#888"
                    value={queryText}
                    onChangeText={setQueryText}
                    onSubmitEditing={searchMovies}
                />
                <TouchableOpacity style={styles.searchBtn} onPress={searchMovies}>
                    <Text style={styles.btnTextSmall}>검색</Text>
                </TouchableOpacity>
            </View>
            {loading ? <ActivityIndicator color="#e50914" style={{marginTop:20}} /> : (
                <MovieGrid movies={movies} onSelectMovie={onSelectMovie} emptyMessage="검색 결과가 없습니다." />
            )}
        </View>
    );
}

// =================================================================
// 3️⃣ 찜 목록 화면
// =================================================================
function WishlistScreen({ wishlist, onSelectMovie }: any) {
    return (
        <View style={styles.pageContainer}>
            <Text style={styles.pageTitle}>❤️ 내가 찜한 콘텐츠 ({wishlist.length})</Text>
            <MovieGrid movies={wishlist} onSelectMovie={onSelectMovie} emptyMessage="웹에서 '하트'를 눌러보세요!" />
        </View>
    );
}

// =================================================================
// 💬 [공통] 영화 그리드 (Top 버튼 위치 조정됨)
// =================================================================
function MovieGrid({ movies, onSelectMovie, emptyMessage, onEndReached, loading }: any) {
    const flatListRef = useRef<FlatList>(null);
    const [showTopBtn, setShowTopBtn] = useState(false);

    const handleScroll = (event: any) => {
        const offsetY = event.nativeEvent.contentOffset.y;
        setShowTopBtn(offsetY > 300);
    };

    const scrollToTop = () => {
        flatListRef.current?.scrollToOffset({ offset: 0, animated: true });
    };

    if (!movies || movies.length === 0) {
        return <Text style={styles.emptyText}>{emptyMessage}</Text>;
    }

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                ref={flatListRef}
                data={movies}
                keyExtractor={(item: any) => String(item.id)}
                numColumns={3}
                onEndReached={onEndReached}
                onEndReachedThreshold={0.5}
                onScroll={handleScroll}
                ListFooterComponent={loading ? <ActivityIndicator size="small" color="#e50914" style={{margin: 20}}/> : null}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.posterContainer} onPress={() => onSelectMovie(item)}>
                        <Image
                            source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
                            style={styles.poster}
                            resizeMode="cover"
                        />
                    </TouchableOpacity>
                )}
            />
            {showTopBtn && (
                <TouchableOpacity style={styles.topBtn} onPress={scrollToTop}>
                    <Text style={styles.topBtnText}>↑</Text>
                </TouchableOpacity>
            )}
        </View>
    );
}

// =================================================================
// 🎬 채팅방
// =================================================================
function ChatRoom({ user, movie, wishlist, onClose }: any) {
    const [messages, setMessages] = useState<any[]>([]);
    const [text, setText] = useState("");
    const isLiked = wishlist.some((m: any) => m.id === movie.id);

    useEffect(() => {
        const q = query(collection(db, "movies", String(movie.id), "messages"), orderBy("createdAt", "asc"));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            setMessages(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        });
        return unsubscribe;
    }, [movie.id]);

    const sendMessage = async () => {
        if (!text.trim()) return;
        try {
            await addDoc(collection(db, "movies", String(movie.id), "messages"), {
                text, uid: user.uid, email: user.email, createdAt: serverTimestamp()
            });
            setText("");
        } catch (e) { alert("전송 실패"); }
    };

    const toggleWishlist = async () => {
        const userRef = doc(db, "users", user.uid);
        try {
            if (isLiked) {
                const movieToRemove = wishlist.find((m: any) => m.id === movie.id) || movie;
                await updateDoc(userRef, { wishlist: arrayRemove(movieToRemove) });
                Alert.alert("삭제됨", "찜 목록에서 삭제되었습니다.");
            } else {
                const movieData = {
                    id: movie.id, title: movie.title,
                    poster_path: movie.poster_path, vote_average: movie.vote_average || 0
                };
                await updateDoc(userRef, { wishlist: arrayUnion(movieData) });
                Alert.alert("추가됨", "찜 목록에 추가되었습니다! ❤️");
            }
        } catch (e) { Alert.alert("오류", "찜 목록 수정 중 오류가 발생했습니다."); }
    };

    return (
        <SafeAreaView style={styles.chatContainer}>
            <View style={styles.chatHeader}>
                <TouchableOpacity onPress={onClose}><Text style={styles.closeBtn}>✕</Text></TouchableOpacity>
                <Text style={styles.chatTitle} numberOfLines={1}>{movie.title}</Text>
                <TouchableOpacity onPress={toggleWishlist} style={{ padding: 5 }}>
                    <Text style={{ fontSize: 24 }}>{isLiked ? "❤️" : "🤍"}</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={messages}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={[styles.bubble, item.uid === user.uid ? styles.myMsg : styles.otherMsg]}>
                        <Text style={styles.msgUser}>{item.email?.split('@')[0]}</Text>
                        <Text style={styles.msgText}>{item.text}</Text>
                    </View>
                )}
            />

            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
                <View style={styles.inputArea}>
                    <TextInput style={styles.inputField} value={text} onChangeText={setText} placeholder="응원톡 남기기..." placeholderTextColor="#888" />
                    <TouchableOpacity onPress={sendMessage}><Text style={styles.sendText}>전송</Text></TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

// =================================================================
// 🎨 스타일
// =================================================================
const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#000', paddingTop: Platform.OS === 'android' ? 25 : 0 },
    centerContainer: { flex: 1, justifyContent: 'center', padding: 20, backgroundColor: '#000' },
    pageContainer: { flex: 1, paddingHorizontal: 10, paddingTop: 10 },

    logoText: { fontSize: 40, fontWeight: 'bold', color: '#e50914', textAlign: 'center', marginBottom: 10 },
    subText: { fontSize: 18, color: '#ccc', textAlign: 'center', marginBottom: 40 },
    headerLogo: { fontSize: 24, fontWeight: 'bold', color: '#e50914' },
    logoutText: { color: '#bbb', fontSize: 14 },
    pageTitle: { color: '#fff', fontSize: 18, fontWeight: 'bold', marginBottom: 15, marginLeft: 5 },
    emptyText: { color: '#666', textAlign: 'center', marginTop: 50, fontSize: 16 },

    input: { backgroundColor: '#333', color: '#fff', padding: 15, borderRadius: 5, marginBottom: 15 },
    redBtn: { backgroundColor: '#e50914', padding: 15, borderRadius: 5, alignItems: 'center' },
    btnText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
    // [추가] 구글 로그인 버튼 스타일
    googleBtn: { backgroundColor: '#fff', padding: 15, borderRadius: 5, alignItems: 'center' },

    header: { flexDirection: 'row', justifyContent: 'space-between', padding: 15, alignItems: 'center', borderBottomWidth: 1, borderBottomColor: '#333' },

    tabBar: { flexDirection: 'row', borderTopWidth: 1, borderTopColor: '#333', backgroundColor: '#000', paddingBottom: 5, height: 60 },
    tabItem: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    activeTab: { borderTopWidth: 2, borderTopColor: '#e50914' },
    tabText: { color: '#666', fontSize: 12, marginTop: 4 },
    activeTabText: { color: '#fff', fontWeight: 'bold' },

    posterContainer: { flex: 1/3, padding: 3 },
    poster: { width: '100%', aspectRatio: 2/3, borderRadius: 4, backgroundColor: '#333' },

    searchBar: { flexDirection: 'row', marginBottom: 15 },
    searchInput: { flex: 1, backgroundColor: '#333', color: '#fff', padding: 10, borderRadius: 5, marginRight: 10 },
    searchBtn: { backgroundColor: '#e50914', justifyContent: 'center', paddingHorizontal: 15, borderRadius: 5 },
    btnTextSmall: { color: '#fff', fontWeight: 'bold' },

    chatContainer: { flex: 1, backgroundColor: '#111' },
    chatHeader: { flexDirection: 'row', justifyContent: 'space-between', padding: 15, alignItems: 'center', borderBottomWidth: 1, borderBottomColor: '#333' },
    chatTitle: { color: '#fff', fontSize: 16, fontWeight: 'bold', flex: 1, textAlign: 'center', marginRight: 10 },
    closeBtn: { color: '#fff', fontSize: 24, padding: 5 },
    bubble: { padding: 10, borderRadius: 10, marginVertical: 5, marginHorizontal: 10, maxWidth: '80%' },
    myMsg: { backgroundColor: '#e50914', alignSelf: 'flex-end' },
    otherMsg: { backgroundColor: '#333', alignSelf: 'flex-start' },
    msgUser: { fontSize: 10, color: '#ffcccc', marginBottom: 2 },
    msgText: { color: '#fff', fontSize: 16 },
    inputArea: { flexDirection: 'row', padding: 10, borderTopWidth: 1, borderTopColor: '#333', alignItems: 'center', backgroundColor: '#000' },
    inputField: { flex: 1, backgroundColor: '#333', color: '#fff', borderRadius: 20, paddingHorizontal: 15, paddingVertical: 10, marginRight: 10 },
    sendText: { color: '#e50914', fontWeight: 'bold', fontSize: 16 },

    topBtn: {
        position: 'absolute',
        bottom: 15,
        right: 30,
        backgroundColor: '#e50914',
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
        zIndex: 999,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    topBtnText: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: -3
    }
});