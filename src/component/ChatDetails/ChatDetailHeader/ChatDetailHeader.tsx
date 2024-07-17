import Image from "next/image";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import type { ChatDetailsProp } from "@/types/Chat";

import './ChatDetailHeader.css';

export default function ChatDetailHeader(props: ChatDetailsProp) {
    const { onBackClicked, isMobile } = props;

    return (
        <div className="main-bg default-radius is-flex is-flex-direction-row p-2 is-align-items-center">
            {isMobile && <div>
                <div onClick={onBackClicked}>
                    <FontAwesomeIcon icon={faArrowLeft} className="p-1 to-pointer" />
                </div>
            </div>}
            <div>
                <Image src='/avatar.png' alt='Avatar' width={40} height={40} />
            </div>
            <div className="ml-3">
                <div>
                    <b className="is-size-7">Gboyega</b>
                </div>
                <div>
                    <span className="is-size-7 status-color">Offline</span>
                </div>
            </div>
        </div >
    );
}