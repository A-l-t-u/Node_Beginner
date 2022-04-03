const { readFileSync, writeFileSync } = require('fs');
console.log('Start');
const First = readFileSync('./Content/First.txt', 'utf8');
const Second = readFileSync('./Content/Second.txt', 'utf8');

writeFileSync(
    './Content/Result_Sync.txt',
    `Here is the result: ${First}, ${Second}`,
    {flag: 'a'}
)
console.log('Task Complete');
console.log('Next');