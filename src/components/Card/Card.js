import React from 'react';
import './Card.css'
const Card = ({ data, cardIndex }) => {
    return (
        <div>
            {data[cardIndex].map(item => (
                <div className='card card-main-div'>
                    <div>
                        <h3>{item.genre}</h3>
                        <h1>{item.name}</h1>
                        <p>{item.details}</p>
                        <h3>{item.release}</h3>
                        <button>GET STARTED</button>
                        <button>ADD TO WATCHLIST</button>
                    </div>
                    <div>
                        <img src={item.image} alt="" />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Card;