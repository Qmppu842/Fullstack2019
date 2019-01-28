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
    // console.log(content[1])
    return (
        <>
            <Part part={content[0]} />
            <Part part={content[1]} />
            <Part part={content[2]} />
        </>
    )
}


const Total = ({ total }) => {
    return (
        <>
            <p>yhteensä {total[0].exercises + total[1].exercises + total[2].exercises} kurssia</p>
        </>
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
    const course = {
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
            }
        ]
    }
    return (
        <div>
            <Course course={course} />
        </div>

    )
}

ReactDOM.render(<App />, document.getElementById('root'));