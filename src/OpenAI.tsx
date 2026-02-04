import React, { useEffect, useState } from "react";
import { getWelcomeMessage } from "./api";

export default function OpenAI(): JSX.Element {
    const [welcomeMessage, setWelcomeMessage] = useState("");

    useEffect(() => {
        const init = async () => {
            const message = await getWelcomeMessage();
            setWelcomeMessage(message);
        };
        init();
    }, []);

    return <>{welcomeMessage}</>;
}
