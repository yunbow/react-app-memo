import type { Meta, StoryObj } from '@storybook/react';
import { Text } from '../components/Text';

const meta: Meta<typeof Text> = {
  title: 'Components/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['h1', 'h2', 'body', 'empty'],
    },
    color: {
      control: 'select',
      options: ['default', 'muted'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Heading1: Story = {
  args: {
    children: 'シンプルメモ帳',
    variant: 'h1',
  },
};

export const Heading2: Story = {
  args: {
    children: 'メモ一覧',
    variant: 'h2',
  },
};

export const Body: Story = {
  args: {
    children: 'これは本文テキストです',
    variant: 'body',
  },
};

export const Empty: Story = {
  args: {
    children: 'メモがありません。新規メモを作成してください。',
    variant: 'empty',
  },
};