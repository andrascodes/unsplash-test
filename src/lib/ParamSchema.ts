import z from "zod";

export const ORDER_BY_VALUES = ["relevant", "latest"] as const;
export type OrderBy = (typeof ORDER_BY_VALUES)[number];
export const COLOR_IDS = [
  "white",
  "black",
  "yellow",
  "orange",
  "red",
  "purple",
  "magenta",
  "green",
  "teal",
  "blue",
  "black_and_white",
] as const;
export type ColorId = (typeof COLOR_IDS)[number];

export const ParamSchema = z.object({
  query: z.string().optional(),
  page: z.coerce.number().optional(),
  orderBy: z.enum(ORDER_BY_VALUES).optional(),
  color: z.enum(COLOR_IDS).optional(),
});

export type ParamSchema = z.infer<typeof ParamSchema>;
