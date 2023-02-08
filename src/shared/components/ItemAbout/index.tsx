import * as C from './style';

interface IItemProps {
  title?: string;
  subTitle?: string;
}

export const ItemAbout = ({ title, subTitle }: IItemProps) => {
  return (
    <C.Item>
      <C.ItemContainer>
        <C.Box>
          <C.Title>{title}</C.Title>
          <C.SubTitle>{subTitle}</C.SubTitle>
        </C.Box>
      </C.ItemContainer>
    </C.Item>
  );
};
