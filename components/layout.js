//next
import Link from 'next/link';

//next
import Head from 'next/head';
//styles
import styles from './layout.module.css';

export default function Layout({ children, pageTitle }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>My blog | {pageTitle} </title>
      </Head>
      <h1>My Blog</h1>
      {children}
      <Link href="/">
        <a>Homeへ</a>
      </Link>
    </div>
  );
}
