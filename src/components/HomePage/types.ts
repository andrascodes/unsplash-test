import { ParamSchema } from "@/lib/ParamSchema";
import * as z from "zod";

export interface QueryParams
  extends Omit<z.infer<typeof ParamSchema>, "query"> {
  searchTerm: string;
  page: number;
}
