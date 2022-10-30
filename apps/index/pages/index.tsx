import type { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['common'])),
    },
  };
};

import styles from './index.module.scss';
import { useTranslation } from 'next-i18next';
import Head from 'next/head';
import { Card } from '@dsrca/react';

function Home() {
  const { t } = useTranslation('common');

  return (
    <div className={styles.page}>
      <Head>
        <title>{t('name')}</title>
      </Head>
      <div className='card w-96'>
        <Card>{t('name')}</Card>
      </div>
    </div>
  );
}

export default Home;
