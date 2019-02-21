exports.read = function () {
    return new Promise(function (resolve, reject) {
            resolve({
                timeNumbers: [
                    'roman',
                    'arabic',
                    'index'
                ]
            });
        }
    );
};
