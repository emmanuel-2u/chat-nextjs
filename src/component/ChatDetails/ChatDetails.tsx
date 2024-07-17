import ChatDetailBody from "./ChatDetailBody/ChatDetailBody";
import ChatDetailHeader from "./ChatDetailHeader/ChatDetailHeader";

import { ChatDetailsProp } from "@/types/Chat";

export default function ChatDetail(props: ChatDetailsProp) {
    return (
        <div>
            <ChatDetailHeader {...props} />
            <ChatDetailBody />
        </div>
    );
}