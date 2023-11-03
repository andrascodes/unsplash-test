import { env } from "@/env.mjs";
import { ColorId, createApi } from "unsplash-js";
import { ApiResponse } from "unsplash-js/dist/helpers/response";
import type { Photos } from "unsplash-js/dist/methods/search/types/response";
import type { OrderBy } from "./ParamSchema";

const unsplash = createApi({
  accessKey: env.UNSPLASH_ACCESS_KEY,
  fetch,
});

export async function searchPhotos({
  searchTerm,
  page = 1,
  orderBy = "relevant",
  color,
}: {
  searchTerm: string;
  page?: number;
  orderBy?: OrderBy;
  color?: ColorId;
}): Promise<ApiResponse<Photos>> {
  try {
    const result = await unsplash.search.getPhotos({
      query: searchTerm,
      page,
      perPage: 16,
      color,
      orderBy,
    });
    return result;
  } catch (error) {
    const errorMessage = (error as Error).message ?? "Unknown error";
    return {
      errors: [errorMessage],
      type: "error",
      status: 500,
      source: "api",
      originalResponse: new Response(),
    };
  }
}
