const vowels = ['a', 'e', 'i', 'o', 'u'];

const sentence = 'I am Shakil Ahmed and i am leanring frontend web development by using my laptop';

const sentence2 = 'bcdfghjklmnp'

function containsAllVowel(str){
    str = str.toLowerCase();

    return vowels.every(vowel => str.includes(vowel));
}


console.log(containsAllVowel(sentence));

// for(let vowel of vowels){
//     const check= sentence.includes(vowel);
//     console.log(check);
// }