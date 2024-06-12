import Image from "next/image";
import React from "react";
import ContentCard from "../contentCard/ContentCard";
import { homeContent } from "../../utils/constant";
const Home = () => {
  return (
    <ContentCard
      contentData={homeContent}
      id={"Home"}
      title="LOREM IPSUM
  "
    />
  );
};

export default Home;
