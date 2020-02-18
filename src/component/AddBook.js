import React,{useState, useContext} from "react"
import { BookContext } from "../context/BookContext";

const AddBookForm = () => {
    const [title, settitle] = useState("");
    const [auth, setauth] = useState("");
    const {dispatch} = useContext(BookContext);
    const handleSubmit = (e) => {
        e.preventDefault();
        title.length && auth.length ? dispatch({type:"ADD_BOOK",book:{
            title,auth
        }}):alert("Please enter all details");
        settitle("");
        setauth("");
    }
    return(
        <div className="bookAddForm">
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Title" value={title} onChange={(e) => settitle(e.target.value)}/>
                <input type="text" placeholder="Auth" value={auth} onChange={(e) => setauth(e.target.value)}/>
                <button type="submit">Add</button>
            </form>
        </div>
        
    )
}

export default AddBookForm;