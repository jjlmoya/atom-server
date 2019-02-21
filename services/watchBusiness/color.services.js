exports.read = function () {
    return new Promise(function (resolve, reject) {
            resolve({
                colors: [
                    'red',
                    'blue'
                ]
            });
        }
    );
};