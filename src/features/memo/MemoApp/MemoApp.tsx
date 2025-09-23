import React, { useRef } from 'react';
import { useMemos } from '../useMemos';
import { AppHeader } from '../components/AppHeader';
import { MemoList } from '../components/MemoList';
import { MemoEditor, MemoEditorRef } from '../components/MemoEditor';
import styles from './MemoApp.module.css';

export const MemoApp: React.FC = () => {
  const memoEditorRef = useRef<MemoEditorRef>(null);
  const {
    memos,
    currentMemo,
    currentMemoId,
    setCurrentMemoId,
    createMemo,
    saveMemo,
    deleteMemo,
  } = useMemos();

  const handleSave = () => {
    if (currentMemoId && memoEditorRef.current) {
      const { title, content } = memoEditorRef.current.getCurrentValues();
      saveMemo(currentMemoId, title, content);
    }
  };

  const handleAutoSave = (title: string, content: string) => {
    if (currentMemoId) {
      saveMemo(currentMemoId, title, content);
    }
  };

  const handleDelete = () => {
    if (currentMemoId && confirm('このメモを削除してもよろしいですか？')) {
      deleteMemo(currentMemoId);
    }
  };

  const handleNewMemo = () => {
    const newMemoId = createMemo();
    setCurrentMemoId(newMemoId);
  };

  React.useEffect(() => {
    if (memos.length === 0) {
      handleNewMemo();
    }
  }, [memos.length]);

  return (
    <div className={styles.container}>
      <AppHeader
        onNewMemo={handleNewMemo}
        onSaveMemo={handleSave}
        onDeleteMemo={handleDelete}
        canDelete={!!currentMemoId}
      />
      <div className={styles.mainContent}>
        <MemoList
          memos={memos}
          currentMemoId={currentMemoId}
          onSelectMemo={setCurrentMemoId}
        />
        <MemoEditor ref={memoEditorRef} memo={currentMemo} onSave={handleAutoSave} />
      </div>
    </div>
  );
};