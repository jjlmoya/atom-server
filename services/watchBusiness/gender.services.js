exports.read = function () {
    return new Promise(function (resolve, reject) {
            resolve({
                genders: [
                    'M',
                    'F',
                    'U'
                ]
            });
        }
    );
};