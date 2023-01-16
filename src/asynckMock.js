const products= [
    {
        id:'1',
        name:'Tabla Skate Star Wars',
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
        img:'/images/tablaskatesantacruz2.jpg',
        stock: 10,
        description:'TABLA SANTA CRUZ SALVA TIGER HAND SHAPED',

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
        description:'MEDIDAS 5’8 18 1/4	2  3/16	24.1L',
    },
    {
        id:'6',
        name:'Tabla Surf Quicksilver 6.5',
        price:3000,
        category:'Tablas de Surf',
        categoryId:'tablas_de_surf',
        img:'/images/tablasurfquicksilver.jpg',
        stock: 10,
        description:' MEDIDAS 6’5 20 1/8 2 3/4	37.1L',
    },
    {
        id:'7',
        name:'Tabla Surf Ripcurl 5.9',
        price:3000,
        category:'Tablas de Surf',
        categoryId:'tablas_de_surf',
        img:'/images/tablasurfripcurl.jpg',
        stock: 15,
        description:'Tabla Surf Rip Curl Print Fly Fish',  
    },
    {
        id:'8',
        name:'Tabla Surf Quicksilver 7.8 ',
        price:3000,
        category:'Tablas de Surf',
        categoryId:'tablas_de_surf',
        img:'/images/tablasurf78lg.jpg',
        stock: 18,
        description:'MEDIDAS 70.78 " x 22.5 " 60.0 L',
    },
    {
        id:'9',
        name:'Tabla Snow Nitro ',
        price:2000,
        category:'Tablas de Snow',
        categoryId:'tablas_de_snow',
        img:'/images/tablasnow138.jpg',
        stock: 10,
        description:'TABLA NITRO 138',
    },
    {
        id:'10',
        name:'Tabla Snow Nitro 156',
        price:2000,
        category:'Tablas de Snow',
        categoryId:'tablas_de_snow',
        img:'/images/tablasnow156.jpg',
        stock: 20,
        description:'TABLA NITRO 156',
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
        name:'Tabla Snow Burton',
        price:2000,
        category:'Tablas de Snow',
        categoryId:'tablas_de_snow',
        img:'/images/burton-tabla-snowboard-feather-mujer.jpg',
        stock: 5,
        description:'TABLA BURTON SNOWBOARD FEATHER 152',
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