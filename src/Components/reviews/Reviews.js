/** @format */

import React, { Component } from "react";
import apiServices from "../../services/apiServices";
import { error } from "@pnotify/core";
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";

class Reviews extends Component {
  state = {
    reviews: [],
  };

  async componentDidMount() {
    const { id } = this.props.match.params;
    const response = await apiServices.fetchReviews(id).catch(() => {
      error({
        text: "oops something went wrong!!!!!!!!!!!",
      });
    });
    this.setState({ reviews: response.data.results });
  }

  render() {
    return (
      <ul>
        {this.state.reviews.map(({ id, author, content }) => (
          <li key={id}>
            <p>{author}</p>
            <p>{content}</p>
          </li>
        ))}
      </ul>
    );
  }
}

export default Reviews;
