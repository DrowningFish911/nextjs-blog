import Layout from "./Layout";

export default function Post({ postData }) {
    return (
      <Layout title={postData.title}>
        {postData.title}
        <br />
        {postData.id}
        <br />
        {postData.date}
      </Layout>
    );
  }