import React, { createContext, forwardRef, useContext, useState }  from 'react';

import * as S from './Modal.styled'

export const ModalContext = createContext();

export default function Modal(props) {
    const [open, toggle] = useState(false)

    const value = { open, toggle }

    return (
        <ModalContext.Provider value={value}>
            {props.children}
        </ModalContext.Provider>
    );
}

const Portal = forwardRef(function Portal(props, ref){
    const {open, toggle} = useContext(ModalContext);

    return(
        // <S.Portal ref={ref} onClick={React.useCallback(()=> toggle(!open), [open])}>
        <S.Portal ref={ref} onClick={React.useCallback(()=> toggle(!open), [open])}>
            {props.children}
        </S.Portal>
    )
})

function Item (props, ref){
    const { open } = useContext(ModalContext);

    console.log(ref);
    return(
        open && <S.Item ref={ref}>{props.children}</S.Item>
    )
}

// const Item = function Item(props, ref){
//     const { open } = useContext(ModalContext);

//     console.log(ref);
//     return(
//         open && <S.Item ref={ref}>{props.children}</S.Item>
//     )
// }


Modal.Portal = Portal;
Modal.Item = Item;