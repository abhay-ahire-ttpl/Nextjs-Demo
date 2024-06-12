import React from "react";

const Card = ({ children, id }: { children: React.ReactNode; id: string }) => {
  return (
    <section
      className="container m-auto max-w-[1050px] pt-24 relative p-6"
      id={id}
    >
      {children}
    </section>
  );
};

export default Card;
