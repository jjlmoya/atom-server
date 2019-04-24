module.exports = {
    path: '/cp/',
    view: 'pages/cp/index',
    layout: 'main',
    name: 'CP',
    brand: 'kino',
    logo: 'https://cintiplanes.es/wp-content/uploads/2019/04/logoCP.png',
    pages: [
        {
            path: 'guia-de-viaje',
            view: 'pages/cp/guides',
            name: 'Guías',
        },
        {
            path: 'guia-de-viaje/berlin',
            view: 'pages/cp/guide',
            name: 'Guía de Berlin'
        },
        {
            path: 'gastronomia/berlin',
            view: 'pages/cp/gastronomy',
            name: 'Gastronomía'
        },
        {
            path: 'transporte/berlin',
            view: 'pages/cp/transport',
            name: 'Transporte'
        },
        {
            path: 'diario/berlin',
            view: 'pages/cp/diary',
            name: 'Diario'
        }],
};