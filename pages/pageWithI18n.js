import React from 'react'
import { useTranslation } from 'react-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const PageWithI18n = () => {
  const { t } = useTranslation()
  return <h1>{t('home.hello')}</h1>
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
})

PageWithI18n.propTypes = {}

export default PageWithI18n
