import { useTranslation } from "react-i18next"
import styles from "../PersonalInfo/styles.module.scss"
import Input from "../../Auth/Input/Input"
import useFranchising from "../../../hooks/franchising/useFranchising"
import { useFormikContext } from "formik"

const JobInfo = () => {
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
          {t("franchise-step-3")}
        </h3>
        <div
          className={`${styles.form} ${i18n.language === "ar" && "font_ar"}`}
        >
          <Input
            name="jobTitle"
            {...getFieldProps("jobTitle", values)}
            inputType="text"
            label={t("franchise-jobTitle")}
            placeHolder={t("franchise-jobTitle")}
            bg="#FFFFFF"
          />
          <Input
            name="employer"
            {...getFieldProps("employer", values)}
            inputType="text"
            label={t("franchise-employer")}
            placeHolder={t("franchise-employer")}
            bg="#FFFFFF"
          />
          <Input
            name="workAddress"
            {...getFieldProps("workAddress", values)}
            inputType="text"
            label={t("franchise-workAddress")}
            placeHolder={t("franchise-workAddress")}
            bg="#FFFFFF"
          />
          <Input
            name="joiningDate"
            {...getFieldProps("joiningDate", values)}
            inputType="date"
            label={t("franchise-joiningDate")}
            placeHolder={t("franchise-joiningDate")}
            bg="#FFFFFF"
          />
          <Input
            name="experience"
            {...getFieldProps("experience", values)}
            inputType="text"
            label={t("franchise-experience")}
            placeHolder={t("franchise-experience")}
            bg="#FFFFFF"
          />
          <Input
            name="companyEmail"
            {...getFieldProps("companyEmail", values)}
            inputType="email"
            label={t("franchise-companyEmail")}
            placeHolder={t("franchise-companyEmail")}
            bg="#FFFFFF"
          />
          <Input
            name="previousJobs"
            {...getFieldProps("previousJobs", values)}
            inputType="text"
            label={t("franchise-previousJobs")}
            placeHolder={t("franchise-previousJobs")}
            bg="#FFFFFF"
            isTextArea={true}
            fullWidth={true}
          />
        </div>
      </div>
    </div>
  )
}

export default JobInfo
