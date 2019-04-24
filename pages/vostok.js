module.exports = {
    path: '/vostok/',
    view: 'pages/vostok/index',
    name: 'Vostok',
    layout: 'main',
    brand: 'diable',
    images: {
        product: 'https://cdn.tmobile.com/content/dam/t-mobile/en-p/internet-devices/apple/watch-series4-44/space-gray-black-band/Apple-WatchSeries4-Cellular-44mm-AluminumSpaceGray-SportBand-Black-1-3x.jpg',
        bg: 'https://cdnb.artstation.com/p/assets/images/images/008/331/651/large/bakhytzhan-shabdukarimov-new-demo-5-vostok.jpg?1512057321',
        products:
            [
                'https://cdn.tmobile.com/content/dam/t-mobile/en-p/internet-devices/apple/watch-series4-44/space-gray-black-band/Apple-WatchSeries4-Cellular-44mm-AluminumSpaceGray-SportBand-Black-1-3x.jpg',
                'https://cdn.shopify.com/s/files/1/0238/6181/products/Weiss_Watch_Company_Automatic_Issue_Field_Watch_White_Dial_2048x2048.jpg?v=1545033364',
                'https://cdn1.cnet.com/img/JBhI_TZY9FdH6jlX-frBVgy2LHM=/2018/09/13/0ae445fe-2616-4c45-b799-fadcab95da02/apple-event-091218-apple-watch-series-4-0748.jpg'
            ]

    },
    pages: [
        {
            path: 'product',
            view: 'pages/vostok/product',
            name: 'Producto'
        },
        {
            path: 'search',
            view: 'pages/vostok/search',
            name: 'Buscador'
        }],
};