import React, { createContext, useContext, useState }  from 'react';

import * as S from './Modal.styled'

const ModalContext = createContext();

export default function Modal(props) {
    const [open, toggle] = useState(false)

    const value = {open, toggle}

    return (
        <ModalContext.Provider value={value}>
            {props.children}
        </ModalContext.Provider>
    );
}

function Portal (props) {
    const {open, toggle} = useContext(ModalContext);

    return(
        <S.Portal onClick={React.useCallback(()=> toggle(!open), [open, toggle])}>
            {props.children}
        </S.Portal>
    )
}

function Item (props){
    const { open } = useContext(ModalContext);
    return(
        open && <S.Item>{props.children}</S.Item>
    )
}

Modal.Portal = Portal;
Modal.Item = Item;