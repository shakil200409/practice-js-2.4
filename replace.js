let sentence ="A good job depands on your Experience X"
const letter = 'x';

function bothCase(str, letter){
    const lowerCaseLetter = letter.toLowerCase();
    const upperCaseLetter = letter.toUpperCase();

    return str.includes(lowerCaseLetter) || str.includes(upperCaseLetter);
}

// console.log(bothCase(sentence, letter));
console.log(sentence);

sentence = sentence.replaceAll(/x/g, 'y');
sentence = sentence.replaceAll(/X/g, 'Y');

console.log(sentence);