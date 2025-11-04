import { fetchData } from '../fetcher';

// This is just reading the input_data
const input = await fetchData('2024', '1');
const lines = input.trim().split('\n');
const pairs: number[][] = lines.map(line => {
    return line.split(/\s+/).map(Number);
});
type Pair = {left: number[], right: number[]};
const {left, right}: Pair = pairs.reduce((acc: Pair, pair) => {
  const [l,r] = pair
  acc.left.push(l);
  acc.right.push(r);
  return acc;
}, {left: [], right: []})
// Ends here
left.sort((a,b) => a-b);
right.sort((a,b) => a-b);

const result = left.map((item, index) =>
  Math.abs(item - right[index]));

// 0 is starting sum
console.log("Part 1:", result.reduce((sum, start) => sum + start, 0))

// Part 2
const similarity = left.map(item =>
  right.filter(x => x === item).length * item);

console.log("Part 2:", similarity.reduce((sum, start) => sum + start, 0));
