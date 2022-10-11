import React from 'react';
import './Card.css'
import { FaRegPlayCircle } from 'react-icons/fa';

const Card = ({ data, cardIndex }) => {
    return (
        <div className='full-div container'>
            {data[cardIndex].map(item => (
                <div className='card card-main-div'>
                    <div>
                        <h3>{item.genre}</h3>
                        <h1>{item.name}</h1>
                        <p>{item.details}</p>
                        <h3 className='mb-4'>{item.release}</h3>
                        <button type="button" class="btn btn-primary">GET STARTED <span><FaRegPlayCircle/></span></button>
                        <button type="button" class="btn btn-add-list">ADD TO WATCHLIST</button>
                    </div>
                    <div className='image-div'>
                        <img src={item.image} alt="" />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Card;