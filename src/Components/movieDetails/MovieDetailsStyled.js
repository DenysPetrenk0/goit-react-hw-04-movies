/** @format */

import styled from "styled-components";

export const MovieDetailsStyled = styled.div`
  padding: 35px;
  border-bottom: 3px solid #858080;

  .btnGoBack {
    border: transparent;
    background-color: transparent;
    color: #1515d3;
    font-size: 20px;
    text-transform: uppercase;

    &:hover {
      color: #da1111;
      border-bottom: 1px solid #da1111;
    }
  }

  .movieDetaliesTitle {
    font-size: 25px;
    text-align: center;
    color: #1515d3;
    text-transform: uppercase;
  }

  .movieDetaliesImg {
    width: 300px;
  }

  .movieDetaliesBox {
    display: flex;
  }

  .movieDetaliesBoxText {
    padding: 20px;
  }

  .movieDetaliesText {
    font-size: 20px;
  }
`;
