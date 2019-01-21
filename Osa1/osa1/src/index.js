import React from 'react';
import ReactDOM from 'react-dom';

const Hello = (props) => {
    return (
        <div>
            <p>Hellou {props.name}, you are {props.age} years old!</p>
        </div>

    )
}
const Footer = () => {
    return (
        <div>
            Gretting app created by <a href="https://github.com/Qmppu842">Qmppu842</a>
        </div>
    )
}

const App = () => {
    const nimi = 'Pekka'
    const ika = 10

    return (
        <div>
            <h1>Greetings earthlings!</h1>
            <Hello name="Arto" age={26 + 10} />
            <Hello name={nimi} age={ika} />
            <Footer />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
