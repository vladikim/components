"use client";
import { FC, useState, useEffect, useMemo, useCallback } from "react";

import { Button, ChevronLeft, ChevronRight } from "@lacore/components";
import { Event } from "effector";

type PaginationProps = {
  totalSize: number;
  offset: number;
  perPage?: number;
  changeOffset: Event<number>;
  isLoading: boolean;
};

export const Pagination: FC<PaginationProps> = ({
  totalSize,
  offset,
  perPage = 10,
  changeOffset,
  isLoading,
}) => {
  const currentPage = useMemo(
    () => Math.floor(offset / perPage) + 1,
    [offset, perPage]
  );
  const [visiblePages, setVisiblePages] = useState<string[]>([]);

  const totalPages: number = useMemo(
    () => Math.ceil(totalSize / perPage),
    [totalSize, perPage]
  );
  const numberOfPages: string[] = useMemo(
    () => Array.from({ length: totalPages }, (_, i) => String(i + 1)),
    [totalPages]
  );

  useEffect(() => {
    let tempVisiblePages: string[] = [...numberOfPages];
    if (totalPages <= 5) {
      // все страницы
      tempVisiblePages = numberOfPages;
    } else if (currentPage <= 3) {
      // 5 страниц и многоточие
      tempVisiblePages = ["1", "2", "3", "4", "5", "...", String(totalPages)];
    } else if (currentPage > numberOfPages.length - 3) {
      const sliced = numberOfPages.slice(numberOfPages.length - 4);
      tempVisiblePages = ["1", "...", ...sliced];
    } else {
      // первая страница, многоточие и конечные страницы
      tempVisiblePages = [
        "1",
        "...",
        String(currentPage - 1),
        String(currentPage),
        String(currentPage + 1),
        "...",
        String(totalPages),
      ];
    }

    setVisiblePages(tempVisiblePages);
  }, [currentPage, numberOfPages, totalPages]);

  const prevPage = useCallback(() => {
    const currentOffset = (currentPage - 1) * perPage;
    if (currentOffset > 0) {
      changeOffset(currentOffset - perPage);
    }
  }, [changeOffset, perPage, currentPage]);

  const nextPage = useCallback(() => {
    const currentOffset = (currentPage - 1) * perPage;
    if (currentOffset < (numberOfPages.length - 1) * perPage) {
      changeOffset(currentOffset + 1 * perPage);
    }
  }, [changeOffset, numberOfPages, perPage, currentPage]);

  const goToPage = useCallback(
    (page: string) => {
      if (page !== "...") {
        changeOffset((+page - 1) * perPage);
      }
    },
    [perPage, changeOffset]
  );

  return (
    <div className="flex gap-2">
      <Button
        size="icon"
        variant="outline"
        onClick={prevPage}
        disabled={isLoading}
      >
        <ChevronLeft />
      </Button>
      {isLoading ? (
        <Button disabled={isLoading} size="icon">
          ...
        </Button>
      ) : (
        <>
          <div className="hidden w-9 h-9 rounded-full border-2 border-primary justify-center items-center max-sbPhoneCatalog:flex bg-primary ">
            {currentPage}
          </div>
          <div className="sbPhoneCatalog:flex gap-2 hidden ">
            {visiblePages.map((page, index) => (
              <Button
                disabled={isLoading}
                size="icon"
                variant={currentPage === +page ? "default" : "outline"}
                key={index}
                onClick={() => goToPage(page)}
              >
                {page}
              </Button>
            ))}
          </div>
        </>
      )}

      <Button
        size="icon"
        variant="outline"
        onClick={nextPage}
        disabled={isLoading}
      >
        <ChevronRight />
      </Button>
    </div>
  );
};
