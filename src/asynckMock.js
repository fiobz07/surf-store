const products= [
    {
        id:'1',
        name:'Tabla Skate Element',
        price:1000,
        category:'Tablas de Skate',
        categoryId:'tablas_de_skate',
        img:'/images/tablaskatestarwars.jpg',
        stock: 20,
        description:'TABLA DE SKATE ELEMENT SWXE THE SMUGGLERS 8.5',

    },
    {
        id:'2',
        name:'Tabla Skate Santa Cruz',
        price:1000,
        category:'Tablas de Skate', 
        categoryId:'tablas_de_skate',
        img:'/images/TablaSkateBobSC.jpg',
        stock: 10,
        description:'TABLA SANTA CRUZ BOB ESPONJA HANGING OUT',

    },
    {
        id:'3',
        name:'Tabla SurfSkate Carver',
        price:1000,
        category:'Tablas de Skate',
        categoryId:'tablas_de_skate', 
        img:'/images/surfskatecarver.jpg',
        stock: 25,
        description:'SURFSKATE CARVER KAI LENNY LAVA 31 C7',
    },
    {
        id:'4',
        name:'Tabla SurfSkate Carver',
        price:1000,
        category:'Tablas de Skate',
        categoryId:'tablas_de_skate',
        img:'/images/surfskatecarver2s.jpg',
        stock:20,
        description:'SURFSKATE CARVER SWALLOW 29,5 CX',
    },
    {
        id:'5',
        name:'Tabla Surf All Merrick 6.0',
        price:3000,
        category:'Tablas de Surf',
        categoryId:'tablas_de_surf',
        img:'/images/tablasurfallmerrick.jpg',
        stock: 10,
        description:'MEDIDAS 6’0 18 1/4	2  3/16	24.1L',
    },
    {
        id:'6',
        name:'Tabla Surf Waira',
        price:3000,
        category:'Tablas de Surf',
        categoryId:'tablas_de_surf',
        img:'/images/TABLA-DE-SURF-DE-LA-UZ-MARY-510-36.8L.-1.jpg',
        stock: 10,
        description:'TABLA DE SURF DE LA UZ MARY 5’10 36.8L.',
    },
    {
        id:'7',
        name:'Tabla Quicksilver 6.4',
        price:3000,
        category:'Tablas de Surf',
        categoryId:'tablas_de_surf',
        img:'/images/Tablasurfquicksilver.jpg',
        stock: 15,
        description:'TABLA SHORTBOARD QUIKSILVER DISCUS 6.4” 39.3L',  
    },
    {
        id:'8',
        name:'Tabla Surf All Merrick',
        price:3000,
        category:'Tablas de Surf',
        categoryId:'tablas_de_surf',
        img:'/images/al-merrick-happy-everyday-57-fcsii.jpg',
        stock: 18,
        description:'MEDIDAS 70.78 " x 22.5 " 60.0 L',
    },
    {
        id:'9',
        name:'Tabla Snow Burton ',
        price:2000,
        category:'Tablas de Snow',
        categoryId:'tablas_de_snow',
        img:'/images/Tabla-Custom-Camber-2020-Snowboard-156.jpg',
        stock: 10,
        description:'TABLA BURTON CUSTOM CAMBER 2020 SNOWBOARD',
    },
    {
        id:'10',
        name:'Tabla Snow Nitro',
        price:2000,
        category:'Tablas de Snow',
        categoryId:'tablas_de_snow',
        img:'/images/Tabla-de-Snowboard-Nitro-Prime-Screen-Red-830443.jpg',
        stock: 20,
        description:'TABLA DE SNOWBOARD NITRO PRIME SCREEN - 156W',
    },
    {
        id:'11',
        name:'Tabla Snow Jones',
        price:2000,
        category:'Tablas de Snow',
        categoryId:'tablas_de_snow',
        img:'/images/jones-tabla-snowboard-flagship-ancho.jpg',
        stock: 15,
        description:'TABLA JONES FLAGSHIP ANCHO 159', 
    },
    {
        id:'12',
        name:'Tabla Snow Drake',
        price:2000,
        category:'Tablas de Snow',
        categoryId:'tablas_de_snow',
        img:'/images/charm-snowboard-board.jpg',
        stock: 5,
        description:' TABLA CHARM SNOWBOARD',
    },

]

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        },500)
    })
}


export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(product => product.categoryId === categoryId))
        },500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(product => product.id === productId))
        },500)
    })
}