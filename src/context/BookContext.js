import React, {createContext, useReducer, useEffect} from "react"
import {bookReducers} from "../reducers/bookReducers"
export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [Books, dispatch] = useReducer(bookReducers,[],() => {
        const localData = localStorage.getItem("books");
        return localData ? JSON.parse(localData) : [];
    })
    useEffect(() => {
        localStorage.setItem("books",JSON.stringify(Books));
    }, [Books])
    return(
        <BookContext.Provider value={{Books, dispatch}}>
            {props.children}
        </BookContext.Provider>
    )
}
export default BookContextProvider;