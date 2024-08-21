import { MessageChatIn } from "./MessageChatIn";
import { MessageChatOut } from "./MessageChatOut";
import { PersonChat } from "./PersonChat";
import { InputChat } from "./InputChat";

export function Chat() {
    return (
        <>
            <div className="grigio flex flex-col p-2 rounded-2xl">
                <PersonChat name={"Maxim"} time={'(PM)'} />
                <div className="border-b-2 py-1"></div>
                <MessageChatIn text={<>Hi, Dariana <span style={{ fontSize: 15 }}>&#9996;</span> </>} hour={'12.07'} />
                <MessageChatIn text={'Please tell me, do you have a minute to ring the bell?)'} hour={'12.07'} />
                <MessageChatOut text={"Yes, of course, let's go!)"} hour={"12.12"} />
                <InputChat avatar={"src/assets/3d-rendering-zoom-call-avatar-removebg-preview.png"}/>
            </div>
        </>
    )
}