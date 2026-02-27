import Link from "next/link";
import Image from "next/image";

interface RelatedPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  reading_time: number;
  category: string;
  hero_image?: string;
  hero_image_alt?: string;
}

interface RelatedPostsProps {
  posts: RelatedPost[];
}

export function RelatedPosts({ posts }: RelatedPostsProps) {
  if (!posts || posts.length === 0) return null;

  return (
    <section className="mt-16 pt-10 border-t border-gray-200">
      <h2 className="text-2xl font-bold text-[#2E2E2E] mb-8">
        Related Articles
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.slice(0, 3).map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block"
          >
            <article className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
              {post.hero_image && (
                <Image
                  src={post.hero_image}
                  alt={post.hero_image_alt || post.title}
                  width={400}
                  height={225}
                  className="w-full h-40 object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              )}
              <div className="p-4">
                <h3 className="font-semibold text-[#2E2E2E] group-hover:text-[#2DD4BF] transition-colors mb-2 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-500 line-clamp-2 mb-3">
                  {post.description}
                </p>
                <div className="flex items-center gap-3 text-xs text-gray-400">
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </time>
                  <span>{post.reading_time} min read</span>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}
