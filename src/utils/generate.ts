const random = require('random');

export interface SpellingBeeInputSet {
    required: string,
    charSet: string[]
}

export interface SpellingBeeResultSet {
    pangrams: string[],
    validWords: string[]
}

/** generate a unique set of Spelling bee letters. It should
 * - have 7 different characters
 * - one of those character is required
 * */
const generateSet = (): SpellingBeeInputSet => {
    const characters:string[]  ='abcdefghijklmnopqrstuvwxyz'.split("");
    random.shuffle(characters);
    let subset = characters.splice(0, 7);
    return {
        required: subset[0],
        charSet: subset
    }
}

const getAllWords = (dictionary: string[], charSet: SpellingBeeInputSet): SpellingBeeResultSet => {
    let pangrams: string[] =[];
    let validWords: string[]= [];
    return {
        pangrams, validWords
    }
}