import { GetStaticProps } from "next";
import Link from "next/link";
import Head from "next/head";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getAllBlogPosts, BlogPost } from "@/lib/mdx";

interface BlogIndexProps {
  posts: Omit<BlogPost, "content">[];
}

export default function BlogIndex({ posts }: BlogIndexProps) {
  return (
    <>
      <Head>
        <title>Blog | GoScale Media - Paid Media Insights for European Startups</title>
        <meta
          name="description"
          content="Expert insights on paid media strategy, Meta Ads, Google Ads, and performance marketing for European startups with in-house teams."
        />
        <link rel="canonical" href="https://goscale.media/blog" />
        <meta property="og:title" content="Blog | GoScale Media" />
        <meta
          property="og:description"
          content="Expert insights on paid media strategy for European startups."
        />
        <meta property="og:url" content="https://goscale.media/blog" />
        <meta property="og:type" content="website" />
      </Head>

      <div className="min-h-screen bg-white">
        <Header />
        <main className="max-w-4xl mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold text-[#2E2E2E] mb-4">Blog</h1>
          <p className="text-lg text-gray-600 mb-12">
            Paid media strategy, platform guides, and growth insights for
            European startups scaling their ad spend.
          </p>

          {posts.length === 0 ? (
            <p className="text-gray-500">No posts yet. Check back soon.</p>
          ) : (
            <div className="space-y-8">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="border-b border-gray-200 pb-8"
                >
                  <Link href={`/blog/${post.slug}`}>
                    <h2 className="text-2xl font-semibold text-[#2E2E2E] hover:text-[#2DD4BF] transition-colors mb-2">
                      {post.title}
                    </h2>
                  </Link>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                    <span>{post.reading_time} min read</span>
                    {post.category && (
                      <span className="bg-gray-100 px-2 py-0.5 rounded text-xs">
                        {post.category.replace(/_/g, " ")}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600">{post.description}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-block mt-3 text-[#2DD4BF] font-medium hover:text-[#FF6B6B] transition-colors text-sm"
                  >
                    Read more →
                  </Link>
                </article>
              ))}
            </div>
          )}
        </main>
        <Footer />
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllBlogPosts().map(({ content, ...meta }) => meta);
  return { props: { posts } };
};
