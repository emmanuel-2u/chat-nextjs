import './ChatHeader.css';

export default function ChatHeader() {
    return (
        <div className="main-bg default-radius p-4 is-flex is-flex-direction-row">
            <h2 className="is-align-self-center mr-2">Chat</h2>
            <div>
                <input type="text" className="input is-rounded transparent-bg is-small" placeholder="Enter..." />
            </div>
        </div>
    );
}