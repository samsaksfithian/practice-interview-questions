function fizzbuzz(limit) {
  let output = '';
  for (let index = 1; index <= limit; index++) {
    let line = '';
    const divby3 = index % 3 === 0;
    const divby5 = index % 5 === 0;
    if (divby3) {
      line += 'fizz';
    }
    if (divby5) {
      line += 'buzz';
    }
    if (line === '') {
      line = `${index}`;
    }
    output += `${line}, `;
    // console.log(line);
  }
  console.log(output);
}

function fizzbuzz2(limit) {
  for (let index = 0; index <= limit; index++) {
    const divby3 = index % 3 === 0;
    const divby5 = index % 5 === 0;
    if (divby3 && divby5) {
      console.log('fizzbuzz');
    } else if (divby3) {
      console.log('fizz');
    } else if (divby5) {
      console.log('buzz');
    } else {
      console.log(index);
    }
  }
}

fizzbuzz(100);
fizzbuzz2(15);
