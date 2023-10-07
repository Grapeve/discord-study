import { cn } from "@/lib/utils";
import type { MenuProps } from "antd";
import { Dropdown } from "antd";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useState } from "react";

const Toggle = () => {
  const { setTheme } = useTheme();
  const [isSun, setIsSun] = useState(false);

  const items: MenuProps["items"] = [
    {
      key: "dark",
      label: "Light",
    },
    {
      key: "light",
      label: "Dark",
    },
  ];

  const handleModeToggle = (key: string) => {
    if (key == "light") {
      setTheme("dark");
      setIsSun(false);
    } else {
      setTheme("light");
      setIsSun(true);
    }
  };

  return (
    <div>
      <Dropdown
        menu={{
          items,
          onClick: ({ key }) => handleModeToggle(key),
        }}
      >
        <div
          className={cn(
            "w-10 h-10 bg-gray-100 flex justify-center items-center border-gray-100 border-[1px] rounded-md",
            !isSun && " bg-slate-950 border-gray-950",
            "transition-all duration-100 ease-linear"
          )}
        >
          {!isSun ? <Moon className="text-white" /> : <Sun />}
        </div>
      </Dropdown>
    </div>
  );
};

export default Toggle;
