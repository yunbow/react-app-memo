import React from 'react';
import { Memo } from '../../types';
import { Text } from '../../../../components/Text/Text';
import { MemoItem } from '../MemoItem';
import styles from './MemoList.module.css';

interface MemoListProps {
  memos: Memo[];
  currentMemoId: string | null;
  onSelectMemo: (id: string) => void;
}

export const MemoList: React.FC<MemoListProps> = ({
  memos,
  currentMemoId,
  onSelectMemo,
}) => {
  if (memos.length === 0) {
    return (
      <div className={styles.container}>
        <Text variant="h2">メモ一覧</Text>
        <Text variant="empty">メモがありません。新規メモを作成してください。</Text>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <Text variant="h2">メモ一覧</Text>
      <ul className={styles.list}>
        {memos.map((memo) => (
          <MemoItem
            key={memo.id}
            memo={memo}
            isActive={memo.id === currentMemoId}
            onClick={() => onSelectMemo(memo.id)}
          />
        ))}
      </ul>
    </div>
  );
};