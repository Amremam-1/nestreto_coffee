// // import { useTranslation } from "react-i18next"
// // import useUpdateReview from "../../../hooks/review/useUpdateReview"
// // import AddRating from "../AddRating/AddRating"
// // import styles from "./styles.module.scss"

// // const UpdateComment = ({ reviewNotes, reviewValue }) => {
// //   const { t, i18n } = useTranslation()

// //   const [, , updateReviewHandler, onChangeRating] = useUpdateReview()

// //   return (
// //     <form className={styles.updateForm}>
// //       <AddRating onChangeRating={onChangeRating} rateValue={reviewValue} />
// //       <textarea
// //         value={reviewNotes}
// //         // onChange={onChangeReview}
// //         name="commentInput"
// //         id="addComment"
// //         rows={4}
// //         placeholder={t("store-product-productComments-addComment-placeholder")}
// //       />
// //       <button type="submit" className={styles.shareCommentBtn}>
// //         {t("store-updateComment")}
// //       </button>
// //     </form>
// //   )
// // }

// // export default UpdateComment

// import { useTranslation } from "react-i18next"
// import useUpdateReview from "../../../hooks/review/useUpdateReview"
// import AddRating from "../AddRating/AddRating"
// import styles from "./styles.module.scss"
// import { useState } from "react"

// const UpdateComment = ({ reviewId, reviewNotes, reviewValue, productId }) => {
//   const { t } = useTranslation()
//   const [newNotes, setNewNotes] = useState(reviewNotes)
//   const [newRating, setNewRating] = useState(reviewValue)
//   const [, , , onChangeRating, onSubmit, loading] = useUpdateReview()

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     onSubmit(reviewId, newNotes, newRating, productId) // Ensure productId is passed here
//   }

//   return (
//     <form className={styles.updateForm} onSubmit={handleSubmit}>
//       <AddRating onChangeRating={setNewRating} rateValue={newRating} />
//       <textarea
//         value={newNotes}
//         onChange={(e) => setNewNotes(e.target.value)}
//         name="commentInput"
//         id="addComment"
//         rows={4}
//         placeholder={t("store-product-productComments-addComment-placeholder")}
//       />
//       <button
//         type="submit"
//         className={styles.shareCommentBtn}
//         disabled={loading}
//       >
//         {loading ? t("loading") : t("store-updateComment")}
//       </button>
//     </form>
//   )
// }

// export default UpdateComment

import { useTranslation } from "react-i18next"
import useUpdateReview from "../../../hooks/review/useUpdateReview"
import AddRating from "../AddRating/AddRating"
import styles from "./styles.module.scss"
import { useState } from "react"

const UpdateComment = ({ row_id, reviewNotes, reviewValue, productId }) => {
  const { t } = useTranslation()
  const [newNotes, setNewNotes] = useState(reviewNotes)
  const [newRating, setNewRating] = useState(reviewValue)
  const [, , , onChangeRating, onSubmit, loading] = useUpdateReview(productId)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Submitting with:", {
      row_id,
      newNotes,
      newRating,
      productId,
    })
    onSubmit(row_id, newNotes, newRating, productId)
  }
  return (
    <form className={styles.updateForm} onSubmit={handleSubmit}>
      <AddRating onChangeRating={setNewRating} rateValue={newRating} />
      <textarea
        value={newNotes}
        onChange={(e) => setNewNotes(e.target.value)}
        name="commentInput"
        id="addComment"
        rows={4}
        placeholder={t("store-product-productComments-addComment-placeholder")}
      />
      <button
        type="submit"
        className={styles.shareCommentBtn}
        disabled={loading}
      >
        {loading ? t("loading") : t("store-updateComment")}
      </button>
    </form>
  )
}

export default UpdateComment
