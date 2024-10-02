import Layout from "../../components/Layout";
import Subtitle from "../../components/SubTitle";

export default function Index() {
    return (
        <Layout title={"About Me"}>
            <div className="flex w-1/2  mx-auto">
                <p className="text-xl pt-5 pl-5">
                    Hello 👋, I'm Coleman. I've been a software developer for a few years now, having just recently moved to New York City for work. Before that I was a swimmer from 5 years old until my graduation as a D1 swimmer. I like to camp, travel, boulder, screenwrite, brew beer, build some new things, and work on this website. 
                </p>
            </div>
            <div className="flex w-1/2  mx-auto">
                <p className="text-xl pt-5 pl-5">
                    At my core, I am a builder. This website is for writing, projects, tutorials, art, and anything else I want to put out here. I hope to gain encouragement in my projects and learning by sharing my thoughts. I hope others can learn a thing or two also.
                </p>
            </div>
            {/* <Subtitle title={"Reach Out!"}>
            </Subtitle>
            <div className="flex w-1/2  mx-auto">
                <p className="text-xl pt-5 pl-5 ul">
                    Email: manchester dot coleman at gmail
                </p>
            </div> */}
        </Layout>
    )
}
