import React from 'react';
import { FaCompactDisc } from 'react-icons/fa';
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

export const IconOnly = Template.bind({});
IconOnly.args = {
  type: 'primary',
  icon: <FaCompactDisc />,
};

export const IconText = Template.bind({});
IconText.args = {
  type: 'primary',
  icon: <FaCompactDisc />,
  children: 'Button',
};
