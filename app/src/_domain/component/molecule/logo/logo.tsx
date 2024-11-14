import { useSelector } from "react-redux";
import images from "../../../../common/assets/image/_index";
import { RootState } from "../../../../common/feature/store";
import S from "./style";

type LogoProps = {
  location: string;
};

function Logo({ location }: LogoProps): JSX.Element {
  const authState = useSelector((state: RootState) => state.auth.state);
  return (
    <S.Container
      onClick={() => {
        window.location.href = "http://localhost:5173/#intro";
      }}
    >
      <S.LogoImage src={images.GOV} />
      <S.LogoText variant="h5">
        {/* {"미래24" + (location.length != 0 ? " | " + location : "")} */}
        {"미래24" + (authState ? " | " + "강원특별자치도" : "")}
      </S.LogoText>
    </S.Container>
  );
}
export default Logo;
