"use client"
import { useTranslations } from "next-intl"
import Link from "next/link";
import { useLocale } from "use-intl";

export default function Home() {

  const t = useTranslations('IndexPage');
  const n = useTranslations('Navigation');
  const localActive = useLocale();

  return (
    <div>
      <h1 className="text-4xl mb-4 font-semibold">{t('title')}</h1>
      <p>{t('description')}</p>
      <Link href={`/${localActive}/${n('test')}`}>To TestPage</Link>
    </div>
  )
}

