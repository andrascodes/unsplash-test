import z from "zod";
import { ParamSchema } from "./ParamSchema";

export interface Change {
  name: keyof z.infer<typeof ParamSchema>;
  value: string;
}

export function changeSearchParam({
  changes,
  pathname,
  searchParams,
}: {
  changes: Change[];
  searchParams: URLSearchParams;
  pathname: string;
}) {
  const newSearchParams = new URLSearchParams(
    Array.from(searchParams.entries())
  );
  changes.forEach(({ name, value }) => {
    newSearchParams.set(name, value);
  });
  const newSearch = newSearchParams.toString();
  const query = newSearch ? `?${newSearch}` : "";
  return `${pathname}${query}`;
}
