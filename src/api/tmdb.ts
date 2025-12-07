import axios from 'axios'

const tmdb = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    timeout: 10000,
})

tmdb.interceptors.request.use((config) => {
    // 로컬 스토리지에서 키 꺼내기
    const apiKey = localStorage.getItem('TMDb-Key')

    if (!config.params) config.params = {}

    // API 키와 언어 설정 자동 추가
    config.params.api_key = apiKey
    config.params.language = 'ko-KR'

    return config
}, (error) => {
    return Promise.reject(error)
})

export default tmdb