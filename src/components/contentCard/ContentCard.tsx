import Image from "next/image";
import React from "react";
import Card from "../card/Card";

interface contentType {
  title: string;
  description: string;
  image1: string;
  image2: string;
}

const ContentCard = ({
  contentData,
  id,
  title,
}: {
  contentData: contentType[];
  id: string;
  title: string;
}) => {
  return (
    <Card id={id}>
      <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-[7.5rem] dark:text-white">
        {title}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-8">
        {contentData.map((content: contentType) => (
          <div key={content.title}>
            {content.image1 != "" && (
              <Image
                alt="user-image"
                src={content.image1}
                width="500"
                height="500"
                className=" mr-2 mb-10 mt-5"
              />
            )}
            <h1 className="font-bold text-[1.2rem]  text-white  mb-3  mt-5">
              {content.title}
            </h1>
            <p className="leading-8 text-[#FFFFFF] opacity-70">
              {content.description}
            </p>
            <div className="mt-5">
              {content.image2 != "" && (
                <Image
                  alt="server-icon"
                  src={content.image2}
                  width="20"
                  height="20"
                  className=" mr-2"
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default ContentCard;
