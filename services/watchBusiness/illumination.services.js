exports.read = function () {
    return new Promise(function (resolve, reject) {
            resolve({
                illumation: [
                    'IL-1',
                    'Il-2'
                ]
            });
        }
    );
};