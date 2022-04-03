const { readFile, writeFile } = require('fs');

console.log('Start');
readFile('./Content/First.txt', 'utf8', (err,result) => {
    if (err) {
        console.log(err);
        return
    }
    const First = result;
    readFile('./Content/Second.txt', 'utf8', (err,result) => {
        if (err) {
            console.log(err);
            return
        }
        const Second = result;
        writeFile( './Content/Result_Async.txt', `Here is the result: ${First}, ${Second}`, (err,result) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log('Task complete');
        })
    })
});
console.log('Next');