import styled from 'styled-components';
import borders from '../../theme/borders';

import { CardProps } from './';

export const StyledCard = styled.div<Omit<CardProps, 'text'>>`
  display: block;
  width: 500px;
  height: 40px;
  margin-bottom: 20px;
  border-radius: ${borders.radius.card};
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ color }): string | undefined => color};
`;
