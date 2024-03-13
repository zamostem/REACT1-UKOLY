import React from "react";

const City = ({name, photo, population, area, district}) => {
    return (
        <div className="container">
            <div className="city">
                <div className="name">{name}</div>
                <img className="photo" src={photo} alt={name}></img>
                <div className="info">
                    <p>Počet obyvatel: {population}</p>
                    <p>Plocha: {area} km2</p>
                    <p>Okres: {district}</p>
                </div>
            </div>
        </div>
    );
};

export default City;