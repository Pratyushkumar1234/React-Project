import { NavLink } from "react-router-dom";
import { styled } from "styled-components";
import { Button } from "../Styles/Button";

export default function HeroSection() {
  return (
    <>
      <Wrapper>
        <div className="container grid grid-two-column">
          {/* for data */}
          <div className="section-hero-data">
            <p className="hero-top-data">This is me</p>
            <h1 className="hero-heading">Pratyush Sahoo</h1>
            <p className="hero-para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              dolores perferendis explicabo tempora aspernatur aliquid.
              Necessitatibus expedita minima, neque, amet modi alias sit dolorem
              explicabo temporibus eos reiciendis incidunt sint.
            </p>
          </div>
          <Button className="btn hireme-btn">
            <NavLink to="/contact">Hireme</NavLink>
          </Button>
          {/* for image */}
          <div className="section-hero-image"></div>
        </div>
      </Wrapper>
    </>
  );
}
const Wrapper = styled.section``;
