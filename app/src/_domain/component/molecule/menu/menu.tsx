import S from "./style"

type menuProps = {
  menu: string; 
};

function Menu({menu}: menuProps): JSX.Element {
  return(
    <S.MenuText>{menu}</S.MenuText>
    
  )
}
export default Menu