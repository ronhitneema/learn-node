const args = process.argv;

if (args.length > 2) {
    for (let i = 2; i < args.length; i++) {
        console.log(args[i]);
    }
} else {
    console.log('Args not found');
}
