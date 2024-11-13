import S from "./style";

type menuProps = {
  menu: string;
  onClick?: () => void;
};

function Menu({ menu, onClick }: menuProps): JSX.Element {
  return <S.MenuText variant="h6" onClick={onClick} sx={{ cursor: "pointer" }}>{menu}</S.MenuText>;
}
export default Menu;
