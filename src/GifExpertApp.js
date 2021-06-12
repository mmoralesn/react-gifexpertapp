import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

// Funcional components
const GifExpertApp = () => {

    //const categories= ['One Punch','Samurai X','Dragon Ball'];
    //const [categories, setCategories] = useState(['One Punch','Samurai X','Dragon Ball']);
    const [categories, setCategories] = useState(['Woody wood peacker']);


    // const handleAdd = () => {        
    //     //categories.push('Otro Héroe');
    //     //console.log(categories);
    //     //setCategories( [...categories, 'Otro Héroe'] );
    //     setCategories( cats => [...cats, 'HunterXHunter'] );
    // }

    return (
        //Fragment en su forma corta
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories= { setCategories }/>
            <hr />

            <ol>
                {
                    categories.map( category => (
                        //<li key= {category}>{category}</li>
                        <GifGrid 
                            key= { category }
                            category= { category } />
                    ))
                }
            </ol>
        </>
    );    
  }

  export default GifExpertApp;