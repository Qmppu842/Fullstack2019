import React, { useState } from 'react'

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas' }
    ])
    const [newName, setNewName] = useState('')

    const rows = () => {
        return (
            persons.map(person =>
                <p key={person.name}>{person.name}</p>)
        )
    }

    const handleNameInputChange = (event) => {
        setNewName(event.target.value)
    }

    const addName = (event) => {
        event.preventDefault()
        const person = {
            name: newName
        }
        setPersons(persons.concat(person))
        setNewName('')

    }


    return (
        <div>
            <h2>Puhelinluettelo</h2>
            <div> Debug: {newName}</div>
            <form>
                <div>
                    nimi:
          <input
                        onChange={handleNameInputChange}
                        value={newName} />
                </div>
                <div>
                    <button type="submit" onClick={addName}>lisää</button>
                </div>
            </form>
            <h2>Numerot</h2>
            {rows()}
        </div>
    )

}



export default App