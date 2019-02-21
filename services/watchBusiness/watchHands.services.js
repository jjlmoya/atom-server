exports.read = function () {
    return new Promise(function (resolve, reject) {
            resolve({
                watchHands: [
                    's',
                    'm',
                    'h',
                    'd'
                ]
            });
        }
    );
};
