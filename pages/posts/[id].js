//components
import Layout from '../../components/layout';

//functions
import { getIds, getPostById } from '../../lib/posts';

export const getStaticProps = async ({ params }) => {
  return {
    props: {
      post: getPostById(params.id),
    },
  };
};

export const getStaticPaths = async () => {
  return {
    paths: getIds(),
    fallback: false,
  };
};

export default function Post({ post }) {
  console.log(post);
  return (
    <Layout>
      <h2>
        {post.title}
        <p>{post.content}</p>
      </h2>
    </Layout>
  );
}
