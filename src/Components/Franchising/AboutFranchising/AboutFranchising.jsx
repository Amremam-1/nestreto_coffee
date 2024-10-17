import { useTranslation } from "react-i18next"
import Input from "../../Auth/Input/Input"
import styles from "../PersonalInfo/styles.module.scss"
import AskYesNo from "../../Utils/AskYesNo/AskYesNo"
import Ask from "../../Utils/Ask/Ask"
import { FiUpload } from "react-icons/fi"
import useFranchising from "../../../hooks/franchising/useFranchising"
import { useState } from "react"
import { useFormikContext } from "formik"

const AboutFranchising = () => {
  const { t, i18n } = useTranslation()
  const { getFieldProps, handleFileChange } = useFranchising()

  const values = useFormikContext()

  const [fileName, setFileName] = useState("")

  const handleFileName = (e) => {
    const file = e.target.files[0]
    setFileName(file ? file.name : "")
    handleFileChange(e, values) // تأكد من أن values يتم تحديثها بشكل صحيح
  }
  const branchesToStartList = [
    {
      titleEn: "1",
      titleAr: "1",
    },
    {
      titleEn: "2",
      titleAr: "2",
    },
    {
      titleEn: "3",
      titleAr: "3",
    },
    {
      titleEn: "Furthermore",
      titleAr: "أكثر من ذلك",
    },
  ]

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
            name="franchiseReason"
            {...getFieldProps("franchiseReason", values)}
            inputType="text"
            label={t("franchise-franchiseReason")}
            placeHolder={t("franchise-franchiseReason")}
            bg="#FFFFFF"
            isTextArea={true}
            fullWidth={true}
          />
          <Ask
            title={t("franchise-branchesToStart")}
            name="branchesToStart"
            {...getFieldProps("branchesToStart", values)}
            list={branchesToStartList}
          />
          <AskYesNo
            name="expandPlans"
            {...getFieldProps("expandPlans", values)}
            title={t("franchise-expandPlans")}
          />
          <Input
            name="franchiseCity"
            inputType="text"
            {...getFieldProps("franchiseCity", values)}
            label={t("franchise-franchiseCity")}
            placeHolder={t("franchise-franchiseCity")}
            bg="#FFFFFF"
          />
          <Input
            name="suggestedLocation"
            inputType="text"
            {...getFieldProps("suggestedLocation", values)}
            label={t("franchise-suggestedLocation")}
            placeHolder={t("franchise-suggestedLocation")}
            bg="#FFFFFF"
            isTextArea={true}
            fullWidth={true}
          />
          <Input
            name="suggestions"
            inputType="text"
            {...getFieldProps("suggestions", values)}
            label={t("franchise-suggestions")}
            placeHolder={t("franchise-suggestions")}
            bg="#FFFFFF"
            isTextArea={true}
            fullWidth={true}
          />
          <div className={styles.uploadFiles}>
            <h3 className={styles.uploadTitle}>
              {t("franchise-upload1")}
              <br />
              {t("franchise-upload2")}
              <br />
              {t("franchise-upload3")}
              <br />
            </h3>
            <label className={styles.uploadBtn} htmlFor="uploadFile">
              <FiUpload />
              <span>{t("franchise-upload4")}</span>
            </label>
            <input
              name="file"
              onChange={(e) => handleFileName(e)}
              type="file"
              id="uploadFile"
              style={{ display: "none" }}
              required
            />
            <p>{fileName || t("upload-file")}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutFranchising
