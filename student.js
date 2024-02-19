
export class Student {
    constructor(fullname) {
      this.fullname = fullname;
      this.courses = [];
    }
  
    registerCourse(course) {
      this.courses.push(course);
    }
  
    listCourses() {
      console.log(`${this.fullname}'s courses:`);
      this.courses.forEach(course => console.log(`- ${course.name} (${course.yhp} YHP)`));
    }
  }
  