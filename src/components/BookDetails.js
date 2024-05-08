import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import StyledBook from './styles';

const BookDetails = () => {
  const { bookId } = useParams();
  const [book, setBook] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await axios.get(`https://softwium.com/api/books/${bookId}`);
        setBook(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [bookId]);

  return (
    <div>
      {isLoading && <p>Loading book details...</p>}
      {error && <p>Error fetching book details: {error.message}</p>}
      {book && (
        <StyledBook>
          <h2>{book.title}</h2>
          <p>ISBN: {book.isbn}</p>
          <p>Page Count: {book.pageCount}</p>
          {book.authors?.length > 0 && (
            <p>
              Authors: {book.authors.map((author, index) => (
                <span key={index}>{author}, </span>
              ))}
            </p>
          )}
          {!book.authors?.length && (
            <p>This book has no listed authors.</p>
          )}
        </StyledBook>
      )}
    </div>
  );
};

export default BookDetails;
