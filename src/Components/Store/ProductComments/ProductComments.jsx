import { useTranslation } from "react-i18next"
import AddComment from "../AddComment/AddComment"
import ProductComment from "../ProductComment/ProductComment"
import styles from "./styles.module.scss"
import { useState } from "react"

const ProductComments = ({ prodId, rate, reviewList, having_review }) => {
  const { t, i18n } = useTranslation()
  const [perViewNum, setPerViewNum] = useState(5)
  // const [allProductReivewsData] = useGetAllProductReivews(prodId)

  const showMoreReviewsHandler = () => {
    setPerViewNum(reviewList?.length)
  }

  // const updateReviewHandler = (reviewData) => {
  //   console.log(reviewData)
  // }

  return (
    <div className={styles.prodComments}>
      <AddComment
        prodId={prodId}
        rate={rate}
        having_review={having_review}
        reviewList={reviewList}
      />
      <div className={styles.prodComments__commContainer}>
        <div className={styles.sortComments}>
          <h3 className={styles.title}>
            {t("store-product-productComments-usersReviews")}
          </h3>
          {/* <SortBy /> */}
        </div>
        <div className={styles.commentsWrapper}>
          {reviewList?.length > 0
            ? reviewList
                ?.slice(0, perViewNum)
                ?.map((item, index) => (
                  <ProductComment
                    revData={item}
                    productId={prodId}
                    key={index}
                  />
                ))
            : null}
        </div>
        {reviewList?.length > 0 ? (
          <button
            onClick={showMoreReviewsHandler}
            className={styles.showMoreCommBtn}
            style={
              perViewNum >= reviewList?.length ? { display: "none" } : null
            }
          >
            {t("store-product-productComments-showMore")}
          </button>
        ) : null}
      </div>
    </div>
  )
}

export default ProductComments
