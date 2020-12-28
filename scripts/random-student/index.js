'use strict';

/**
 * Node script for loading a repl preloaded with randomStudent Pool and randomization functions
 */

const repl = require('repl');
const fs = require('fs');

const pool = JSON.parse(fs.readFileSync(`${__dirname}/students.config.json`)).pool;
const used = [];

function getRandomStudent() {
  let randomIndex = Math.floor(Math.random() * pool.length);

  while (used.includes(pool[randomIndex])) {
    if (used.length === pool.length) {
      return 'All Students have been randomly selected :)';
    }
    randomIndex = Math.floor(Math.random() * Math.floor(pool.length));
  };

  used.push(pool[randomIndex]);
  return pool[randomIndex];
};

function reset() {
  try {
    used.forEach(function () {
      used.pop();
    });
    console.log('Pool reset');
  } catch (e) {
    console.error('Reset pool error', e);
  }
}

function getRandomPairs() {
  const students = [...pool];
  const results = [];
  let student1, student2;
  while (students.length) {
    student1 = students[Math.floor(Math.random() * Math.floor(students.length))];
    student2 = students[Math.floor(Math.random() * Math.floor(students.length))];

    if (student1 !== student2) {
      results.push(`${student1} | ${student2}`);
      students.splice(students.indexOf(student1), 1);
      students.splice(students.indexOf(student2), 1);
    } else if (student1 === student2 && students.length === 1) {
      let pairIndex = Math.floor(Math.random() * Math.floor(results.length));
      let pair = results[pairIndex];
      students.splice(students.indexOf(student1), 1);
      results[pairIndex] = pair += ` | ${student1}`;
    }
  }
  return results;
}

console.log(
  '***** RANDOM STUDENT functions loaded *****\n',
  'Find random students with: `rs()`\n',
  'Make random Pairs with; `rp() \n',
  'Reset students with: rst(0)'
);
const r = repl.start('> ');
r.context.rs = getRandomStudent;
r.context.rp = getRandomPairs;
r.context.rst = reset;
