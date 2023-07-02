import { client } from "@/app/lib/sanity";
import { urlFor } from "@/app/lib/sanityImageUrl";
import { PortableText } from "@portabletext/react";
import Layout from '@/components/Layout';
import Image from "next/image";
import "../../../styles/main.css";

async function getData(slug) {
  const query = `*[_type == "post" && slug.current == "${slug}"][0]`;

  const data = await client.fetch(query);

  return data;
}

export default async function SlugPage({ params }) {
  const data = await getData(params.slug);

  const PortableTextComponent = {
    types: {
      image: ({ value }) => (
        <Image
          src={urlFor(value).url()}
          alt="Image"
          className="rounded-lg"
          width={500}
          height={400}
        />
      ),
    },
  };

  return (
    <Layout>
      <div className="text-align-center">
        <header>
          <p>
            {new Date(data._createdAt).toISOString().split("T")[0]}
          </p>
          <div>
            <h1>
              {data.title}
            </h1>
            <a href="/blogs">Back</a>
          </div>
        </header>
        <div className="centerAlign">
          <PortableText
            value={data.content}
            components={PortableTextComponent}
          />
        </div>
      </div>
    </Layout>
  );
}
