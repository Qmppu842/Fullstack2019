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


// Hmm... eli reduce on meto
const Total = ({ total }) => {
    const exes = total.map(part => part.exercises)

    const result =  exes.reduce((joku, current, i, exes) => {
        console.log(i)
        console.log("curr", current)
        console.log("joku", joku)
        return joku + current;
    }, 100)
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