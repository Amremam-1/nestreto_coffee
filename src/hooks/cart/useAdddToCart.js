import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { addToCart, getCartItems } from "../../redux/thunkActions/cartActions"
import Cookies from "js-cookie"
import { useEffect } from "react"
import notify from "../notify/useNotification"

const useAdddToCart = (prodId, productInCart, stock) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  const apiToken = Cookies.get("api_token")

  const [quantity, setQuantity] = useState(1)
  const [showAddToCartPopup, setShowAddToCartPopup] = useState(false)
  const [addToCartSuccess, setAddToCartSuccess] = useState(null)

  useEffect(() => {
    if (productInCart && productInCart.quantity) {
      setQuantity(productInCart.quantity)
    } else {
    }
  }, [productInCart])

  const increaseQuantityHandler = () => {
    setQuantity((prevQty) => prevQty + 1)
  }

  const decreaseQuantityHandler = () => {
    if (quantity > 1) {
      setQuantity((prevQty) => prevQty - 1)
    }
  }

  const addToCartHandler = async () => {
    if (apiToken) {
      if (quantity >= 1) {
        setLoading(true)
        await dispatch(addToCart({ product_id: prodId, quantity }))
        await dispatch(getCartItems())
        setLoading(false)
      }
    } else {
      setShowAddToCartPopup(true)
      setTimeout(() => {
        navigate("/login")
      }, 2000)
    }
  }

  const { addToCartRes, isLoading, error } = useSelector(
    (state) => state.CartSlice
  )

  // console.log("___addToCartRes:", addToCartRes)

  useEffect(() => {
    if (addToCartRes) {
      if (addToCartRes.status) {
        setAddToCartSuccess(addToCartRes.message)
        notify(addToCartRes.message, "success")
        dispatch(getCartItems())
      } else if (error) {
        notify("Failed to add product to cart", "error")
      }
    }
  }, [addToCartRes, error, dispatch])

  return [
    quantity,
    showAddToCartPopup,
    increaseQuantityHandler,
    decreaseQuantityHandler,
    addToCartHandler,
    addToCartSuccess,
  ]
}

export default useAdddToCart
