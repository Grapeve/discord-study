"use client";

import { Plus } from "lucide-react";

import ActionTooltip from "@/components/action-tooltip";
import { useModal } from "@/hooks/use-modal-store";

const NavigationAction = () => {
  const { onOpen } = useModal();

  return (
    <div>
      <ActionTooltip side="right" align="center" laber="Add a server">
        <button
          onClick={() => onOpen("createServer")}
          className="group flex items-center"
        >
          <div
            className="flex mx-3 h-[48px] w-[48px] rounded-[24px] 
            group-hover:rounded-[16px] overflow-hidden items-center
            justify-center bg-background dark:bg-neutral-700 
            group-hover:bg-emerald-500"
          >
            <Plus
              size={25}
              className="group-hover:text-white transition-all text-emerald-500"
            ></Plus>
          </div>
        </button>
      </ActionTooltip>
    </div>
  );
};

export default NavigationAction;
