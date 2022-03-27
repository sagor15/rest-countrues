import React from 'react';
import './Country.css'

const Country = (props) => {
    const {area,population,name,region,flags} = props.country;
    console.log(props.country)
    return (
        <div className='country'>
            <h2>Country Name : {name}</h2>
            <img src={flags.png} alt="countries flags" />
            <p><small>Country Population : {population}</small></p>
            <p><small>Country Area : {area}</small></p>
            <p><small>Country Region : {region}</small></p>
            
        </div>
    );
};

export default Country;