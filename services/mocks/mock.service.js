const HTMLMock = function () {
    return 'components/blocks/content/resume';
};

exports.readSlider = function () {
    return new Promise(function (resolve) {
            resolve({
                sliders: [
                    HTMLMock(),
                    HTMLMock(),
                    HTMLMock(),
                    HTMLMock(),
                    HTMLMock(),
                    HTMLMock()
                ]
            });
        }
    );
};
