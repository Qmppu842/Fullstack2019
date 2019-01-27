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
    console.log(props.part1);
    return (
        <>
            <Part part={props.part1} />
            <Part part={props.part2} />
            <Part part={props.part3} />
        </>
    )
}


const Total = (totals) => {
    return (
        <>
            <p>yhteensä {totals.total} kurssia</p>
        </>
    )
}

const App = () => {
    const course = 'Half Stack -sovelluskehitys'
    const part1 = {
        name: 'Reactin perusteet',
        exercises: 10
    }

    const part2 = {
        name: 'Tiedonvälitys propseilla',
        exercises: 7
    }

    const part3 = {
        name: 'Komponenttien tilaa',
        exercises: 14
    }

    return (
        <div>
            <Header course={course} />
            <Content part1={part1} part2={part2} part3={part3} />
            <Total total={part1.exercises + part2.exercises + part3.exercises} />
        </div>

    )
}

ReactDOM.render(<App />, document.getElementById('root'));