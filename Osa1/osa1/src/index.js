import React from 'react';
import ReactDOM from 'react-dom';

const Hello = () =>{
    return (
        <div>
            <p>Hellou!</p>
        </div>

    )
}

const App = () => {
    return(
        <div>
            <h1>Greetings earthlings!</h1>
            <Hello />
            <Hello />
            <Hello />
            
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
