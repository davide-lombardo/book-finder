import React, { Component } from 'react'

const BookContext = React.createContext()

class BookProvider extends Component {
    state = {
        books: []
    }

    getRoom = (slug) => {
        const tempBooks = [...this.state.rooms]
        const book = tempBooks.find(book => book.slug === slug)
        return book
    } 

    render() {
        return(
            <BookContext.Provider 
            value={{...this.state,
                    getBook: this.getBook
                }}
                >
                {this.props.children}
            </BookContext.Provider>
        )
    }
}

const BookConsumer = BookContext.Consumer

export { BookProvider, BookConsumer, BookContext } 