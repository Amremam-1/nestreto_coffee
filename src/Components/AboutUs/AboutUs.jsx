import { useTranslation } from "react-i18next"
import styles from "./styles.module.scss"

const AboutUs = () => {
  const { t, i18n } = useTranslation()

  return (
    <section className={styles.aboutus}>
      <div className={styles.aboutus__container}>
        <div className={styles.storyRoleBg}>
          <div className="pageTitle">
            <h2 className={i18n.language === "ar" && "font_ar_head2"}>
              {t("aboutUs-title")}
            </h2>
          </div>
          <div
            className={i18n.dir() === "rtl" ? styles.secImgAr : styles.secImg}
          >
            <img
              src={process.env.PUBLIC_URL + "/images/about/3.png"}
              alt="Hand"
            />
          </div>
          <div className={styles.story}>
            <div
              className={
                i18n.dir() === "rtl" ? styles.sideImageAr : styles.sideImage
              }
            >
              <img
                src={process.env.PUBLIC_URL + "/images/aboutus-hand.png"}
                alt="Hand"
              />
            </div>
            <div
              className={
                i18n.dir() === "rtl" ? styles.imageBgAr : styles.imageBg
              }
            >
              <h3>
                <span className={i18n.language === "ar" && "font_ar_title"}>
                  {t("aboutUs-storyTitle1")}
                </span>
                <br />
                <span className={i18n.language === "ar" && "font_ar_title"}>
                  {t("aboutUs-storyTitle2")}
                </span>
              </h3>
            </div>
            <div className={styles.text}>
              <p className={i18n.language === "ar" && "font_ar_subtitle2"}>
                {t("aboutUs-storyTxt")}
              </p>
            </div>
          </div>

          <div className={styles.role}>
            <div
              className={
                i18n.dir() === "rtl" ? styles.roleImgAr : styles.roleImg
              }
            >
              <img
                src={process.env.PUBLIC_URL + "/images/beans-hold.png"}
                alt="Hand"
              />
            </div>
            <div
              className={
                i18n.dir() === "rtl" ? styles.beansTxtAr : styles.beansTxt
              }
            >
              {i18n.dir() === "rtl" ? (
                <img
                  src={process.env.PUBLIC_URL + "/images/beans-textAr.png"}
                  alt="Hand"
                />
              ) : (
                <img
                  src={process.env.PUBLIC_URL + "/images/beans-text.png"}
                  alt="Hand"
                />
              )}
            </div>
            <div className={styles.roleTxt}>
              <div className={styles.contentBox}>
                <h3 className={i18n.language === "ar" && "font_ar_title"}>
                  {t("aboutUs-roleTitle")}
                </h3>
                <p className={i18n.language === "ar" && "font_ar_subtitle2"}>
                  {t("aboutUs-roleTxt1")}
                </p>
                <p className={i18n.language === "ar" && "font_ar_subtitle2"}>
                  {t("aboutUs-roleTxt2")}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.sip}>
          <div
            className={i18n.dir() === "rtl" ? styles.textbgAr : styles.textbg}
          >
            {i18n.dir() === "rtl" ? (
              <img
                src={process.env.PUBLIC_URL + "/images/textbgAr.png"}
                alt="Hand"
              />
            ) : (
              <img
                src={process.env.PUBLIC_URL + "/images/textbg.png"}
                alt="Hand"
              />
            )}
          </div>
          <div
            className={i18n.dir() === "rtl" ? styles.bgLineAr : styles.bgLine}
          >
            <img
              src={process.env.PUBLIC_URL + "/images/about/4.png"}
              alt="Hand"
            />
          </div>
          <div
            className={
              i18n.dir() === "rtl" ? styles.bgLineTextAr : styles.bgLineText
            }
          >
            {i18n.dir() === "rtl" ? (
              <img
                src={process.env.PUBLIC_URL + "/images/about/2_rtl.png"}
                alt="Hand"
              />
            ) : (
              <img
                src={process.env.PUBLIC_URL + "/images/about/2.png"}
                alt="Hand"
              />
            )}
          </div>
          <div className={`${styles.sipBox} ${styles.sipBoxLeft}`}>
            <h3
              className={`${styles.title} ${
                i18n.language === "ar" && "font_ar_title"
              }`}
            >
              {t("aboutUs-sip-title1")}
            </h3>
            <p
              className={`${styles.text} ${
                i18n.language === "ar" && "font_ar_subtitle2"
              }`}
            >
              {t("aboutUs-sip-text1")}
            </p>
          </div>
          <div className={`${styles.sipBox} ${styles.sipBoxRight}`}>
            <h3
              className={`${styles.title} ${
                i18n.language === "ar" && "font_ar_title"
              }`}
            >
              {t("aboutUs-sip-title2")}
            </h3>
            <p
              className={`${styles.text} ${
                i18n.language === "ar" && "font_ar_subtitle2"
              }`}
            >
              {t("aboutUs-sip-text2")}
            </p>
          </div>
        </div>
        <div className={styles.leads}>
          <div className={styles.secTitle}>
            <h3 className={i18n.language === "ar" && "font_ar_title"}>
              <span>{t("aboutUs-leads-secTitle1")}</span>
              <br />
              <span>{t("aboutUs-leads-secTitle2")}</span>
            </h3>
          </div>
          <div className={styles.leadsWrapper}>
            <div
              className={
                i18n.dir() === "rtl" ? styles.bgImageAr : styles.bgImage
              }
            >
              <img
                src={process.env.PUBLIC_URL + "/images/aboutus-bg2.png"}
                alt="cup"
              />
            </div>
            <div className={styles.content}>
              <div className={styles.leadsBox}>
                <h4
                  className={`${styles.title} ${
                    i18n.language === "ar" && "font_ar_title"
                  }`}
                >
                  {t("aboutUs-leads-title1")}
                </h4>
                <p
                  className={`${styles.text} ${
                    i18n.language === "ar" && "font_ar_subtitle2"
                  }`}
                >
                  {t("aboutUs-leads-text1")}
                </p>
              </div>
              <div className={styles.leadsBox}>
                <h4
                  className={`${styles.title} ${
                    i18n.language === "ar" && "font_ar_title"
                  }`}
                >
                  {t("aboutUs-leads-title2")}
                </h4>
                <p
                  className={`${styles.text} ${
                    i18n.language === "ar" && "font_ar_subtitle2"
                  }`}
                >
                  {t("aboutUs-leads-text2")}
                </p>
              </div>
            </div>
          </div>
          <div className={styles.image}>
            <img
              src={process.env.PUBLIC_URL + "/images/aboutus-cup.png"}
              alt="cup"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
