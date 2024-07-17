import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

import ChatInput from "./ChatInput/ChatInput";

import './ChatFooter.css';

export default function ChatFooter() {
    return (
        <div className="is-flex is-flex-direction-row mt-3">
            <ChatInput />
            <div className="to-pointer p-2 second-bg-color">
                <FontAwesomeIcon icon={faPaperPlane} />
            </div>
        </div>
    );
}