import Link from "next/link";
import { client } from "../lib/sanity";
import Layout from '@/components/Layout';
import '../../styles/main.css';

async function getData() {
  const query = `*[_type == "post"]`;

  const data = await client.fetch(query);

  return data;
}

export default async function IndexPage() {
  const data = await getData();

  return (
    <Layout>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="container text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            All Blogs
          </h1>
          <hr className="hr-line"/>
        </div>

        <ul className="text-align-center">
          {data.map((post) => (
            <li key={post._id} className="py-4">
              <article className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                <div>
                  <p className="text-base font-medium leading-6 text-teal-500">
                    {new Date(post._createdAt).toISOString().split("T")[0]}
                  </p>
                </div>

                <Link
                  href={`/post/${post.slug.current}`}
                  prefetch
                  className="blogtext space-y-3 xl:col-span-3"
                >
                  <div>
                    <h3 className="text-2xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100">
                      {post.title}
                    </h3>
                  </div>

                  <p className="prose max-w-none text-gray-500 dark:text-gray-400 line-clamp-2">
                    {post.overview}
                  </p>
                  <hr className="hr-line"/>
                </Link>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}