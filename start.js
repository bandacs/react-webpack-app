const { exec } = require('child_process');
exec('webpack serve --mode development', (err, stdout, stderr) => {
    if (err) {
        console.error(`Error: ${err.message}`);
        return;
    }
    console.log(stdout);
    console.error(stderr);
});
