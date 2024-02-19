
import { Student } from './student.js';
import { Course } from './course.js';

const student1 = new Student("Leila");
const student2 = new Student("Linus");
const course1 = new Course("HTML", 10);
const course2 = new Course("CSS", 50);

student1.registerCourse(course1);
student1.registerCourse(course2);
student2.registerCourse(course1);

student1.listCourses();
student2.listCourses();

course1.getCourseInfo();
course2.getCourseInfo();
