
import { useState } from "react"
import { useTranslation } from "react-i18next"
import styles from "./styles.module.scss"

const ComplaintForm = () => {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    branch: "",
    complaint: "",
    upload: null, // Store the file object
  })

  const [isLoading, setIsLoading] = useState(false)
  const [imagePreview, setImagePreview] = useState(null)

  const handleChange = (e) => {
    const { name, value, files } = e.target

    if (name === "upload" && files.length > 0) {
      const file = files[0]
      setFormData({
        ...formData,
        [name]: file,
      })
      setImagePreview(URL.createObjectURL(file)) // Set image preview
    } else {
      setFormData({
        ...formData,
        [name]: value,
      })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    const formDataToSend = new FormData()
    formDataToSend.append("fullName", formData.fullName)
    formDataToSend.append("phone", formData.phone)
    formDataToSend.append("branch", formData.branch)
    formDataToSend.append("complaint", formData.complaint)
    formDataToSend.append("upload", formData.upload) // Append the file

    try {
      const response = await fetch(
        "https://nestrettocoffee.com/dashboard/api/corporate/send",
        {
          method: "POST",
          body: formDataToSend,
        }
      )
      const data = await response.json()
      console.log("Complaint submitted successfully:", data)
    } catch (error) {
      console.error("There was an error submitting the complaint:", error)
    }

    setIsLoading(false)
  }

  return (
    <div className={styles.formContainer}>
      <h1 className={styles.formTitle}>{t("submit_your_complaint")}</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="fullName" className={styles.formLabel}>
            {t("full_name")} *
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className={styles.formInput}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="phone" className={styles.formLabel}>
            {t("phone_number")} *
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={styles.formInput}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="branch" className={styles.formLabel}>
            {t("branch")} *
          </label>
          <input
            type="text"
            id="branch"
            name="branch"
            value={formData.branch}
            onChange={handleChange}
            className={styles.formInput}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="complaint" className={styles.formLabel}>
            {t("complaint_description")} *
          </label>
          <textarea
            id="complaint"
            name="complaint"
            value={formData.complaint}
            onChange={handleChange}
            className={styles.formTextarea}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="upload" className={styles.formLabel}>
            {t("attach_image")} *
          </label>
          <input
            id="upload"
            type="file"
            name="upload"
            onChange={handleChange}
            className={styles.formInput}
            style={{ display: "none" }} // Hide the default file input
          />
          <label htmlFor="upload" className={styles.customFileUpload}>
            {formData.upload ? formData.upload.name : t("choose_file")}
          </label>
          {imagePreview && (
            <img
              src={imagePreview}
              alt="Uploaded Image Preview"
              className={styles.imagePreview}
            />
          )}
        </div>
        <button
          type="submit"
          className={styles.formButton}
          disabled={isLoading}
        >
          {isLoading ? t("loading") : t("submit")}
        </button>
      </form>
    </div>
  )
}

export default ComplaintForm
