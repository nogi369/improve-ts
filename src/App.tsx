// 通常
// export const Props = (props: string) => {
//   const { message } = props;
//   console.log(props);

import { FC } from "react";

//   return <div>{message}</div>;
// };

// props省略
// export const Props2 = ({ message }: { message: string }) => {
//   console.log(message);

//   return <div>{message}</div>;
// };

// export const Props2 = ({ message }: { message: string }) => {
//   console.log(message);

//   return <div>{message}</div>;
// };

// interface
interface FCProps {
  message?: string;
}

// FC
// export const FunctionalComponent: FC = ({message}: FCProps) => {
export const FunctionalComponent: FC<FCProps> = ({ message }) => {
  return <div>{message}</div>;
};
