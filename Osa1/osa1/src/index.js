import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Display = ({ counter }) => <div>{counter}</div>

const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
        {text}
    </button>
)

const App = (props) => {
    const [counter, setCounter] = useState(0)

    const setToValue = (value) => {
        return () => {
            setCounter(value)
        }
    }

    return (
        <>
            <Display counter={counter} />
            <Button handleClick={() => setToValue(counter + 1)}
                text='plus'
            />
            <Button handleClick={() => setToValue(0)}
                text='zero'
            />
        </>
    )
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
);
