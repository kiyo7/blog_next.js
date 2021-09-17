//next
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

//functions
import { getPosts } from '../lib/posts';

//styles
import styles from '../styles/Home.module.css';

//components
import Layout from '../components/layout';

export const getStaticProps = async () => {
  return {
    props: {
      posts: getPosts(),
    },
  };
};

export default function Home({ posts }) {
  return (
    <Layout pageTitle="Home">
      <Link href="/about">
        <a>AboutPageへ</a>
      </Link>
      <ul>
        {posts.map((post, i) => {
          return (
            <Link href="#" key={i}>
              {post.title}
            </Link>
          );
        })}
      </ul>
    </Layout>
  );
}
