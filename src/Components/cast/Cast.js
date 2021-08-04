/** @format */

import React, { Component } from "react";
import apiServices from "../../services/apiServices";
import { CastStyled } from "./CastStyled";
import { error } from "@pnotify/core";
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";

class Cast extends Component {
  state = {
    cast: [],
  };

  async componentDidMount() {
    const { id } = this.props.match.params;
    const response = await apiServices.fetchCast(id).catch(() => {
      error({
        text: "oops something went wrong!!!!!!!!!!!",
      });
    });
    this.setState({ cast: response.data.cast });
  }

  render() {
    return (
      <CastStyled>
        {this.state.cast.map(
          ({ name, id, known_for_department, profile_path }) => (
            <li key={id}>
              {profile_path && (
                <img
                  className="castImg"
                  src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
                  alt={name}
                />
              )}
              <p>{name}</p>
              <p>{known_for_department}</p>
            </li>
          )
        )}
      </CastStyled>
    );
  }
}

export default Cast;
