module.exports = {
    path: 'atoms',
    base: 'a-button',
    modifiers: [
        require('./modifiers/sizes'),
        require('./modifiers/colors')
    ],
    button: {
        name: 'button',
        modifiers: [],
        components: [
            {
                name: 'icon',
                modifiers: [],
                svg: []
            },
            {
                name: 'linear',
                modifiers: []
            },
            {
                name: 'rounded',
                modifiers: []
            },
            {
                name: 'slider',
                modifiers: []
            }, {
                name: 'text-icon',
                modifiers: [],
                svg: []
            }
        ]
    }

};