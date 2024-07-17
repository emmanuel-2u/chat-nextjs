import Image from "next/image";

import type { ChatPersonProp } from "@/types/Chat";

import './ChatPerson.css';

export default function ChatPerson(props: ChatPersonProp) {
    const { isSelected, onChatClicked } = props;
    const classSelected = isSelected ? 'chat-box-selected' : '';

    return (
        <div
            onClick={onChatClicked}
            className={`to-pointer is-flex is-flex-direction-row p-1 ${classSelected} hover-bg`}
        >
            <div className="is-rounded mr-2">
                <Image src='/avatar.png' alt='Avatar' width={60} height={60} />
            </div>
            <div className="is-flex-grow-1">
                <div className="has-text-right">
                    <span className="is-size-7 time-color">11:20 PM</span>
                </div>
                <div className="is-align-self-center">
                    <b className="is-size-7">Gboyega</b>
                </div>
            </div>
        </div>
    );
}