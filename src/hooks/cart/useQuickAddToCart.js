// import { useState, useEffect } from "react"
// import { useDispatch, useSelector } from "react-redux"
// import { useNavigate } from "react-router-dom"
// import { addToCart, getCartItems } from "../../redux/thunkActions/cartActions"
// import notify from "../notify/useNotification"
// import { useTranslation } from "react-i18next"
// import Cookies from "js-cookie"

// const useQuickAddToCart = (prodId) => {
//   const dispatch = useDispatch()
//   const { t } = useTranslation()
//   const navigate = useNavigate()
//   const [loading, setLoading] = useState(false)
//   const [quickAddToCartSuccess, setQuickAddToCartSuccess] = useState(null)

//   const quickAddToCartHandler = async () => {
//     const token = Cookies.get("api_token")

//     if (!token) {
//       notify(t("pleaseLogin"), "error")

//       setTimeout(() => {
//         navigate("/login") // Redirect to login page
//       }, [2000])
//       return
//     }

//     setLoading(true)
//     try {
//       await dispatch(addToCart({ product_id: prodId, quantity: 1 }))
//       await dispatch(getCartItems())
//       setQuickAddToCartSuccess(t("success"))
//       notify(t("success"), "success")
//     } catch (error) {
//       notify(t("errorAddingToCart"), "error")
//     } finally {
//       setLoading(false)
//     }
//   }

//   const { addToCartRes } = useSelector((state) => state.CartSlice)

//   useEffect(() => {
//     if (addToCartRes && addToCartRes.status) {
//       const message = t("success")
//       setQuickAddToCartSuccess(message)
//     }
//   }, [addToCartRes, t])

//   return [quickAddToCartHandler, quickAddToCartSuccess]
// }

// export default useQuickAddToCart
import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { addToCart, getCartItems } from "../../redux/thunkActions/cartActions"
import notify from "../notify/useNotification"
import { useTranslation } from "react-i18next"
import Cookies from "js-cookie"

const useQuickAddToCart = (prodId) => {
  const dispatch = useDispatch()
  const { t } = useTranslation()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [quickAddToCartSuccess, setQuickAddToCartSuccess] = useState(null)

  const quickAddToCartHandler = async () => {
    const token = Cookies.get("api_token")

    if (!token) {
      notify(t("pleaseLogin"), "error")

      setTimeout(() => {
        navigate("/login") // Redirect to login page
      }, 2000)
      return
    }

    setLoading(true)
    try {
      await dispatch(addToCart({ product_id: prodId, quantity: 1 }))
      await dispatch(getCartItems())
      setQuickAddToCartSuccess(t("success"))
      notify(t("success"), "success")
    } catch (error) {
      notify(t("errorAddingToCart"), "error")
    } finally {
      setLoading(false)
    }
  }

  const { addToCartRes } = useSelector((state) => state.CartSlice)

  useEffect(() => {
    if (addToCartRes && addToCartRes.status) {
      const message = t("success")
      setQuickAddToCartSuccess(message)
    }
  }, [addToCartRes, t])

  return [quickAddToCartHandler, quickAddToCartSuccess]
}

export default useQuickAddToCart
