import React from 'react'
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { addDislike, addLike, supressMovie } from '../redux/actions'


function CardItem(props) {
    const dispatch = useDispatch()
    return (
        <div className="card" key={props.id}>
            <h2>{props.title}</h2>
            <h4 id={props.category}>{props.category}</h4>
            <div className="notation">
                <div>
                    <FaThumbsUp onClick={() => dispatch(addLike(props.id))} />
                    <p>{props.likes}</p>
                </div>
                <div>
                    <FaThumbsDown onClick={() => dispatch(addDislike(props.id))} />
                    <p>{props.dislikes}</p>
                </div>
            </div>
            <div className="container">
                <div className="progress progress-moved">
                    <div className="progress-bar" style={{width: ((parseFloat(props.likes - props.dislikes)) / (parseFloat(props.likes + props.dislikes)) * 100) + '%'}}></div>
                </div>
            </div>
            <button onClick={() => dispatch(supressMovie(props.id))}>Suppress</button>
        </div>
    )
}

export default CardItem
