import { useState } from 'react'

export function useInputValue (initialValue = '') {
  const [inputValue, setInputValue] = useState(initialValue)

  return {
    inputValue,
    changeInput: event => setInputValue(event.target.value),
    clearInput: () => setInputValue(''),
    keyInput: (event, callback) => {
      if (event.key === 'Enter') {
        callback(inputValue)
        return true
      }

      return false
    }
  }
}
