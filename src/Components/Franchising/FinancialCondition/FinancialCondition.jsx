import { useTranslation } from "react-i18next"
import styles from "../PersonalInfo/styles.module.scss"
import Input from "../../Auth/Input/Input"
import AskYesNo from "../../Utils/AskYesNo/AskYesNo"
import useFranchising from "../../../hooks/franchising/useFranchising"
import { useFormikContext } from "formik"

const FinancialCondition = () => {
  const { t, i18n } = useTranslation()

  const { getFieldProps } = useFranchising()
  const values = useFormikContext()

  return (
    <div className={styles.userInfo}>
      <div className={styles.container}>
        <h3
          className={`${styles.title} ${
            i18n.language === "ar" && "font_ar_subtitle2"
          }`}
        >
          {t("franchise-step-2")}
        </h3>
        <div
          className={`${styles.form} ${i18n.language === "ar" && "font_ar"}`}
        >
          <Input
            name="annualIncome"
            {...getFieldProps("annualIncome", values)}
            inputType="number"
            label={t("franchise-TotalAnnualIncome")}
            placeHolder={t("franchise-TotalAnnualIncome")}
            bg="#FFFFFF"
          />
          <Input
            name="bankAccountType"
            {...getFieldProps("bankAccountType", values)}
            inputType="text"
            label={t("franchise-bankAccountType")}
            placeHolder={t("franchise-bankAccountType")}
            bg="#FFFFFF"
          />
          <Input
            name="commercialActivity"
            {...getFieldProps("commercialActivity", values)}
            inputType="text"
            label={t("franchise-commercialActivity")}
            placeHolder={t("franchise-commercialActivity")}
            bg="#FFFFFF"
          />
          <Input
            name="expectedCapital"
            {...getFieldProps("expectedCapital", values)}
            inputType="text"
            label={t("franchise-expectedCapital")}
            placeHolder={t("franchise-expectedCapital")}
            bg="#FFFFFF"
          />
          <Input
            name="loan"
            {...getFieldProps("loan", values)}
            inputType="text"
            label={t("franchise-loan")}
            placeHolder={t("franchise-loan")}
            bg="#FFFFFF"
            isTextArea={true}
            fullWidth={true}
          />
          <AskYesNo
            name="manageBusiness"
            {...getFieldProps("manageBusiness", values)}
            title={t("franchise-manageBusiness")}
          />
          <AskYesNo
            name="havePartners"
            {...getFieldProps("havePartners", values)}
            title={t("franchise-havepartners")}
          />
        </div>
      </div>
    </div>
  )
}

export default FinancialCondition
