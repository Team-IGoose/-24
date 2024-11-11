import images from "../../../common/assets/image/_index";
import M from "../molecule/_index";

function Name(): JSX.Element {
  return (
    <>
      <img src={images.EG} /> 이 누리집은 대한민국 공식 전자정부 누리집입니다.
      <M.NameTextField />
      <M.NameButton />
    </>
  );
}
export default Name;
