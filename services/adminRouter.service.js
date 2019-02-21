exports.navigation = {
    get: function (next) {
        next({
            navAdmin:
                [{
                    name: 'General',
                    icon: '',
                    order: 0,
                    tabs: [
                        {
                            name: 'Navegación',
                            icon: '',
                            path: '/admin/navegacion',
                            order: 0,

                        }
                    ]
                }, {
                    name: 'Imágenes',
                    icon: '',
                    order: 0,
                    tabs: [
                        {
                            name: 'Añadir Imagen',
                            icon: '',
                            path: '/admin/imagen',
                            order: 0,

                        }, {
                            name: 'Galería',
                            icon: '',
                            path: '/admin/galeria',
                            order: 1
                        }
                    ]
                }, {
                    name: 'Producto',
                    icon: '',
                    order: 0,
                    tabs: [
                        {
                            name: 'Relojes',
                            icon: '',
                            path: '/admin/relojes',
                            order: 0,

                        }, {
                            name: 'Marcas',
                            icon: '',
                            path: '/admin/correas',
                            order: 1
                        }
                    ]
                }, {
                    name: 'Desarrollo',
                    icon: '',
                    order: 0,
                    tabs: [
                        {
                            name: 'Componentes',
                            icon: '',
                            path: '/admin/componentes',
                            order: 0,

                        },
                        {
                            name: 'Programación',
                            icon: '',
                            path: '/admin/programacion',
                            order: 1,

                        },
                        {
                            name: 'SEO',
                            icon: '',
                            path: '/admin/seo',
                            order: 2,

                        },
                        {
                            name: 'Diseño',
                            icon: '',
                            path: '/admin/diseno',
                            order: 3,

                        }
                    ]
                }]
        });
    },
    set: function (navPage, next) {
    }
};


