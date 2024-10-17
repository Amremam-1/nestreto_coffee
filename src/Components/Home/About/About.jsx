import { useTranslation } from "react-i18next"
import styles from "./styles.module.scss"
import { useEffect } from "react"
// import NavigationDots from "../NavigationDots/NavigationDots";
import Aos from "aos"
import "aos/dist/aos.css"
import useGetHomePageData from "../../../hooks/pages/useGetHomePageData"

const About = () => {
  const { t, i18n } = useTranslation()

  const [homePageData] = useGetHomePageData()

  useEffect(() => {
    Aos.init({
      duration: 700,
      easing: "ease-in-sine",
      // delay: 100
    })
  }, [])
  // snap-y snap-mandatory w-screen h-screen overflow-x-hidden
  // snap-start h-screen w-screen flex
  return (
    <section className={`${styles.about}`}>
      <div className={`${styles.about__images}`}>
        <div
          className={`scrollSection lazyload ${styles.imageOne}`}
          style={{
            backgroundImage: `url(${homePageData?.path}${homePageData?.pics?.["1"]})`,
          }}
        >
          <div className={styles.imgBox} data-aos="fade-up">
            <div className={styles.content}>
              <div className={styles.imgTitle}>
                <p
                  className={`${styles.imgDesc} ${
                    i18n.language === "ar" && "font_ar_title"
                  }`}
                >
                  {t("home-about-img1Desc")}
                </p>

                <p className={i18n.language === "ar" && "font_ar_head"}>
                  {t("home-about-img1Title")}
                </p>
                <span
                  className={`${styles.data} ${
                    i18n.language === "ar" && "font_ar_subtitle_date"
                  }`}
                >
                  {t("home-about-data")}
                </span>
              </div>
            </div>
          </div>
        </div>

        <section
          className={`scrollSection lazyload  ${styles.elementor_section}`}
        >
          <div className={styles.text_center}>
            <h1 className={i18n.language === "ar" && "font_ar_head2"}>
              {t("home-about-img2Title2")}
            </h1>
          </div>
          <div className={styles.elementor_section_top}></div>

          <div
            className={
              i18n.language === "en" ? styles.image_tree : styles.image_tree_ar
            }
          >
            <img src="/images/websitee-01.png" alt="" />
          </div>

          <div className={styles.elementor_container}>
            <div className={styles.elementor_wrapper}>
              <div className={styles.elementor_image}>
                <img src="/images/uu.jpeg" alt="close" />
              </div>

              <div className={styles.elementor_text}>
                <div
                  className={
                    i18n.language === "en"
                      ? styles.text_image
                      : styles.text_image_ar
                  }
                >
                  {i18n.language === "en" ? (
                    <img src={"/images/websitee-02.png"} alt="coffee" />
                  ) : (
                    <img src={"/images/websitee-03.png"} alt="coffee" />
                  )}
                </div>

                <div className={styles.wrapper_features}>
                  <div className={styles.right}>
                    <p
                      className={
                        i18n.language === "en"
                          ? styles.paragraph
                          : "font_ar_subtitle2"
                      }
                    >
                      {t("home-about-img2Desc")}
                    </p>
                  </div>
                  <div
                    className={` ${
                      i18n.language === "en" ? styles.left : styles.left_ar
                    }`}
                  >
                    <img src="/images/websitee-04.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.elementor_section_bottom}></div>
        </section>
      </div>
    </section>
  )
}

export default About
