import {defineStore} from 'pinia'

export const appStore = defineStore('app', {
    state: () => ({
        cart: [] as ProductType[]
    }),
    actions: {
        addProductToCart(product: ProductType) {
            product.qtd = 1
            this.cart.push(product)
        },
        removeProductFromCart(product: ProductType) {
            const index = this.cart.findIndex((item) => item.id === product.id)
            this.cart.splice(index, 1)
        }
    },
    getters: {
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