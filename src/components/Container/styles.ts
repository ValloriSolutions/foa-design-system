import styled from 'styled-components';

import { ContainerProps } from './';

export const StyledContainer = styled.div<Omit<ContainerProps, 'text'>>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
`;
