<template>
  <nav class="navbar" :class="{ 'black-nav': isScrolled, 'hover-nav': isHovered }" @mouseenter="isHovered = true" @mouseleave="isHovered = false">

    <div class="nav-left">
      <i class="fas fa-bars mobile-menu-btn" @click="toggleMobileMenu"></i>

      <a class="logo-link pc-logo" @click.prevent="handleLogoClick">
        <img src="../assets/yjy.png" alt="YJY PROJECT" class="logo-img" />
      </a>

      <div class="links">
        <router-link to="/">홈</router-link>
        <router-link to="/popular">인기 콘텐츠</router-link>
        <router-link to="/wishlist">내가 찜한 리스트</router-link>
        <router-link to="/search">찾아보기</router-link>
      </div>
    </div>

    <a class="logo-link mobile-logo" @click.prevent="handleLogoClick">
      <img src="../assets/yjy.png" alt="YJY PROJECT" class="logo-img" />
    </a>

    <div class="nav-right">
      <div ref="searchContainer" class="search-box" :class="{ active: showSearch, 'light-theme-box': theme === 'light' }">
        <i class="fas fa-search icon" @click="toggleSearch"></i>
        <input v-if="showSearch" ref="searchInput" v-model="searchQuery" @keyup.enter="goToSearch" placeholder="검색" />
      </div>

      <div class="pc-actions">
        <i class="fas icon theme-btn" :class="theme === 'dark' ? 'fa-sun' : 'fa-moon'" @click="store.toggleTheme" title="테마 변경"></i>
        <select v-model="language" @change="changeLang" class="nav-lang-selector" :class="{ 'light-theme-select': theme === 'light' }">
          <option value="ko-KR">KR</option>
          <option value="en-US">EN</option>
        </select>
        <i class="fas fa-cog icon setting-btn" @click="showSettings = true" title="설정"></i>
      </div>

      <div class="profile-menu">
        <div class="profile-icon">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="User" />
        </div>
        <i class="fas fa-caret-down dropdown-arrow"></i>

        <div class="dropdown">
          <div class="dropdown-content" :class="{ 'light-mobile': theme === 'light' }">
            <span class="user-info">{{ email || 'Guest' }}님</span>
            <hr>
            <div class="mobile-actions-menu">
              <div class="menu-item" @click="store.toggleTheme">
                <i class="fas" :class="theme === 'dark' ? 'fa-sun' : 'fa-moon'"></i>
                <span>{{ theme === 'dark' ? '라이트 모드' : '다크 모드' }}</span>
              </div>
              <div class="menu-item">
                <i class="fas fa-globe"></i>
                <select v-model="language" @change="changeLang" class="mobile-lang-select">
                  <option value="ko-KR">한국어</option>
                  <option value="en-US">English</option>
                </select>
              </div>
              <div class="menu-item" @click="showSettings = true">
                <i class="fas fa-cog"></i> <span>설정</span>
              </div>
              <hr>
            </div>
            <router-link to="/wishlist" class="drop-link"><i class="fas fa-heart"></i> 찜한 리스트</router-link>
            <button @click="handleLogout" class="logout-btn">로그아웃</button>
          </div>
        </div>
      </div>
    </div>

    <SettingsModal v-if="showSettings" @close="showSettings = false" />

    <transition name="slide-fade">
      <div v-if="showMobileMenu" class="mobile-menu-overlay" @click.self="showMobileMenu = false">
        <div class="mobile-menu-content" :class="{ 'light-mobile': theme === 'light' }">
          <div class="mobile-header">
            <span class="mobile-user">{{ email || 'Guest' }}</span>
            <i class="fas fa-times close-menu" @click="showMobileMenu = false"></i>
          </div>
          <div class="mobile-links">
            <router-link to="/" @click="showMobileMenu = false">홈</router-link>
            <router-link to="/popular" @click="showMobileMenu = false">인기 콘텐츠</router-link>
            <router-link to="/wishlist" @click="showMobileMenu = false">내가 찜한 리스트</router-link>
            <router-link to="/search" @click="showMobileMenu = false">찾아보기</router-link>
          </div>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useMovieStore } from '../stores/movieStore'
import { storeToRefs } from 'pinia'
import SettingsModal from './SettingsModal.vue'

const store = useMovieStore()
const { email, theme, language } = storeToRefs(store)

const isScrolled = ref(false)
const isHovered = ref(false)
const showSearch = ref(false)
const showSettings = ref(false)
const showMobileMenu = ref(false)
const searchQuery = ref('')
const searchInput = ref<HTMLInputElement | null>(null)
const searchContainer = ref<HTMLElement | null>(null)
const router = useRouter()
const route = useRoute()

const handleScroll = () => isScrolled.value = window.scrollY > 50
const handleClickOutside = (event: MouseEvent) => { if (showSearch.value && searchContainer.value && !searchContainer.value.contains(event.target as Node)) { showSearch.value = false } }
const handleLogout = () => { store.logout(); router.push('/signin') }
const handleLogoClick = () => { if (route.path === '/') window.scrollTo({ top: 0, behavior: 'smooth' }); else router.push('/') }
const changeLang = () => { store.setLanguage(language.value) }
const toggleSearch = () => { showSearch.value = !showSearch.value; if (showSearch.value) nextTick(() => searchInput.value?.focus()) }
const goToSearch = () => { if (searchQuery.value.trim()) router.push({ path: '/search', query: { q: searchQuery.value } }) }
const toggleMobileMenu = () => { showMobileMenu.value = !showMobileMenu.value }

onMounted(() => { window.addEventListener('scroll', handleScroll); window.addEventListener('click', handleClickOutside) })
onUnmounted(() => { window.removeEventListener('scroll', handleScroll); window.removeEventListener('click', handleClickOutside) })
</script>

<style>
/* 전역 스타일 */
html, body { margin: 0; padding: 0; width: 100%; overflow-x: hidden; }

/* [수정] 라이트 모드일 때 햄버거 버튼 색상 강제 변경 */
body.light-mode .mobile-menu-btn { color: #141414 !important; }
</style>

<style scoped>
/* Navbar 레이아웃 */
.navbar {
  display: flex; justify-content: space-between; align-items: center;
  padding: 0 4%;
  position: fixed; top: 0; left: 0; width: 100%; max-width: 100vw;
  z-index: 1000; height: 70px; box-sizing: border-box;
  transition: background-color 0.4s ease;
  background: linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%);
}
.navbar.black-nav { background-color: #141414; }
.navbar.hover-nav { background-color: rgba(0,0,0,0.9); }

/* [추가] 라이트 모드일 때 Navbar 배경 */
:global(body.light-mode) .navbar.black-nav,
:global(body.light-mode) .navbar.hover-nav {
  background-color: #ffffff !important;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.nav-left, .nav-right { display: flex; align-items: center; }
.nav-left { gap: 30px; }
.nav-right { gap: 15px; }

.logo-img { height: 50px; width: auto; display: block; }
.mobile-logo { display: none; }

.links { display: flex; gap: 30px; }
.links a { color: #e5e5e5; text-decoration: none; font-size: 1.1rem; transition: 0.3s; }
.links a:hover, .links a.router-link-active { color: #fff; font-weight: bold; }
/* 라이트 모드에서 PC 링크 색상 */
:global(body.light-mode) .links a { color: #333; }
:global(body.light-mode) .links a:hover,
:global(body.light-mode) .links a.router-link-active { color: #e50914; }

.icon { font-size: 1.4rem; cursor: pointer; color: white; transition: 0.3s; }
/* 라이트 모드 아이콘 색상 */
:global(body.light-mode) .icon { color: #333 !important; }

.pc-actions { display: flex; align-items: center; gap: 15px; }

/* 검색창 */
.search-box { display: flex; align-items: center; gap: 5px; padding: 5px; border: 1px solid transparent; transition: 0.3s; }
.search-box.active { border: 1px solid #fff; background: rgba(0,0,0,0.8); padding: 5px 10px; border-radius: 4px; }
.search-box input { background: transparent; border: none; color: white; width: 0; outline: none; transition: width 0.3s; font-size: 1rem; }
.search-box.active input { width: 180px; }

.nav-lang-selector { background: transparent; color: #fff; border: 1px solid #fff; border-radius: 4px; padding: 2px 5px; font-size: 0.9rem; cursor: pointer; }
.nav-lang-selector option { background: #333; color: #fff; }

/* 라이트 모드 검색창 & 선택기 */
.search-box.active.light-theme-box { background: #ffffff !important; border: 1px solid #ccc !important; }
.search-box.light-theme-box input { color: #333333 !important; }
.search-box.light-theme-box .icon { color: #333333 !important; }
.nav-lang-selector.light-theme-select { color: #333333 !important; border-color: #ccc !important; background-color: #ffffff !important; }
.nav-lang-selector.light-theme-select option { background-color: #ffffff !important; color: #333333 !important; }

/* 프로필 메뉴 */
.profile-menu { position: relative; display: flex; align-items: center; gap: 5px; cursor: pointer; }
.profile-icon img { width: 35px; height: 35px; border-radius: 4px; }
.dropdown-arrow { font-size: 0.7rem; color: white; }
:global(body.light-mode) .dropdown-arrow { color: #333; }

.dropdown { position: absolute; top: 100%; right: 0; padding-top: 10px; display: none; }
.profile-menu:hover .dropdown { display: block; }

.dropdown-content { background-color: rgba(0,0,0,0.95); border: 1px solid #333; width: 180px; padding: 15px; display: flex; flex-direction: column; gap: 10px; border-radius: 4px; }

/* 모바일 드롭다운 라이트 모드 */
.dropdown-content.light-mobile { background: #fff; color: #333; border-color: #ddd; box-shadow: 0 4px 10px rgba(0,0,0,0.1); }
.user-info { font-size: 0.9rem; font-weight: bold; }
.drop-link, .logout-btn { color: #ccc; text-decoration: none; font-size: 0.9rem; background: none; border: none; text-align: left; cursor: pointer; }
.drop-link:hover, .logout-btn:hover { color: white; }
.dropdown-content.light-mobile .drop-link, .dropdown-content.light-mobile .logout-btn { color: #333; }
.dropdown-content.light-mobile .drop-link:hover { color: #e50914; }

.mobile-actions-menu { display: none; flex-direction: column; gap: 10px; }
.menu-item { display: flex; align-items: center; gap: 10px; font-size: 0.9rem; cursor: pointer; color: #ccc; }
.menu-item:hover { color: white; }
.dropdown-content.light-mobile .menu-item { color: #333; }
.dropdown-content.light-mobile .menu-item:hover { color: #e50914; }
.mobile-lang-select { background: transparent; color: inherit; border: 1px solid #555; border-radius: 4px; padding: 2px; font-size: 0.8rem; }

.mobile-menu-btn { display: none; font-size: 1.5rem; color: white; cursor: pointer; margin-right: 10px; }

/* 모바일 메뉴 오버레이 */
.mobile-menu-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100vh; background: rgba(0,0,0,0.5); z-index: 2000; }
.mobile-menu-content { width: 70%; max-width: 280px; height: 100%; background: #141414; padding: 20px; display: flex; flex-direction: column; gap: 20px; }

/* [수정] 모바일 메뉴 라이트 모드 스타일 강화 */
.mobile-menu-content.light-mobile {
  background: #ffffff;
  color: #333333;
}
.mobile-menu-content.light-mobile .close-menu { color: #333; }
.mobile-menu-content.light-mobile .mobile-user { color: #333; font-weight: bold; }

.mobile-links a { display: block; font-size: 1.1rem; color: #aaa; margin-bottom: 15px; text-decoration: none; }
.mobile-links a.router-link-active { color: white; font-weight: bold; border-left: 3px solid #e50914; padding-left: 10px; }

/* 모바일 메뉴 링크 라이트 모드 */
.mobile-menu-content.light-mobile .mobile-links a { color: #666; }
.mobile-menu-content.light-mobile .mobile-links a.router-link-active {
  color: #333;
  border-left-color: #e50914;
}

@media (max-width: 768px) {
  .links, .pc-actions, .pc-logo { display: none !important; }
  .mobile-menu-btn { display: block; }

  .mobile-logo { display: block; position: absolute; left: 50%; transform: translateX(-50%); }
  .logo-img { height: 35px; } /* 모바일 로고 크기 원복 */

  .mobile-actions-menu { display: flex; }
  .navbar { padding: 0 4%; }

  .search-box.active { border: none !important; background: transparent !important; padding: 0 !important; position: static; }
  .search-box.active input {
    display: block; position: absolute; top: 70px; left: 0; width: 100% !important; height: 60px;
    padding: 0 20px; box-sizing: border-box; font-size: 1rem;
    background: #141414; color: white; border-top: 1px solid #333; border-bottom: 1px solid #333;
    z-index: 999; box-shadow: 0 4px 10px rgba(0,0,0,0.5);
  }
  .search-box.active.light-theme-box input { background: #ffffff !important; color: #333333 !important; border-top: 1px solid #ccc !important; border-bottom: 1px solid #ccc !important; }
}

.slide-fade-enter-active, .slide-fade-leave-active { transition: transform 0.3s ease; }
.slide-fade-enter-from, .slide-fade-leave-to { transform: translateX(-100%); }
</style>