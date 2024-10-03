import Layout from "../../components/Layout";
import Test from "./test.md"

export default function Index() {
    return (
        <Layout>
            <article className="prose prose-h2:text-5xl">
                <Test/>
            </article>
        </Layout>
    )
}
