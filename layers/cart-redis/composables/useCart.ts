import { useToast } from 'vue-toastification'
import type {
  Cart,
  CartAddItemResponse,
  CartRemoveItemResponse,
  CartResponse,
  CartUpdateItemResponse,
  MutationCartAddMultipleItemsArgs,
  MutationCartRemoveMultipleItemsArgs,
  MutationCartUpdateMultipleItemsArgs,
  Product,
} from '~/graphql'
import { MutationName } from '~/server/mutations'

export const useCart = () => {
  const { $sdk } = useNuxtApp()
  const cartCounter = useCookie<number>('cart-counter')
  const toast = useToast()
  const cart = useState<Cart>('cart', () => ({}) as Cart)
  const frequentlyTogetherProducts = useState<Product[]>('frequently-together-products', () => [])

  const loading = ref(false)

  const loadCart = async () => {
    try {
      loading.value = true
      const { data } = await useFetch<{ cart: Cart }>(`/api/odoo/cart-load`)

      if (!data.value?.cart)
        return

      cart.value = data.value.cart
      cartCounter.value = Number(data.value.cart?.order?.websiteOrderLine?.length)
      frequentlyTogetherProducts.value = (data.value.cart.frequentlyBoughtTogether || []).filter((p): p is Product => p !== null)
    }
    catch (error: any) {
      return toast.error(error.data.message)
    }
    finally {
      loading.value = false
    }
  }

  const cartAdd = async (id: number, quantity: number) => {
    const params: MutationCartAddMultipleItemsArgs = {
      products: [{ id, quantity }],
    }

    try {
      loading.value = true

      const data = await $sdk().odoo.mutation<MutationCartAddMultipleItemsArgs, CartAddItemResponse>(
        { mutationName: MutationName.CartAddItem }, params,
      )

      cart.value = data.cartAddMultipleItems

      cartCounter.value = Number(cart.value?.order?.websiteOrderLine?.length)
      toast.success('Product has been added to cart')
    }
    catch (error: any) {
      return toast.error(error.data.message)
    }
    finally {
      loading.value = false
    }
  }

  const updateItemQuantity = async (id: number, quantity: number) => {
    loading.value = true

    const params: MutationCartUpdateMultipleItemsArgs = {
      lines: [{ id, quantity }],
    }

    try {
      const data = await $sdk().odoo.mutation<MutationCartUpdateMultipleItemsArgs, CartUpdateItemResponse>(
        { mutationName: MutationName.CartUpdateQuantity }, params,
      )
      cart.value = data.cartUpdateMultipleItems
      cartCounter.value = Number(cart.value?.order?.websiteOrderLine?.length)
      toast.success('Product updated successfully')
    }
    catch (error: any) {
      return toast.error(error.data.message)
    }
  }

  const removeItemFromCart = async (lineId: number) => {
    const params: MutationCartRemoveMultipleItemsArgs = {
      lineIds: [lineId],
    }

    loading.value = true

    try {
      const data = await $sdk().odoo.mutation<MutationCartRemoveMultipleItemsArgs, CartRemoveItemResponse>(
        { mutationName: MutationName.CartRemoveItem }, params,
      )

      cart.value = data.cartRemoveMultipleItems
      cartCounter.value = Number(cart.value?.order?.websiteOrderLine?.length)
      toast.success('Product removed successfully')
    }
    catch (error: any) {
      return toast.error(error.data.message)
    }
    finally {
      loading.value = false
    }
  }

  const totalItemsInCart = computed(() => {
    return (
      cart.value.order?.websiteOrderLine?.reduce(
        (acc, item) => acc + (item.quantity ?? 0),
        0,
      ) || 0
    )
  })

  return {
    loadCart,
    cartAdd,
    updateItemQuantity,
    removeItemFromCart,
    frequentlyTogetherProducts,
    loading,
    cart,
    totalItemsInCart,
  }
}
