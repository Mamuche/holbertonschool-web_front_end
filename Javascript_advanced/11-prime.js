function countPrimeNumbers() {
    let count = 0;

    function isPrime(num) {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }

    for (let i = 2; i <= 100; i++) {
        if (isPrime(i)) {
            count++;
        }
    }
}

const start = performance.now();
for (let i = 0; i < 100; i++) {
  setTimeout(() => countPrimeNumbers(), 0);
}
const end = performance.now();

console.log(`Execution time of calculating prime numbers 100 time was ${end - start} milliseconds.`);