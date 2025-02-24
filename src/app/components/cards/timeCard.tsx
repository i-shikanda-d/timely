import Image from "next/image";
import React from "react";

const TimeCard = () => {
  return (
    <>
      <div>
        <Image src="/" alt="" width={50} height={50} />
        <div>
          <h1>Title</h1>
          <p>
            Description goes here
          </p>
        </div>
      </div>
    </>
  );
};

export default TimeCard;
