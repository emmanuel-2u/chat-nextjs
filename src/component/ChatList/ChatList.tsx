import { useState } from "react";

import ChatPerson from "../ChatPerson/ChatPerson";

import type { ChatPersonProp } from "@/types/Chat";

import './ChatList.css';

export default function ChatList(props: ChatPersonProp) {
    const [selected, setSelected] = useState(-1);
    
    const { onChatClicked } = props;
    return (
        <div className="default-radius main-bg mt-2 chat-list">
            <div className="ml-3 mt-3">
                <span className="is-size-7">All</span>
            </div>
            {Array.from({ length: 10 }).map((_, index) => {
                return (
                    <ChatPerson isSelected={selected === index} onChatClicked={(event) => {
                        onChatClicked(event);
                        setSelected(index);
                    }} key={index} />
                );
            })}
        </div>
    );
}