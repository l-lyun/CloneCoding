import { Store} from '../core/heropy.js'

const store = new Store({
    searchText: '',
    page: 1,
    movies: []
}) 

export default store
export const searchMovies = async page => {
    if (page === 1) {
        store.state.page = 1;
        store.state.movies = [];
    }
    const res =await fetch(`http://www.omdbapi.com/?apikey=7035c60c&s=${store.state.searchText}&page=${page}`) 
    const {Search} = await res.json()
    store.state.movies = [
        ...store.state.movies,
        ...Search
    ]   
    console.log(Search)

}   