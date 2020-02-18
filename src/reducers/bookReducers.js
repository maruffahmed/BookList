import uuid from "uuid/v1"
export const bookReducers = (state, action) => {
    switch(action.type){
        case "ADD_BOOK":
            return [...state,{
                name: action.book.title,
                auth: action.book.auth,
                id: uuid()
            }]
        case "REMOVE_BOOK":
            return state.filter(book => book.id !== action.id)
        default:
            return state
    }
}