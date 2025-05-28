import { RefObject, useCallback, useEffect, useRef, useState } from 'react';

interface UseDragScrollReturn {
  ref: RefObject<HTMLDivElement | null>;
  isDragging: boolean;
}

export const useDragScroll = (): UseDragScrollReturn => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // 마우스 다운 핸들러
  const handleMouseDown = useCallback((e: MouseEvent) => {
    if (!ref.current) return;

    setIsDragging(true);
    setStartX(e.pageX - ref.current.offsetLeft);
    setScrollLeft(ref.current.scrollLeft);

    // 텍스트 선택 방지
    e.preventDefault();
  }, []);

  // 마우스 업 핸들러
  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  // 마우스 리브 핸들러 (컨테이너에서 마우스가 벗어날 때)
  const handleMouseLeave = useCallback(() => {
    setIsDragging(false);
  }, []);

  // 마우스 무브 핸들러
  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging || !ref.current) return;

      e.preventDefault();

      const x = e.pageX - ref.current.offsetLeft;
      const walk = x - startX;
      ref.current.scrollLeft = scrollLeft - walk;
    },
    [isDragging, startX, scrollLeft]
  );

  // 터치 이벤트 핸들러들
  const handleTouchStart = useCallback((e: TouchEvent) => {
    if (!ref.current) return;

    const touch = e.touches[0];
    setIsDragging(true);
    setStartX(touch.pageX - ref.current.offsetLeft);
    setScrollLeft(ref.current.scrollLeft);
  }, []);

  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      if (!isDragging || !ref.current) return;

      const touch = e.touches[0];
      const x = touch.pageX - ref.current.offsetLeft;
      const walk = x - startX;
      ref.current.scrollLeft = scrollLeft - walk;
    },
    [isDragging, startX, scrollLeft]
  );

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  // 이벤트 리스너 등록/해제
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // 마우스 이벤트
    element.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    // 터치 이벤트
    element.addEventListener('touchstart', handleTouchStart, { passive: true });
    element.addEventListener('touchmove', handleTouchMove, { passive: true });
    element.addEventListener('touchend', handleTouchEnd);

    // 클린업
    return () => {
      element.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);

      element.removeEventListener('touchstart', handleTouchStart);
      element.removeEventListener('touchmove', handleTouchMove);
      element.removeEventListener('touchend', handleTouchEnd);
    };
  }, [
    handleMouseDown,
    handleMouseUp,
    handleMouseMove,
    handleMouseLeave,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
  ]);

  return {
    ref,
    isDragging,
  };
};
