const products= [
    {
        id:'1',
        name:'Tabla Skate Star Wars',
        price:1000,
        category:'tablas de skate',
        categoryId:'tablas_de_skate',
        img:'../../public/images/tablaskatestarwars.jpg',
        stock: 20,
        description:'descripcion de tabla de skate',

    },
    {
        id:'2',
        name:'Tabla Skate Santa Cruz',
        price:1000,
        category:'tablas de skate', 
        categoryId:'tablas_de_skate',
        img:'../../public/images/tablaskatestarwars.jpg',
        stock: 10,
        description:'descripcion de tabla de skate',

    },
    {
        id:'3',
        name:'Tabla Skate',
        price:1000,
        category:'tablas de skate',
        categoryId:'tablas_de_skate', 
        img:'../../public/images/tablaskatestarwars.jpg',
        stock: 25,
        description:'descripcion de tabla de skate',
    },
    {
        id:'4',
        name:'Tabla Skate',
        price:1000,
        category:'tablas de skate',
        categoryId:'tablas_de_skate',
        img:'../../public/images/tablaskatestarwars.jpg',
        stock:20,
        description:'descripcion de tabla de skate',
    },
    {
        id:'5',
        name:'Tabla Surf',
        price:3000,
        category:'tablas de surf',
        categoryId:'tablas_de_surf',
        img:'../../public/images/tablaskatestarwars.jpg',
        stock: 10,
        description:'descripcion de tabla de surf',
    },
    {
        id:'6',
        name:'Tabla Surf',
        price:3000,
        category:'tablas de surf',
        categoryId:'tablas_de_surf',
        img:'../../public/images/tablaskatestarwars.jpg',
        stock: 10,
        description:'descripcion de tabla de surf',
    },
    {
        id:'7',
        name:'Tabla Surf',
        price:3000,
        category:'tablas de surf',
        categoryId:'tablas_de_surf',
        img:'../../public/images/tablaskatestarwars.jpg',
        stock: 15,
        description:'descripcion de tabla de surf',  
    },
    {
        id:'8',
        name:'Tabla Surf ',
        price:3000,
        category:'tablas de surf',
        categoryId:'tablas_de_surf',
        img:'../../public/images/tablaskatestarwars.jpg',
        stock: 18,
        description:'descripcion de tabla de surf',
    },
    {
        id:'9',
        name:'Tabla snow',
        price:2000,
        category:'tablas de snow',
        categoryId:'tablas_de_snow',
        img:'../../public/images/tablaskatestarwars.jpg',
        stock: 10,
        description:'descripcion de tabla de snow',
    },
    {
        id:'10',
        name:'Tabla Snow',
        price:2000,
        category:'tablas de snow',
        categoryId:'tablas_de_snow',
        img:'../src/images/tablaskatestarwars.jpg',
        stock: 20,
        description:'descripcion de tabla de snow',
    },
    {
        id:'11',
        name:'Tabla Snow',
        price:2000,
        category:'tablas de snow',
        categoryId:'tablas_de_snow',
        img:'../src/images/tablaskatestarwars.jpg',
        stock: 15,
        description:'descripcion de tabla de snow', 
    },
    {
        id:'12',
        name:'Tabla Snow ',
        price:2000,
        category:'tablas de snow',
        categoryId:'tablas_de_snow',
        img:'../../public/images/tablaskatestarwars.jpg',
        stock: 5,
        description:'descripcion de tabla de snow',
    },

]

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 1500)
    })
}


export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(product => product.categoryId === categoryId))
        },1500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(product => product.id === productId))
        },1500)
    })
}