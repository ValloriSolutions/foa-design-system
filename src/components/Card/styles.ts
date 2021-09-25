import styled from 'styled-components';
import borders from '../../theme/borders';

import { CardProps } from './';

export const StyledCard = styled.div`
  display: "block";
  width: 500;
  height: 40;
  margin-bottom: 20;
  border-radius: ${borders.radius.card};
  background: ${(props: CardProps) => props.color};
`;
