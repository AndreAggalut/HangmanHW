// Created by Andre and Adam
// 6/26/2019

const readlineSync = require('readline-sync');

const words = [
  'javascript',
  'code',
  'talentpath',
  'puppy',
  'react',
  'computer',
];

const wrongNum = 5;

function gameStart() {
  const word = words[Math.floor(Math.random() * words.length)];
  console.log(word);
  const nameSplit = word.split('');
  // eslint-disable-next-line prefer-const
  const space = [];
  for (let i = 0; i < nameSplit.length; i++) {
    if (nameSplit[i] === inputUser) {
      space.push(nameSplit[i]);
    } else {
      space.push('_');
    }
    // eslint-disable-next-line prefer-template

    // space.join();
  }
  console.log(space.join(' '));

  console.log(word);
  // const inputUser = readlineSync.question('Please guess a letter ');

  const inputUser = readlineSync.question('Please guess a letter ');
  // check the user input and sends feedback
  if (word.includes(inputUser)) {
    space.join(inputUser);
    console.log(inputUser);
    console.log('You got it right');
  }
}

function checkInput() {}

function correctGuess() {}

function incorrectGuess() {}

gameStart(9);
