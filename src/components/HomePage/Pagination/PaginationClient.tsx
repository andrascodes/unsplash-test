"use client";

import { Button } from "@/components/ui/button";
import useChangeSearchParam from "@/hooks/useChangeSearchParam";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import React, { PropsWithChildren, useCallback } from "react";

export function PaginationUI({
  toPrevPage,
  children,
  toNextPage,
  prevDisabled,
  nextDisabled,
}: PropsWithChildren<{
  toPrevPage?: () => void;
  prevDisabled: boolean;
  toNextPage?: () => void;
  nextDisabled: boolean;
}>) {
  return (
    <div className="flex items-center justify-center gap-4">
      <Button variant="outline" onClick={toPrevPage} disabled={prevDisabled}>
        <ChevronLeftIcon className="h-4 w-4" />
      </Button>
      {children}
      <Button variant="outline" onClick={toNextPage} disabled={nextDisabled}>
        <ChevronRightIcon className="h-4 w-4" />
      </Button>
    </div>
  );
}

export default function PaginationClient({
  current,
  total,
}: {
  current: number;
  total: number;
}) {
  const changeSearch = useChangeSearchParam();
  const changePage = useCallback(
    (newPage: number) => {
      changeSearch([{ name: "page", value: newPage.toString() }]);
    },
    [changeSearch]
  );

  const prevDisabled = current <= 1;
  const toPrevPage = () => {
    if (prevDisabled) return;
    changePage(current - 1);
  };

  const nextDisabled = current >= total;
  const toNextPage = () => {
    if (nextDisabled) return;
    changePage(current + 1);
  };

  const uiParams = {
    toPrevPage,
    prevDisabled,
    toNextPage,
    nextDisabled,
  };

  return (
    <PaginationUI {...uiParams}>
      <p>
        <span className="font-medium">{current}</span> of {total}
      </p>
    </PaginationUI>
  );
}
