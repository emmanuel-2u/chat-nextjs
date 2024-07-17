import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faCheckDouble } from "@fortawesome/free-solid-svg-icons";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

import type { Chat } from "@/types/Chat";

import './ChatMessage.css';

export default function ChatMessage(props: Chat) {
    const { isDoubleTicked, isFromUser, timeSent, message, sent } = props;
    const sentAndNotUser = sent && !isFromUser;
    return (
        <div className={`mb-4 ${isFromUser ? 'is-align-self-flex-start' : 'is-align-self-flex-end'} message-container p-3`}>
            <div className="is-flex">
                {isFromUser && <div className="is-rounded mr-2 is-align-self-center is-flex-grow-1">
                    <Image src='/avatar.png' alt='Avatar' width={60} height={60} />
                </div>}
                <div className={`${isFromUser ? 'second-bg-color' : 'first-bg-color'} message-body px-3 py-2`}>{message}</div>
            </div>
            <div className={`is-flex is-flex-direction-row is-justify-content-flex-end`}>
                <div className="mr-2"><span className="is-size-7 metadata-color">{timeSent}</span></div>
                <div>
                    {!sent && <FontAwesomeIcon icon={faCircleExclamation} fontSize={10} className="metadata-color" />}
                    {sentAndNotUser && !isDoubleTicked && <FontAwesomeIcon icon={faCheck} fontSize={10} className="metadata-color" />}
                    {sentAndNotUser && isDoubleTicked && <FontAwesomeIcon icon={faCheckDouble} fontSize={10} className="metadata-color" />}
                </div>
            </div>
        </div>
    );
}