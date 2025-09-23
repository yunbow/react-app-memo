import type { Meta, StoryObj } from '@storybook/react';
import { MemoItem } from '../../features/memo/components/MemoItem';

const mockMemo = {
  id: '1',
  title: 'サンプルメモ',
  content: 'これはサンプルのメモ内容です。',
  createdAt: new Date(),
};

const meta: Meta<typeof MemoItem> = {
  title: 'Features/Memo/Components/MemoItem',
  component: MemoItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    memo: mockMemo,
    isActive: false,
    onClick: () => {},
  },
};

export const Active: Story = {
  args: {
    memo: mockMemo,
    isActive: true,
    onClick: () => {},
  },
};

export const NoTitle: Story = {
  args: {
    memo: {
      ...mockMemo,
      title: '',
    },
    isActive: false,
    onClick: () => {},
  },
};