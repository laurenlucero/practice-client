import React from 'react';
import { gql, useMutation, useQuery } from '@apollo/client';
import { Formik, Form, Field } from 'formik'

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

const GET_BOOKS = gql`
  query GetBooks {
    books {
      title
      author {
        name
      }
    }
  }
`

const BookMutation = () => {

  const [addBook, { loading, error }] = useMutation(ADD_BOOK)
  const {data, loading: queryLoading, error: queryError} = useQuery(GET_BOOKS)

  if (loading || queryLoading) return "Loading..."
  if (error || queryError) return "ERROR!"

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
      <label> Title: 
        <Field type="text" name="title" />
      </label>
      <label> Author:
        <Field type="text" name="author" />
      </label>
      <button type="submit">Submit</button>
      </Form>
    </Formik> 
      <h2>Books</h2>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      {data.books.map(({ title, author }) => (<p>{title} by {author.name}</p>))}
  </>
  );
}

export default BookMutation;