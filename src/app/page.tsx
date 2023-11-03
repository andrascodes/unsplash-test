import Toolbar from "@/components/HomePage/Toolbar/Toolbar";
import { ParamSchema } from "@/lib/ParamSchema";
import Gallery, { MasonryLayout } from "@/components/HomePage/Gallery";
import { QueryParams } from "@/components/HomePage/types";
import Pagination from "@/components/HomePage/Pagination/Pagination";
import { Suspense } from "react";
import { PaginationUI } from "@/components/HomePage/Pagination/PaginationClient";
import { Skeleton } from "@/components/ui/skeleton";
import { randomInteger } from "@/lib/randomInteger";

export default async function Home({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const parsedSearchParams = await ParamSchema.safeParseAsync(searchParams);
  const params = parsedSearchParams.success
    ? parsedSearchParams.data
    : undefined;

  const props: QueryParams = {
    searchTerm: params?.query ? params.query : "hello",
    page: params?.page ? params.page : 1,
    orderBy: params?.orderBy ? params.orderBy : undefined,
    color: params?.color ? params.color : undefined,
  };

  const galleryKey =
    props.searchTerm + props.page + props.orderBy + props.color;
  const paginationkey = props.searchTerm + props.color;

  return (
    <main className="min-h-screen flex flex-col">
      <Toolbar {...props} />
      <div className="flex-grow">
        <Suspense
          key={galleryKey}
          fallback={
            <MasonryLayout>
              {Array.from({ length: 8 }, (_, i) => (
                <Skeleton
                  key={i}
                  style={{
                    width: 250,
                    height: randomInteger(144, 350),
                  }}
                />
              ))}
            </MasonryLayout>
          }
        >
          <Gallery {...props} />
        </Suspense>
      </div>
      <div className="sticky z-50 bottom-0 flex items-center justify-center p-4 bg-white">
        <Suspense
          key={paginationkey}
          fallback={
            <PaginationUI prevDisabled nextDisabled>
              <Skeleton className="w-16 h-6" />
            </PaginationUI>
          }
        >
          <Pagination {...props} />
        </Suspense>
      </div>
    </main>
  );
}
