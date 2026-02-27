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
      <img
        src={src}
        alt={alt || ""}
        className="w-full rounded-lg"
        loading="lazy"
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
