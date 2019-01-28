import React from 'react';

const Header = ({ name }) => {
    return (
        <>
            <h1>{name}</h1>
        </>
    )
}
const Part = ({ part }) => {
    return (
        <>
            <p>
                {part.name} {part.exercises}
            </p>
        </>
    )
}
const Content = ({ content }) => {
    return (
        <>
            {content.map(parter => <Part key={Math.random()} part={parter} />)}
        </>
    )
}


const Total = ({ total }) => {
    const exes = total.map(part => part.exercises)
    const result = exes.reduce((joku, current, i, exes) => joku + current)

    return (
        <p>yhteensä {result} kurssia</p>
    )
}

const Course = ({ course }) => {
    return (
        <>
            <Header name={course.name} />
            <Content content={course.parts} />
            <Total total={course.parts} />
        </>
    )
}


export default Course