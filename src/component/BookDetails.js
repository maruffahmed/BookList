import React,{useContext} from 'react'
import { BookContext } from '../context/BookContext';
const BookDetails = ({book}) => {
    const {dispatch} = useContext(BookContext);
    return(
        <li>
            <div className="bookDetails">
                <div className="bookChk">
                    <input type="checkbox" onChange={() => dispatch({type:"REMOVE_BOOK",id:book.id})}/>
                </div>
                <div className="bookDes">
                    <div className="title">{book.name}</div>
                    <div className="auth">{book.auth}</div>
                </div>
                
            </div>
            
        </li>
    )
} 

export default BookDetails;