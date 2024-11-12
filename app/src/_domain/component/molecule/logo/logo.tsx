import images from "../../../../common/assets/image/_index"
import S from "./style"

type LogoProps = {
  location: string; 
};

function Logo({ location }: LogoProps):JSX.Element {
  return(
    <S.Container>
      <S.LogoImage src={images.GOV} />
      <S.LogoText variant="h5">{"미래24" + ( (location.length != 0) ? (" | " + location) : "" )}
      </S.LogoText>
    </S.Container>
  )
}
export default Logo