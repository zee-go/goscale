import Image from "next/image";

interface BlogImageProps {
  name: "hero" | "mid";
  src?: string;
  alt?: string;
  credit?: string;
  creditUrl?: string;
}

export function BlogImage({ src, alt, credit, creditUrl }: BlogImageProps) {
  if (!src) return null;

  return (
    <figure className="not-prose my-8">
      <Image
        src={src}
        alt={alt || ""}
        width={1200}
        height={675}
        className="w-full rounded-lg"
        sizes="(max-width: 768px) 100vw, 768px"
      />
      {credit && (
        <figcaption className="text-xs text-gray-400 mt-2 text-center">
          Photo by{" "}
          {creditUrl ? (
            <a
              href={creditUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-gray-600"
            >
              {credit}
            </a>
          ) : (
            credit
          )}{" "}
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
  );
}
