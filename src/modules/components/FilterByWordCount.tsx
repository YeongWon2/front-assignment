'use client';

import { useCallback, useState } from 'react';

import clsx from 'clsx';

import { FONT_FAMILY } from '@/modules/styles/typography';

interface WordCountStep {
  id: string;
  value: number;
  label: string;
}

interface IFilterByWordCountProps {
  data?: WordCountStep[];
  onSelectionChange?: (
    selectedRange: { start: number; end: number } | null
  ) => void;
}

const defaultData: WordCountStep[] = [
  { id: '1', value: 1000, label: '1000' },
  { id: '2', value: 1300, label: '1300' },
  { id: '3', value: 1700, label: '1700' },
  { id: '4', value: 2000, label: '2000' },
];

function FilterByWordCount({
  data = defaultData,
  onSelectionChange,
}: IFilterByWordCountProps) {
  const [selectedRange, setSelectedRange] = useState<{
    start: number;
    end: number;
  } | null>({
    start: 0,
    end: 1,
  });

  const handleStepClick = useCallback(
    (clickedIndex: number) => {
      // 1000 (인덱스 0) 클릭 시 1000 to 1000 범위 설정
      if (clickedIndex === 0) {
        const newRange = { start: 0, end: 0 };
        setSelectedRange(newRange);
        onSelectionChange?.({
          start: data[0].value, // 1000
          end: data[0].value, // 1000
        });
        return;
      }

      // 1300 이상 (인덱스 1 이상) 클릭 시
      if (clickedIndex >= 1) {
        // 현재 선택된 범위와 같은 경우 무시 (같은 범위 재선택 방지)
        if (
          selectedRange &&
          selectedRange.end === clickedIndex &&
          selectedRange.start === 0
        ) {
          return;
        }

        // 1000부터 클릭한 단계까지 범위 선택
        const newRange = { start: 0, end: clickedIndex };
        setSelectedRange(newRange);
        onSelectionChange?.({
          start: data[0].value, // 항상 1000
          end: data[clickedIndex].value,
        });
      }
    },
    [selectedRange, data, onSelectionChange]
  );

  const isStepSelected = useCallback(
    (index: number): boolean => {
      if (!selectedRange) return false;
      return index >= selectedRange.start && index <= selectedRange.end;
    },
    [selectedRange]
  );

  const isLineSelected = useCallback(
    (index: number): boolean => {
      if (!selectedRange) return false;
      return index >= selectedRange.start && index < selectedRange.end;
    },
    [selectedRange]
  );

  return (
    <div
      className={clsx(
        'inline-flex flex-row items-center',
        'p-1.25',
        'rounded-6.25 border border-black/50 bg-white'
      )}
    >
      {data.map((step, index) => (
        <div key={step.id} className="flex items-center">
          {/* 단계 버튼 */}
          <button
            onClick={() => handleStepClick(index)}
            className={clsx(
              'inline-flex items-center justify-center w-10 h-10',
              'rounded-full cursor-pointer transition-colors',
              'text-filter-wordcount text-white',
              FONT_FAMILY.EXO2,
              'relative z-10',
              isStepSelected(index) ? 'bg-black' : 'bg-[#999]'
            )}
          >
            {step.label}
          </button>

          {/* 연결 구분선 */}
          {index < data.length - 1 && (
            <div
              className={clsx(
                '-mx-5',
                'transition-colors',
                isLineSelected(index) ? 'bg-black' : 'bg-[#999]'
              )}
              style={{
                width: 115,
                height: 10,
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default FilterByWordCount;
