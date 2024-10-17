import { useEffect, useState } from "react"
import { FiHeart, FiShoppingCart } from "react-icons/fi"
import { GoPerson } from "react-icons/go"
import styles from "./styles.module.scss"
import { useTranslation } from "react-i18next"
import useLogout from "../../../hooks/auth/useLogout"
import Cookies from "js-cookie"
import Popup from "../../Utils/Popup/Popup"
import useLogin from "../../../hooks/auth/useLogin"
import useGetCartItems from "../../../hooks/cart/useGetCartItems"
import { ToastContainer } from "react-toastify"

const HeaderIcons = ({ customHeader }) => {
  const { t, i18n } = useTranslation()
  const apiToken = Cookies.get("api_token")
  const [, , , , , , , , , , isLoggedIn] = useLogin()

  const [logOutHandler, errMsgPopUp, successMsgPopUp] = useLogout()
  const [
    productsInCartArray,
    cartItemsData,
    cartLength,
    isCartEmpty,
    cartEmptyMsg,
    shippingAddress,
    city,
    isLoadingCart,
    errorCart,
  ] = useGetCartItems()

  const [lang, setLang] = useState("AR")

  const [showLangMenu, setShowLangMenu] = useState(false)
  const [showAccountMenu, setShowAccountMenu] = useState(false)

  /*             Adding isUserLoggedIn to track Google login                        */
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)

  useEffect(() => {
    const storedEmail = localStorage.getItem("email")
    if (storedEmail) {
      setIsUserLoggedIn(true)
    }
  }, [])

  /*                    ****************************                      */

  const showAccountMenuHandler = () => {
    setShowAccountMenu(!showAccountMenu)
    setShowLangMenu(false)
  }

  const chooseLangHandler = (selectedLang) => {
    setLang(selectedLang)
    i18n.changeLanguage(selectedLang)
    localStorage.setItem("lang", selectedLang)
    // Cookies.set("lang", selectedLang)
    setShowLangMenu(false)
  }

  const showLangHandler = () => {
    setShowLangMenu(!showLangMenu)
    setShowAccountMenu(false)
  }

  useEffect(() => {
    const currentLang = localStorage.getItem("i18nextLng")
    if (currentLang === "en" || currentLang === "ar") {
      setLang(currentLang)
    } else {
      setLang("ar")
      localStorage.setItem("i18nextLng", "ar")
    }
  }, [lang])

  return (
    <div className={`${customHeader ? styles.iconsCustom : styles.icons} `}>
      <a href="/cart" className={styles.cart}>
        <FiShoppingCart />
        {apiToken ? (
          <span className={styles.itemsNum}>{cartLength}</span>
        ) : (
          <span className={styles.itemsNum}>0</span>
        )}
      </a>
      {apiToken ? (
        <a href="/store/account/wishlist" className={styles.wishlist}>
          <FiHeart />
        </a>
      ) : null}
      <div className={styles.account}>
        <GoPerson onClick={showAccountMenuHandler} />
        {showAccountMenu ? (
          <ul
            className={`${
              i18n.language === "en" ? styles.accountMenu : styles.accountMenuAr
            } ${i18n.language === "ar" ? "font_ar" : ""}`}
          >
            {apiToken || isUserLoggedIn ? (
              <>
                <li
                  className={styles.accountMenu__item}
                  onClick={() => setShowAccountMenu(false)}
                >
                  <a
                    className={styles.link}
                    href={process.env.PUBLIC_URL + "/store/account"}
                  >
                    {t("home-header-accountSettings")}
                  </a>
                </li>
                <li
                  className={styles.accountMenu__item}
                  onClick={() => setShowAccountMenu(false)}
                >
                  <a
                    className={styles.link}
                    href={process.env.PUBLIC_URL + "/store/account/orders"}
                  >
                    {t("home-header-myOrders")}
                  </a>
                </li>
                <li
                  className={styles.accountMenu__item}
                  onClick={() => setShowAccountMenu(false)}
                >
                  <a
                    className={styles.link}
                    href={process.env.PUBLIC_URL + "/track-order"}
                  >
                    {t("home-header-trackOrder")}
                  </a>
                </li>
                <li
                  className={styles.accountMenu__item}
                  onClick={() => {
                    setShowAccountMenu(false)
                    logOutHandler()
                  }}
                >
                  <button className={styles.link}>
                    {t("home-header-logout")}
                  </button>
                </li>
              </>
            ) : (
              <>
                <li
                  className={styles.accountMenu__item}
                  onClick={() => setShowAccountMenu(false)}
                >
                  <a
                    className={styles.link}
                    href={process.env.PUBLIC_URL + "/login"}
                  >
                    {t("home-header-login")}
                  </a>
                </li>
                <li
                  className={styles.accountMenu__item}
                  onClick={() => setShowAccountMenu(false)}
                >
                  <a
                    className={styles.link}
                    href={process.env.PUBLIC_URL + "/register"}
                  >
                    {t("home-header-register")}
                  </a>
                </li>
                <li
                  className={styles.accountMenu__item}
                  onClick={() => setShowAccountMenu(false)}
                >
                  <a
                    className={styles.link}
                    href={process.env.PUBLIC_URL + "/track-order"}
                  >
                    {t("home-header-trackOrder")}
                  </a>
                </li>
              </>
            )}
          </ul>
        ) : null}
      </div>
      <div className={styles.langBox}>
        <span onClick={showLangHandler} className={styles.selectedLang}>
          {lang}
        </span>
        {showLangMenu ? (
          <ul className={styles.selectLangList}>
            <li className={styles.item} onClick={() => chooseLangHandler("ar")}>
              AR
            </li>
            <li className={styles.item} onClick={() => chooseLangHandler("en")}>
              EN
            </li>
          </ul>
        ) : null}
      </div>
      {/* <div className={styles.langBox}>
        <select onChange={(e) => i18n.changeLanguage(e.target.value)} className={styles.selectLang}>
          <option value="ar" defaultChecked>AR</option>
          <option value="en">EN</option>
        </select>
      </div> */}
      <ToastContainer
        position={i18n.dir() === "rtl" ? "bottom-left" : "bottom-right"}
        autoClose={2000}
        limit={1}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={i18n.dir() === "rtl"}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  )
}

export default HeaderIcons
