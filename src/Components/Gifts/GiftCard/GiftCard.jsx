

import { useNavigate } from "react-router-dom"
import styles from "./styles.module.scss"

const GiftCard = ({ giftImage, giftId }) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/gift/${giftId}`, { state: { giftImage } })
  }

  return (
    <li className={styles.giftCard} onClick={handleClick}>
      <div className={styles.image}>
        <img src={`${process.env.PUBLIC_URL}${giftImage}`} alt="Gift-Card" />
      </div>
    </li>
  )
}

export default GiftCard
