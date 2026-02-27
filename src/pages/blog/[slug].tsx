import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTABanner } from "@/components/blog/CTABanner";
import { BlogImage } from "@/components/blog/BlogImage";
import { RelatedPosts } from "@/components/blog/RelatedPosts";
import { getAllBlogSlugs, getBlogPost, getAllBlogPosts, BlogPost } from "@/lib/mdx";

interface RelatedPostMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  reading_time: number;
  category: string;
  hero_image?: string | null;
  hero_image_alt?: string | null;
}

interface BlogPostPageProps {
  post: Omit<BlogPost, "content">;
  mdxSource: MDXRemoteSerializeResult;
  relatedPosts: RelatedPostMeta[];
}

export default function BlogPostPage({ post, mdxSource, relatedPosts }: BlogPostPageProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.updated || post.date,
    ...(post.hero_image && {
      image: `https://goscale.media${post.hero_image}`,
    }),
    author: {
      "@type": "Organization",
      name: post.author || "GoScale Media",
      url: "https://goscale.media",
    },
    publisher: {
      "@type": "Organization",
      name: "GoScale Media",
      url: "https://goscale.media",
    },
    mainEntityOfPage: `https://goscale.media/blog/${post.slug}`,
  };

  const mdxComponents = {
    CTABanner: () => <CTABanner />,
    BlogImage: ({ name }: { name: string }) => {
      if (name === "mid" && post.mid_image) {
        return (
          <BlogImage
            name="mid"
            src={post.mid_image}
            alt={post.mid_image_alt}
            credit={post.mid_image_credit}
            creditUrl={post.mid_image_credit_url}
          />
        );
      }
      return null;
    },
  };

  return (
    <>
      <Head>
        <title>{post.title} | GoScale Media</title>
        <meta name="description" content={post.description} />
        <link
          rel="canonical"
          href={`https://goscale.media/blog/${post.slug}`}
        />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.description} />
        <meta
          property="og:url"
          content={`https://goscale.media/blog/${post.slug}`}
        />
        <meta property="og:type" content="article" />
        {post.hero_image && (
          <meta
            property="og:image"
            content={`https://goscale.media${post.hero_image}`}
          />
        )}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.description} />
        {post.hero_image && (
          <meta
            name="twitter:image"
            content={`https://goscale.media${post.hero_image}`}
          />
        )}
        {post.keywords && (
          <meta name="keywords" content={post.keywords.join(", ")} />
        )}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <div className="min-h-screen bg-white">
        <Header />
        <main className="max-w-3xl mx-auto px-6 py-16">
          <Link
            href="/blog"
            className="text-sm text-[#2DD4BF] hover:text-[#FF6B6B] transition-colors mb-8 inline-block"
          >
            ← Back to blog
          </Link>

          <article>
            <header className="mb-10">
              <h1 className="text-4xl font-bold text-[#2E2E2E] mb-4">
                {post.title}
              </h1>
              <div className="flex items-center gap-4 text-sm text-gray-500">
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
            </header>

            {post.hero_image && (
              <figure className="mb-10">
                <Image
                  src={post.hero_image}
                  alt={post.hero_image_alt || post.title}
                  width={1200}
                  height={675}
                  className="w-full rounded-lg"
                  sizes="(max-width: 768px) 100vw, 768px"
                  priority
                />
                {post.hero_image_credit && (
                  <figcaption className="text-xs text-gray-400 mt-2 text-center">
                    Photo by{" "}
                    <a
                      href={post.hero_image_credit_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-gray-600"
                    >
                      {post.hero_image_credit}
                    </a>{" "}
                    on{" "}
                    <a
                      href="https://unsplash.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-gray-600"
                    >
                      Unsplash
                    </a>
                  </figcaption>
                )}
              </figure>
            )}

            <div className="prose prose-lg max-w-none prose-headings:text-[#2E2E2E] prose-a:text-[#2DD4BF] prose-a:no-underline hover:prose-a:text-[#FF6B6B] prose-strong:text-[#2E2E2E]">
              <MDXRemote {...mdxSource} components={mdxComponents} />
            </div>

            <div className="mt-12 p-8 bg-[#2E2E2E] rounded-lg text-center">
              <h3 className="text-2xl font-bold text-white mb-3">
                Unlocking Ad Potential for Brands Ready to Scale
              </h3>
              <p className="text-gray-300 mb-6">
                Book a free strategy call and see how we can scale your paid media.
              </p>
              <Link
                href="/#contact"
                className="inline-block bg-[#FF6B6B] hover:bg-[#FF5252] text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
              >
                Book a Strategy Call
              </Link>
            </div>

            <RelatedPosts posts={relatedPosts} />
          </article>
        </main>
        <Footer />
      </div>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = getAllBlogSlugs();
  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const post = getBlogPost(slug);
  if (!post) return { notFound: true };

  const { content, ...meta } = post;
  const mdxSource = await serialize(content);

  // Resolve related posts to full metadata
  const allPosts = getAllBlogPosts();
  const relatedPosts: RelatedPostMeta[] = (meta.related_posts || [])
    .map((relSlug) => allPosts.find((p) => p.slug === relSlug))
    .filter((p): p is BlogPost => p !== undefined)
    .slice(0, 3)
    .map(({ slug, title, description, date, reading_time, category, hero_image, hero_image_alt }) => ({
      slug,
      title,
      description,
      date,
      reading_time,
      category,
      hero_image: hero_image ?? null,
      hero_image_alt: hero_image_alt ?? null,
    }));

  // Convert undefined to null for JSON serialization
  const serializedMeta = JSON.parse(JSON.stringify(meta));

  return { props: { post: serializedMeta, mdxSource, relatedPosts } };
};
