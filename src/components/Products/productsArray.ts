type Product = {
    id: number
    name: string
    description: string
    type: string
    size: number
    price: number
}


const productsArray: Product[] = [
    {
        id: 1,
        name:"iPhone X",
        description:"This is iPhone X",
        type:"Phone",
        size:64,
        price:500
    },
    {
        id: 2,
        name:"iPhone XS",
        description:"This is iPhone XS",
        type:"Phone",
        size:32,
        price:300
    },
    {
        id: 3,
        name:"iPhone 12 Pro",
        description:"This is iPhone 12 Pro",
        type:"Phone",
        size:128,
        price:1000
    },
    {
        id: 4,
        name:"iPhone 12",
        description:"This is iPhone 12",
        type:"Phone",
        size:64,
        price:800
    },
    {
        id: 5,
        name:"iPhone 13",
        description:"This is iPhone 13",
        type:"Phone",
        size:64,
        price:700
    },
    {
        id: 6,
        name:"iPhone 13 Pro Max",
        description:"This is iPhone 13 Pro",
        type:"Phone",
        size:128,
        price:1200
    }
]

export default productsArray