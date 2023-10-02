
import { useState } from "react"
import { AddCategory, GifGrid} from "./components";


export const App = () => {

    const [categories, setCategories] = useState([]);

    const onAddCategory = (newCategorie) =>{
        //El inclue nos permite saber si el arreglo ya incluye un elemento

        if(categories.includes(newCategorie)) return;

        setCategories([...categories, newCategorie]);
    }

    return (
        <>

            <h1> GifExpertsApp </h1>
            <AddCategory 
                // Esto sería para mandarle al componente hijo la funion para modificar el arreglo de nuestro hook
                //setCategories={ setCategories } 
                onNewCategory = {event => onAddCategory(event)}
            />
            
            
            {
                categories.map((item) => {
                    return <GifGrid key={item} category={item}/>
                })
            }
            

        </>
    )
}