import React, { useState } from 'react'

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', 
        number: '050-12345678' }
    ])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

    const rows = () => {
        return (
            persons.map(person =>
                <p key={person.name}>{person.name} {person.number}</p>)
        )
    }

    const handleNameInputChange = (event) => {
        setNewName(event.target.value)
    }

    const handleNumberInputChange = (event) => {
        setNewNumber(event.target.value)
    }


    const addPerson = (event) => {
        event.preventDefault()
        const isThisPersonAllreadyInThisList = persons.filter(person => {
            return person.name === newName;
        })
        if (isThisPersonAllreadyInThisList.length !== 0) {
            alert(`${newName} on jo käytössä valkaa jokin toinen`)
        } else {

            const person = {
                name: newName,
                number: newNumber
            }
            setPersons(persons.concat(person))
            setNewName('')
            setNewNumber('')
        }

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
                        value={newName}
                    />
                </div>
                <div>
                    numero:
                    <input
                        onChange={handleNumberInputChange}
                        value={newNumber}
                    />
                </div>
                <div>
                    <button type="submit" onClick={addPerson}>lisää</button>
                </div>
            </form>
            <h2>Numerot</h2>
            {rows()}
        </div>
    )

}



export default App