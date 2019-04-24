module.exports = {
    path: '/cp/',
    view: 'pages/cp/index',
    layout: 'main',
    name: 'CP',
    brand: 'kino',
    logo: 'https://cintiplanes.es/wp-content/uploads/2019/04/logoCP.png',
    images: {
        product: 'https://miviaje.com/wp-content/uploads/2017/09/berlin.jpg',
        bg: 'https://farm1.staticflickr.com/273/19330605146_157447858b_o.png',
        transparent: 'https://www.paredesoriginales.com/328-large_default/vinilo-torre-eiffel.jpg',
        products:
            [
                'https://www.enroma.com/wp-content/uploads/2017/02/Tour-Coliseo-Foro-y-Palatino-1-531x354.jpg',
                'https://media.timeout.com/images/104684290/630/472/image.jpg',
                'https://colabcdn.azureedge.net/-/media/Images/Moscow/Location/st-basils-moscow.ashx'
            ]
    },
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