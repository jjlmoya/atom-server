module.exports = {
    path: '/core/',
    view: 'pages/core/index',
    layout: 'main',
    name: 'Core',
    logo: '/images/bonseo/logo.png',
    pages: [
        {
            path: 'temas',
            view: 'pages/core/theme',
            name: 'Temas'
        },
        {
            path: 'atoms',
            view: 'pages/core/atoms',
            name: 'Atoms'
        }
    ],
}