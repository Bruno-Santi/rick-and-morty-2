export const ADD_CHARACTER = 'ADD_CHARACTER';
export const REMOVE_CHARACTER = 'REMOVE_CHARACTER';
export const addCharacters = (character) => {
    return {type: 'ADD_CHARACTER', payload: character} }

export const removeCharacter = (id) => {
    return {type: 'REMOVE_CHARACTER', payload: id}
}