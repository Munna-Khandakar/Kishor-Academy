import React from "react";
import "../Card2/Card2.css";
import Skeleton from "@mui/material/Skeleton";
const CardSkeleton = () => {
  return (
    <div className="card-skeleton">
      <Skeleton variant="circular" width={80} height={80} />
      <Skeleton variant="text" sx={{ fontSize: "1rem" }} width={120} />
      <Skeleton variant="rounded" width={210} height={60} />
      <Skeleton variant="rectangular" width={100} height={30} />
    </div>
  );
};

export default CardSkeleton;
