import styles from "./styles.module.scss"
import { useTranslation } from "react-i18next"
import Aos from "aos"
import "aos/dist/aos.css"
import useGetHomePageData from "../../../hooks/pages/useGetHomePageData"
import { useEffect } from "react"

const AboutDetails = () => {
  const { t, i18n } = useTranslation()

  const [homePageData] = useGetHomePageData()

  useEffect(() => {
    Aos.init({
      duration: 700,
      easing: "ease-in-sine",
    })
  }, [])

  return (
    <section className={styles.wrapper_main}>
      <div
        className={styles.about_details}
        style={{
          backgroundImage: `url(${homePageData?.path}${homePageData?.pics?.["2"]})`,
        }}
      >
        <div className={styles.details_image}>
          <div className={styles.details_image_content} data-aos="zoom-in">
            {/* <p className={styles.image_title}>{t("home-aboutdetails-title")}</p> */}
            <h1 className={i18n.language === "ar" && "font_ar_head2"}>
              {t("home-aboutdetails-subtitle")}
            </h1>
          </div>
        </div>
      </div>

      <div className={styles.features_main}>
        {i18n.language === "en" ? (
          <img
            src="/images/websitee-02.png"
            alt="about-cup"
            className={styles.make}
          />
        ) : (
          <img
            src="/images/websitee-03.png"
            alt="about-cup"
            className={styles.make}
          />
        )}
        <div className={styles.feature_img}></div>
        <span className={styles.line}></span>

        <div className={styles.container_one}>
          <img
            src="/images/websitee-04.png"
            alt="about-cup"
            className={styles.cup}
          />
          <div className={styles.feature_container_one}>
            <div className={styles.right} data-aos="fade-right">
              <img src="../../../../images/tt.jpeg" alt="hoffman" />
              {/* <img
                src={`${homePageData?.path}${homePageData?.pics?.hoffman}`}
                alt="hoffman"
              /> */}
            </div>
            <div className={styles.left_content} data-aos="slide-up">
              <h1 className={i18n.language === "ar" && "font_ar_subtitle2"}>
                {t("home-aboutdetails-leftcontent")}
              </h1>
            </div>
          </div>

          <div className={styles.heading} data-aos="fade-right">
            <h1 className={i18n.language === "ar" && "font_ar_head2"}>
              {t("home-aboutdetails-heading-one")}
            </h1>
            <h1
              className={`${styles.para} ${
                i18n.language === "ar" && "font_ar_head2"
              }`}
            >
              {t("home-aboutdetails-heading-two")}
            </h1>
          </div>
        </div>

        <div className={styles.container_two}>
          <img
            data-aos="fade-left"
            src="/images/websitee-01.png"
            alt="beans-text"
            className={i18n.language === "en" ? styles.beans : styles.beansAr}
          />
          <div className={styles.feature_container_two}>
            <div className={styles.right}>
              <h1
                className={`${styles.title} ${
                  i18n.language === "ar" && "font_ar_subtitle2"
                }`}
              >
                {t("home-aboutdetails-feature-one")}
              </h1>
            </div>
            <div className={styles.left}>
              <div className={styles.left_images}>
                <img
                  data-aos="fade-right"
                  src="../../../../images/xy.jpg"
                  alt="coffe-cake"
                />
                {/* <img
                src={`${homePageData?.path}${homePageData?.pics?.hoffman}`}
                alt="hoffman"
              /> */}

                {i18n.language === "en" ? (
                  <img
                    src="/images/websitee-02.png"
                    alt="about-cup"
                    className={styles.coffee_bg}
                  />
                ) : (
                  <img
                    src="/images/websitee-03.png"
                    alt="about-cup"
                    className={styles.coffee_bg}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutDetails
