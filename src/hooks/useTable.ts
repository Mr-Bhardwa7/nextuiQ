import { useState, useMemo } from 'react';

interface UseTableProps<T> {
  data: T[];
  itemsPerPage?: number;
  searchFields?: (keyof T)[];
}

export function useTable<T>({ data, itemsPerPage = 5, searchFields = [] }: UseTableProps<T>) {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [roleFilter, setRoleFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredData = useMemo(() => {
    return data.filter(item => {
      const matchesSearch = searchFields.some(field => 
        String(item[field]).toLowerCase().includes(searchTerm.toLowerCase())
      );
      const matchesStatus = statusFilter === 'all' || (item as any).status === statusFilter;
      const matchesRole = roleFilter === 'all' || (item as any).role === roleFilter;
      return matchesSearch && matchesStatus && matchesRole;
    });
  }, [data, searchTerm, statusFilter, roleFilter, searchFields]);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = filteredData.slice(startIndex, startIndex + itemsPerPage);

  return {
    searchTerm,
    setSearchTerm,
    statusFilter,
    setStatusFilter,
    roleFilter,
    setRoleFilter,
    currentPage,
    setCurrentPage,
    filteredData,
    paginatedData,
    totalPages,
    startIndex,
    endIndex: Math.min(startIndex + itemsPerPage, filteredData.length),
    totalItems: filteredData.length,
  };
}