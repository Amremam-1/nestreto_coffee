// import { useTranslation } from "react-i18next"
// import styles from "./styles.module.scss"
// import Input from "../Auth/Input/Input"
// import { useState } from "react"

// const JoinOurFamily = () => {
//   const { t, i18n } = useTranslation()

//   const [cvFileName, setCvFileName] = useState("")

//   const handleFileChange = (e) => {
//     setCvFileName(e.target.files[0]?.name)
//   }
//   return (
//     <section className={styles.joinOurFamily}>
//       <div className={styles.joinOurFamily__container}>
//         <div className="pageTitle">
//           <h2>{t("careers-text-1")}</h2>
//         </div>
//       </div>
//       <div className={styles.image}>
//         <img
//           src={process.env.PUBLIC_URL + "/images/join-our-family2.png"}
//           alt="Join-Our-Family"
//         />
//       </div>
//       <div className={styles.joinOurFamily__container}>
//         <div className={styles.contactUsTxt}>
//           <h3 className={styles.title}>{t("careers-text-2")}</h3>
//           <p className={styles.text}>{t("careers-text-3")}</p>
//           <p className={styles.text}>{t("careers-text-4")}</p>
//           <p className={styles.text}>{t("careers-text-5")}</p>
//         </div>
//         <form>
//           <h4 className={styles.smTitle}>{t("careers-text-6")}</h4>
//           <div className={styles.wrapper}>
//             <div className={styles.inpBox}>
//               <Input
//                 name="fullName"
//                 inputType="text"
//                 placeHolder={t("careers-text-7")}
//               />
//               <Input
//                 name="email"
//                 inputType="email"
//                 placeHolder={t("careers-text-8")}
//               />
//             </div>
//             <div className={styles.inpBox}>
//               <Input
//                 name="dateOfBirth"
//                 inputType="text"
//                 placeHolder={t("careers-text-9")}
//               />
//               <Input
//                 name="gender"
//                 inputType="text"
//                 placeHolder={t("careers-text-10")}
//               />
//             </div>
//             <div className={styles.inpBox}>
//               <Input
//                 name="maritalStatus"
//                 inputType="text"
//                 placeHolder={t("careers-text-11")}
//               />
//               <Input
//                 name="nationality"
//                 inputType="text"
//                 placeHolder={t("careers-text-12")}
//               />
//             </div>
//             <div className={styles.inpBoxAsk}>
//               <h5 className={styles.smTitle}>{t("careers-text-13")}</h5>
//               <div className={styles.selectLive}>
//                 <div className={styles.select}>
//                   <input
//                     // onChange={changeMethod}
//                     value="doyoulive"
//                     id="yes"
//                     type="radio"
//                     name="group"
//                     checked
//                   />
//                   <label htmlFor="credit">{t("careers-text-14")}</label>
//                 </div>
//                 <div className={styles.select}>
//                   <input
//                     // onChange={changeMethod}
//                     value="doyoulive"
//                     id="no"
//                     type="radio"
//                     name="group"
//                     checked
//                   />
//                   <label htmlFor="credit">{t("careers-text-15")}</label>
//                 </div>
//               </div>
//             </div>
//             <div className={styles.inpBox}>
//               <Input
//                 name="country"
//                 inputType="text"
//                 placeHolder={t("careers-text-16")}
//               />
//               <Input
//                 name="city"
//                 inputType="text"
//                 placeHolder={t("careers-text-17")}
//               />
//             </div>
//             <div className={styles.inpBox}>
//               <Input
//                 name="district"
//                 inputType="text"
//                 placeHolder={t("careers-text-18")}
//               />
//               <Input
//                 name="mobile"
//                 inputType="text"
//                 placeHolder={t("careers-text-19")}
//               />
//             </div>
//             <div className={styles.inpBox}>
//               <Input
//                 name="school"
//                 inputType="text"
//                 placeHolder={t("careers-text-20")}
//               />
//             </div>
//             <h4 className={styles.smTitle}>{t("careers-text-21")}</h4>
//             <div className={styles.inpBox}>
//               <Input
//                 name="school"
//                 inputType="text"
//                 placeHolder={t("careers-text-21")}
//                 fullWidth={true}
//                 isTextArea={true}
//               />
//             </div>
//             <div className={styles.inpBox}>
//               <Input
//                 name="school"
//                 inputType="text"
//                 placeHolder={t("careers-text-22")}
//                 fullWidth={true}
//               />
//             </div>
//             <div className={styles.btns}>
//               <div className={styles.cv}>
//                 <label htmlFor="upload" className={styles.uploadBtn}>
//                   {t("careers-text-23")}
//                 </label>
//                 <input id="upload" type="file" onChange={handleFileChange} />
//                 {cvFileName && (
//                   <span className={styles.fileName}>{cvFileName}</span>
//                 )}
//               </div>
//               <button className={styles.sendBtn}>{t("careers-text-24")}</button>
//             </div>
//           </div>
//         </form>
//       </div>
//     </section>
//   )
// }

// export default JoinOurFamily

import { useTranslation } from "react-i18next"
import styles from "./styles.module.scss"
import Input from "../Auth/Input/Input"
import { useState } from "react"

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
    additionalInfo: "",
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
        "https://filterr.net/dashboard/api/careers/send",
        {
          method: "POST",
          body: formDataToSend,
        }
      )

      if (response.ok) {
        // Handle success (e.g., show a success message, clear the form)
        console.log("Form submitted successfully!")
      } else {
        // Handle error (e.g., show an error message)
        console.error("Error submitting form")
      }
    } catch (error) {
      console.error("Error:", error)
    }
  }

  return (
    <section
      className={`${styles.joinOurFamily} ${
        i18n.language === "ar" ? "font_ar" : ""
      }`}
    >
      <div className={styles.joinOurFamily__container}>
        <div className="pageTitle">
          {/* <h2>{t("careers-text-1")}</h2> */}
        </div>
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
                onChange={handleChange}
              />
              <Input
                name="email"
                inputType="email"
                placeHolder={t("careers-text-8")}
                required
                onChange={handleChange}
              />
            </div>
            <div className={styles.inpBox}>
              <Input
                name="dateOfBirth"
                inputType="text"
                placeHolder={t("careers-text-9")}
                required
                onChange={handleChange}
              />
              <Input
                name="gender"
                inputType="text"
                placeHolder={t("careers-text-10")}
                required
                onChange={handleChange}
              />
            </div>
            <div className={styles.inpBox}>
              <Input
                name="maritalStatus"
                inputType="text"
                placeHolder={t("careers-text-11")}
                required
                onChange={handleChange}
              />
              <Input
                name="nationality"
                inputType="text"
                placeHolder={t("careers-text-12")}
                required
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
                onChange={handleChange}
              />
              <Input
                name="city"
                inputType="text"
                placeHolder={t("careers-text-17")}
                required
                onChange={handleChange}
              />
            </div>
            <div className={styles.inpBox}>
              <Input
                name="district"
                inputType="text"
                placeHolder={t("careers-text-18")}
                required
                onChange={handleChange}
              />
              <Input
                name="mobile"
                inputType="text"
                placeHolder={t("careers-text-19")}
                required
                onChange={handleChange}
              />
            </div>
            <div className={styles.inpBox}>
              <Input
                name="school"
                inputType="text"
                placeHolder={t("careers-text-20")}
                required
                onChange={handleChange}
              />
            </div>
            <h4 className={styles.smTitle}>{t("careers-text-21")}</h4>
            <div className={styles.inpBox}>
              <Input
                name="additionalInfo"
                inputType="text"
                placeHolder={t("careers-text-21")}
                fullWidth={true}
                isTextArea={true}
                onChange={handleChange}
              />
            </div>
            <div className={styles.inpBox}>
              <Input
                name="additionalInfo"
                inputType="text"
                placeHolder={t("careers-text-22")}
                fullWidth={true}
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
