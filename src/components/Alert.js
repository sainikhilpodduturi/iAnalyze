import React from "react";

export default function Alert(props) {
  const capitalize = (word) => {
    let letter = word.toLowerCase();
    return letter.charAt(0).toUpperCase() + letter.slice(1);
  };
  return (
    <div style={{height: '40px'}}>
      {props.alert && (
      <div
        class={`alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert"
      >
        <strong>{capitalize(props.alert.type)}! </strong> {props.alert.message}
      </div>
      )}
    </div>
  );
}
