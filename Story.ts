import { Story } from '@storybook/react/types-6-0';
import Button from '.';
import { IProps } from './types';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'radio',
      },
    },
  },
};

export const Default = () => <Button />;

export const Sizes = () => (
  <>
    <h1>abc</h1>
    <Button size="sm">button size small</Button>
    <br />
    <Button size="md">button size medium</Button>
    <br />
    <Button size="lg">button size large</Button>
  </>
);
const Template: Story<IProps> = args => (
  <Button {...args}>button size large</Button>
);
export const Screen = Template.bind({});
export const ScreenSub = Template.bind({});

//truyền biến init vào
Screen.args = {
  color: 'red',
  size: 'sm',
};
export const Disabled = () => <Button disabled>disabled button</Button>;

export const Rounded = () => <Button rounded>rounded button</Button>;
