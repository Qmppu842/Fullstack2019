import React from 'react';
import ReactDOM from 'react-dom';
const Header = (head) => {
    return (
        <>
            <h1>{head.course}</h1>
        </>
    )
}
const Part = (part) => {
    return (
        <>
            <p>
                {part.part.name} {part.part.exercises}
            </p>
        </>
    )
}
const Content = (props) => {
    return (
        <>
            <Part part={props.parts[0]} />
            <Part part={props.parts[1]} />
            <Part part={props.parts[2]} />
        </>
    )
}


const Total = (totals) => {
    return (
        <>
            <p>yhteensä {totals.total[0].exercises + totals.total[1].exercises + totals.total[2].exercises} kurssia</p>
        </>
    )
}

const App = () => {
    const course = 'Half Stack -sovelluskehitys'
    const parts = [
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
    return (
        <div>
            <Header course={course} />
            <Content parts={parts} />
            <Total total={parts} />
        </div>

    )
}

ReactDOM.render(<App />, document.getElementById('root'));