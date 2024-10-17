import { BsChevronLeft, BsChevronRight } from "react-icons/bs"
import styles from "./styles.module.scss"
import { useTranslation } from "react-i18next"

const Offers = () => {
  const { t, i18n } = useTranslation()
  return (
    <section className={`scrollSection3 ${styles.offers}`}>
      <div className={styles.offers__container}>
        <div className={styles.left}>
          <div className={styles.title}>
            <h1 className={`${i18n.language === "ar" && "font_ar_request_title"}`}>
              {t("home-offers-franchisingLicensing")}
            </h1>
          </div>
          <div className={styles.desc}>
            <p
              className={`${styles.text} ${
                i18n.language === "ar" && "font_ar_request"
              } `}
            >
              {t("home-offers-franchisingLicensingTxt")}
            </p>
            <a href="/franchising-and-licensing" className={styles.reqNowBtn}>
              <span
                className={`${i18n.language === "ar" && "font_ar_request"}`}
              >
                {t("home-offers-requestNow")}
              </span>
              {i18n.dir() === "rtl" ? <BsChevronLeft /> : <BsChevronRight />}
            </a>
          </div>
        </div>
        <div className={styles.right}></div>
      </div>
    </section>
  )
}

export default Offers
