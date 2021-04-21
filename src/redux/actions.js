export const DEL_MOVIE = 'DEL_MOVIE'
export const ADD_LIKE = 'ADD_LIKE'
export const ADD_DISLIKE = 'ADD_DISLIKE'
export const FILTER_CATEGORY = 'FILTER_CATEGORY'

export function supressMovie(movieId) {
    return {
        type: DEL_MOVIE,
        payload: movieId
    }
}

export function addLike(movieId) {
    return {
        type: ADD_LIKE,
        payload: movieId
    }
}

export function addDislike(movieId) {
    return {
        type: ADD_DISLIKE,
        payload: movieId
    }
}

export function filterCategory(moviesList,category) {
    return {
        type: FILTER_CATEGORY,
        payload: {
            category: category,
            movies: moviesList
        }
    }
}