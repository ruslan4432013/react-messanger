import {MouseEvent} from "react";

export type ChatItemType = {
    id: number
    name: string,
}

export type ChatItemProps = {
    selectedIndex: number,
    handleListItemClick: (event: MouseEvent, index: number) => void
} & ChatItemType
