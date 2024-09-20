let string1 = 'Hello world this is a string for testing'

// Accessing characters
string1[0] // Devuelve el primer carácter
string1[string1.length - 1] // Devuelve el último carácter
string1.charAt(4) // Devuelve el carácter en la posición 4

// Substrings
string1.substring(0, 7) // Devuelve la subcadena de 0 a 7
string1.substring(5) // Devuelve la subcadena de 5 a la longitud del string
string1.slice(5) // Devuelve la subcadena de 5 a la longitud del string
string1.slice(5, 10) // Devuelve la subcadena de 5 a 10

// Concatenating strings
const string2 = 'Hello'
const string3 = 'world'
string2 + ' ' + string3 // Devuelve 'Hello world'
string2.concat(string3) // Devuelve 'Helloworld'

// Manipulating strings
string1.toUpperCase() // Convierte a mayúsculas
string1.toLowerCase() // Convierte a minúsculas
string1.split(' ') // Divide un array en palabras
string1.replace('a', 'b') // Reemplaza un caracter por otro

// Finding strings
const string4 = 'Hello world'
const string5 = 'world'
string4.includes(string5) // Devuelve true si el string5 está en el string4
string4.indexOf(string5) // Devuelve el índice del primer carácter que coincida con el string5
string4.lastIndexOf(string5) // Devuelve el índice del último carácter que coincida con el string5
string4.match('world') // Devuelve un array con todos los ocurrencias de 'world' en el string
string4.startsWith('Hello') // Devuelve true si el string comienza con 'Hello'
string4.endsWith('world') // Devuelve true si el string termina con 'world'

// Inverting strings
const string6 = 'Hello world'
string6.split('').reverse().join('') // Devuelve 'dlrow olleH'

// Looping through strings
for (let i = 0; i < string1.length; i++) {
  console.log(string1[i])
}

for (let char of string1) {
  console.log(char)
}

/* while (string1.length > 0) {
  string1.pop() // Elimina el último en cada iteración
} */


// Basic algorithms

const string7 = 'Hello world'
// Contar cuantas veces aparece cada carácter
function countChar(string) {

  let charCount = {}
  for (let char of string) {
    if (charCount[char] === undefined) {
      charCount[char] = 1
    } else {
      charCount[char]++
    }
  }

  return charCount
}
console.log(countChar(string7))
// Contar cuantas veces aparece cada palabra
function countWord(string) {
  let wordCount = {}
  for (let word of string.split(' ')) {
    if (wordCount[word] === undefined) {
      wordCount[word] = 1
    } else {
      wordCount[word]++
    }
  }
  return wordCount
}
console.log(countWord(string7))