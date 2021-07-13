import React from 'react';

const Header = (props) => (
    <h1>{props.course.name}</h1>
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

const Course = ({ course }) => {
    return (
        <>
            <Header course={course} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </>
    )
}

export default Course;