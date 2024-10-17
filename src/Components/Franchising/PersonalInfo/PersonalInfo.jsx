import { useTranslation } from "react-i18next"
import styles from "./styles.module.scss"
import Input from "../../Auth/Input/Input"
import useFranchising from "../../../hooks/franchising/useFranchising"
import { useFormikContext } from "formik"

const PersonalInfo = () => {
  const { t, i18n } = useTranslation()

  const form = useFormikContext()

  console.log({ form })
  const { getFieldProps } = useFranchising()

  return (
    <div className={styles.userInfo}>
      <div className={styles.container}>
        <h3
          className={`${styles.title} ${
            i18n.language === "ar" && "font_ar_subtitle2"
          }`}
        >
          {t("franchise-step-1")}
        </h3>
        <div
          className={`${styles.form} ${
            i18n.language === "ar" && "font_ar"
          }`}
        >
          <Input
            name="fullName"
            inputType="text"
            label={t("franchise-fullName")}
            placeHolder={t("franchise-fullName")}
            bg="#FFFFFF"
            onChange={form.handleChange}
          />
          <Input
            name="IDNumber"
            {...getFieldProps("IDNumber", form)}
            inputType="text"
            label={t("franchise-IDNumber")}
            placeHolder={t("franchise-IDNumber")}
            bg="#FFFFFF"
          />
          <Input
            name="nationality"
            {...getFieldProps("nationality", form)}
            inputType="text"
            label={t("franchise-nationality")}
            placeHolder={t("franchise-nationality")}
            bg="#FFFFFF"
          />
          <Input
            name="dateOfBirth"
            {...getFieldProps("dateOfBirth", form)}
            inputType="date"
            label={t("franchise-dateOfBirth")}
            placeHolder={t("franchise-dateOfBirth")}
            bg="#FFFFFF"
          />
          <Input
            name="educQualification"
            {...getFieldProps("educQualification", form)}
            inputType="text"
            label={t("franchise-educQualification")}
            placeHolder={t("franchise-educQualification")}
            bg="#FFFFFF"
          />
          <Input
            name="mobileNumber"
            {...getFieldProps("mobileNumber", form)}
            inputType="text"
            label={t("franchise-mobileNumber")}
            placeHolder={t("franchise-mobileNumber")}
            bg="#FFFFFF"
          />
          <Input
            name="email"
            {...getFieldProps("email", form)}
            inputType="email"
            label={t("franchise-email")}
            placeHolder={t("franchise-email")}
            bg="#FFFFFF"
          />
          <Input
            name="phoneNumber"
            {...getFieldProps("phoneNumber", form)}
            inputType="text"
            label={t("franchise-phoneNumber")}
            placeHolder={t("franchise-phoneNumber")}
            bg="#FFFFFF"
          />
          <Input
            name="address"
            {...getFieldProps("address", form)}
            inputType="text"
            label={t("franchise-address")}
            placeHolder={t("franchise-address")}
            bg="#FFFFFF"
          />
        </div>
      </div>
    </div>
  )
}

export default PersonalInfo
