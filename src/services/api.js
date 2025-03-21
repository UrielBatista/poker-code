// https://pokeapi.co/api/v2/pokemon/mewtwo/
import axios from 'axios'

const api = axios.create({
    
    baseURL: 'https://pokeapi.co/api/v2/pokemon/', //BASE URL DO BACKEND
    headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'poker-dex/1.0 (ur.sabatista@gmail.com)'
    }   
})

export default api