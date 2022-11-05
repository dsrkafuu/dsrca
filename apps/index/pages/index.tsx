import styles from './index.module.scss';
import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import { Button, Card } from '@dsrca/react';
import {
  FaBlog,
  FaCompactDisc,
  FaGithub,
  FaSteam,
  FaTwitter,
} from 'react-icons/fa';
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
          <div className={styles.metadata}>
            <h1 className={styles.name}>DSRKafuU</h1>
            <span className={styles.bio}>Internet for people, not profit</span>
            <div className={styles.links}>
              <Button
                icon={<FaBlog />}
                href='https://blog.dsrkafuu.net/'
                target='_blank'
              />
              <Button
                icon={<FaGithub />}
                href='https://github.com/dsrkafuu'
                target='_blank'
              />
              <Button
                icon={<FaTwitter />}
                href='https://twitter.com/dsrkafuu'
                target='_blank'
              />
              <Button
                icon={<FaCompactDisc />}
                href='https://bgm.tv/user/amzrk2'
                target='_blank'
              />
              <Button
                icon={<FaSteam />}
                href='https://steamcommunity.com/id/dsrkafuu/'
                target='_blank'
              />
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default Home;
