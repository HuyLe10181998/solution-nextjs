"use client"

import { useRouter } from "next/navigation";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    limit: number;
}

export default function Pagination({ currentPage, totalPages,limit }: PaginationProps) {
    const router = useRouter();

    const onPageChange = (page: number) => {
        const searchParams = new URLSearchParams(window.location.search);
        searchParams.set('page', page.toString());
        router.push(`${window.location.pathname}?${searchParams.toString()}`);
    }
    const getPageNumbers = () => {
        const pages = [];
        
        if (totalPages <= 8) {
            // Show all pages if total is 8 or less
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            // Always show first page
            pages.push(1);
            
            if (currentPage > 4) {
                pages.push('...');
            }
            
            // Calculate start and end of middle pages
            let start = Math.max(2, currentPage - 1);
            let end = Math.min(totalPages - 1, currentPage + 1);
            
            // Adjust if current page is near the start
            if (currentPage <= 4) {
                start = 2;
                end = 5;
            }
            
            // Adjust if current page is near the end
            if (currentPage > totalPages - 4) {
                start = totalPages - 4;
                end = totalPages - 1;
            }
            
            // Add middle pages
            for (let i = start; i <= end; i++) {
                pages.push(i);
            }
            
            if (currentPage < totalPages - 3) {
                pages.push('...');
            }
            
            // Always show last page
            pages.push(totalPages);
        }
        
        return pages;
    };

    return (
        <div className="flex items-center justify-center gap-1 rounded-lg bg-white p-1">
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-4 py-2 text-gray-600 hover:text-blue-600 disabled:text-gray-300"
            >
                Previous
            </button>
            
            {getPageNumbers().map((pageNumber, index) => (
                <button
                    key={index}
                    onClick={() => pageNumber !== '...' && onPageChange(Number(pageNumber))}
                    disabled={pageNumber === '...'}
                    className={`px-4 py-2 rounded-md ${
                        currentPage === pageNumber
                            ? 'bg-blue-100 text-blue-600'
                            : pageNumber === '...'
                            ? 'text-gray-600 cursor-default'
                            : 'text-gray-600 hover:text-blue-600'
                    }`}
                >
                    {pageNumber}
                </button>
            ))}
            
            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-4 py-2 text-gray-600 hover:text-blue-600 disabled:text-gray-300"
            >
                Next
            </button>
        </div>
    );
}