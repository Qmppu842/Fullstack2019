import React from 'react';
import ReactDOM from 'react-dom';
import Course from './components/course'

const App = () => {
    const courses = [
        {
            id:1,
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
        },
        {
            id: 2,
            name: 'Node.js',
            parts: [
                {
                    name: 'Routing',
                    exercises: 3
                },
                {
                    name: 'Middlewaret',
                    exercises: 7
                }
            ]
        }
    ]

    const coursing = () =>  courses.map(course => <Course key={course.id} course={course} /> )
       
    
    return (
        <div>
            {coursing()}
        </div>

    )
}

ReactDOM.render(<App />, document.getElementById('root'));