import React, { useState } from 'react'

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

export default PersonForm