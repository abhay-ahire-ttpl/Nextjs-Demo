import React from "react";
import ContentCard from "../contentCard/ContentCard";
import { dolorContent } from "../../utils/constant";
const Dolor = () => {
  return (
    <ContentCard
      contentData={dolorContent}
      id={"Dolor"}
      title="LOREM IPSUM DOLOR SET"
    />
  );
};

export default Dolor;
