import S from "./style";

type menuProps = {
  menu: string;
};

function Menu({ menu }: menuProps): JSX.Element {
  return <S.MenuText variant="h6">{menu}</S.MenuText>;
}
export default Menu;
