import styled from 'styled-components';
import { borders, colors } from '../../theme/';
import { FlexBox } from '../FlexBox';

import { CardProps } from './';

export const StyledCard = styled(FlexBox)<CardProps>`
  border-top: ${({ bordered }): string | undefined =>
    bordered ? `1px solid ${colors.border.default}` : 'transparent'};
  border-radius: ${({ noRound }): string | undefined =>
    noRound ? '0' : borders.radius.card};
  box-shadow: ${({ noShadow }): string | undefined =>
    noShadow
      ? 'none'
      : '0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12)'};
  background-color: ${colors.background.paper};
`;
