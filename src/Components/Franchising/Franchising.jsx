import { useTranslation } from "react-i18next"
import AboutFranchising from "./AboutFranchising/AboutFranchising"
import FinancialCondition from "./FinancialCondition/FinancialCondition"
import JobInfo from "./JobInfo/JobInfo"
import PersonalInfo from "./PersonalInfo/PersonalInfo"
import styles from "./styles.module.scss"
import { useState } from "react"
import Stepper from "../Checkout/Stepper/Stepper"
import Summary from "./Summary/Summary"
import useFranchising from "../../hooks/franchising/useFranchising"
import { Formik, Form } from "formik"

const Franchising = () => {
  const { t, i18n } = useTranslation()

  const steps = [
    t("franchise-step-1"),
    t("franchise-step-2"),
    t("franchise-step-3"),
    t("franchise-step-4"),
  ]

  const [currentStep, setCurrentStep] = useState(1)
  const [complete, setComplete] = useState(false)

  const {
    initialValues,
    personalInfoSchema,
    financialConditionSchema,
    jobInfoSchema,
    aboutFranchisingSchema,
    onSubmitForm,
  } = useFranchising()

  // Determine the validation schema based on the current step
  const getValidationSchema = () => {
    switch (currentStep) {
      case 1:
        return personalInfoSchema
      case 2:
        return financialConditionSchema
      case 3:
        return jobInfoSchema
      case 4:
        return aboutFranchisingSchema
      default:
        return personalInfoSchema
    }
  }

  const prevHandler = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1)
    }
  }

  const nextHandler = async (validateForm) => {
    const errors = await validateForm()

    if (Object.keys(errors).length === 0) {
      if (currentStep < steps.length) {
        setCurrentStep((prev) => prev + 1)
      }
    } else {
      console.log("Validation Errors: ", errors)
    }
  }

  return (
    <section className={styles.franchising}>
      <div className={styles.franchising__container}>
        <div className={styles.head}>
          <h1 className={styles.mainTitle}>{t("franchise-head-text-1")}</h1>
          <p
            className={`${styles.text} ${
              i18n.language === "ar" && "font_franchise"
            }`}
          >
            {t("franchise-head-text-2")}
          </p>
          <p
            className={`${styles.text} ${
              i18n.language === "ar" && "font_franchise"
            }`}
          >
            {t("franchise-head-text-3")}
          </p>
          <h2 className={styles.title}>{t("franchise-head-text-4")}</h2>
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={getValidationSchema()} // Use dynamic validation schema
          validateOnBlur
          validateOnChange
          onSubmit={async (values) => {
            await onSubmitForm(values)
            setComplete(true)
          }}
        >
          {({ validateForm }) => (
            <Form>
              <Stepper
                steps={steps}
                currentStep={currentStep}
                complete={complete}
              />
              {currentStep === 1 && <PersonalInfo />}
              {currentStep === 2 && <FinancialCondition />}
              {currentStep === 3 && <JobInfo />}
              {currentStep === 4 && !complete ? <AboutFranchising /> : null}
              {complete && currentStep > 3 ? <Summary /> : null}
              {!complete && currentStep < 5 ? (
                <div className={styles.btns}>
                  <button
                    disabled={currentStep === 1}
                    className={styles.prevBtn}
                    onClick={prevHandler}
                    type="button"
                  >
                    {t("franchise-prevBtn")}
                  </button>
                  <button
                    disabled={currentStep > 3}
                    className={styles.nextBtn}
                    onClick={() => nextHandler(validateForm)}
                    type="button"
                  >
                    {t("franchise-nextBtn")}
                  </button>
                  <button
                    disabled={currentStep < 4}
                    className={styles.sendBtn}
                    type="submit"
                  >
                    {t("franchise-sentBtn")}
                  </button>
                </div>
              ) : null}
            </Form>
          )}
        </Formik>
      </div>
    </section>
  )
}

export default Franchising
