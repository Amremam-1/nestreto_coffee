// import { Swiper, SwiperSlide } from "swiper/react"
// import {
//   Navigation,
//   Pagination,
//   Scrollbar,
//   A11y,
//   Autoplay,
// } from "swiper/modules"
// import "swiper/css"
// import "swiper/css/navigation"
// import "swiper/css/pagination"
// import "swiper/css/scrollbar"
// import styles from "./styles.module.scss"
// import { useTranslation } from "react-i18next"
// import useGetAllCategories from "../../../hooks/categories/useGetAllCategories" // done
// import { getCategoryName } from "../../../redux/slices/StoreSlice"
// import { useNavigate } from "react-router-dom"
// import { useDispatch } from "react-redux"

// const MainSlider = () => {
//   const { t, i18n } = useTranslation()
//   const navigate = useNavigate()
//   const dispatch = useDispatch()

//   const handleClickedCategory = (categoryName, categoryId) => {
//     window.scrollTo(0, 0)
//     navigate("/store")
//     dispatch(getCategoryName({ categoryName, categoryId }))
//   }

//   const [categoriesData] = useGetAllCategories()

//   return (
//     <section className={`${styles.mainSlider}`}>
//       <div className={styles.container}>
//         <div className={styles.carouselWrapper}>
//           <Swiper
//             modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
//             spaceBetween={40}
//             slidesPerView={4}
//             breakpoints={{
//               200: {
//                 slidesPerView: 1,
//                 spaceBetween: 20,
//               },
//               450: {
//                 slidesPerView: 1,
//                 spaceBetween: 20,
//               },
//               576: {
//                 slidesPerView: 2,
//                 spaceBetween: 20,
//               },
//               768: {
//                 slidesPerView: 2,
//                 spaceBetween: 20,
//               },
//               992: {
//                 slidesPerView: 3,
//                 spaceBetween: 20,
//               },
//               1200: {
//                 slidesPerView: 4,
//                 spaceBetween: 30,
//               },
//               1400: {
//                 slidesPerView: 4,
//                 spaceBetween: 30,
//               },
//             }}
//             className={styles.mySwiper}
//             navigation
//             autoplay={{ delay: 3000, pauseOnMouseEnter: true }}
//             pagination={{ clickable: true }}
//           >
//             {categoriesData ? (
//               categoriesData.map((slide, index) => (
//                 <SwiperSlide key={index}>
//                   <div
//                     onClick={() => handleClickedCategory(slide.title, slide.id)}
//                     className={styles.sliderImage}
//                   >
//                     <img
//                       className="lazyload"
//                       src={process.env.PUBLIC_URL + slide.image}
//                       alt={slide.title}
//                     />
//                   </div>
//                 </SwiperSlide>
//               ))
//             ) : (
//               <p>No Images Found</p>
//             )}
//           </Swiper>
//         </div>
//         <button className={styles.discoverBtn}>
//           <a
//             href="/store"
//             className={` ${i18n.language === "ar" && "font_ar_subtitle2"}`}
//           >
//             {t("home-productSlider-shopAllProducts")}
//           </a>
//         </button>
//       </div>
//     </section>
//   )
// }

// export default MainSlider

import { Swiper, SwiperSlide } from "swiper/react"
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
import styles from "./styles.module.scss"
import { useTranslation } from "react-i18next"
import useProductsForSlider from "../../../hooks/store/useProductsForSlider"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"

const MainSlider = () => {
  const { t, i18n } = useTranslation()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  // Use the new hook to get products for the slider
  const { products } = useProductsForSlider(1) // Pass the page number you want

  const handleClickedCategory = (categoryName, categoryId) => {
    window.scrollTo(0, 0)
    navigate("/store")
    // dispatch(getCategoryName({ categoryName, categoryId }))
  }

  return (
    <section className={`${styles.mainSlider}`}>
      <div className={styles.container}>
        <div className={styles.carouselWrapper}>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={40}
            slidesPerView={4}
            breakpoints={{
              200: { slidesPerView: 1, spaceBetween: 20 },
              450: { slidesPerView: 1, spaceBetween: 20 },
              576: { slidesPerView: 2, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 20 },
              992: { slidesPerView: 3, spaceBetween: 20 },
              1200: { slidesPerView: 4, spaceBetween: 30 },
              1400: { slidesPerView: 4, spaceBetween: 30 },
            }}
            className={styles.mySwiper}
            navigation
            autoplay={{ delay: 3000, pauseOnMouseEnter: true }}
            pagination={{ clickable: true }}
          >
            {products.length > 0 ? (
              products.map((product, index) => (
                <SwiperSlide key={index}>
                  <div
                    onClick={() =>
                      handleClickedCategory(product.title, product.id)
                    }
                    className={styles.sliderImage}
                  >
                    <img
                      className="lazyload"
                      src={process.env.PUBLIC_URL + product.image}
                      alt={product.title}
                    />
                  </div>
                </SwiperSlide>
              ))
            ) : (
              <p>No Products Found</p>
            )}
          </Swiper>
        </div>
        <button className={styles.discoverBtn}>
          <a
            href="/store"
            className={` ${i18n.language === "ar" && "font_ar_subtitle2"}`}
          >
            {t("home-productSlider-shopAllProducts")}
          </a>
        </button>
      </div>
    </section>
  )
}

export default MainSlider
