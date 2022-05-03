import React from "react";
const Card=(props) =>{
    
    return(
        <React.StrictMode>
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw shadow-s'>
            <h1>Hi Boat friend</h1>
            <img alt='robots' src={`https://robohash.org/${props.id}&200x400`}/>
            <div>
                <h1>{props.name}</h1>
                <p>{props.email}</p>
                <p2>{props.username}</p2>
            </div>
        </div>
        </React.StrictMode>
    );
}

export default Card;