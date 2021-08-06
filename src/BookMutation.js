import React from 'react';
import { gql, useMutation } from '@apollo/client';
import { Formik, Form } from 'formik'
import Question from './Question'

const ADD_BOOK = gql`
  mutation AddBook($title: String!, $author: String!) {
    addBook(title: $title, author: $author) {
      title
      author {
        name
      }      
    }
  }
`

const BookMutation = () => {

  const [addBook, { loading, error }] = useMutation(ADD_BOOK)

  if (loading) return "Loading..."
  if (error) return "ERROR!"

  const initialValues = {
    title: '',
    author: ''
  }

  async function onSubmit(values) {
    await addBook({variables: values, refetchQueries: ['GetBooks']})
  }

  return ( 
  <>
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Form>
        <Question name="title" />
        <Question name="author" /> 
        <button type="submit">Submit</button>
      </Form>
    </Formik> 
  </>
  );
}

export default BookMutation;