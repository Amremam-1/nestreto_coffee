// import { useState } from "react"
// import { useDispatch, useSelector } from "react-redux"
// import { useNavigate } from "react-router-dom"
// import {
//   addToCart,
//   getCartItems,
//   removeFromCart,
// } from "../../redux/thunkActions/cartActions"
// import Cookies from "js-cookie"
// import { useEffect } from "react"

// const useRemoveFromCart = () => {
//   const dispatch = useDispatch()
//   const navigate = useNavigate()
//   const [loading, setLoading] = useState(true)
//   const [showAddToCartPopup, setShowAddToCartPopup] = useState(false)
//   const [removeFromCartSuccess, setRemoveFromCartSuccess] = useState(null)
//   const apiToken = Cookies.get("api_token")

//   const removeFromCartHandler = async (cartItemId) => {
//     if (apiToken) {
//       setLoading(true)
//       dispatch(removeFromCart(cartItemId))
//       dispatch(getCartItems())
//       setLoading(false)
//     } else {
//       setShowAddToCartPopup(true)
//       setTimeout(() => {
//         navigate("/login")
//       }, 3000)
//     }
//   }

//   const { removeFromCartRes, isLoading, error } = useSelector(
//     (state) => state.CartSlice
//   )

//   // console.log("___removeFromCartRes:", removeFromCartRes);

//   useEffect(() => {
//     if (!loading) {
//       if (removeFromCartRes) {
//         if (removeFromCartRes.status) {
//           // navigate('/cart');
//           setRemoveFromCartSuccess(removeFromCartRes.message)
//         }
//       }
//     }
//   }, [loading, removeFromCartRes])

//   return [
//     removeFromCartHandler,
//     removeFromCartRes,
//     removeFromCartSuccess,
//     showAddToCartPopup,
//   ]
// }
// export default useRemoveFromCart
import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import {
  removeFromCart,
  getCartItems,
} from "../../redux/thunkActions/cartActions"
import Cookies from "js-cookie"

const useRemoveFromCart = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [showAddToCartPopup, setShowAddToCartPopup] = useState(false)
  const [removeFromCartSuccess, setRemoveFromCartSuccess] = useState(null)
  const apiToken = Cookies.get("api_token")

  const removeFromCartHandler = async (cartItemId) => {
    if (apiToken) {
      setLoading(true)
      try {
        await dispatch(removeFromCart(cartItemId))
        await dispatch(getCartItems())
      } catch (error) {
        console.error("Error removing item from cart:", error)
      } finally {
        setLoading(false)
      }
    } else {
      setShowAddToCartPopup(true)
      setTimeout(() => {
        navigate("/login")
      }, 2000)
    }
  }

  const { removeFromCartRes } = useSelector((state) => state.CartSlice)

  useEffect(() => {
    if (!loading && removeFromCartRes) {
      if (removeFromCartRes.status) {
        setRemoveFromCartSuccess(removeFromCartRes.message)
      }
    }
  }, [loading, removeFromCartRes])

  return [removeFromCartHandler, removeFromCartSuccess, showAddToCartPopup]
}

export default useRemoveFromCart
