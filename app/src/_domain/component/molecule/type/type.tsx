import S from "./style";

function Type(): JSX.Element {
  return (
    <S.Container>
      <S.TypeButton sx={{ backgroundColor: "white" }}>강원</S.TypeButton>
      <S.TypeButton sx={{ borderRight: "1px solid #959595", opacity: 0.7 }}>
        미래24
      </S.TypeButton>
    </S.Container>
  );
}
export default Type;
