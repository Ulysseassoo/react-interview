import { React, useState } from 'react'
import { useSelector } from 'react-redux'
import CardItem from './CardItem'
import FilterBox from './FilterBox'
import '../styles/home.scss'
import ReactPaginate from 'react-paginate'


function Home() {
    // FilterBox Not working
    const [moviesList, setMoviesList] = useState([])
    const [moviesCategorys, setMoviesCategorys] = useState([])
    const [pageNumber, setPageNumber] = useState(0)
    const [moviesPerPage, setMoviesPerPage] = useState(4)

    const pagesVisited = pageNumber * moviesPerPage

    let moviesStore = useSelector(state => state)
    
    moviesStore.moviesData[0].then(data => setMoviesCategorys(data))

    moviesStore.moviesData[0].then(data=> {setMoviesList(data)})

    moviesStore.filteredMovies.length > 0 && setMoviesList(moviesStore.filteredMovies)
    
    let categorys = [...new Set(moviesCategorys.map(movie => movie.category))]

    const displayMovies = moviesList.slice(pagesVisited, pagesVisited + moviesPerPage).map(movie => {
        return (
            <CardItem id={movie.id} title={movie.title} category={movie.category} likes={movie.likes} dislikes={movie.dislikes} key={movie.id}/>
        )
    })

    const pageCount = Math.ceil(moviesList.length / moviesPerPage)

    const changePage = ({selected}) => {
        setPageNumber(selected)
    }
    
    return (
        <div className="Home">
            <h1>Movie App</h1>
            <FilterBox movie={moviesList} categorys={categorys}/>
            <div className="item_container">
                {displayMovies}
            </div>
            <ReactPaginate 
                previousLabel={"Previous"}
                nextLabel={"Next"}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={"paginationBtns"}
                previousClassName={"previousBtn"}
                nextClassName={"nextBtn"}
                disabledClassName={"disabledBtn"}
                activeClassName={"paginationActive"}
            />
            <div className="pagination_container">
                <select className="pagination" onChange={(event) => setMoviesPerPage(event.target.value)}>
                    <option value="4">4</option>
                    <option value="8">8</option>
                    <option value="12">12</option>
                </select>
            </div>
        </div>
    )
}

export default Home
