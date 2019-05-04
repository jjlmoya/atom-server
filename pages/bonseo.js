module.exports = {
    path: '/bonseo/',
    view: 'pages/bonseo/index',
    layout: 'main',
    brand: 'sky',
    name: 'Bonseo',
    logo: '/images/bonseo/logo.png',
    images: {
        product: 'https://d2wnixsywa9nb4.cloudfront.net/wp-content/uploads/2017/12/02135818/LeetCode_logo.png',
        bg: 'https://auspostenterprise.com.au/content/dam/corp/ent-gov/insights/digitising-services/how-regulation-and-technology.jpg',
        products: [
            'https://cdn-images-1.medium.com/max/1200/1*SlXjjZ8ghJI9w37gzpG9FA.png',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png',
            'https://qph.fs.quoracdn.net/main-qimg-f9d834d3d05ba7f0661ad47969e0bfda.webp',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png',
            'https://qph.fs.quoracdn.net/main-qimg-f9d834d3d05ba7f0661ad47969e0bfda.webp'
        ],
        transparent: 'https://cryptorunner.com/wp-content/uploads/2017/10/ethereum-symbol.png'
    },
    pages: [
        {
            path: 'servicios',
            view: 'pages/bonseo/services',
            layout: 'abtasty',
            name: 'Servicios'
        },
        {
            path: 'hazlo-tu-mismo',
            view: 'pages/bonseo/diy',
            name: 'Hazlo tu mismo'
        }, {
            path: 'cursos',
            view: 'pages/bonseo/courses',
            name: 'Cursos'

        }],
};