/*********************************************************************************
* WEB700 – Assignment 2
* I declare that this assignment is my own work in accordance with Seneca Academic Policy.
* No part of this assignment has been copied manually or electronically from any other source
* (including web sites) or distributed to other students.
*
* Name: Sagar Thapa  Student ID: 153855234   Date: 2024/06/01
********************************************************************************/
import { initialize, dataCollection } from './modules/collegeData.js';

initialize()
  .then(() => {
    return Promise.all([
      dataCollection.getAllStudents(),
      dataCollection.getCourses(),
      dataCollection.getTAs(),
    ]);
  })
  .then(([students, courses, tas]) => {
    console.log(`Successfully retrieved ${students.length} students`);
    console.log(`Successfully retrieved ${courses.length} courses`);
    console.log(`Successfully retrieved ${tas.length} TAs`);
  })
  .catch(error => {
    console.error('Error:', error);
  });
