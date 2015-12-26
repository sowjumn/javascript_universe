function isPrime(n) {
  var i;
  var squareRoot = Math.sqrt(n);

  squareRoot = Math.round(squareRoot);
  for (i = 2; i <  squareRoot; i++) {
    if (n % i === 0) {
      return false
    }
  }
  return true;
}

function allPrimeFactors(n) {
  var i = 2;
  var factors = [];

  while (n > 2) {
    if (n % i == 0) {
      n = n / i ;
      factors.push(i);
    } else {
      i++;
    }
  }
}

allPrimeFactors(21);