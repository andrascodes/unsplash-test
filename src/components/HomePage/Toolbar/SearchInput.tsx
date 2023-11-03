"use client";

import { Input } from "@/components/ui/input";
import useChangeSearchParam from "@/hooks/useChangeSearchParam";
import { useDebounce } from "usehooks-ts";
import { useEffect, useState } from "react";
import { Label } from "@/components/ui/label";

export default function SearchInput({ value: _value }: { value?: string }) {
  const changeSearch = useChangeSearchParam();
  const [value, setValue] = useState<string>(_value ?? "");
  const debouncedValue = useDebounce<string>(value, 500);

  useEffect(() => {
    if (!debouncedValue || debouncedValue == _value) return;
    changeSearch([
      { name: "query", value: debouncedValue },
      { name: "page", value: "1" },
    ]);
  }, [debouncedValue, changeSearch, _value]);

  return (
    <div className="flex flex-col items-start gap-1.5 w-full">
      <Label htmlFor="search">Search</Label>
      <Input
        name="search"
        type="search"
        placeholder="Type what you're looking for"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}
