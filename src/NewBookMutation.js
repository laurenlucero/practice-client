import React, {useState} from 'react';
import { gql, useMutation } from '@apollo/client';


const ADD_BOOK = gql`
  mutation {
    addBook(title: "Whatever", author: "Someone") {
      title
      author {
        name
      }
    }
  }
`

const BookMutation = () => {

  const [addBook, {data, loading, error}] = useMutation(ADD_BOOK)

  React.useEffect(() => {
    addBook()
  }, [])

  return ( 
    <div>
      <h2>Adding A Book</h2>
    </div> 
  );
}

export default BookMutation;