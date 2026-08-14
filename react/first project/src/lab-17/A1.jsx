// Demonstrate the use of map method in ReactJS to display array.
// import React from 'react'

function A1() {
  const name = ["Urvashi", "Neha", "Trushal", "Harit"];
  return (
    <>
      <ul>
        {name.map((n) => {
          return <li>{n}</li>;
        })}
      </ul>
    </>
  );
}

export default A1;
