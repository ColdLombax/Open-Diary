import { Container } from '@material-ui/core';
import styled from 'styled-components';
import React from 'react';

const StyledContainer = styled(Container)`
    text-align: center;
`;

export default function Login() {
  return (
    <StyledContainer fixed>
      <h1>Open Diary</h1>
    </StyledContainer>
  );
}
