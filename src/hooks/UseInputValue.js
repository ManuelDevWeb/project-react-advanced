import { useState } from 'react'


const UseInputValue = (initialValue) => {
    // Manejando el estado del value
    const [value, setValue] = useState(initialValue);

    // Método para actualizar estado local
    const onChange = (e) => {
        setValue(e.target.value)
    }

    return { value, onChange }
}

export default UseInputValue;