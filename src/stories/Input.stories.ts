import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '../components/Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'textarea'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const TextInput: Story = {
  args: {
    value: '',
    placeholder: 'タイトルを入力',
    type: 'text',
  },
};

export const TextArea: Story = {
  args: {
    value: '',
    placeholder: 'メモを入力してください...',
    type: 'textarea',
  },
};

export const WithValue: Story = {
  args: {
    value: 'サンプルテキスト',
    placeholder: 'タイトルを入力',
    type: 'text',
  },
};