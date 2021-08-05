import React from 'react';
import {
  useQuery,
  gql
} from "@apollo/client";


const GET_BOOKS = gql`
  query getBooks {
    books {
      title
      author {
        name
      }
    }
  }
`

const Books = () => {
  
  const { loading, error, data } = useQuery(GET_BOOKS)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error</p>

// return <pre>{JSON.stringify(data, null, 2)}</pre>

  return data.books.map(({ title, author }) => (
      <div key={title}>
        <p>{title} by {author.name}</p>
      </div>
    ));
  }
 
export default Books;