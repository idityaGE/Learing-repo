const greet = (name: string): string => {
  return `Hello, ${name}!`;
};

// this is a prompt function that will ask for user input in the terminal
const name = prompt('What is your name?');

console.log(greet(name || 'world')); 