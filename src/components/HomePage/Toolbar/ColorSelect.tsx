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
import { COLOR_IDS, ColorId } from "@/lib/ParamSchema";

export const COLOR_MAP: Record<ColorId, string> = {
  black: "Black",
  black_and_white: "Black and white",
  blue: "Blue",
  green: "Green",
  magenta: "Magenta",
  orange: "Orange",
  purple: "Purple",
  red: "Red",
  teal: "Teal",
  white: "White",
  yellow: "Yellow",
};

export default function ColorSelect({ value }: { value?: ColorId }) {
  const changeSearch = useChangeSearchParam();

  function onSelect(value: string) {
    changeSearch([
      { name: "color", value },
      { name: "page", value: "1" },
    ]);
  }

  return (
    <div className="flex flex-col items-start gap-1.5 w-full">
      <Label htmlFor="color">Color</Label>
      <Select onValueChange={onSelect} value={value}>
        <SelectTrigger id="color" className="w-full">
          <SelectValue placeholder="" />
        </SelectTrigger>
        <SelectContent>
          {COLOR_IDS.map((value) => (
            <SelectItem key={value} value={value}>
              {COLOR_MAP[value]}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
