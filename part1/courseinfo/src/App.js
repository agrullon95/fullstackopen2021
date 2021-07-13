import React from 'react';

const Header = (props) => (
  <h1>{ props.course.name }</h1>
)

const Content = (props) => {
  return (
    <>
      {props.parts.map(part => (
        <Part key={part.id} part={part.name} exercise={part.exercises} />
      ))}
    </>
  )
}

const Part = (props) => (
  <p>{props.part} {props.exercise}</p>
)

const Total = (props) => {
  const totalExercises = props.parts.reduce((total, part) => {
    return total + part.exercises;
  }, 0)
  
  return (
    <b> Total of {totalExercises} exercises</b>
  )
}

const Course = ({course}) => {
  return (
    <>
    <Header course={course}/>
    <Content parts={course.parts}/>
    <Total parts={course.parts}/>
    </>
  )
}

const Courses = ({courses}) => {
  return (
    <>
      {courses.map(course => (
        <Course key={course.id} course={course} />
      ))}
    </>    
  )
}

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return <Courses courses={courses} />
}

export default App