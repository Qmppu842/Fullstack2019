import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    const now = new Date()
    const a = 10
    const b = 20

    return(
        <div>
            <p>Hellou {now.toString}!</p>
            <p>
                    {a} plus {b} is {a+b}
            </p>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
