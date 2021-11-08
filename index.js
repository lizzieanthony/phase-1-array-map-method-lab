const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// const titleCased = () => {
//   const cap = titleCased.map(string => string.split(''));
//   const capWords = [];
//  for (const element of cap) {
//    const x = (element.map(word => word[0].toUpperCase() + word.substring(1)).join(""));
//    capWords.push(x); 
//  }
//  return capWords; 
//   }

  const titleCased = function() {
    return tutorials.map((title) => {
      return title.split(' ').map((word) => {
        return (word.charAt(0).toUpperCase() + word.slice(1));
      }).join(' ');
    });
  }
