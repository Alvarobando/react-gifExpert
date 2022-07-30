import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";
import { usefetchGifs } from "../hooks/usefetchGifs";
import { GriItem } from "./GriItem";

export const GifGrid = ({ category }) => {

    const { images, isLoading } = usefetchGifs (category);


    // const [images, setImages] = useState([]);
    
    // useEffect(() => {
    //     getGifs(category).then( newImages => setImages(newImages));
    // }, [])


    return (
        <>
            <h3>{category}</h3>
            {
                isLoading && ( <h2>Cargando...</h2>)
            }
           

            <div className="card-grid">
                {
                    images.map((image) => (
                        
                        <GriItem 
                            key={image.id}
                            {...image}
                        />
                    ))
                }
                
            </div>

        </>
    )
}
