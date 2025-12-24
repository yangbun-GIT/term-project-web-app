import React, { useState, useEffect } from 'react';
import {
    StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList,
    Image, SafeAreaView, Modal, ActivityIndicator, Keyboard, KeyboardAvoidingView, Platform
} from 'react-native';
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { getFirestore, collection, query, orderBy, onSnapshot, addDoc, serverTimestamp, doc } from "firebase/firestore";
import axios from 'axios';

// =================================================================
// ⚙️ 1. 설정 (API Key & Firebase Config) - [여기를 수정하세요!]
// =================================================================

// TODO: 웹 프로젝트의 .env 파일에 있는 VITE_TMDB_API_KEY 값을 복사해 넣으세요.
const TMDB_API_KEY = "2880ac77339fca10a79bd2e5fd5119d1";

// TODO: 웹 프로젝트의 src/firebase.ts 파일에 있는 firebaseConfig 내용을 복사해 넣으세요.
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
// 🚀 메인 앱 컴포넌트 (로그인 여부 체크)
// =================================================================
export default function App() {
    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        // 로그인 상태 감지
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
// 🔐 로그인 화면
// =================================================================
function LoginScreen() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

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
                style={styles.input} placeholder="이메일 (웹과 동일 계정)" placeholderTextColor="#888"
                value={email} onChangeText={setEmail} autoCapitalize="none"
            />
            <TextInput
                style={styles.input} placeholder="비밀번호" placeholderTextColor="#888"
                value={password} onChangeText={setPassword} secureTextEntry
            />
            <TouchableOpacity style={styles.redBtn} onPress={handleLogin}>
                <Text style={styles.btnText}>로그인</Text>
            </TouchableOpacity>
        </View>
    );
}

// =================================================================
// 🏠 메인 탭 화면 (홈 / 검색 / 찜 목록)
// =================================================================
function MainTabScreen({ user }: { user: any }) {
    const [currentTab, setCurrentTab] = useState('home'); // 'home' | 'search' | 'wishlist'
    const [selectedMovie, setSelectedMovie] = useState<any>(null); // 선택된 영화 (채팅 모달용)

    const renderContent = () => {
        switch (currentTab) {
            case 'home': return <HomeScreen onSelectMovie={setSelectedMovie} />;
            case 'search': return <SearchScreen onSelectMovie={setSelectedMovie} />;
            case 'wishlist': return <WishlistScreen user={user} onSelectMovie={setSelectedMovie} />;
            default: return <HomeScreen onSelectMovie={setSelectedMovie} />;
        }
    };

    return (
        <View style={styles.container}>
            {/* 상단 헤더 */}
            <View style={styles.header}>
                <Text style={styles.headerLogo}>YJYFLIX</Text>
                <TouchableOpacity onPress={() => signOut(auth)}>
                    <Text style={styles.logoutText}>로그아웃</Text>
                </TouchableOpacity>
            </View>

            {/* 메인 컨텐츠 (탭에 따라 바뀜) */}
            <View style={{ flex: 1 }}>
                {renderContent()}
            </View>

            {/* 하단 탭바 */}
            <View style={styles.tabBar}>
                <TabButton title="🏠 홈" isActive={currentTab === 'home'} onPress={() => setCurrentTab('home')} />
                <TabButton title="🔍 검색" isActive={currentTab === 'search'} onPress={() => setCurrentTab('search')} />
                <TabButton title="❤️ 찜 목록" isActive={currentTab === 'wishlist'} onPress={() => setCurrentTab('wishlist')} />
            </View>

            {/* 채팅 모달 (영화 선택 시 뜸) */}
            <Modal visible={!!selectedMovie} animationType="slide" onRequestClose={() => setSelectedMovie(null)}>
                {selectedMovie && <ChatRoom user={user} movie={selectedMovie} onClose={() => setSelectedMovie(null)} />}
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
// 1️⃣ [탭 1] 홈 화면 (인기 영화)
// =================================================================
function HomeScreen({ onSelectMovie }: any) {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPopular = async () => {
            try {
                const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_API_KEY}&language=ko-KR`);
                setMovies(res.data.results);
            } catch (e) { console.error(e); } finally { setLoading(false); }
        };
        fetchPopular();
    }, []);

    if (loading) return <ActivityIndicator size="large" color="#e50914" style={{marginTop:50}} />;

    return (
        <View style={styles.pageContainer}>
            <Text style={styles.pageTitle}>🔥 지금 뜨는 콘텐츠</Text>
            <MovieGrid movies={movies} onSelectMovie={onSelectMovie} />
        </View>
    );
}

// =================================================================
// 2️⃣ [탭 2] 검색 화면
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
            setMovies(res.data.results);
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
// 3️⃣ [탭 3] 찜 목록 화면 (실시간 연동)
// =================================================================
function WishlistScreen({ user, onSelectMovie }: any) {
    const [wishlist, setWishlist] = useState([]);

    useEffect(() => {
        // 웹과 동일한 Firestore 경로(users -> uid) 구독
        const userRef = doc(db, "users", user.uid);
        const unsubscribe = onSnapshot(userRef, (docSnap) => {
            if (docSnap.exists()) {
                const data = docSnap.data();
                setWishlist(data.wishlist || []);
            }
        });
        return unsubscribe;
    }, [user.uid]);

    return (
        <View style={styles.pageContainer}>
            <Text style={styles.pageTitle}>❤️ 내가 찜한 콘텐츠 ({wishlist.length})</Text>
            <MovieGrid movies={wishlist} onSelectMovie={onSelectMovie} emptyMessage="웹에서 '하트'를 눌러보세요!" />
        </View>
    );
}

// =================================================================
// 💬 [공통] 영화 그리드 & 채팅방 UI
// =================================================================
function MovieGrid({ movies, onSelectMovie, emptyMessage }: any) {
    if (!movies || movies.length === 0) {
        return <Text style={styles.emptyText}>{emptyMessage}</Text>;
    }
    return (
        <FlatList
            data={movies}
            keyExtractor={(item: any) => String(item.id)}
            numColumns={3}
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
    );
}

function ChatRoom({ user, movie, onClose }: any) {
    const [messages, setMessages] = useState<any[]>([]);
    const [text, setText] = useState("");

    useEffect(() => {
        // 웹과 동일한 채팅 경로 구독
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

    return (
        <SafeAreaView style={styles.chatContainer}>
            <View style={styles.chatHeader}>
                <TouchableOpacity onPress={onClose}><Text style={styles.closeBtn}>✕</Text></TouchableOpacity>
                <Text style={styles.chatTitle} numberOfLines={1}>{movie.title}</Text>
                <View style={{width: 30}} />
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
// 🎨 스타일 (넷플릭스 다크 모드)
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
    chatTitle: { color: '#fff', fontSize: 16, fontWeight: 'bold', flex: 1, textAlign: 'center' },
    closeBtn: { color: '#fff', fontSize: 24, padding: 5 },
    bubble: { padding: 10, borderRadius: 10, marginVertical: 5, marginHorizontal: 10, maxWidth: '80%' },
    myMsg: { backgroundColor: '#e50914', alignSelf: 'flex-end' },
    otherMsg: { backgroundColor: '#333', alignSelf: 'flex-start' },
    msgUser: { fontSize: 10, color: '#ffcccc', marginBottom: 2 },
    msgText: { color: '#fff', fontSize: 16 },
    inputArea: { flexDirection: 'row', padding: 10, borderTopWidth: 1, borderTopColor: '#333', alignItems: 'center', backgroundColor: '#000' },
    inputField: { flex: 1, backgroundColor: '#333', color: '#fff', borderRadius: 20, paddingHorizontal: 15, paddingVertical: 10, marginRight: 10 },
    sendText: { color: '#e50914', fontWeight: 'bold', fontSize: 16 }
});