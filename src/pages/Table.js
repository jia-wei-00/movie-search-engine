import React from "react";
import styled from "styled-components";
import { observer } from "mobx-react";
import store from "../store";

const Table = styled.table`
  margin-top: 20px;
  width: 100%;

  td,
  th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }

  tr:nth-child(even) {
    background-color: #dddddd;
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  border: 1px solid rgba(0, 0, 0, 0.2);
  margin: 5px;

  div {
    border-right: 1px solid rgba(0, 0, 0, 0.2);
  }
`;

function ListTable() {
  console.log(store.Title, "data");

  return (
    <Table>
      <thead>
        <tr>
          <th>Image</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <img src={store.data.Poster} alt="poster" />
          </td>
          <td>
            <Container>
              <div>Title:</div>
              {store.data.Title}
            </Container>
            <Container>
              <div>Rated:</div>
              {store.data.Rated}
            </Container>
            <Container>
              <div>Rating:</div> {store.data.imdbRating}
            </Container>
            <Container>
              <div>Released Date:</div> {store.data.Released}
            </Container>
            <Container>
              <div>Duration:</div> {store.data.Runtime}
            </Container>
            <Container>
              <div>Plot:</div> {store.data.Plot}
            </Container>
            <Container>
              <div>Director:</div> {store.data.Director}
            </Container>
            <Container>
              <div>Actors:</div> {store.data.Actors}
            </Container>
            <Container>
              <div>Language:</div> {store.data.Language}
            </Container>
            <Container>
              <div>Awards:</div> {store.data.Awards}
            </Container>
          </td>
        </tr>
      </tbody>
    </Table>
  );
}

export default observer(ListTable);
