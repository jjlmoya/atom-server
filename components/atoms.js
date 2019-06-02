const Sizes = require('./modifiers/sizes');
const Colors = require('./modifiers/colors');

module.exports = {
    path: 'atoms',
    base: 'a-button',
    components: [
        {
            name: 'button',
            components: [
                {
                    name: 'icon',
                    svg: [],
                    sizes: Sizes,
                    colors: Colors
                },
                {
                    name: 'linear',
                    modifiers: ['', 'secondary'],
                    sizes: Sizes,
                    colors: Colors
                },
                {
                    name: 'rounded',
                    modifiers: ['', 'secondary'],
                    sizes: Sizes,
                    colors: Colors
                },
                {
                    name: 'slider',
                    modifiers: ['', 'secondary'],
                    sizes: Sizes,
                    colors: Colors
                }, {
                    name: 'text-icon',
                    modifiers: ['', 'secondary'],
                    sizes: Sizes,
                    colors: Colors,
                    svg: []
                }
            ]
        }]
};