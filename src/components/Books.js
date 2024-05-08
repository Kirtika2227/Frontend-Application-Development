import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import StyledBook from './styles';

const Books = () => {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await axios.get('https://softwium.com/api/books');
        setBooks(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Books</h1>
      {books.length > 0 && (
        <ul>
          {books.map((book) => (
            <StyledBook key={book.id}>
              <Link to={`/books/${book.id}`}>{book.title}</Link>
            </StyledBook>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Books;
