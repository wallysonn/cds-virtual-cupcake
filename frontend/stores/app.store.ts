import {defineStore} from 'pinia'
import { listAllProducts } from '@/services/product.service'

export const appStore = defineStore('app', {
    state: () => ({
        products: [] as ProductType[],
        cart: [] as ProductType[],
        user: null as UserType | null
    }),
    actions: {
        setUser(user: UserType) {
            this.user = user
        },
        addProductToCart(product: ProductType) {
            product.qtd = 1
            this.cart.push(product)
        },
        removeProductFromCart(product: ProductType) {
            const index = this.cart.findIndex((item) => item.id === product.id)
            this.cart.splice(index, 1)
        },
        clearProductsFromCart() {
            this.cart = []
        }
    },
    getters: {
        getUser(store) {
            return store.user
        },
        isAuthenticated(store) {
            return store.user !== null
        },
        getAllProducts(store) {
            if (store.products.length === 0) {
                listAllProducts().then((response) => {
                    store.products = response
                })
            }
            return store.products
        },
        cartTotalPrice(store) {
            return store.cart.reduce((acc, item) => {
                let qtd = item.qtd || 1
                return acc + (item.price * qtd)
            }, 0)
        },
        cartTotalItems(store) {
            return store.cart.length
        },
        listItems(store) {
            return store.cart
        },
        //check if product is in cart
        isInCart(store) : (product: ProductType) => boolean {
            return (product: ProductType) => {
                return store.cart.some((item) => item.id === product.id)
            }
        }
    }
})