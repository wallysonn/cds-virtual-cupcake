import { ProductService } from './services/ProductService'

const productList: {
    name: string
    description: string
    price: number
    image: string
    rating: number
}[] = [
    {
        name: "Delícia Vermelha",
        description: "Bolo de veludo vermelho com recheio de brigadeiro branco e cobertura de chantilly e raspas de chocolate branco.",
        price: 120,
        image: "https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg?auto=compress&cs=tinysrgb&w=800",
        rating: 4.5,
    },
    {
        name: "Encanto de Limão",
        description: "Bolo de limão com recheio de brigadeiro branco e cobertura de chantilly e raspas de chocolate branco.",
        price: 75,
        image: "https://images.pexels.com/photos/4748573/pexels-photo-4748573.jpeg?auto=compress&cs=tinysrgb&w=800",
        rating: 4.5,
    },
    {
        name: "ChocoFest Celestial",
        description: "Bolo de chocolate com recheio de brigadeiro branco e cobertura de chantilly e raspas de chocolate branco.",
        price: 220,
        image: "https://images.pexels.com/photos/19202777/pexels-photo-19202777/free-photo-of-bolo-torta-chocolate-delicioso.jpeg?auto=compress&cs=tinysrgb&w=800",
        rating: 4.5,
    },
    {
        name: "Maravilha de Morango",
        description: "Bolo de morango com recheio de brigadeiro branco e cobertura de chantilly e raspas de chocolate branco.",
        price: 165,
        image: "https://images.pexels.com/photos/15071192/pexels-photo-15071192/free-photo-of-bolo-torta-delicioso-saboroso.jpeg?auto=compress&cs=tinysrgb&w=800",
        rating: 4.5,
    },
    {
        name: "Baunilha Suprema",
        description: "Bolo de baunilha com recheio de brigadeiro branco e cobertura de chantilly e raspas de chocolate branco.",
        price: 120,
        image: "https://images.pexels.com/photos/4109784/pexels-photo-4109784.jpeg?auto=compress&cs=tinysrgb&w=800",
        rating: 4.5,
    },
    {
        name: "Caramelo Divino",
        description: "Bolo de caramelo com recheio de brigadeiro branco e cobertura de chantilly e raspas de chocolate branco.",
        price: 120,
        image: "https://images.pexels.com/photos/3071821/pexels-photo-3071821.jpeg?auto=compress&cs=tinysrgb&w=800",
        rating: 3.5,
    },
    {
        name: "Explosão de Coco",
        description: "Bolo de coco com recheio de brigadeiro branco e cobertura de chantilly e raspas de chocolate branco.",
        price: 170,
        image: "https://images.pexels.com/photos/14242068/pexels-photo-14242068.jpeg?auto=compress&cs=tinysrgb&w=800",
        rating: 5,
    },
    {
        name: "Café Cintilante",
        description: "Bolo de café com recheio de brigadeiro branco e cobertura de chantilly e raspas de chocolate branco.",
        price: 120,
        image: "https://images.pexels.com/photos/3049426/pexels-photo-3049426.jpeg?auto=compress&cs=tinysrgb&w=800",
        rating: 5,
    }
]

async function main() {
    for (const product of productList) {
        await ProductService.create(product)
    }
}

main().finally(() => {

})

