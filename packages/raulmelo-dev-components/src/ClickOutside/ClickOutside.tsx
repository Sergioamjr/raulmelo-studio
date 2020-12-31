import { useEffect, useRef, cloneElement } from 'react';

export const ClickOutside = ({
  onClickOutside,
  children,
}: ClickOutsideProps) => {
  const childRef = useRef<HTMLElement>(null);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  function handleClickOutside(event: MouseEvent): void {
    if (childRef.current && !childRef.current.contains(event.target as Node)) {
      onClickOutside(event);
    }
  }

  return cloneElement(children as React.ReactElement, { ref: childRef });
};

export type ClickOutsideProps = {
  onClickOutside: (event: Event) => void;
  children: React.ReactNode;
};
