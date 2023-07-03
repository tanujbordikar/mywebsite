import Link from "next/link";
import { client } from "../lib/sanity";
import Layout from '@/components/Layout';
import '../../styles/main.css';

async function getData() {
  const query = `*[_type == "post"] | order(_createdAt desc)`;

  const data = await client.fetch(query);

  return data;
}

export default async function IndexPage() {
  const data = await getData();

  return (
    <Layout>
      <h1 className="container">
        All Blogs
      </h1>
      <br/>
      {/* <hr className="hr-line" /> */}

      <ul className="text-align-center">
        {data.map((post) => (
          <li key={post._id}>
            <div>
              {new Date(post._createdAt).toISOString().split("T")[0]}
            </div>
            <Link
              href={`/blogs/${post.slug.current}`}
              prefetch
              className="blogtext"
            >
              <div>
                <h3>
                  {post.title}
                </h3>
              </div>

              <p>
                {post.overview}
              </p>
              {/* <hr className="hr-line" /> */}
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}
