exports.read = function () {
    return new Promise(function (resolve, reject) {
            resolve({
                timeFormats: [
                    12,
                    24
                ]
            });
        }
    );
};
