import * as C from './style';

interface ButtonProps {
  text: string;
  link: string;
}

export const Button = ({ link, text }: ButtonProps) => {
  return (
    <a href={link} aria-label={text}>
      <C.Button>{text}</C.Button>
    </a>
  );
};
