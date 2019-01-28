import React, { useState } from 'react'

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '040-123456' },
        { name: 'Martti Tienari', number: '040-123456' },
        { name: 'Arto Järvinen', number: '040-123456' },
        { name: 'Lea Kutvonen', number: '040-123456' }
    ])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [fog, setFog] = useState('')

const notInFog = persons.filter(person => person.name.toLowerCase().includes(fog) || person.number.includes(fog))

    const rows = () => {
        return (
            notInFog.map(person =>
                <p key={person.name}>{person.name} {person.number}</p>)
        )
    }

    const handleNameInputChange = (event) => {
        setNewName(event.target.value)
    }

    const handleNumberInputChange = (event) => {
        setNewNumber(event.target.value)
    }

    const handleFogInputChange = (event) => {
        setFog(event.target.value)
        console.log("Nooouu not the FOG! Anything but", fog)
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
            <div>
                rajaa näytettävää aluetta: <input
                    onChange={handleFogInputChange} />
            </div>
            <h3>Lisää uusi</h3>
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