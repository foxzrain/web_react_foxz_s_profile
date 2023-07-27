import React from "react";
import _ from "lodash";
import '../css/layout.css';
import '../css/media-queries.css';

function Separator(props) {
  return (
    <div
      style={{
        position: "absolute",

        height: "100%",
        transform: `rotate(${props.turns}turn)`
      }}
    >
      <div style={props.style} />
    </div>
  );
}

function RadialSeparators(props) {
  const turns = 1 / props.count;
  return _.range(props.count).map((index) => (
    <Separator turns={index * turns} style={props.style} />
  ));
}

export default RadialSeparators;
