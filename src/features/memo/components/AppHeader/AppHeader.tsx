import React from 'react';
import { Text } from '../../../../components/Text/Text';
import { Button } from '../../../../components/Button/Button';
import styles from './AppHeader.module.css';

interface AppHeaderProps {
  onNewMemo: () => void;
  onSaveMemo: () => void;
  onDeleteMemo: () => void;
  canDelete: boolean;
}

export const AppHeader: React.FC<AppHeaderProps> = ({
  onNewMemo,
  onSaveMemo,
  onDeleteMemo,
  canDelete,
}) => {
  return (
    <div className={styles.header}>
      <Text variant="h1">シンプルメモ帳</Text>
      <div className={styles.controls}>
        <Button onClick={onNewMemo}>新規メモ</Button>
        <Button onClick={onSaveMemo}>保存</Button>
        <Button variant="danger" onClick={onDeleteMemo} disabled={!canDelete}>
          削除
        </Button>
      </div>
    </div>
  );
};