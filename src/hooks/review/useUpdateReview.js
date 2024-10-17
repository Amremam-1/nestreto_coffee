// // // import { useDispatch, useSelector } from "react-redux"
// // // import { addReview } from "../../redux/thunkActions/reviewActions"
// // // import { useState } from "react"
// // // import { useEffect } from "react"
// // // import Cookies from "js-cookie"
// // // import notify from "../notify/useNotification"

// // // const useUpdateReview = () => {
// // //   const apiToken = Cookies.get("api_token")
// // //   const dispatch = useDispatch()
// // //   const [loading, setLoading] = useState(true)
// // //   const [reviewNotes, setReviewNotes] = useState("")
// // //   const [reviewValue, setReviewValue] = useState(0)
// // //   const [rateValue, setRateValue] = useState(0)
// // //   const [oldReivewData, setOldReivewData] = useState()

// // //   const updateReviewHandler = (reviewData) => {
// // //     setOldReivewData(reviewData)
// // //   }

// // //   const onChangeRating = (val) => {
// // //     setRateValue(val)
// // //   }

// // //   useEffect(() => {
// // //     setReviewNotes(oldReivewData?.notes)
// // //     setReviewValue(oldReivewData?.value)
// // //   }, [oldReivewData])

// // //   return [reviewNotes, reviewValue, updateReviewHandler, onChangeRating]
// // // }

// // // export default useUpdateReview

// // import { useDispatch } from "react-redux"
// // import { updateReview } from "../../redux/thunkActions/reviewActions"
// // import { useState } from "react"
// // import Cookies from "js-cookie"
// // import notify from "../notify/useNotification"

// // const useUpdateReview = () => {
// //   const apiToken = Cookies.get("api_token")
// //   const dispatch = useDispatch()
// //   const [loading, setLoading] = useState(false)
// //   const [reviewNotes, setReviewNotes] = useState("")
// //   const [reviewValue, setReviewValue] = useState(0)
// //   const [rateValue, setRateValue] = useState(0)
// //   const [oldReviewData, setOldReviewData] = useState()

// //   const updateReviewHandler = (reviewData) => {
// //     setOldReviewData(reviewData)
// //     setReviewNotes(reviewData.notes)
// //     setReviewValue(reviewData.value)
// //   }

// //   const onChangeRating = (val) => {
// //     setRateValue(val)
// //   }

// //   const onSubmit = async (reviewId, notes, value, productId) => {
// //     setLoading(true)
// //     try {
// //       const payload = { reviewId, notes, value, productId, apiToken }
// //       console.log("Updating review with payload:", payload) // Log the payload
// //       const response = await dispatch(updateReview(payload))
// //       console.log("API Response:", response) // Log the API response
// //       if (response.status === 200) {
// //         notify("Review updated successfully", "success")
// //       } else {
// //         notify("Error updating review", "error")
// //       }
// //     } catch (error) {
// //       console.error("Error:", error) // Log the error
// //       notify("Error updating review", "error")
// //     } finally {
// //       setLoading(false)
// //     }
// //   }

// //   return [
// //     reviewNotes,
// //     reviewValue,
// //     updateReviewHandler,
// //     onChangeRating,
// //     onSubmit,
// //     loading,
// //   ]
// // }

// // export default useUpdateReview

// import { useDispatch } from "react-redux"
// import { updateReview } from "../../redux/thunkActions/reviewActions"
// import { useState } from "react"
// import Cookies from "js-cookie"
// import notify from "../notify/useNotification"

// const useUpdateReview = (productId) => {
//   const apiToken = Cookies.get("api_token")
//   const dispatch = useDispatch()
//   const [loading, setLoading] = useState(false)
//   const [reviewNotes, setReviewNotes] = useState("")
//   const [reviewValue, setReviewValue] = useState(0)
//   const [rateValue, setRateValue] = useState(0)
//   const [oldReviewData, setOldReviewData] = useState()

//   const updateReviewHandler = (reviewData) => {
//     setOldReviewData(reviewData)
//     setReviewNotes(reviewData.notes)
//     setReviewValue(reviewData.value)
//   }

//   const onChangeRating = (val) => {
//     setRateValue(val)
//   }

//   const onSubmit = async (reviewId, notes, value, productId) => {
//     setLoading(true)
//     try {
//       const payload = { reviewId, notes, value, productId, apiToken }
//       console.log("Updating review with payload:", payload)
//       const response = await dispatch(updateReview(payload))
//       console.log("API Response:", response) // Log the API response
//       if (response.status === 200) {
//         notify("Review updated successfully", "success")
//       } else {
//         notify("Error updating review", "error")
//       }
//     } catch (error) {
//       console.error("Error:", error) // Log the error
//       notify("Error updating review", "error")
//     } finally {
//       setLoading(false)
//     }
//   }

//   return [
//     reviewNotes,
//     reviewValue,
//     updateReviewHandler,
//     onChangeRating,
//     onSubmit,
//     loading,
//   ]
// }

// export default useUpdateReview

import { useDispatch } from "react-redux"
import { useState } from "react"
import Cookies from "js-cookie"
import notify from "../notify/useNotification"
import { updateReview } from "../../redux/thunkActions/reviewActions"
import { getViewProduct } from "../../redux/thunkActions/productsActions"

const useUpdateReview = (productId) => {
  const apiToken = Cookies.get("api_token")
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const [reviewNotes, setReviewNotes] = useState("")
  const [reviewValue, setReviewValue] = useState(0)
  const [rateValue, setRateValue] = useState(0)
  const [oldReviewData, setOldReviewData] = useState()

  const updateReviewHandler = (reviewData) => {
    setOldReviewData(reviewData)
    setReviewNotes(reviewData.notes || "")
    setReviewValue(reviewData.value || 0)
  }

  const onChangeRating = (val) => {
    setRateValue(val)
  }

  const onSubmit = async (row_id, notes, value) => {
    setLoading(true)
    try {
      const payload = { row_id, notes, value, productId, apiToken }
      const response = await dispatch(updateReview(payload))
      await dispatch(getViewProduct(payload.productId))

      // Check the structure of the response object
      if (response?.status === true) {
        notify("Review updated successfully", "success")
      }
    } catch (error) {
      notify("Error updating review", "error")
    } finally {
      setLoading(false)
    }
  }

  return [
    reviewNotes,
    reviewValue,
    updateReviewHandler,
    onChangeRating,
    onSubmit,
    loading,
  ]
}

export default useUpdateReview
