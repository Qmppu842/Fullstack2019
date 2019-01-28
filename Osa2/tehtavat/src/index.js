import React from 'react';
import ReactDOM from 'react-dom';
const Header = ({ name }) => {
    return (
        <>
            <h1>{name}</h1>
        </>
    )
}
const Part = ({ part }) => {
    // console.log(part)
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

const App = () => {
    const courses = [
        {
            name: 'Half Stack -sovelluskehitys',
            parts: [
                {
                    name: 'Reactin perusteet',
                    exercises: 10
                },
                {
                    name: 'Tiedonvälitys propseilla',
                    exercises: 7
                },
                {
                    name: 'Komponenttien tilaa',
                    exercises: 14
                },
                {
                    name: 'Komponenttien tilaa',
                    exercises: 14
                }
            ]
        },
        {
            name: 'Node.js',
            parts: [
                {
                    name: 'Routing',
                    exercises: 3
                },
                {
                    name: 'Middlewaret',
                    exercises: 7
                }
            ]
        }
    ]

    const coursing = () =>  courses.map(course => <Course course={course} /> )
       
    
    return (
        <div>
            {coursing()}
        </div>

    )
}

ReactDOM.render(<App />, document.getElementById('root'));