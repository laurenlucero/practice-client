import React from 'react';
import { gql, useQuery } from '@apollo/client';

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

const Books = () => {
    const {data, loading, error} = useQuery(GET_BOOKS)

      if (loading) return "Loading..."
      if (error) return "ERROR!"

    return (
    <>
      <h2>Books</h2>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      {data.books.map(({ title, author }) => (<p>{title} by {author.name}</p>))}
    </>
  )
}

export default Books