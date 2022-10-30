import styles from './index.module.scss';
import Head from 'next/head';
import Image from 'next/image';
import { Card } from '@dsrca/react';
import avatarImage from '../assets/dsrkafuu_1280p.jpg';

function Home() {
  return (
    <div className={styles.page}>
      <Head>
        <title>DSRKafuU</title>
      </Head>
      <Card>
        <div className={styles.content}>
          <div className={styles.avatar}>
            <Image
              className={styles.image}
              width={128}
              height={128}
              src={avatarImage}
              alt='Avatar'
              priority
            />
          </div>
          <div>
            <div>DSRKafuU</div>
            <div></div>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default Home;
