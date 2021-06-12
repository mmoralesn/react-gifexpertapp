//rafc, es para que me muestre snippets
//import React, { useState, useEffect } from 'react'
import React from 'react'
import { getGifs } from '../helpers/GetGifs';
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
//import PropTypes from 'prop-types';

export const GifGrid = ({ category }) => {


    //const [count, setCount] = useState(0);

    //const [images, setImages] = useState([]);

    //Renombrando la data en la reestructuración
    const { data:images, loading }= useFetchGifs( category );

    
    //Se ejecuta cuando el componente es reederizado por primera vez
    // useEffect( () => {
    //     getGifs( category )
    //     .then( imgs => setImages( imgs ))
    // }, [ category ])

    

    //getGifs();

    // return (
    //     <div>
    //         <li> { category }</li>
    //         <h3>{ count }</h3>
    //         <button onClick= { () => { setCount( count + 1 ) }}></button>
    //     </div>
    // )

    // return (
    //     <div>
    //         <h3> { category }</h3>
    //         <ol>
    //             {
    //                 images.map( ({ id, title }) => (
    //                     <li key= { id }>{ title }</li>
    //                 ))
    //             }
    //         </ol>            
    //     </div>
    // )

    return (
        <>
            <h3> { category } </h3>
            {/* Con el operador ternario ? se evaluan las dos condiciones */}
            {/* loading ? <p>Loading</p> : <p>Data Charged</p>*/}
            {/* Con el operador ternario && se evaluan la primer condición */}
            { loading && <p>Loading</p> }
            <div className= "card-grid">
                {
                    images.map( img => (
                        <GifGridItem 
                            key= { img.id }
                            { ...img }
                        />
                    ))
                }
            </div>            
        </>
    )

}




//GifGrid.PropTypes = {
//    category: PropTypes.string.isRequired
//}
