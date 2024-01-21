import {createRouter} from '../core/heropy.js'
import Home from './Home'
import Movie from './Movie'

export default createRouter([
    { path: '#/', component: Home},
    { path: '#/movie', component: Movie}, 
])