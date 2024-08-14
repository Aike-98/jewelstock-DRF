import { createContext, useState } from "react";

export const ModalContext = createContext({ isActive: false });

export const ModalProvider = (props) => {
    const { children } = props;

    const [modal, setModal] = useState({ isActive: false });

    return (
        <ModalContext.Provider value={{ modal, setModal }}>
            { children }
        </ModalContext.Provider>
    );
};