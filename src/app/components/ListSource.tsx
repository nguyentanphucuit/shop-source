import React from "react";
import Image from "next/image";
import SourceDetails from "@/app/components/SourceDetails";
import sourceImg from "/public/assets/img/bgmetagun1.jpg";
import { listSource } from "@/app/constants/index";

const ListSourceInfo = () => {
  return (
    <>
      <Image
        className="rounded-t-lg"
        alt="metagun button"
        src={sourceImg}></Image>
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
