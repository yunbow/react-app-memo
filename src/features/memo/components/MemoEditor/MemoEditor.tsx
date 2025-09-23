import React, { useEffect, useState } from 'react';
import { Input } from '../../../../components/Input/Input';
import { Memo } from '../../types';
import styles from './MemoEditor.module.css';

interface MemoEditorProps {
  memo: Memo | null;
  onSave: (title: string, content: string) => void;
}

export interface MemoEditorRef {
  getCurrentValues: () => { title: string; content: string };
}

export const MemoEditor = React.forwardRef<MemoEditorRef, MemoEditorProps>(({ memo, onSave }, ref) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (memo) {
      setTitle(memo.title);
      setContent(memo.content);
    } else {
      setTitle('');
      setContent('');
    }
  }, [memo]);

  useEffect(() => {
    if (memo) {
      const timeoutId = setTimeout(() => {
        onSave(title, content);
      }, 3000);

      return () => clearTimeout(timeoutId);
    }
  }, [title, content, memo, onSave]);

  React.useImperativeHandle(ref, () => ({
    getCurrentValues: () => ({ title, content })
  }));

  return (
    <div className={styles.editor}>
      <Input
        value={title}
        onChange={setTitle}
        placeholder="タイトルを入力"
        autoFocus={!memo?.title}
      />
      <Input
        value={content}
        onChange={setContent}
        placeholder="メモを入力してください..."
        type="textarea"
      />
    </div>
  );
});