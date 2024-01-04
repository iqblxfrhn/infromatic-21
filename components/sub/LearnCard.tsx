import React from "react";

const LearnCard = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API}/learns?populate=*`
  );
  const learn = await response.json();
  console.log(learn);

  return (
    <div>
      <h1></h1>
      {}
    </div>
  );
};

export default LearnCard;
