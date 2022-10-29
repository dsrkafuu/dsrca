import { Button } from '../src';

export default {
  title: 'Basics/Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: 'default',
  children: 'Button',
};

export const Primary = Template.bind({});
Primary.args = {
  type: 'primary',
  children: 'Button',
};

export const Success = Template.bind({});
Success.args = {
  type: 'success',
  children: 'Button',
};

export const Danger = Template.bind({});
Danger.args = {
  type: 'danger',
  children: 'Button',
};
