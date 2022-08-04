import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StyledButton } from '../components/styledButton';
import { action } from "@storybook/addon-actions"
import { useState } from 'react';

export default {
  // グループ名
  title: "StyledButton",
  // 使用するコンポーネント
  component: StyledButton,
  argTypes: {
    // onClick: { action: "clicked" },
    variant: {
      control: { type: "radio" },
      options: ["primary", "success", "transparent"]
    }
  },
  children: {
    control: { type: "text" }
  }
} as ComponentMeta<typeof StyledButton>

const Template: ComponentStory<typeof StyledButton> = (args) => <StyledButton {...args} />

export const TemplateTest = Template.bind({})

TemplateTest.args = {
  variant: "primary",
  children: "Primary"
}
// const incrementAction = action("increment")

// export const Primary = (props: any) => {
//   const [count, setCount] = useState(0);
//   const onClick = (e: React.MouseEvent) => {
//     // 現在のカウントを渡して、Actionを呼ぶ
//     incrementAction(e, count)
//     setCount((c) => c + 1)
//   }
//   return (
//     <StyledButton {...props} variant="primary" >
//       count: {count}
//     </StyledButton>
//   )
// }
// export const Success = (props: any) => {
//   return (
//     <StyledButton {...props} variant="success">
//       Success
//     </StyledButton>
//   )
// }
// export const TransParent = (props: any) => {
//   return (
//     <StyledButton {...props} variant="transparent">
//       TransParent
//     </StyledButton>
//   )
// }
