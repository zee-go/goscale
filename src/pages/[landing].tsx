import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getAllLandingSlugs, getLandingPage, LandingPage, extractFAQs, FAQ } from "@/lib/mdx";

interface LandingPageProps {
  page: Omit<LandingPage, "content">;
  mdxSource: MDXRemoteSerializeResult;
  faqs: FAQ[];
}

export default function LandingPageView({ page, mdxSource, faqs }: LandingPageProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: page.h1 || page.title,
    description: page.description,
    provider: {
      "@type": "Organization",
      name: "GoScale Media",
      url: "https://goscale.media",
    },
    url: `https://goscale.media/${page.slug}`,
  };

  const faqJsonLd = faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  } : null;

  return (
    <>
      <Head>
        <title>{page.title}</title>
        <meta name="description" content={page.description} />
        <link rel="canonical" href={`https://goscale.media/${page.slug}`} />
        <meta property="og:title" content={page.title} />
        <meta property="og:description" content={page.description} />
        <meta
          property="og:url"
          content={`https://goscale.media/${page.slug}`}
        />
        <meta property="og:type" content="website" />
        {page.keywords && (
          <meta name="keywords" content={page.keywords.join(", ")} />
        )}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {faqJsonLd && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
          />
        )}
      </Head>

      <div className="min-h-screen bg-white">
        <Header />
        <main className="max-w-4xl mx-auto px-6 py-16">
          <article>
            <div className="prose prose-lg max-w-none prose-headings:text-[#2E2E2E] prose-a:text-[#2DD4BF] prose-a:no-underline hover:prose-a:text-[#FF6B6B] prose-strong:text-[#2E2E2E]">
              <MDXRemote {...mdxSource} />
            </div>

            <div className="mt-12 p-8 bg-[#2E2E2E] rounded-lg text-center">
              <h3 className="text-2xl font-bold text-white mb-3">
                Ready to get started?
              </h3>
              <p className="text-gray-300 mb-6">
                Book a free strategy call and see how we can scale your paid
                media.
              </p>
              <Link
                href="/#contact"
                className="inline-block bg-[#FF6B6B] hover:bg-[#FF5252] text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
              >
                Book a Strategy Call
              </Link>
            </div>
          </article>
        </main>
        <Footer />
      </div>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = getAllLandingSlugs();
  return {
    paths: slugs.map((slug) => ({ params: { landing: slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.landing as string;
  const page = getLandingPage(slug);
  if (!page) return { notFound: true };

  const { content, ...meta } = page;
  const mdxSource = await serialize(content);
  const faqs = extractFAQs(content);

  return { props: { page: meta, mdxSource, faqs } };
};
