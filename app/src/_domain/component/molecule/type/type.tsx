import { useSelector } from "react-redux";
import S from "./style";
import { RootState } from "../../../../common/feature/store";

function Type(): JSX.Element {
  const authState = useSelector((state: RootState) => state.auth.state);
  return (
    <S.Container>
      <S.TypeButton sx={{ backgroundColor: "white" }}>
        {authState ? "강원" : "미래24"}
      </S.TypeButton>
      <S.TypeButton sx={{ borderRight: "1px solid #959595", opacity: 0.7 }}>
        {authState ? "미래24" : "기업 / 기관"}
      </S.TypeButton>
    </S.Container>
  );
}
export default Type;
