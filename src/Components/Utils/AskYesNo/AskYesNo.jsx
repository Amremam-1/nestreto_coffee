import { useTranslation } from "react-i18next"
import styles from "./styles.module.scss"

const AskYesNo = ({ title, name, value, onChange, onBlur }) => {
  const { t, i18n } = useTranslation()

  const yesValue = i18n.language === "ar" ? "نعم" : "true"
  const noValue = i18n.language === "ar" ? "لا" : "false"

  return (
    <div className={styles.ask}>
      <label
        className={`${styles.title} ${i18n.language === "ar" && "font_ar_sm"}`}
      >
        {title}
      </label>
      <div className={styles.answers}>
        <div className={styles.ans}>
          <input
            className={styles.radioInput}
            name={name}
            id={`${name}-yes`}
            type="radio"
            value={yesValue}
            checked={value === yesValue}
            onChange={onChange}
            onBlur={onBlur}
          />
          <label className={styles.radioLabel} htmlFor={`${name}-yes`}>
            {t("yes")}
          </label>
        </div>
        <div className={styles.ans}>
          <input
            className={styles.radioInput}
            name={name}
            id={`${name}-no`}
            type="radio"
            value={noValue}
            checked={value === noValue}
            onChange={onChange}
            onBlur={onBlur}
          />
          <label className={styles.radioLabel} htmlFor={`${name}-no`}>
            {t("no")}
          </label>
        </div>
      </div>
    </div>
  )
}

export default AskYesNo
