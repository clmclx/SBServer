/**
 * An utility program that transforms a dictionary input into a dictionary usable for the Spelling bee server
 * */
import _ = require("lodash");


const fs = require('fs');
const diacritics = require('diacritic');

let file = fs.createWriteStream('noAccent.txt');
fs.readFile('liste_francais.txt',{encoding: "latin1"},(err, data) => {
    let words = data.split(/\r?\n/);
    let newWords = words.forEach((word) => {
        console.log(word);
        // remove words starting with Capital letter ( they are proper nouns)
        if (word[0] !== word[0].toUpperCase()) {
            // remove accents
            let noAccent = diacritics.clean(word)

            //write to file
            file.write(noAccent+ ',\n');
        }
    })
});



