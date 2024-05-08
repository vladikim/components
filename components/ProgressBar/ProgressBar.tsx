import { FC } from "react";

export const ProgressBar: FC<{ percent: number }> = ({ percent }) => (
  <div className="h-[20px] p-[4px] rounded-full border-2  border-primary bg-secondary flex items-center">
    <div
      className="min-w-[12px] h-[12px] bg-tertiary rounded-full"
      style={{ width: percent + "%" }}
    />
  </div>
);
