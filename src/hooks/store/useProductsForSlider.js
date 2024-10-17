import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllProducts } from "../../redux/thunkActions/categoriesActions"

const useProductsForSlider = (page) => {
  const dispatch = useDispatch()

  const [products, setProducts] = useState([])
  const [totalProducts, setTotalProducts] = useState(0)
  const [perPage, setPerPage] = useState(0)
  const [numberOfPages, setNumberOfPages] = useState(0)

  const { getAllProductsRes, isLoading, error } = useSelector(
    (state) => state.CategoriesSlice
  )

  useEffect(() => {
    dispatch(getAllProducts(`?page=${page}`))
  }, [page, dispatch])

  useEffect(() => {
    if (getAllProductsRes && getAllProductsRes.status) {
      setTotalProducts(getAllProductsRes.total)
      setPerPage(getAllProductsRes.per_page)
      setNumberOfPages(
        Math.ceil(getAllProductsRes.total / getAllProductsRes.per_page)
      )

      if (getAllProductsRes.data) {
        setProducts(getAllProductsRes.data)
      }
    }
  }, [getAllProductsRes])

  return {
    products,
    totalProducts,
    perPage,
    numberOfPages,
    isLoading,
    error,
  }
}

export default useProductsForSlider
