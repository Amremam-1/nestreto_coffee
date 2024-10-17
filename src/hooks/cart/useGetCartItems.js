import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getCartItems } from "../../redux/thunkActions/cartActions"

const useGetCartItems = () => {
  const dispatch = useDispatch()
  const [isCartEmpty, setIsCartEmpty] = useState(null)
  const [cartEmptyMsg, setCartEmptyMsg] = useState(null)
  const [cartLength, setCartLength] = useState(0)
  const [cartItemsData, setCartItemsData] = useState([])
  const [city, setCity] = useState({
    id: null,
    city_name: "",
  })
  const [shippingAddress, setShippingAddress] = useState({
    building: "",
    floor: "",
    flat: "",
    street: "",
    state: "",
    city: "",
    postalCode: "",
    phone: "",
    note: "",
  })

  useEffect(() => {
    const run = async () => {
      dispatch(getCartItems())
    }

    run()
  }, [dispatch, localStorage.getItem("i18nextLng")])

  const { cartItemsRes, isLoading, error } = useSelector(
    (state) => state.CartSlice
  )

  const productsInCart = Object.entries(cartItemsData).filter(
    ([key]) => key.split("_")[0] === "product"
  )

  const productsInCartArray = productsInCart.map((item) => item[1])

  useEffect(() => {
    if (cartItemsRes && cartItemsRes.status) {
      const updatedCartItems = cartItemsRes.data || {}

      // Update cart items data
      setCartItemsData(updatedCartItems)

      // Filter products in the cart
      const cartItems = Object.keys(updatedCartItems).filter(
        (item) => item.split("_")[0] === "product"
      )

      // Update the shipping address if available
      if (updatedCartItems.address) {
        setShippingAddress(updatedCartItems.address)
      }

      // Update city if available
      if (updatedCartItems.city) {
        setCity(updatedCartItems.city)
      }

      // Update cart length and check if the cart is empty
      if (cartItems.length > 0) {
        setCartLength(cartItems.length)
        setIsCartEmpty(false)
      } else {
        setCartLength(0)
        setIsCartEmpty(true)
        setCartEmptyMsg(cartItemsRes.message)
      }
    }
  }, [cartItemsRes])

  return [
    productsInCartArray,
    cartItemsData,
    cartLength,
    isCartEmpty,
    cartEmptyMsg,
    shippingAddress,
    city,
    isLoading,
    error,
  ]
}

export default useGetCartItems
