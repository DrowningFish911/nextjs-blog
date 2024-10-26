import Layout from "../../components/Layout";
import { getSortedPostsData } from '../../lib/posts/utils';
import PostLink from "../../components/PostLink"
import SubTitle from "../../components/SubTitle"; 
import Divider from "../../components/Divider";


export default function Index(props) {
    return (
        <Layout title="Articles">
          <p className="w-1/2 mx-auto text-xl pl-5 pt-5">
            A Place To Share My Thoughts on Hobbies Outside of Tech
          </p>
          <div className="divider w-1/2 mx-auto"></div>
          <ul className="w-1/2 mx-auto pl-5">
            {props.allPostsData.map(({ id, date, title }) => (
              <PostLink title={title} id={id}  date={date} blogType="articles"></PostLink>
            ))}
          </ul>
        </Layout>
    )
}


export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}