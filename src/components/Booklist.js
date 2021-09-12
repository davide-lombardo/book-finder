import React from 'react'
import BookCard from './BookCard'
import styles from  '../style/BookList.module.css'


const BookList = ({ books = [] }) => {

    if (!books) {
        return (
            <div className={styles.emptySearch}>
              <h3>Unfortunately no books matched your search</h3>
            </div>
        )
    } 

  return (
  <>
       <div className={styles.cardContainer}>
               { books.map((item, index) => {
                    let thumbnail = ''
                    if (item.volumeInfo.imageLinks.smallThumbnail) {
                    thumbnail = item.volumeInfo.imageLinks.smallThumbnail
                    }
                  return (
                    <BookCard 
                      id={item.id}
                      key={index}
                      thumbnail={thumbnail}
                      title={item.volumeInfo.title}
                      authors={item.volumeInfo.authors}
                  />
                  )
               })}
           </div>
  </>
  )
        
}



export default BookList
