// import { FiHeart, FiShoppingCart, FiStar } from "react-icons/fi"
// import { BsCartCheckFill } from "react-icons/bs"
// import { TbHeartCheck } from "react-icons/tb"
// import styles from "./styles.module.scss"
// import { useTranslation } from "react-i18next"
// import useProductCard from "../../../hooks/products/useProductCard"
// import useQuickAddToCart from "../../../hooks/cart/useQuickAddToCart"
// import { ToastContainer } from "react-toastify"

// const ProductCard = ({ productData }) => {
//   const { t, i18n } = useTranslation()

//   const {
//     id,
//     title,
//     category,
//     price_before_discount,
//     discount,
//     price,
//     stock,
//     description,
//     image,
//     favorite,
//     having_review,
//     reviews,
//   } = productData

//   const [quickAddToCartHandler, quicKAddToCartSuccess] = useQuickAddToCart(id)

//   return (
//     <div className={styles.prodCard}>
//       <div className={styles.prodCard__container}>
//         <a className={styles.cartLink} href={`/store/product/${id}`}>
//           <div className={styles.innerCard}>
//             <div className={styles.image}>
//               <img
//                 src={
//                   process.env.PUBLIC_URL + image
//                     ? image
//                     : "/images/no-image.png"
//                 }
//                 alt="product_img"
//               />
//             </div>
//             <div className={styles.prodDetails}>
//               <h2
//                 className={`${styles.title} ${
//                   i18n.language === "ar" && "font_ar_subtitle2"
//                 }`}
//               >
//                 {title}
//               </h2>
//               {/* {size && <p className={styles.size}>{size}</p>} */}
//               <h3
//                 className={`${styles.price} ${
//                   i18n.language === "ar" && "font_ar_subtitle2"
//                 }`}
//               >
//                 {price} {t("SR")}
//               </h3>
//               {discount !== 0 ? (
//                 <h3
//                   className={`${styles.priceBefore} ${
//                     i18n.language === "ar" && "font_ar_subtitle2"
//                   }`}
//                 >
//                   {price_before_discount} {t("SR")}
//                 </h3>
//               ) : null}
//             </div>
//           </div>
//         </a>
//         <div className={styles.quickAddToCart}>
//           <button
//             onClick={quickAddToCartHandler}
//             className={i18n.language === "ar" && "font_ar_subtitle3"}
//           >
//             {t("store-product-addToCart")}
//           </button>
//         </div>
//       </div>
//       {/* <ToastContainer
//         position={i18n.dir() === "rtl" ? "bottom-left" : "bottom-right"}
//         autoClose={1000}
//         limit={0}
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick // التأكد من أن هذه الخاصية مفعلة لإغلاق الإشعار عند النقر عليه
//         rtl={i18n.dir() === "rtl"}
//         pauseOnFocusLoss={false}
//         draggable
//         pauseOnHover
//         theme="light"
//       /> */}
//     </div>
//   )
// }

// export default ProductCard

import { FiHeart, FiShoppingCart, FiStar } from "react-icons/fi"
import { BsCartCheckFill } from "react-icons/bs"
import { TbHeartCheck } from "react-icons/tb"
import styles from "./styles.module.scss"
import { useTranslation } from "react-i18next"
import useQuickAddToCart from "../../../hooks/cart/useQuickAddToCart"
import { ToastContainer } from "react-toastify"

const ProductCard = ({ productData }) => {
  const { t, i18n } = useTranslation()

  const { id, title, price_before_discount, discount, price, image } =
    productData

  const [quickAddToCartHandler] = useQuickAddToCart(id)

  return (
    <div className={styles.prodCard}>
      <ToastContainer />
      <div className={styles.prodCard__container}>
        <a className={styles.cartLink} href={`/store/product/${id}`}>
          <div className={styles.innerCard}>
            <div className={styles.image}>
              <img
                src={process.env.PUBLIC_URL + image || "/images/no-image.png"}
                alt="product_img"
              />
            </div>
            <div className={styles.prodDetails}>
              <h2
                className={`${styles.title} ${
                  i18n.language === "ar" && "font_ar_subtitle2"
                }`}
              >
                {title}
              </h2>
              <h3
                className={`${styles.price} ${
                  i18n.language === "ar" && "font_ar_subtitle2"
                }`}
              >
                {price} {t("SR")}
              </h3>
              {discount !== 0 && (
                <h3
                  className={`${styles.priceBefore} ${
                    i18n.language === "ar" && "font_ar_subtitle2"
                  }`}
                >
                  {price_before_discount} {t("SR")}
                </h3>
              )}
            </div>
          </div>
        </a>
        <div className={styles.quickAddToCart}>
          <button
            onClick={quickAddToCartHandler}
            className={i18n.language === "ar" && "font_ar_subtitle3"}
          >
            {t("store-product-addToCart")}
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
