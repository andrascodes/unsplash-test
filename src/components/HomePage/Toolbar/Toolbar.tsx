import React from "react";
import SearchInput from "./SearchInput";
import { QueryParams } from "../types";
import OrderBySelect from "./OrderBySelect";
import ColorSelect from "./ColorSelect";

export default function Toolbar({
  searchTerm,
  color,
  orderBy,
}: Omit<QueryParams, "page">) {
  return (
    <div className="sticky z-50 top-0 flex flex-col items-center justify-center bg-white mt-10">
      <div className="flex items-center justify-center gap-4 flex-col w-full sm:flex-row sm:max-w-lg">
        <SearchInput value={searchTerm} />
        <div className="w-full sm:w-[240px]">
          <ColorSelect value={color} />
        </div>
      </div>
      <div className="w-full mt-16 flex items-center justify-start mb-6">
        <div className="w-32">
          <OrderBySelect value={orderBy} />
        </div>
      </div>
    </div>
  );
}
