import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { addToFavorite } from "../../redux/thunkActions/favoriteActions"
import Cookies from "js-cookie"
import { useEffect } from "react"
import notify from "../notify/useNotification"
import { getViewProduct } from "../../redux/thunkActions/productsActions"

const useAddToFavorite = (prodId, isFavorite) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [showAddToFavPopup, setShowAddToFavPopup] = useState(false)
  const [addToFavSuccess, setAddToFavSuccess] = useState(null)
  const [addToFavMsg, setAddToFavMsg] = useState("")
  const apiToken = Cookies.get("api_token")

  const addToFavHandler = async () => {
    if (apiToken) {
      setLoading(true)
      await dispatch(addToFavorite(prodId))
      await dispatch(getViewProduct(prodId))
      setLoading(false)
    } else {
      setShowAddToFavPopup(true)
      setTimeout(() => {
        navigate("/login")
      }, 3000)
    }
  }

  const { addTofavorites, isLoading, error } = useSelector(
    (state) => state.FavoriteSlice
  )

  useEffect(() => {
    if (!loading) {
      if (addTofavorites) {
        if (addTofavorites.status) {
          setAddToFavSuccess(addTofavorites.message)
          setAddToFavMsg(addTofavorites.message)
          notify(addTofavorites.message, "success")
        }
      }
    }
  }, [isLoading, loading, addTofavorites])

  return [addTofavorites, addToFavMsg, addToFavHandler]
}

export default useAddToFavorite
