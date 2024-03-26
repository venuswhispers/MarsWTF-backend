const _sleep = ( time = 10 ) => new Promise(async (resolve, reject) => {
    setTimeout(() => {
        resolve();
    }, time * 1000);
});

module.exports = {
    _sleep
} 