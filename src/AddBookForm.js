import React from 'react';
import { gql, useMutation } from '@apollo/client';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const ADD_BOOK = gql`
  mutation NewBook($title: String!, $author: String!) {
    addBook(title: $title, author: $author) {
      id
      title
      author
    }
  }
`

const AddBookForm = () => {

  const [addBook, { data, loading, error }] = useMutation(ADD_BOOK)

  if (loading) return 'Submitting...';
  if (error) return `Submission error: ${error.message}`;

  return ( 
    <div>
      <h2>Add A Book</h2>
      <Formik
      initialValues={{title: '', author: ''}}
      validate={values => {
        const errors = {}
        if (!values.title) {
          errors.title = 'Required'
        } else if (!values.author) {
          errors.author = 'Required'
        }
        return errors
      }}
      onSubmit={(values) => {
        addBook(values)
        console.log(data)
      }}
      >
         <Form>
           <Field type="title" name="title" />
           <ErrorMessage name="title" component="div" />
           <Field type="author" name="author" />
           <ErrorMessage name="author" component="div" />
           <button type="submit">
             Submit
           </button>
         </Form>
      </Formik>
    </div> 
  );
}
 
export default AddBookForm;