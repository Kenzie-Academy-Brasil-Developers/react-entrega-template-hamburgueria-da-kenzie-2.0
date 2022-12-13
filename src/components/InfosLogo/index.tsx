import { StyledBoxInfos, StyledBoxtextInfos } from "./style";
import logo from "../../assets/logo.svg";
import elipses from "../../assets/elipses.png";
import shopping from "../../assets/shopping-bag.svg";
export const InfosLogo = () => {
  return (
    <>
      <StyledBoxInfos>
        <img src={logo} alt="logo Kenzie Burguer" />
        <StyledBoxtextInfos>
          <div>
            <img src={shopping} alt="" />
          </div>
          <p>
            A vida é como um sanduíche, é preciso recheá-la com os melhores
            ingredientes.
          </p>
        </StyledBoxtextInfos>
        <img src={elipses} alt="" />
      </StyledBoxInfos>
    </>
  );
};
