import React from 'react';

const Card = (props) => {
    return (
        <div className="card">
            <div className="card-img">
                <img
                    className="beer-image"
                    src={props.imgUrl}
                    alt="Sco"
                />
            </div>
            <div className="card-body">
                <div className="beer-header">
                    <h4 className="beer-name">{props.brand}</h4>
                    <sub className="beer-style"> {props.type} </sub>
                </div>
                <div className="beer-specs">
                    <span className="beer__spec">
                        <span className="label"> Alcohol Level: </span>
                        <span className="value"> {props.alv} </span>
                    </span>
                    <span className="beer__spec">
                        <span className="label"> Ounces: </span>
                        <span className="value"> {props.ounces} </span>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Card;