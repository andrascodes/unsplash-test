import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { searchPhotos } from "@/lib/unsplash";
import { AlertTriangleIcon, XIcon } from "lucide-react";
import Image from "next/image";
import { QueryParams } from "./types";
import { PropsWithChildren } from "react";

export function MasonryLayout({ children }: PropsWithChildren<{}>) {
  return (
    <div className="columns-1 flex flex-col items-center justify-center gap-4 sm:block sm:columns-2 sm:gap-8 md:columns-3 lg:columns-4 [&>*:not(:first-child)]:mt-8">
      {children}
    </div>
  );
}

export default async function Gallery(params: QueryParams) {
  const { type, response, errors, status } = await searchPhotos(params);

  if (type === "error") {
    return (
      <Alert variant="destructive">
        <AlertTriangleIcon className="h-4 w-4" />
        <AlertTitle>Error - HTTP {status}</AlertTitle>
        <AlertDescription>{errors.join(", ")}</AlertDescription>
      </Alert>
    );
  }

  if (response.results.length <= 0) {
    return (
      <Alert variant="default">
        <XIcon className="h-4 w-4" />
        <AlertTitle>No results</AlertTitle>
        <AlertDescription>
          We couldn&apos;t find any results for your search.
        </AlertDescription>
      </Alert>
    );
  }

  return (
    <MasonryLayout>
      {response.results.map(
        ({ id, urls: { thumb }, alt_description, description }) => (
          <Image
            width={300}
            height={300}
            key={id}
            src={thumb}
            alt={alt_description ?? description ?? "Photo from Unsplash"}
          />
        )
      )}
    </MasonryLayout>
  );
}
