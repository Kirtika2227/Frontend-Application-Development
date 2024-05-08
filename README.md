#Frontend Application Development Assignment
This repository contains a frontend application developed using React.js for the Frontend Application Development assignment.

##Instructions
##Technology Stack
*React.js

###Understanding and Testing APIs
*APIs provided at softwium.com/fake-api/
*Tested the following APIs using Postman:
    *GET /Books - softwium.com/api/books
    *GET /Books/id - softwium.com/api/books/23

**###Frontend Application Requirements**
*Implement a mini frontend application with the following UI pages:
1. Books Page (http://localhost:<port>/books)
   * Display links to all books, with each book name as a clickable link.
    *Load books dynamically into the UI by making an API call to the "GET /Books" API.
2.Book-Details Page (http://localhost:<port>/books/id)
*Display the following details of the selected book by making a call to the "GET /Books/id" API:
    *Title
    *ISBN
    *PageCount
    *Authors
*Create a link from the Books Page to navigate to the Book-Details Page for each book.

**###How to Run the Application**
1. Clone this repository to your local machine.
2. Install dependencies using npm install.
3. Start the development server using npm start.
4. Open your browser and navigate to http://localhost:3000 to view the application.

**###Dependencies**
*React.js
*axios
*react-router-dom
*styled-components

**###Additional Information**
*This project uses styled-components for styling and axios for making API calls.
*The project follows component-based architecture and uses React Router for routing.
*Proper error handling and loading states are implemented when fetching data from APIs.

Feel free to explore the code and reach out if you have any questions or need further assistance.








