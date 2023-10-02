import { useState } from "react";

export const AddCategory = (props) => {

    const [input, setInput] = useState("");

    const onInputChange = (event) => {
        
        setInput(event.target.value);
    }

    const onSubmit = (event) =>{
        event.preventDefault();

        //Se hizo un callback 
        //props.setCategories(categories => [...categories, input]);

        props.onNewCategory(input);
        setInput('');
    }

    return (

        <form onSubmit={(event) => onSubmit(event)}>
            <input type="text" placeholder="Buscar gif" value={input} onChange={(event) => onInputChange(event) } />
            
        </form>
    );
}