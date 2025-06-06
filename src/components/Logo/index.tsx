import styled from 'styled-components';
import type { CSSProperties } from 'react';

type props = {
  color?: CSSProperties['color'];
  size?: 'full' | 'medium' | 'short';
};

export const Logo = styled.h1<props>`
  font-family: 'Bad Script', cursive;
  font-weight: 800;
  font-style: normal;
  font-size: ${({ size }) =>
    size === 'full'
      ? '1.4rem'
      : size === 'medium'
        ? '1rem'
        : size === 'short'
          ? '0.8rem'
          : '1.4rem'};
  -webkit-text-stroke: 1px ${({ color }) => (color ? color : '#000')};
  text-shadow: 0px 2px 5px ${({ color }) => (color ? color : '#000')};
  border: 0;
  margin: 0;
  letter-spacing: 0.05rem;
`;
