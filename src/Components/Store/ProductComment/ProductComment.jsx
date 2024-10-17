// import RatingStars from "../../Utils/RatingStars/RatingStars"
// import { FaRegEdit } from "react-icons/fa"
// import styles from "./styles.module.scss"
// import Cookies from "js-cookie"
// import useUpdateReview from "../../../hooks/review/useUpdateReview"
// import UpdateComment from "../UpdateComment/UpdateComment"
// import { useState } from "react"

// const ProductComment = ({ revData }) => {
//   const [isEditClicked, setIsEditClicked] = useState(false)
//   const [commentData, setCommentData] = useState()

//   const [reviewNotes, reviewValue, updateReviewHandler, onChangeRating] =
//     useUpdateReview()

//   const editReview = (revData) => {
//     updateReviewHandler(revData)
//     setIsEditClicked((prevState) => !prevState)
//     setCommentData(revData)
//   }

//   const userId = Cookies.get("user_id")
//   const parsedUserId = userId ? JSON.parse(userId) : null

//   return (
//     <div className={styles.prodComment}>
//       <div className={styles.wrapper}>
//         <div
//           className={
//             parsedUserId === revData.user_id
//               ? styles.userImgCircle
//               : styles.userImg
//           }
//         >
//           <h2 className={styles.alias}>
//             <span className={styles.first}>
//               {revData.user_name.split(" ")[0]
//                 ? revData.user_name.split(" ")[0][0]
//                 : ""}
//             </span>
//             <span className={styles.second}>
//               {revData.user_name.split(" ")[1]
//                 ? revData.user_name.split(" ")[1][0]
//                 : ""}
//             </span>
//           </h2>
//         </div>
//         <div className={styles.body}>
//           <div className={styles.commentBox}>
//             <div className={styles.commentDetails}>
//               <div className={styles.user}>
//                 <h3 className={styles.userName}>{revData.user_name}</h3>
//                 <RatingStars rate={revData.value} />
//               </div>
//               <div className={styles.date}>{revData.created_at}</div>
//             </div>
//             {parsedUserId === revData.user_id ? (
//               <div className={styles.editBtn}>
//                 <FaRegEdit onClick={() => editReview(revData)} />
//               </div>
//             ) : null}
//           </div>
//           <p className={styles.commentTxt}>{revData.notes}</p>
//         </div>
//       </div>
//       {/* {parsedUserId === revData.user_id && isEditClicked ? (
//         <div className={styles.updateComment}>
//           <UpdateComment
//             reviewValue={commentData?.value}
//             reviewNotes={commentData?.notes}
//           />
//         </div>
//       ) : null} */}

//       {parsedUserId === revData.user_id && isEditClicked ? (
//         <div className={styles.updateComment}>
//           <UpdateComment
//             reviewNotes={commentData?.notes}
//             reviewValue={commentData?.value}
//             reviewId={revData.id}
//           />
//         </div>
//       ) : null}
//     </div>
//   )
// }

// export default ProductComment

import RatingStars from "../../Utils/RatingStars/RatingStars"
import { FaRegEdit } from "react-icons/fa"
import styles from "./styles.module.scss"
import Cookies from "js-cookie"
import useUpdateReview from "../../../hooks/review/useUpdateReview"
import UpdateComment from "../UpdateComment/UpdateComment"
import { useState } from "react"

const ProductComment = ({ revData, productId }) => {
  const [isEditClicked, setIsEditClicked] = useState(false)
  const [commentData, setCommentData] = useState()

  const [
    reviewNotes,
    reviewValue,
    updateReviewHandler,
    onChangeRating,
    onSubmit,
    loading,
  ] = useUpdateReview(productId)

  const editReview = (revData) => {
    updateReviewHandler(revData)
    setIsEditClicked((prevState) => !prevState)
    setCommentData(revData)
  }

  const userId = Cookies.get("user_id")
  const parsedUserId = userId ? JSON.parse(userId) : null

  return (
    <div className={styles.prodComment}>
      <div className={styles.wrapper}>
        <div
          className={
            parsedUserId === revData.user_id
              ? styles.userImgCircle
              : styles.userImg
          }
        >
          <h2 className={styles.alias}>
            <span className={styles.first}>
              {revData.user_name.split(" ")[0]
                ? revData.user_name.split(" ")[0][0]
                : ""}
            </span>
            <span className={styles.second}>
              {revData.user_name.split(" ")[1]
                ? revData.user_name.split(" ")[1][0]
                : ""}
            </span>
          </h2>
        </div>
        <div className={styles.body}>
          <div className={styles.commentBox}>
            <div className={styles.commentDetails}>
              <div className={styles.user}>
                <h3 className={styles.userName}>{revData.user_name}</h3>
                <RatingStars rate={revData.value} />
              </div>
              <div className={styles.date}>{revData.created_at}</div>
            </div>
            {parsedUserId === revData.user_id ? (
              <div className={styles.editBtn}>
                <FaRegEdit onClick={() => editReview(revData)} />
              </div>
            ) : null}
          </div>
          <p className={styles.commentTxt}>{revData.notes}</p>
        </div>
      </div>
      {parsedUserId === revData.user_id && isEditClicked ? (
        <div className={styles.updateComment}>
          <UpdateComment
            reviewNotes={commentData?.notes}
            reviewValue={commentData?.value}
            row_id={revData.id}
            productId={productId} // Ensure this is correct and not undefined
          />
        </div>
      ) : null}
    </div>
  )
}

export default ProductComment
