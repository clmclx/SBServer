

const has4Letters = (word: string): boolean => {
    return word.length >=4;
}

// take a string with only plain letters and check whether they are all contained in set of characters
const isPangram = (word: string, letterSet: string[]): boolean => {
    let characters: String[] = word.split("");
    let characterNotInSet = characters.includes(character => letterSet.indexOf(character) === -1);
    return characterNotInSet === undefined;
}

const computeScore = (word: string, letterSet: string[]): number => {
    let pangramScore = isPangram(word, letterSet)? 7 : 0;
    return  word.length >=4 ? word.length - 3 + pangramScore: 0;
}