exports.read = function () {
    return new Promise(function (resolve, reject) {
            resolve({
                coating: [
                    'IP',
                    'PVD',
                    'Gliding'
                ]
            });
        }
    );
};