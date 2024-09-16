
'use client'
// Pagination.js
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import { useState } from 'react';

const Pagination = ({  totalPages, handlePageChange,currentPage,totalnumber }) => {
    // const [currentPage, setCurrentPage] = useState(1);
    // const handlePageChange = (pageNumber) => {
    //     setCurrentPage(pageNumber);
    //   };
  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxPageNumbers = 10; // Set the maximum number of page numbers to display

    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }

    // Display only a subset of page numbers based on the current page
    if (currentPage <= maxPageNumbers - Math.floor(maxPageNumbers / 2)) {
      return pageNumbers.slice(0, maxPageNumbers);
    } else if (currentPage >= totalPages - Math.floor(maxPageNumbers / 2)) {
      return pageNumbers.slice(totalPages - maxPageNumbers, totalPages);
    } else {
      return pageNumbers.slice(currentPage - Math.floor(maxPageNumbers / 2) - 1, currentPage + Math.floor(maxPageNumbers / 2));
    }
  };

  return (
    <div className="flex items-center justify-between w-full h-full border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">{currentPage}</span> to{' '}
            <span className="font-medium">{currentPage + 9}</span> of{' '}
            <span className="font-medium">{totalnumber}</span> results
          </p>
        </div>
        <div>
          <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
            <a
              href="#"
              className={`${
                currentPage === 1 ? 'cursor-not-allowed' : 'hover:bg-gray-50 focus:z-20 focus:outline-offset-0'
              } relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300`}
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </a>
            {renderPageNumbers().map((number) => (
              <a
                key={number}
                href="#"
                className={`${
                  number === currentPage
                    ? 'relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                    : 'relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0'
                }`}
                onClick={() => handlePageChange(number)}
              >
                {number}
              </a>
            ))}
            <a
              href="#"
              className={`${
                currentPage === totalPages ? 'cursor-not-allowed' : 'hover:bg-gray-50 focus:z-20 focus:outline-offset-0'
              } relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300`}
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </a>
          </nav>
        </div>
      </div>
      <div className="flex sm:hidden flex-1 justify-between ">
        <a
          href="#"
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Previous
        </a>
        <a
          href="#"
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Next
        </a>
      </div>
    </div>
  );
};

export default Pagination;
