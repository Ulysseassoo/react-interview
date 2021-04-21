import { DEL_MOVIE, ADD_DISLIKE, ADD_LIKE, FILTER_CATEGORY } from './actions'
import { moviesData } from './states'

const initialState = { moviesData, filteredMovies: [], category: ''}
export let reducer = (state = initialState, action) => {
    switch (action.type) {
        case DEL_MOVIE:
            let newMovies = state
            newMovies = { moviesData: [newMovies.moviesData[0].then(data => data.filter(movie => movie.id !== action.payload))], filteredMovies: [], category: '' }
            return newMovies
        case ADD_LIKE:
            let newLikes = { ...state, filteredMovies: [], category: '' }
            let dataLike = { moviesData: [newLikes.moviesData[0].then(data => data.filter(movie => movie.id === action.payload))], filteredMovies: [], category: '' }
            dataLike.moviesData[0].then(movie => movie[0].likes += 1)
            return newLikes
        case ADD_DISLIKE:
            let newDislikes = { ...state, filteredMovies: [], category: '' }
            let dataDislike = { moviesData: [newDislikes.moviesData[0].then(data => data.filter(movie => movie.id === action.payload))], filteredMovies: [], category: ''}
            dataDislike.moviesData[0].then(movie => movie[0].dislikes += 1)
            return newDislikes
        case FILTER_CATEGORY:
            // This part is not working
            let newCategorys = { ...state, filteredMovies: action.payload.movies, category: action.payload.category }
            let newFilteredMovies = newCategorys.filteredMovies.filter(movie => movie.category === action.payload.category)
            newCategorys.filteredMovies = newFilteredMovies
            return newCategorys
        default:
            break
    }
    return state
}