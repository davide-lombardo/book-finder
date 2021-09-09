import React from 'react'
import BookCard from './BookCard'
import styles from  '../style/BookList.module.css'
import { render } from '@testing-library/react'

const BookList = () => {


    // if (books.length === 0) {
    //     return (
    //         <div className={styles.emptySearch}>
    //           <h3>Unfortunately no books matched your search</h3>
    //         </div>
    //     )
    // }

  return(<></>)
          //  <div className={styles.cardContainer}>
          //      { books.map((item) => {
          //           let thumbnail = ''
          //           if (item.volumeInfo.imageLinks.thumbnail) {
          //           thumbnail = item.volumeInfo.imageLinks.thumbnail
          //      }
          //         return (
          //           <a href={item.id}>
          //           <BookCard 
          //           key={item.id}
          //           thumbnail={thumbnail}
          //           title={item.volumeInfo.title}
          //           authors={item.volumeInfo.authors}
          //         />
          //           </a>
          //         )
          //      })}
          //  </div>
}



export default BookList
