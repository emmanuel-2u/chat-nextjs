"use client";
import { useEffect, useState } from "react";

import ChatHeader from "@/component/ChatHeader/ChatHeader";
import ChatList from "@/component/ChatList/ChatList";
import ChatDetail from "@/component/ChatDetails/ChatDetails";
import ChatInput from "@/component/ChatDetails/ChatDetailFooter/ChatInput/ChatInput";

import './page.css';

import useIsMobile from "@/hook/useIsMobile";
import ChatFooter from "@/component/ChatDetails/ChatDetailFooter/ChatFooter";

export default function Chat() {
    const [showFullChat, setShowFullChat] = useState(false);

    const isMobile = useIsMobile(600);

    // alert(isMobile);

    const dynamicClassNames = isMobile ? 'is-flex is-flex-direction-column mobile-layout' : 'is-flex is-flex-direction-row desktop-layout';

    useEffect(() => {
        document.title = "Chat";
        document.body.classList.remove('is-flex', 'is-flex-direction-column', 'is-justify-content-center', 'is-align-items-center');
        if (isMobile) setShowFullChat(false);
        else setShowFullChat(true);
        console.log('called again');
    }, [isMobile]);

    return (
        <main className={dynamicClassNames}>
            <div className={`${!isMobile ? 'mr-2' : ''}`}>
                <ChatHeader />
                <ChatList onChatClicked={() => {
                    setShowFullChat(true);
                    
                }} />
            </div>
            {(!isMobile || showFullChat) && <div>
                <ChatDetail isMobile={isMobile} onBackClicked={() => setShowFullChat(false)} />
                <ChatFooter />
            </div>}
        </main>
    );
}