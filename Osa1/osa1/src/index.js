import React from 'react';
import ReactDOM from 'react-dom';

const Hello = ({ name, age }) => {
    const bornYear = () => {
        const yearNow = new Date().getFullYear()
        return yearNow - age
    }

    return (
        <div>
            <p>Hellou {name}, you are {age} years old!</p>
            <p>And you were probably born {bornYear()}</p>
        </div>

    )
}

const App = () => {
    const nimi = 'Pekka'
    const ika = 10

    return (
        <>
            <h1>Greetings earthlings!</h1>
            <Hello name="Arto" age={26 + 10} />
            <Hello name={nimi} age={ika} />
        </>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
