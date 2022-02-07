import { useState } from 'react';

export function useLocalStorage(key, initialValue) {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key)
            // console.log(JSON.parse(item))
            return item ? JSON.parse(item) : initialValue
        } catch (error) {
            return initialValue;
        }
    })

    const setValue = value => {
        var lista = JSON.parse(window.localStorage.getItem(key))
        var listaItems = lista ? lista : []; // Condicional

        try {
            listaItems.push(value)
            setStoredValue(listaItems)
            window.localStorage.setItem(key, JSON.stringify(listaItems))
            // console.log(listaItems);
        } catch (error) {
            console.log(error)
        }

    }

    return [storedValue, setValue]
}