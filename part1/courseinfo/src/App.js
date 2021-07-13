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
  let totalExercises = 0;
  

  props.parts.forEach((part) => {
      totalExercises += part.exercises;
  })
  
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
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  }

  return <Course course={course} />
}

export default App