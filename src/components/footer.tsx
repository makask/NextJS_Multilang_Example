import { useTranslations } from 'next-intl'
import React from 'react'

export default function Footer() {
  const t = useTranslations('Footer');
  return (
    <div className='my-10 text-center'>
        <p>{t('copyright')}</p>
    </div>
  )
}
