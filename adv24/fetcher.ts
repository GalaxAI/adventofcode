import fs from 'fs';

export async function fetchData(year:string, day:string): Promise<string>{
  const cookie = fs.readFileSync('../../cookie.txt', 'utf8');
  const url = `https://adventofcode.com/${year}/day/${day}/input`;
  const response = await fetch(url, {
    headers: {
      'Cookie': `session=${cookie}`
    }
  });
  return response.text();
};
