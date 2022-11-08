import { ComponentStory, ComponentMeta } from '@storybook/react';
import { HelloWorld } from '../HelloWorld';

export default {
  title: 'HelloWorld',
  component: HelloWorld,
} as ComponentMeta<typeof HelloWorld>;

const Template: ComponentStory<typeof HelloWorld> = (args) => (
  <HelloWorld {...args} />
);

export const Default = Template.bind({});
Default.args = {
  name: 'World',
};
