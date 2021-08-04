import React, {useState} from 'react';
import { gql, useMutation } from '@apollo/client';
// import { Formik, Form, Field, ErrorMessage } from 'formik';


const ADD_BOOK = gql`
  mutation AddBook($title: String, $author: String) {
    addBook(title: $title, author: $author) {
      title
      author
    }
  }
`

const AddBookForm = () => {
  
  const [formState, setFormState] = useState({title: '', author: ''})
  
  const [addBook] = useMutation(ADD_BOOK)

  return ( 
    <div>
      <h2>Add A Book</h2>
         <form
          onSubmit={e => {
            e.preventDefault()
            addBook()
          }}
         >
           <input 
            type="text" 
            placeholder="book title"
            name="title" 
            value={formState.title} 
            onChange={(e) => {
              setFormState({...formState, title: e.target.value})
            }}
           />
           <input 
            type="text" 
            placeholder="author of book"
            name="author" 
            value={formState.author} 
              onChange={(e) => {
              setFormState({...formState, author: e.target.value})
              }}
            />
           <button type="submit">
             Submit
           </button>
         </form>
    </div> 
  );
}

export default AddBookForm;