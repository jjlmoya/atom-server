exports.read = function () {
    return new Promise(function (resolve, reject) {
            resolve({
                materials: [
                    'leather',
                    'steel'
                ]
            });
        }
    );
};