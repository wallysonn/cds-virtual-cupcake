type ProductType = {
    id: number;
    name: string;
    qtd?: number;
    discount?: number;
    price: number;
    image: string;
    description: string;
    rating: number;
}
type UserType = {
    name: string
    picture: string
}

type OrderType = {
    id: number
    discount: number
    user: UserType
    status: string
    products: ProductType[]
    total: number
    date: string
}