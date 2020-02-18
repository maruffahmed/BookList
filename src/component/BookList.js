import React, {useContext} from "react"
import { BookContext } from "../context/BookContext";
import BookDetails from "../component/BookDetails"
const BookList = () => {
    const {Books} = useContext(BookContext);
    return Books.length ? (
        <div className="bookList">
            <ul>
                {
                    Books.map(book => {
                        return(<BookDetails book={book} key={book.id}></BookDetails>)
                    })
                }
            </ul>
        </div>
    ):(
        <p className="empty">No book for read.</p>
    )
}

export default BookList;