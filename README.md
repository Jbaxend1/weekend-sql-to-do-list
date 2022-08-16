# Project Name

SQL "To-DO" List

## Description

Duration: 2 weeks

SQL database "to-do" list tracker allowing user to add, delete and update the status of a task deposited into the user table. Use of Javascript, HTML and jQuery were implemented for the logic in inputing, updating and deleting a task. A SQL database was then linked into a node server in order to more permanently store and update the user data. Jquery is used to update the DOM/UI via a change in color to indicate a completion status change when the "complete" button is pressed. All current tasks are shown on the DOM until deletion.

## Images

![UI Screenshot](/images/Screen%20Shot%202022-08-15%20at%2010.56.11%20PM.png)



# SAMPLE TODO LIST

- [x] Server setup (localhost:5000)
- [x] SQL for table (CREATE TABLE)
- [x] Insert sample data

### READ (GET)

- [x] GET route on server (router optional)
- [x] Ready now function
- [x] Client side AJAX for GET
- [x] Display data on the DOM

### CREATE (POST)

- [x] HTML form to collect data
- [x] Values from an input on click
- [x] Client side AJAX for POST
- [x] POST route on server
- [x] INSERT INTO the database
- [x] Refresh data on success

### DELETE

- [x] Give button data for "id" in GET append
- [x] Target button data "id"
- [x] DELETE request client side
- [x] DELETE server side

### UPDATE (PUT)

- [x] Client PUT request to update complete status
- [x] Create completed column in SQL database
- [x] Target and capture complete button "id" data to update server side "completed"
- [x] Send back completed status response
- [x] Change DOM to relect updated status