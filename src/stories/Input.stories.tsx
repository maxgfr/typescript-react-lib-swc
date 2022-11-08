import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Input } from '../Input';

export default {
  title: 'Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = () => <Input />;

export const Default = Template.bind({});
Default.args = {};
