import { fetchData } from '../fetcher';

// This is just reading the input_data
const input = await fetchData('2024', '2');
const lines = input.trim().split('\n');
const numbers = lines.map(line => line.split(/\s+/).map(Number))


const results = numbers.filter((number) => {
    const result = number.slice(1).map((n,idx) => n - number[idx]);

    return (result.every(n => n > 0) || result.every(n => n < 0))
        && result.every(n => Math.abs(n) <= 3);
})

console.log(results.length, numbers.length);

const isSafe = (diffs) => {
    return (diffs.every(n => n > 0) || diffs.every(n => n < 0))
        && diffs.every(n => Math.abs(n) <= 3 && n !== 0);
};


// Part2
const results2 = numbers.filter((number) => {
  for (let i = 0; i < number.length; i++) {
    const merged = [...number.slice(0, i), ...number.slice(i + 1)];
    const result = merged.slice(1).map((n,idx) => n - merged[idx]);
    if (isSafe(result)) {
        return true;
    }
  }
  return false;
});

console.log(results2.length, numbers.length);
