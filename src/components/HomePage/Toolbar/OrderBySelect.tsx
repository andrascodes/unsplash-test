"use client";

import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useChangeSearchParam from "@/hooks/useChangeSearchParam";
import { ORDER_BY_VALUES, OrderBy } from "@/lib/ParamSchema";

const ORDER_BY_MAP: Record<OrderBy, string> = {
  latest: "Latest",
  relevant: "Relevant",
};

export default function OrderBySelect({ value: _value }: { value?: OrderBy }) {
  const changeSearch = useChangeSearchParam();

  function onSelect(value: string) {
    changeSearch([
      { name: "orderBy", value },
      { name: "page", value: "1" },
    ]);
  }

  const value = _value ?? "relevant";

  return (
    <div className="flex flex-col items-start gap-1.5 w-full">
      <Label htmlFor="order">Sort by</Label>
      <Select onValueChange={onSelect} value={value}>
        <SelectTrigger id="order" className="w-full">
          <SelectValue placeholder="Sort by" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {ORDER_BY_VALUES.map((value) => (
              <SelectItem key={value} value={value}>
                {ORDER_BY_MAP[value]}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
