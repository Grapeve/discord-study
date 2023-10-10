"use client";

import { ServerWithMembersWithProfiles } from "@/types";

import { ChannelType, MemberRole } from "@prisma/client";
import { Plus, Settings } from "lucide-react";

import ActionTooltip from "@/components/action-tooltip";
import { useModal } from "@/hooks/use-modal-store";

interface ServerSectionProps {
  label: string;
  role?: MemberRole;
  sectionType: "channels" | "members";
  channelType?: ChannelType;
  server?: ServerWithMembersWithProfiles;
}

const ServerSection = ({
  label,
  role,
  sectionType,
  channelType,
  server,
}: ServerSectionProps) => {
  const { onOpen } = useModal();

  return (
    <div className="flex items-center justify-between py-2">
      {/* 频道类型文本 */}
      <p className="text-xs uppercase font-semibold text-zinc-500 dark:text-zinc-400">
        {label}
      </p>
      {/* 创建频道 */}
      {role !== MemberRole.GUEST && sectionType === "channels" && (
        <ActionTooltip laber="Create Channel" side="top">
          <button
            onClick={() => onOpen("createChannel", { channelType })}
            className="text-zinc-500 hover:text-zinc-600
            dark:text-zinc-400 dark:hover:text-zinc-50 transition"
          >
            <Plus className="h-4 w-4" />
          </button>
        </ActionTooltip>
      )}
      {/* 邀请成员 */}
      {role === MemberRole.ADMIN && sectionType === "members" && (
        <ActionTooltip laber="Manage Members" side="top">
          <button
            onClick={() => onOpen("members", { server: server })}
            className="text-zinc-500 hover:text-zinc-600
            dark:text-zinc-400 dark:hover:text-zinc-50 transition"
          >
            <Settings className="h-4 w-4" />
          </button>
        </ActionTooltip>
      )}
    </div>
  );
};

export default ServerSection;
