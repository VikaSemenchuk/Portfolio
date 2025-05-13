import { useTranslation } from "react-i18next"

const CareerPath = () => {
  const {t} = useTranslation()
  return (
    <h1>
      {t('path-to-it-page')}
    </h1>
  )
}

export default CareerPath
