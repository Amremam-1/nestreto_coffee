import { useState } from "react"
import { placeOrder } from "../../redux/thunkActions/paymentActions"
import { useDispatch, useSelector } from "react-redux"
import notify from "../notify/useNotification"
import { useEffect } from "react"
import { useTranslation } from "react-i18next"

const usePlaceOrder = () => {
  const { t } = useTranslation()

  const dispatch = useDispatch()

  const [loading, setLoading] = useState(true)

  useEffect(() => {}, [])

  const placeOrderHandler = async () => {
    setLoading(true)
    await dispatch(placeOrder())
    setLoading(false)
  }

  const { placeOrderRes, isLoading, error } = useSelector(
    (state) => state.PaymentSlice
  )

  if (!loading) {
    if (placeOrderRes) {
      if (placeOrderRes.success) {
        notify(t("checkout-paymentMethod-gateway"), "success")
        if (placeOrderRes.url) {
          setTimeout(() => {
            window.location.replace(placeOrderRes.url)
          }, 1500)
        }
      }
    }
  }

  return [placeOrderHandler, isLoading, error]
}

export default usePlaceOrder
