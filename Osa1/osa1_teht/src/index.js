import React from 'react';
import ReactDOM from 'react-dom';
const Header = (head) => {
    return (
        <>
            <h1>{head.course}</h1>
        </>
    )
}
const Part = (parts) => {
    return (
        <>
            <p>
                {parts.part} {parts.exer}
            </p>
        </>
    )
}
const Content = (props) => {
    return (
        <>
            <Part part={props.part1} exer={props.exercises1} />
            <Part part={props.part2} exer={props.exercises2} />
            <Part part={props.part3} exer={props.exercises3} />
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
    const part1 = 'Reactin perusteet'
    const exercises1 = 10
    const part2 = 'Tiedonvälitys propseilla'
    const exercises2 = 7
    const part3 = 'Komponenttien tilaa'
    const exercises3 = 14

    return (
        <div>
            <Header course={course} />
            <Content part1={part1} part2={part2} part3={part3} exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
            <Total total={exercises1 + exercises2 + exercises3} />
        </div>

    )
}

ReactDOM.render(<App />, document.getElementById('root'));