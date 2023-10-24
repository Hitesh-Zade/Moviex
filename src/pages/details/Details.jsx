import React from "react";
import "./style.scss";
import { useParams } from "react-router-dom";
import useFetch from "../../hook/useFetch";
import Cast from "./cast/Cast";
import DetailsBanner from "./detailsBanner/DetailsBanner";
import VideosSection from "./videoSection/VideoSection";
import Similar from "./carousels/Similar";
import Recommendation from "./carousels/Recommondation";
const details = () => {
  const { mediaType, id } = useParams();
  const { data, loading } = useFetch(`${mediaType}/${id}/videos`);
  const { data: creditsData, loading: creditsLoading } = useFetch(
    `${mediaType}/${id}/credits`
  );

  return (
    <div>
      <DetailsBanner video={data?.results?.[0]} crew={creditsData?.crew} />
      <Cast data={creditsData?.cast} loading={creditsLoading} />
      <VideosSection data={data} loading={loading} />
      <Similar mediaType={mediaType} id={id} />
      <Recommendation mediaType={mediaType} id={id} />
    </div>
  );
};

export default details;
