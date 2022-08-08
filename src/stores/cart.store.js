import create from 'zustand'
import produce from 'immer'
import { getCart } from '../lib/api/carts.api'

const useCartStore = create((set, get) => ({
    id: null,
    items: [],

    fetchCart: async () => {
        const cart = await getCart()

        set({ id: cart.id, items: cart.items })
    },

    setQuantity: (id, quantity) => {
        const itemIndex = get().items.findIndex(item => item.id === id)

        if (itemIndex !== -1) {
            set(
                produce(cart => {
                    cart.items[itemIndex].quantity = quantity
                })
            )
        }
    }
}))

export default useCartStore