import React from 'react';

export function Invitation(props) {
  const { subject, to, name, date, location, from } = props;

  return (
    <div style={{ backgroundColor: props.bgColor, color: props.textColor }}>
      <h2>{subject}</h2>
      <p>To: {to}</p>
      <p>Hi, {name}</p>
      <p>
        I am having a birthday party on {date} at {location}. Would you like to come? It will be fun. Lots of people from my school are coming. You know some of them - Ritu, Saurabh, Kartik.
      </p>
      <p>My house is behind our school, near {location}.</p>
      <p>I hope you will come and see you soon.</p>
      <p>From,</p>
      <p>{from}</p>
    </div>
  );
}

export default Invitation;
