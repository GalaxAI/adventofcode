import { fetchData } from '../fetcher';

const input = await fetchData('2024', '3');
const pattern = /mul\(\d{1,3},\d{1,3}\)/g;
const matches: string[] | null = input.match(pattern);

if (!matches) throw new Error('No matches found');

const res = matches.map(match => {
    const [a, b] = match.slice(4, -1).split(',').map(Number);
    return (a * b);
});

const sum = res.reduce((acc, curr) => acc + curr, 0);
console.log(sum)

// Part2
const pattern2 = /mul\(\d{1,3},\d{1,3}\)|do\(\)|don't\(\)|/g;
const matches2: string[] | null = input.match(pattern2);

if (!matches2) throw new Error('No matches found');

var enabled = true;
const res2 = matches2.map(match => {
    if (match.startsWith('mul') && enabled) {
        const [a, b] = match.slice(4, -1).split(',').map(Number);
        return (a * b);
    }
    if (match.startsWith('don\'t')) {
      enabled = false;
      return 0;
    }
    if (match.startsWith('do')) {
      enabled = true;
      return 0;
    }

    return 0;
});

const sum2 = res2.reduce((acc, curr) => acc + curr, 0);
console.log(sum2)
