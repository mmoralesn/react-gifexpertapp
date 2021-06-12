
// La importación de react es a menos que se regrese JSX
//import React from 'react'

import { useEffect, useState } from 'react'
import { getGifs } from '../helpers/GetGifs';

export const useFetchGifs = ( category ) => {
    
    const [state, setstate] = useState({
        data: [],
        loading: true
    });

    //setTimeout(() => {
    //    setstate({
    //        data: [1,2,3,4,5,6,7,8,9,0],
    //        loading: false
    //    })
    //}, 3000);

    useEffect(() => {
       
        getGifs( category )
            .then( imgs => {
                console.log(imgs);
                setTimeout(() => {
                    setstate({
                        data: imgs,
                        loading: false
                    })                        
                }, 3000);
            });
    }, [category])

    return state;   //{ data: [], loading: true }
}
