import Layout from "../components/MyLayout";
import Link from "next/link";

const Index = (props) => (
  <Layout>
    <h1>Contents</h1>
    <ul>
      <li>
        <Link href="/about">
          <a title="About">About</a>
        </Link>
      </li>
      <li>
        <Link href="/posts">
          <a title="Posts">Posts</a>
        </Link>
      </li>
    </ul>
  </Layout>
);

export default Index;
