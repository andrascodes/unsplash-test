import { searchPhotos } from "@/lib/unsplash";
import PaginationClient from "./PaginationClient";
import { QueryParams } from "../types";

export default async function Pagination(params: QueryParams) {
  const { type, response } = await searchPhotos(params);

  const total = type == "success" ? response.total_pages : 0;

  return <PaginationClient current={params.page} total={total} />;
}
