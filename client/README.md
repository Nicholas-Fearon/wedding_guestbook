Wedding Guestbook

Overview

This project is a web application that allows users to submit information via a form, with data being stored in a database through a backend API. The app is mobile-responsive and functional across multiple screen sizes. The project is seeded with realistic-looking dummy data for testing purposes and includes additional features and enhancements for improved user experience and error handling.

User Stories

All user stories have been implemented:

    •	🐿️ As a user, I’d like to fill out a working form so that I can submit my information effectively and without issues.
    •	🐿️ As a user, I want the application to work as expected on my mobile device so that I can access and use it conveniently on the go.
    •	🐿️ As a developer, I want to create a working API GET route so that I can retrieve data from the server and display it to the users.
    •	🐿️ As a developer, I want to create a working API POST route so that users can send data to the server and store it.
    •	🐿️ As a developer, I want to create and seed a database with dummy data so that I have realistic test data for development purposes.

Stretch User Stories

Some stretch user stories have been partially or fully implemented:

    •	🐿️ As a user, I want additional functionality on the form, such as form validation, so that I can have a more interactive experience when submitting my information.
    •	🐿️ As a user, I want the website to be visually impressive and user-friendly so that it provides a pleasant browsing experience.
    •	🐿️ As a user, I would like to be able to delete posts.
    •	🐿️ As a user, I would like to be able to like messages so I can show my appreciation to other users.

Requirements

    •	🎯 Ensure the HTML form works and submits data into the database as expected.
    •	🎯 Confirm that the project is functional on multiple screen sizes using media queries or dynamic CSS styling.
    •	🎯 Create a working GET API route in the server.
    •	🎯 Create a working POST API route in the client.
    •	🎯 Seed the database with realistic-looking ‘dummy’ data through the Supabase query editor or a seed file in the server.

Stretch Requirements

The following stretch requirements have been partially implemented:

    •	🏹 Provide additional functionality on the form, for example, by adding form validation or other options.
    •	🏹 Style the page excellently, for example, by adding extra UX considerations or animations.
    •	🏹 Add a delete button to each message and a DELETE route in the server.
    •	🏹 Create an option for users to like others’ posts.

Stretch Stories and Features Implemented

    •	Responsive Design: A media query is applied at 480px screen width to adapt the styling for mobile users. The background image changes dynamically based on screen size.
    •	Form Validation: The form now has validation to prevent empty inputs from being submitted. The POST request is only sent when all required inputs are filled.
    •	Error Handling: A try-catch block is implemented around the form submission to catch any errors that may occur. If an error is detected, the user is notified to refresh the page.
    •	Delete Button: A delete button is added to remove messages from the DOM, though currently, it does not delete the entry from the database.
    •	Like Button: A like button has been added to each message, allowing users to show appreciation. Currently, the like count resets when the page is reloaded.

Known Issues

    •	Delete Button: The delete button currently removes the message from the DOM but does not delete it from the database. Further improvements can be made to fully integrate this feature.

    •	Like Button: The like button resets when the page is reloaded. Additional functionality may be needed to persist the like count in the database.

Reflection

During this project, I successfully implemented a working site with GET and POST routes as required, along with additional stretch features to enhance the user experience. However, I encountered significant challenges when deploying the project on Render.com. Troubleshooting deployment issues took a great deal of effort, as I spent over 10 hours working through various errors. Collaborating with classmates ultimately helped me resolve these deployment issues, highlighting the value of teamwork and resource-sharing in overcoming technical obstacles.

In terms of design, I recognise there’s room for improvement. While I made a few design changes, styling and visual layout don’t come naturally to me, so it’s an area where I aim to build more confidence and skill. This project was a valuable learning experience in both backend development and the importance of persistence when facing deployment hurdles.
