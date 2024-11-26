import { useTranslation } from "react-i18next"
import styles from "./styles.module.scss"
import Input from "../Auth/Input/Input"
import { useState } from "react"
import notify from "../../hooks/notify/useNotification"

const JoinOurFamily = () => {
  const { t, i18n } = useTranslation()

  const [cvFileName, setCvFileName] = useState("")
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    dateOfBirth: "",
    gender: "",
    maritalStatus: "",
    nationality: "",

    country: "",
    city: "",
    district: "",
    mobile: "",
    school: "",

    workExperience: "",
    jobTitle: "",
    cv: null,
  })

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    setCvFileName(file?.name)
    setFormData({ ...formData, cv: file })
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const formDataToSend = new FormData()
    Object.keys(formData).forEach((key) => {
      formDataToSend.append(key, formData[key])
    })

    try {
      const response = await fetch(
        "https://nestrettocoffee.com/dashboard/api/careers/send",
        {
          method: "POST",
          body: formDataToSend,
        }
      )

      if (response.ok) {
        notify(
          i18n.language === "en"
            ? "Form submitted successfully!"
            : "تم إرسال بنجاح",
          "success"
        )

        setFormData({
          fullName: "",
          email: "",
          dateOfBirth: "",
          gender: "",
          maritalStatus: "",
          nationality: "",
          country: "",
          city: "",
          district: "",
          mobile: "",
          school: "",
          workExperience: "",
          jobTitle: "",
          additionalInfo: "",
          cv: null,
        })
        setCvFileName("")
      } else {
        notify(
          i18n.language === "en"
            ? "Failed to submit the form. Please try again."
            : "فشل في إرسال النموذج. حاول مرة أخرى.",
          "error"
        )
      }
    } catch (error) {
      notify(
        i18n.language === "en"
          ? "An error occurred. Please try again later."
          : "حدث خطأ. يرجى المحاولة لاحقًا.",
        "error"
      )
    }
  }

  return (
    <section
      className={`${styles.joinOurFamily} ${
        i18n.language === "ar" ? "font_ar" : ""
      }`}
    >
      <div className={styles.joinOurFamily__container}>
        <div className="pageTitle">{/* <h2>{t("careers-text-1")}</h2> */}</div>
      </div>
      <div className={styles.image}>
        <img
          src={process.env.PUBLIC_URL + "/images/join-our-family2.png"}
          alt="Join-Our-Family"
        />
      </div>
      <div className={styles.joinOurFamily__container}>
        <div className={styles.contactUsTxt}>
          {/* <h3 className={styles.title}>{t("careers-text-2")}</h3> */}
          <p className={styles.text}>{t("careers-text-3")}</p>
          <p className={styles.text}>{t("careers-text-4")}</p>
          <p className={styles.text}>{t("careers-text-5")}</p>
        </div>
        <form onSubmit={handleSubmit}>
          <h4 className={styles.smTitle}>{t("careers-text-6")}</h4>
          <div className={styles.wrapper}>
            <div className={styles.inpBox}>
              <Input
                name="fullName"
                inputType="text"
                placeHolder={t("careers-text-7")}
                required
                value={formData.fullName}
                onChange={handleChange}
              />
              <Input
                name="email"
                inputType="email"
                placeHolder={t("careers-text-8")}
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className={styles.inpBox}>
              <Input
                name="dateOfBirth"
                inputType="text"
                placeHolder={t("careers-text-9")}
                required
                value={formData.dateOfBirth}
                onChange={handleChange}
              />
              <Input
                name="gender"
                inputType="text"
                placeHolder={t("careers-text-10")}
                required
                value={formData.gender}
                onChange={handleChange}
              />
            </div>
            <div className={styles.inpBox}>
              <Input
                name="maritalStatus"
                inputType="text"
                placeHolder={t("careers-text-11")}
                required
                value={formData.maritalStatus}
                onChange={handleChange}
              />
              <Input
                name="nationality"
                inputType="text"
                placeHolder={t("careers-text-12")}
                required
                value={formData.nationality}
                onChange={handleChange}
              />
            </div>
            <div className={styles.inpBoxAsk}>
              <h5 className={styles.smTitle}>{t("careers-text-13")}</h5>
              <div className={styles.selectLive}>
                <div className={styles.select}>
                  <input
                    value="yes"
                    id="yes"
                    type="radio"
                    name="group"
                    checked={formData.group === "yes"}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="yes">{t("careers-text-14")}</label>
                </div>
                <div className={styles.select}>
                  <input
                    value="no"
                    id="no"
                    type="radio"
                    name="group"
                    checked={formData.group === "no"}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="no">{t("careers-text-15")}</label>
                </div>
              </div>
            </div>
            <div className={styles.inpBox}>
              <Input
                name="country"
                inputType="text"
                placeHolder={t("careers-text-16")}
                required
                value={formData.country}
                onChange={handleChange}
              />
              <Input
                name="city"
                inputType="text"
                placeHolder={t("careers-text-17")}
                required
                value={formData.city}
                onChange={handleChange}
              />
            </div>
            <div className={styles.inpBox}>
              <Input
                name="district"
                inputType="text"
                placeHolder={t("careers-text-18")}
                required
                value={formData.district}
                onChange={handleChange}
              />
              <Input
                name="mobile"
                inputType="text"
                placeHolder={t("careers-text-19")}
                required
                value={formData.mobile}
                onChange={handleChange}
              />
            </div>
            <div className={styles.inpBox}>
              <Input
                name="school"
                inputType="text"
                placeHolder={t("careers-text-20")}
                required
                value={formData.school}
                onChange={handleChange}
              />
            </div>
            <h4 className={styles.smTitle}>{t("careers-text-21")}</h4>
            <div className={styles.inpBox}>
              <Input
                name="workExperience"
                inputType="text"
                placeHolder={t("careers-text-21")}
                fullWidth={true}
                isTextArea={true}
                required
                value={formData.workExperience}
                onChange={handleChange}
              />
            </div>
            <div className={styles.inpBox}>
              <Input
                name="jobTitle"
                inputType="text"
                placeHolder={t("careers-text-22")}
                fullWidth={true}
                required
                value={formData.jobTitle}
                onChange={handleChange}
              />
            </div>
            <div className={styles.btns}>
              <div className={styles.cv}>
                <label htmlFor="upload" className={styles.uploadBtn}>
                  {t("careers-text-23")}
                </label>
                <input
                  id="upload"
                  type="file"
                  onChange={handleFileChange}
                  required
                />
                {cvFileName && (
                  <span className={styles.fileName}>{cvFileName}</span>
                )}
              </div>
              <button type="submit" className={styles.sendBtn}>
                {t("careers-text-24")}
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}

export default JoinOurFamily
