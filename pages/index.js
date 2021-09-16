//next
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

//styles
import styles from '../styles/Home.module.css';

//components
import Layout from '../components/layout';

export default function Home() {
  return (
    <Layout pageTitle="Home">
      <Link href="/about">
        <a>AboutPageへ</a>
      </Link>
    </Layout>
  );
}
