import { useTranslation } from "react-i18next"
import useGetSetting from "../../../hooks/setting/useGetSetting"
import styles from "./styles.module.scss"
import { FaLinkedinIn, FaInstagram, FaTiktok } from "react-icons/fa6"

const Footer = () => {
  const { t, i18n } = useTranslation()
  // const [
  //   settingData,
  //   email,
  //   mobile,
  //   website_name,
  //   facebook_link,
  //   instgram_link,
  //   twitter_link,
  //   address,
  //   whatsapp,
  //   android_link,
  //   ios_link,
  //   policy,
  //   cities
  // ] = useGetSetting();

  const visa = [
    {
      id: "1",
      img: "/images/Mada_Logo.svg",
    },
    {
      id: "2",
      img: "/images/Mastercard-logo.svg",
    },
    {
      id: "3",
      img: "images/Apple_pay.svg",
    },
    {
      id: "4",
      img: "/images/Visa._logo.svg",
    },
  ]

  return (
    <section className={styles.main}>
      <footer className={styles.footer}>
        <div className={styles.footer__container}>
          <div className={styles.top}>
            <div className={styles.payMethods}>
              <p
                className={`${styles.text} ${
                  i18n.language === "ar" && "font_ar_subtitle2"
                }`}
              >
                {t("home-footer-payMethods")}
              </p>
              <div className={styles.imgs}>
                {visa.map((item) => (
                  <a key={item.id} href="/">
                    <img
                      src={`${process.env.PUBLIC_URL} ${item.img}`}
                      alt=""
                      className={item.id === "1" && styles.small}
                    />
                  </a>
                ))}
              </div>
            </div>
            <div className={styles.contactus}>
              <p className={styles.text}>{t("home-footer-contactUsOn")}</p>
              <a href="tel:+966 8007550022" title="+966 8007550022">
                8007550022
              </a>
            </div>

            <div className={styles.contactus}>
              <p className={styles.text}>{t("home-footer-contactUsOnemail")}</p>
              <a
                href="tel:info@nestrettocoffee.com"
                title="info@nestrettocoffee.com"
              >
                info@nestrettocoffee.com
              </a>
            </div>
          </div>
          <div className={styles.bottom}>
            <div className={styles.links}>
              <div className={styles.copyrights}>
                <p>{t("home-footer-copyrights")}</p>
              </div>
              <ul className={styles.linksList}>
                <li className={styles.item}>
                  <a
                    href="/sitemap"
                    className={`${
                      i18n.language === "ar" && "font_ar_subtitle3"
                    }`}
                  >
                    {t("home-footer-siteMap")}
                  </a>
                </li>
                <li className={styles.item}>
                  <a
                    href="/termsConditions"
                    className={`${
                      i18n.language === "ar" && "font_ar_subtitle3"
                    }`}
                  >
                    {t("home-footer-terms")}
                  </a>
                </li>
                <li className={styles.item}>
                  <a
                    href="/political"
                    className={`${
                      i18n.language === "ar" && "font_ar_subtitle3"
                    }`}
                  >
                    {t("home-footer-political")}
                  </a>
                </li>
                <li className={styles.item}>
                  <a
                    href="/faqs"
                    className={`${
                      i18n.language === "ar" && "font_ar_subtitle3"
                    }`}
                  >
                    {t("home-footer-faq")}
                  </a>
                </li>
                <li className={styles.item}>
                  <a
                    href="/contact-us"
                    className={`${
                      i18n.language === "ar" && "font_ar_subtitle3"
                    }`}
                  >
                    {t("home-footer-contactUs")}
                  </a>
                </li>
                <li className={styles.item}>
                  <a
                    href="/corporate-login"
                    className={`${
                      i18n.language === "ar" && "font_ar_subtitle3"
                    }`}
                  >
                    {t("home-footer-corporateLogin")}
                  </a>
                </li>
              </ul>
            </div>
            <ul className={styles.socialList}>
              <li className={styles.socialList__item}>
                <a
                  href="https://instagram.com/nestrettocoffee.sa?igshid=OGQ5ZDc2ODk2ZA=="
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaInstagram />
                </a>
              </li>
              <li className={styles.socialList__item}>
                <a
                  href="https://www.tiktok.com/@nestrettocoffeeksa?is_from_webapp=1&sender_device=pc"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaTiktok />
                </a>
              </li>
              <li className={styles.socialList__item}>
                <a href="https://www.linkedin.com/company/nestretto-coffe?originalSubdomain=sa" target="_blank">
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </section>
  )
}

export default Footer
