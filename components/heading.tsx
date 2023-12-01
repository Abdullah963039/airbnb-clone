import { cn } from "@/lib/utils";

interface HeadingProps {
  title: string;
  subTitle?: string;
  center?: boolean;
}
export const Heading = ({ title, center, subTitle }: HeadingProps) => {
  return (
    <div className={cn(center ? "text-center" : "text-start")}>
      <div className="text-2xl font-bold">{title}</div>
      <div className="font-light text-neutral-500 mt-2">{subTitle}</div>
    </div>
  );
};
