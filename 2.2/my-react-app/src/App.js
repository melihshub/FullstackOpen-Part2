import Course from "./components/Course";
import Title from "./components/Title";

import React, { useState } from 'react';


const App = () => {
    const course = {
      id: 1,
      name: 'Half Stack application development',
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
    
  
      {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        }
      ]
    }
   
   const total = course.parts[0].exercises+course.parts[1].exercises+course.parts[2].exercises;

    return (
    <>
    
    <Title message = {course.name}/>
    <Course courses = {course.parts}/>
    <p><strong>total of {total} exercises</strong></p>
    

    </>
  
    
    
    )

  }
  
  
  
  export default App;