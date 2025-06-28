import { Code } from "lucide-react";
import { memo } from "react";

const Tags = ({ description }: { description: string }) => {
  return (
    <p className="border flex items-center not-lg:text-xs font-medium gap-2 border-gray-700 text-xs rounded-full w-fit px-3 py-1">
      <Code className="w-4 h-4" />
      {description}
    </p>
  );
};

export default memo(Tags);
