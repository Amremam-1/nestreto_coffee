import styles from "./styles.module.scss"
import { MdClose } from "react-icons/md"
import { IoMdCloseCircle } from "react-icons/io"
import useRemoveFromFavorite from "../../../hooks/favorite/useRemoveFromFavorite"
import Popup from "../../Utils/Popup/Popup"
import { useTranslation } from "react-i18next"
import useAdddToCart from "../../../hooks/cart/useAdddToCart"

const WishListCard = ({ favProduct }) => {
  const { t, i18n } = useTranslation()

  const [removeFavoriteHandler, removeFavorite, removeFavoriteData] =
    useRemoveFromFavorite("prodId")
  const [
    availableProdQty,
    quantity,
    showAddToCartPopup,
    increaseQuantityHandler,
    decreaseQuantityHandler,
    addToCartHandler,
    addToCartSuccess,
  ] = useAdddToCart(favProduct.product_id)

  console.log(favProduct)

  return (
    <div className={styles.wishListCard}>
      <div className={styles.wishListCard__container}>
        <div className={styles.image}>
          <img src={process.env.PUBLIC_URL + favProduct.image} alt="" />
        </div>
        <div className={styles.desc}>
          <h4 className={styles.prodTitle}>
            <a href={`/store/product/${favProduct.product_id}`}>
              {favProduct.title}
            </a>
          </h4>
        </div>
        <div className={styles.price}>
          <p className={styles.text}>{t("account-myWishListCard-price")}</p>
          {favProduct.discount > 0 ? (
            <h3 className={styles.prodPriceBefore}>
              <span>{favProduct.price_before_discount}</span>
              <span> {t("store-product-SR")}</span>
            </h3>
          ) : null}
          <h3 className={styles.prodPrice}>
            <span>{favProduct.price}</span>
            <span> {t("store-product-SR")}</span>
          </h3>
        </div>
      </div>
    </div>
  )
}

export default WishListCard
