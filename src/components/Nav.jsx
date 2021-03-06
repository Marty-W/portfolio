import React from 'react';
import styled from 'styled-components/macro';
import { ReactComponent as LogoSVG } from '../assets/Logo.svg';
import { motion } from 'framer-motion';

const Nav = () => (
  <Wrapper
    initial={{ y: -500 }}
    animate={{ y: 0 }}
    transition={{ duration: 3, type: 'spring', stiffness: 30, mass: 1.5 }}>
    <Logo />
    <Links>
      <a href='#work'>
        <span>work</span>
      </a>
      <a href='#contact'>
        <span>contact</span>
      </a>
    </Links>
  </Wrapper>
);
const Wrapper = styled(motion.div)`
  grid-area: nav;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Links = styled.div`
  height: 60%;
  text-transform: lowercase;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  color: ${(props) => props.theme.colors.tertiary};

  @media (min-width: 800px) {
    flex-direction: row;
    height: 100%;
    align-items: center;

    & a {
      margin-right: 2rem;
    }
  }
`;

const Logo = styled(LogoSVG)`
  width: 3rem;
  height: 3rem;
  stroke: ${(props) => props.theme.colors.tertiary};
`;

export default Nav;
