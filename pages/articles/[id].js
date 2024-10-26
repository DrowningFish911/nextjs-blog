import { getPostIds, getPostData } from '../../lib/posts/utils'
import PostLayout from '../../components/PostLayout';

export default function Index(props) {
  
    return (
        <PostLayout title={props.postData.title} subtitle="This blog will go over">

        </PostLayout>
    )
}

export async function getStaticProps({ params }) {
    const postData = getPostData(params.id);
    return {
      props: {
        postData,
      },
    };
  }

export async function getStaticPaths() {
    const paths = getPostIds();
    return {
      paths,
      fallback: false,
    };
  }