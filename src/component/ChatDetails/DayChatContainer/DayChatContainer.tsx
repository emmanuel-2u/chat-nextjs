import ChatMessage from "../ChatMessage/ChatMessage";
import type { Messages } from '@/types/Chat';

import './DayChatContainer.css';

export default function DayChatContainer(props: Messages) {
    const { messagesForADay, date } = props;

    return (
        <div className="is-flex is-flex-direction-column mt-2">
            <div className="is-align-self-center default-radius p-3 date-bg">
                <b className="is-size-7">{date}</b>
            </div>
            <div className="mt-3 is-flex is-flex-direction-column">
                {messagesForADay.map(message => {
                    return <ChatMessage {...message} />;
                })}
            </div>
        </div>
    );
}