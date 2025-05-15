"use client"

import React from 'react';
import ReactPaginate from 'react-paginate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faForwardStep, faBackwardStep } from '@fortawesome/free-solid-svg-icons';
import "@/app/(admin)/css/pagination.css";

interface PaginationProps {
  limitVal: number;
  pageCount: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({ limitVal, pageCount, currentPage, onPageChange }: PaginationProps) => {
  const handlePageClick = ({ selected }: any) => {
    onPageChange(selected);
  };

  return (
    <div className="mt-5 w-full px-2 flex justify-end">
      <ReactPaginate
        previousLabel={<FontAwesomeIcon icon={faBackwardStep} />}
        nextLabel={<FontAwesomeIcon icon={faForwardStep} />}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        forcePage={currentPage}
        containerClassName="pagination"
        activeClassName="active"
        previousClassName={currentPage === 0 ? 'disabled' : ''}
        nextClassName={currentPage === pageCount - 1 ? 'disabled' : ''}
      />
    </div>
  );
};

export default Pagination;
