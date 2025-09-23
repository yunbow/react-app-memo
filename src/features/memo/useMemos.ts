import { useState, useEffect } from 'react';
import { Memo } from './types';

const STORAGE_KEY = 'notes';

export const useMemos = () => {
  const [memos, setMemos] = useState<Memo[]>([]);
  const [currentMemoId, setCurrentMemoId] = useState<string | null>(null);

  // ローカルストレージからメモを読み込み
  useEffect(() => {
    const savedMemos = localStorage.getItem(STORAGE_KEY);
    if (savedMemos) {
      const parsedMemos = JSON.parse(savedMemos).map((memo: any) => ({
        ...memo,
        createdAt: new Date(memo.createdAt),
        updatedAt: memo.updatedAt ? new Date(memo.updatedAt) : undefined,
      }));
      setMemos(parsedMemos);
      if (parsedMemos.length > 0) {
        setCurrentMemoId(parsedMemos[0].id);
      }
    }
  }, []);

  // ローカルストレージに保存
  const saveToStorage = (newMemos: Memo[]) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newMemos));
  };

  // 新規メモ作成
  const createMemo = () => {
    const newMemo: Memo = {
      id: Date.now().toString(),
      title: '',
      content: '',
      createdAt: new Date(),
    };
    const newMemos = [newMemo, ...memos];
    setMemos(newMemos);
    setCurrentMemoId(newMemo.id);
    saveToStorage(newMemos);
    return newMemo.id;
  };

  // メモ保存
  const saveMemo = (id: string, title: string, content: string) => {
    const newMemos = memos.map((memo) =>
      memo.id === id
        ? { ...memo, title, content, updatedAt: new Date() }
        : memo
    );
    setMemos(newMemos);
    saveToStorage(newMemos);
  };

  // メモ削除
  const deleteMemo = (id: string) => {
    const newMemos = memos.filter((memo) => memo.id !== id);
    setMemos(newMemos);
    saveToStorage(newMemos);

    if (currentMemoId === id) {
      setCurrentMemoId(newMemos.length > 0 ? newMemos[0].id : null);
    }
  };

  // 現在のメモ取得
  const currentMemo = memos.find((memo) => memo.id === currentMemoId) || null;

  return {
    memos,
    currentMemo,
    currentMemoId,
    setCurrentMemoId,
    createMemo,
    saveMemo,
    deleteMemo,
  };
};