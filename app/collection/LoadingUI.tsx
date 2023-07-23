"use client";
import Skeleton from "@mui/material/Skeleton";

const LoadingUI = function () {
  return (
    <div className="flex flex-col gap-1 max-w-[300px]">
      <Skeleton
        animation="wave"
        variant="rectangular"
        width={310}
        height={222.5}
      />
      <Skeleton
        animation="wave"
        variant="rectangular"
        width={125}
        height={27.5}
      />
      <Skeleton
        animation="wave"
        variant="rectangular"
        width={300}
        height={22.5}
      />
      <Skeleton
        animation="wave"
        variant="rectangular"
        width={150}
        height={17.5}
      />
      <div className="flex flex-wrap gap-1">
        <Skeleton
          animation="wave"
          variant="rectangular"
          width={85}
          height={30}
        />
        <Skeleton
          animation="wave"
          variant="rectangular"
          width={90}
          height={30}
        />
        <Skeleton
          animation="wave"
          variant="rectangular"
          width={92}
          height={30}
        />
        <Skeleton
          animation="wave"
          variant="rectangular"
          width={110}
          height={30}
        />
        <Skeleton
          animation="wave"
          variant="rectangular"
          width={140}
          height={30}
        />
      </div>
    </div>
  );
};

export default LoadingUI;
