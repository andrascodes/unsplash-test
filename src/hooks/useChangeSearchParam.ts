import { ParamSchema } from "@/lib/ParamSchema";
import { Change, changeSearchParam } from "@/lib/changeSearchParam";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import z from "zod";

export default function useChangeSearchParam() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  return (changes: Change[]) => {
    const newRoute = changeSearchParam({
      changes,
      searchParams,
      pathname,
    });
    router.push(newRoute);
  };
}
