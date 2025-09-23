import type { Meta, StoryObj } from '@storybook/react';
import { MemoApp } from '../../features/memo/MemoApp';

const meta: Meta<typeof MemoApp> = {
  title: 'Features/Memo/MemoApp',
  component: MemoApp,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};