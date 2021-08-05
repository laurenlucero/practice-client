import './App.css';
import Books from './Books'
import AddBookForm from './AddBookForm';
import BookMutation from './NewBookMutation';

function App() {
  return (
    <>
      <AddBookForm />
      <BookMutation />
      <Books />
    </>
  );
}

export default App;
