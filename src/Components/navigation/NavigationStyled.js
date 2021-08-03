/** @format */

import styled from "styled-components";

export const NavigationStyled = styled.nav`
  .navigationList {
    display: flex;
    list-style: none;
  }
  .navigationItem:not(:last-child) {
    margin-right: 20px;
  }
  .navigationLink {
    font-size: 20px;
    text-decoration: none;
    text-transform: uppercase;
    color: #1515d3;
  }
  .activNavigationLink {
    color: #da1111;
    border-bottom: 1px solid #da1111;
  }
`;
