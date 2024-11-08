"use client";
import React from "react";
import SourceDetails from "@/app/components/SourceDetails";
import sourceImg from "/public/assets/img/bgmetagun1.jpg";
import ExportedImage from "next-image-export-optimizer";
import Search from "../ui/search";
import { fetchFilteredSource, fetchSourcesPage } from "@/app/constants/common";
import Pagination from "./Pagination";
import { useSearchParams } from "next/navigation";

const ListSourceInfo = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";
  const currentPage = searchParams.get("page") || 1;
  const sources = fetchFilteredSource(query, +currentPage);

  const totalPages = fetchSourcesPage(query);

  return (
    <>
      <ExportedImage
        className="rounded-t-lg"
        alt="metagun button"
        src={sourceImg}></ExportedImage>
      <div className="pt-12">
        <Search placeholder="Type something ..." />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {sources.map((source) => (
            <SourceDetails key={source.id} {...source} />
          ))}
        </div>
        <Pagination totalPages={totalPages} />
      </div>
    </>
  );
};

export default ListSourceInfo;
