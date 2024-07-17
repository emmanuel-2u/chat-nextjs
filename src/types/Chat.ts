import { EventHandler } from "react"

interface Messages {
    date: string
    messagesForADay: Chat[]
}

interface Chat {
    isDoubleTicked: boolean
    isFromUser: boolean
    message: string
    timeSent: string
    sent: boolean
}

interface ChatPersonProp {
    onChatClicked: EventHandler<any>
    isSelected: boolean
}

interface ChatDetailsProp {
    onBackClicked: EventHandler<any>
    isMobile: boolean
}

export type { Messages, Chat, ChatPersonProp, ChatDetailsProp };