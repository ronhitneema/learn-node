
setImmediate(() => {
    console.log(`Run Immediately = ${count}`)
});

process.nextTick(() => {
    count++;
    console.log(`nextTick = ${count}`)
});
let count = 0;
console.log(`main = ${count}`);
