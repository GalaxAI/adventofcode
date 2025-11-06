import { fetchData } from '../fetcher';

// This is just reading the input_data
const input = await fetchData('2024', '2');
const lines = input.trim().split('\n');
const numbers: number[][] = lines.map(line => line.split(/\s+/).map(Number))


const isSafe = (diffs: number[]): boolean => {
    return (diffs.every(n => n > 0) || diffs.every(n => n < 0))
        && diffs.every(n => Math.abs(n) <= 3 && n !== 0);
};

const results: number[][] = numbers.filter((number: number[]): boolean => {
    const result = number.slice(1).map((n,idx) => n - number[idx]);

    return isSafe(result);
})

console.log(results.length, numbers.length);

// Part2
const results2:number[][] = numbers.filter((number): boolean => {
  for (let i = 0; i < number.length; i++) {
    const merged: number[] = [...number.slice(0, i), ...number.slice(i + 1)];
    const result: number[] = merged.slice(1).map((n,idx) => n - merged[idx]);
    if (isSafe(result)) {
        return true;
    }
  }
  return false;
});

console.log(results2.length, numbers.length);
