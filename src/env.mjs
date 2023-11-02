import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  // include the NEXT_PUBLIC prefix to use
  // client-side environmental variables
  client: {},
  server: {
    UNSPLASH_ACCESS_KEY: z.string().min(1),
  },
  runtimeEnv: {
    UNSPLASH_ACCESS_KEY: process.env.UNSPLASH_ACCESS_KEY,
  },
});
