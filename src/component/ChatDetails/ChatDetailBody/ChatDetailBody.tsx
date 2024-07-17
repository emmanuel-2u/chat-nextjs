import DayChatContainer from "../DayChatContainer/DayChatContainer";

import { allChat } from "@/utils/generateChat";

export default function ChatDetailBody() {
    const chats = allChat();
    
    return (
        <div className="pt-3 px-5 pb-5 main-bg default-radius mt-2">
            {chats.map(chat => {
                return <DayChatContainer {...chat} />;
            })}
        </div>
    );
}