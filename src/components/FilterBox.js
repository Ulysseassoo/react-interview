import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { filterCategory } from '../redux/actions'

function FilterBox({movie, categorys}) {
    const [movieCategorys, setMovieCategorys] = useState("")

    const dispatch = useDispatch()
    const moviesCategory = movieCategorys.length ? movieCategorys.map(movie => {
        return <option key={movie} value={movie}>{movie}</option>
    })
    : <option disabled>None</option>
    
    useEffect(() => {
        setMovieCategorys(categorys)
    }, [categorys])

    return (
        <div className="filter_container">
            <select className="filter" onChange={(event) => dispatch(filterCategory(movie,event.target.value))}>
                <option value="">All</option>
                {moviesCategory}
            </select>
        </div>
    )
}

export default FilterBox
