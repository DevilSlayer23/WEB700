

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

// Use import.meta.url to get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class Data {
  constructor(students, courses) {
    this.students = students;
    this.courses = courses;
  }

  getAllStudents() {
    if (!this.students) {
      return Promise.reject('Data not initialized. Please call initialize() first.');
    }

    const students = this.students;
    if (students.length === 0) {
      return Promise.reject('No students found in the data');
    }

    return Promise.resolve(students);
  }

  getTAs() {
    if (!this.students) {
      return Promise.reject('Data not initialized. Please call initialize() first.');
    }

    const tas = this.students.filter(student => student.TA);

    if (tas.length === 0) {
      return Promise.reject('No TAs found in the data');
    }

    return Promise.resolve(tas);
  }

  getCourses() {
    if (!this.courses) {
      return Promise.reject('Data not initialized. Please call initialize() first.');
    }

    const courses = this.courses;
    if (courses.length === 0) {
      return Promise.reject('No courses found in the data');
    }

    return Promise.resolve(courses);
  }
}

let dataCollection = null;

async function initialize() {
  try {
    const studentData = await fs.readFile(path.join(__dirname, '../data/students.json'), 'utf8');
    const students = JSON.parse(studentData);

    const courseData = await fs.readFile(path.join(__dirname, '../data/courses.json'), 'utf8');
    const courses = JSON.parse(courseData);

    dataCollection = new Data(students, courses);
  } catch (error) {
    console.error('Error initializing college data:', error.message);
    throw new Error(error.message);
  }
}

export { initialize, dataCollection };
