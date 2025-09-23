import React from 'react';
import { Memo } from '../../types';
import styles from './MemoItem.module.css';

interface MemoItemProps {
  memo: Memo;
  isActive: boolean;
  onClick: () => void;
}

export const MemoItem: React.FC<MemoItemProps> = ({
  memo,
  isActive,
  onClick,
}) => {
  return (
    <li
      className={`${styles.item} ${isActive ? styles.active : ''}`}
      onClick={onClick}
    >
      {memo.title || '無題のメモ'}
    </li>
  );
};