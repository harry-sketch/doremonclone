import React from 'react';
import "../Components/Card.css";


const Card = (props) => {
    return (
        <>
        <div className="show_top">
          <h3>{props.head}</h3>
          <p>
            {props.para}
          </p>

          <div className="show_1">
            <img src={props.show} alt="showcase" />
          </div>
        </div>
        
            
        </>
    )
}

export default Card;
