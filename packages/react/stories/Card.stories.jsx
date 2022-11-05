import React from 'react';
import { backgrounds } from '../.storybook/constants';
import { Card } from '../src';

export default {
  title: 'Basics/Card',
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  mode: 'default',
  children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
};
Default.parameters = {
  backgrounds: backgrounds.body,
};

export const Outline = Template.bind({});
Outline.args = {
  mode: 'outline',
  children: 'Donec a diam lectus. Sed sit amet ipsum mauris.',
};
