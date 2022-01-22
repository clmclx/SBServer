import _ = require("lodash");
const fs = require('fs');
const diacritics = require('diacritic');

const removeAccents = (wordList: string[]): string[] =>  {
    return wordList.map(word => {
        return diacritics.clean(word);
    })
}

const removeUpperCaseWords = (wordList: string[]): string[] => {
    return wordList.filter(word => word.toUpperCase() ! == word);
}

const applyModifications = (wordList: string[], modifierFunctions: Array<(wordList: string[])=> string[]>): string[] => {
    let modifiedWords= _.deepClone(wordList);
    modifierFunctions.forEach(modifierFunction => {
        modifiedWords = modifierFunction(modifiedWords);
    })

    return modifiedWords;
}