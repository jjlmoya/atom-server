exports.read = function () {
    return new Promise(function (resolve, reject) {
            resolve({
                calendarDisplays: [
                    'd',
                    'w',
                    'wd',
                    'm',
                    'y'
                ]
            });
        }
    );
};
