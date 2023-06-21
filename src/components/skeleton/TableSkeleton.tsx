import { Skeleton } from "@mui/material";

const TableSkeleton = () => {
  return (
    <div className="grid">
      <div className="w-full h-[71px] bg-text-200 border border-text-300 rounded-t-[4px] grid grid-cols-6 items-center justify-center px-4">
        {Array.from(Array(5).keys()).map((item, index) => (
          <Skeleton
            variant="rounded"
            width={"37px"}
            height={18}
            key={index}
            animation="wave"
          />
        ))}
      </div>

      {Array.from(Array(5).keys()).map((item, index) => (
        <div key={index} className="w-full h-[71px] border border-text-300 border-t-0 rounded-t-[4px] grid grid-cols-6 items-center justify-center px-4">
          {Array.from(Array(5).keys()).map((item, index) => (
            <Skeleton
              variant="rounded"
              width={"45px"}
              height={18}
              key={index}
              animation="wave"
            />
          ))}
          <div className="w-[120px] flex items-cente justify-center">
            <div className="w-[92px] h-[38px] rounded-full border border-text-400 flex items-center justify-center">
              <Skeleton
                variant="rounded"
                width={"47px"}
                height={14}
                animation="wave"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default TableSkeleton;
