//array de productos

 const productos=[
    {
        id:1,
        precio:120000,
        stock:29,
        img: "https://www.shutterstock.com/image-illustration/wireless-headphones-isolated-on-grey-600w-1794893656.jpg",
        nombre:"audifnos",
        descripcion:"audifonos",
        categoria:"articulos"
    },
    {
        id:2,
        precio:150000,
        stock:27,
        img:"https://www.altonivel.com.mx/wp-content/uploads/2020/05/amazon1.jpg",
        nombre:"PCGAMER",
        descripcion:"PCGAMER",
        categoria:"PC"
    },
    {
        id:3,
        precio:220000,
        stock:12,
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpmR-60j5-M-KDfCkB-tG6y5QN23WModxqtw&usqp=CAU",
        nombre:"Lapto",
        descripcion:"LAPTO",
        categoria:"laptops"
    }
];
//promesa para acceder a los datos de los productos
export const getProductos=()=>{
    return(
        new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve(productos)
            },500
            )
        })
    )
}
// promesa para obtener los datos de un producto dado su id
export const getProductosId=(productoId)=>{
    return(
        new Promise( (resolve,reject)=>{
            setTimeout( ()=>{
                resolve(productos.find((prod) => prod.id == productoId))
            }, 500     
            )
        }

        )
    )
}
// promesa para obtener los productos en funcion de su categoria
export const getProductosCategotia=(categoriaId)=>{
    return(
        new Promise( (resolve,reject)=>{
            setTimeout( ()=>{
                resolve(productos.filter((prod) => prod.categoria == categoriaId))
            }, 500     
            )
        }

        )
    )
}