import axios from 'axios';
import {GetStaticProps} from 'next';
import Head from 'next/head';

type BlogType = {
  id: string;
  title: string;
};

export const getStaticProps: GetStaticProps = async () => {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/posts',
  );

  const blogs = (await response.data) as BlogType[];

  return {
    props: {
      blogs,
    },
  };
};

const Index: React.FC<{blogs: BlogType[]}> = ({blogs}) => {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {blogs.map((blog) => (
        <li key={blog.id}>{blog.title}</li>
      ))}
    </div>
  );
};

export default Index;
