exports.read = function () {
    return new Promise(function (resolve, reject) {
            resolve({
                mechanismTypes: [
                    'MT-1',
                    'MT-2'
                ]
            });
        }
    );
};