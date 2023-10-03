import type { Meta, StoryObj } from '@storybook/react';
import Checkbox from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  argTypes: {}
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Primary: Story = {};