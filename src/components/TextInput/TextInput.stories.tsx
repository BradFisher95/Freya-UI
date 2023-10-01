import type { Meta, StoryObj } from '@storybook/react';
import TextInput from './TextInput';

const meta: Meta<typeof TextInput> = {
  title: 'Components/TextInput',
  component: TextInput,
  argTypes: {}
};

export default meta;

type Story = StoryObj<typeof TextInput>;

export const Primary: Story = {
  args: {
    label: 'Email Address',
    placeholder: 'Enter your email'
  }
};
