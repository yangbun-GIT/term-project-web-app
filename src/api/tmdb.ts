import axios from 'axios'

const tmdb = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    timeout: 10000,
})

tmdb.interceptors.request.use((config) => {
    // [.env 파일에서 키 가져오기]
    const apiKey = import.meta.env.VITE_TMDB_API_KEY
    const lang = localStorage.getItem('app-lang') || 'ko-KR'
    const includeAdult = localStorage.getItem('include-adult') === 'true'

    if (!config.params) config.params = {}

    config.params.api_key = apiKey
    config.params.language = lang
    config.params.include_adult = includeAdult

    return config
}, (error) => {
    return Promise.reject(error)
})

export default tmdb