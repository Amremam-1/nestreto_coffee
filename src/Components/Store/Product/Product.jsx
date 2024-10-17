import { FiHeart } from "react-icons/fi"
import { BiMinus, BiPlus } from "react-icons/bi"
import styles from "./styles.module.scss"
import useViewProduct from "../../../hooks/products/useViewProduct"
import { useParams } from "react-router-dom"
import { useTranslation } from "react-i18next"
import ProductComments from "../ProductComments/ProductComments"
import useAdddToCart from "../../../hooks/cart/useAdddToCart"
import useAddToFavorite from "../../../hooks/favorite/useAddToFavorite"
import Spinner from "../../Utils/Spinner/Spinner"
import { useState } from "react"

const Product = () => {
  const { t, i18n } = useTranslation()
  const { prodId } = useParams()
  const [
    productData,
    productDetails,
    productInCart,
    isFavorite,
    isLoading,
    error,
  ] = useViewProduct(prodId)

  const [addTofavorites, addToFavMsg, addToFavHandler] = useAddToFavorite(
    prodId,
    productDetails.favorite
  )

  const [
    quantity,
    showAddToCartPopup,
    increaseQuantityHandler,
    decreaseQuantityHandler,
    addToCartHandler,
    addToCartSuccess,
  ] = useAdddToCart(prodId, productInCart)

  return (
    <div className={styles.productWrapper}>
      <div className={styles.productWrapper__container}>
        {isLoading && <Spinner custom={true} />}
        {error && <p>Error: {error.message}</p>}
        <div className={styles.productCategory}>
          <h3 className={styles.categoryTitle}>{productDetails.category}</h3>
        </div>
        <div className={styles.prodContent}>
          <div className={styles.prodImgSlider}>
            <img src={process.env.PUBLIC_URL + productDetails.image} alt="" />
            {/* <ImageSlider imagesList={prodImagesList} /> */}
          </div>
          <div className={styles.prodDetails}>
            <h1 className={styles.tilte}>{productDetails.title}</h1>
            <h6 className={styles.features}>{t("store-product-features")}</h6>
            <hr />
            <h2 className={styles.desc}>{productDetails.description}</h2>
            <div className={styles.price}>
              <div className={styles.after}>
                <span>{t("store-product-unitPrice")}</span>
                <span className={styles.prodPrice}>{productDetails.price}</span>
                <span>{t("store-product-SR")}</span>
              </div>
              {productDetails.discount > 0 ? (
                <div className={styles.before}>
                  <p>
                    (
                    <span className={styles.value}>
                      {productDetails.price_before_discount}
                    </span>
                    <span className={styles.currency}>
                      {t("store-product-SR")}
                    </span>
                    <span className={styles.discount}>
                      - {productDetails.discount} {t("store-product-discount")}
                    </span>
                    )
                  </p>
                </div>
              ) : null}
            </div>
            <div className={styles.setQty}>
              <button onClick={increaseQuantityHandler}>
                <BiPlus />
              </button>
              <div>{quantity}</div>
              <button
                onClick={decreaseQuantityHandler}
                disabled={quantity === 1}
              >
                <BiMinus />
              </button>
            </div>
            <div className={styles.totalPrice}>
              <div className={styles.text}>
                <span>{t("store-product-total")}</span>
                <span>{(quantity * productDetails.price).toFixed(2)}</span>
                <span>{t("store-product-SR")}</span>
              </div>
              <p className={styles.tax}>{t("store-product-VAT")}</p>
            </div>
            <div className={styles.addBtns}>
              <button onClick={addToCartHandler} className={styles.addToCart}>
                {t("store-product-addToCart")}
              </button>
              <button
                onClick={addToFavHandler}
                className={
                  productDetails.favorite ? styles.isFavorited : styles.addToFav
                }
              >
                <FiHeart />
              </button>
            </div>
            <div className={styles.authModule}>
              <div className={styles.authModule__wrapper}>
                {/* <Register /> */}
                {/* <Login /> */}
              </div>
            </div>
          </div>
        </div>
        {/* -----------Comments---------------- */}
        <div className={styles.productTabs}>
          <div className={styles.productTabs__head}>
            <h3 className={styles.tab}>{t("store-product-productReviews")}</h3>
          </div>
          <div className={styles.productTabs__body}>
            <ProductComments
              prodId={prodId}
              rate={productDetails.rate}
              reviewList={productDetails.reviews}
              having_review={productDetails.having_review}
            />
          </div>
        </div>
      </div>
      {/* <ToastContainer
        position={i18n.dir() === "rtl" ? "bottom-left" : "bottom-right"}
        autoClose={3000}
        limit={1}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={i18n.dir() === "rtl"}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="light"
      /> */}
    </div>
  )
}

export default Product
