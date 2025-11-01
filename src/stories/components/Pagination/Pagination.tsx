import React from 'react';
import './Pagination.scss';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export interface PaginationProps {
  /** Current page */
  current?: number;
  /** Total number of pages */
  total: number;
  /** Page size */
  pageSize?: number;
  /** Show page size selector */
  showPageSize?: boolean;
  /** Show total */
  showTotal?: boolean;
  /** Change handler */
  onChange?: (page: number, pageSize?: number) => void;
  /** Custom className */
  className?: string;
  /** Size */
  size?: 'small' | 'medium' | 'large';
}

export const Pagination: React.FC<PaginationProps> = ({
  current = 1,
  total,
  pageSize = 10,
  showPageSize = false,
  showTotal = false,
  onChange,
  className = '',
  size = 'medium',
}) => {
  const totalPages = Math.ceil(total / pageSize);

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (current <= 3) {
        for (let i = 1; i <= 4; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      } else if (current >= totalPages - 2) {
        pages.push(1);
        pages.push('...');
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push('...');
        for (let i = current - 1; i <= current + 1; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      }
    }

    return pages;
  };

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages && page !== current) {
      onChange?.(page, pageSize);
    }
  };

  const pages = getPageNumbers();

  return (
    <div className={`ui-pagination ui-pagination--${size} ${className}`}>
      {showTotal && (
        <div className="ui-pagination__total">
          Showing {((current - 1) * pageSize) + 1} to {Math.min(current * pageSize, total)} of {total}
        </div>
      )}
      <div className="ui-pagination__pages">
        <button
          className="ui-pagination__button ui-pagination__button--prev"
          onClick={() => handlePageChange(current - 1)}
          disabled={current === 1}
          aria-label="Previous page"
        >
          <FaChevronLeft />
        </button>
        {pages.map((page, index) => (
          <React.Fragment key={index}>
            {page === '...' ? (
              <span className="ui-pagination__ellipsis">...</span>
            ) : (
              <button
                className={`ui-pagination__button ${page === current ? 'ui-pagination__button--active' : ''}`}
                onClick={() => handlePageChange(page as number)}
              >
                {page}
              </button>
            )}
          </React.Fragment>
        ))}
        <button
          className="ui-pagination__button ui-pagination__button--next"
          onClick={() => handlePageChange(current + 1)}
          disabled={current === totalPages}
          aria-label="Next page"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Pagination;

