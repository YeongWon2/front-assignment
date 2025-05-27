'use client';

import { useState } from 'react';

import clsx from 'clsx';

import { FONT_FAMILY } from '@/modules/styles/typography';

// 필터 enum 정의
enum FilterRegion {
  ALL = 'All',
  ASIA = 'Asia',
  EUROPE = 'Europe',
  AMERICA = 'America',
  OCEANIA = 'Oceania',
}

// 필터 데이터 타입 정의
type TFilterOption = {
  id: FilterRegion;
  label: string;
  value: FilterRegion;
};

// 필터 데이터 (JSON 형태)
const filterData: TFilterOption[] = [
  { id: FilterRegion.ALL, label: 'All', value: FilterRegion.ALL },
  { id: FilterRegion.ASIA, label: 'Asia', value: FilterRegion.ASIA },
  { id: FilterRegion.EUROPE, label: 'Europe', value: FilterRegion.EUROPE },
  { id: FilterRegion.AMERICA, label: 'America', value: FilterRegion.AMERICA },
  { id: FilterRegion.OCEANIA, label: 'Oceania', value: FilterRegion.OCEANIA },
];

interface IFilterByCountryProps {
  onFilterChange?: (selectedFilter: FilterRegion) => void;
}

function FilterByCountry({ onFilterChange }: IFilterByCountryProps) {
  const [selectedFilter, setSelectedFilter] = useState<FilterRegion>(
    FilterRegion.ALL
  );

  const handleFilterClick = (filterValue: FilterRegion) => {
    setSelectedFilter(filterValue);
    onFilterChange?.(filterValue);
  };

  return (
    <div
      className={clsx(
        'inline-flex flex-row justify-start items-start',
        'gap-1.25 p-1.25',
        'rounded-6.25 border border-black/50 bg-white'
      )}
    >
      {filterData.map(filter => {
        const isSelected = selectedFilter === filter.value;

        return (
          <button
            key={filter.id}
            className={clsx(
              'px-4 py-3',
              'text-filter-button text-center whitespace-nowrap',
              'border-none rounded-6.25 cursor-pointer',
              'transition-all duration-200 hover:opacity-80',
              {
                'text-white bg-black': isSelected,
                'text-black bg-white': !isSelected,
              },
              FONT_FAMILY.EXO2
            )}
            onClick={() => handleFilterClick(filter.value)}
          >
            {filter.label}
          </button>
        );
      })}
    </div>
  );
}

export default FilterByCountry;
