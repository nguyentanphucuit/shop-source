import React from "react";
import ExportedImage from "next-image-export-optimizer";
import SourceDetails from "@/app/components/SourceDetails";
import sourceImg from "/public/assets/img/bgmetagun1.jpg";
import { listSource } from "@/app/constants/index";

const ListSourceInfo = () => {
  return (
    <>
      <ExportedImage
        className="rounded-t-lg"
        alt="metagun button"
        src={sourceImg}></ExportedImage>
      <div className="p-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {listSource.map((source) => (
            <SourceDetails key={source.id} {...source} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ListSourceInfo;
