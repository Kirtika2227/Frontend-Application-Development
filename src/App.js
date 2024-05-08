import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Books from './components/Books';
import BookDetails from './components/BookDetails';
import ErrorBoundary from './ErrorBoundary'; // Add error boundary component

function App() {
  return (
    <Router>
      <ErrorBoundary> {/* Wrap entire app in error boundary */}
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/books/:bookId" element={<BookDetails />} />
        </Routes>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
