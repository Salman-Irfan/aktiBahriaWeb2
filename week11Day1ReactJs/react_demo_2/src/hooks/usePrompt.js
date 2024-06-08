import React, { useEffect } from 'react';
import { UNSAFE_NavigationContext as NavigationContext } from 'react-router-dom';

function usePrompt(message, when) {
    const { navigator } = React.useContext(NavigationContext);

    useEffect(() => {
        if (!when) return;

        const handleBlock = (tx) => {
            if (window.confirm(message)) {
                tx.retry();
            }
        };

        // const unblock = navigator.block(handleBlock);

        // return unblock;
    }, [navigator, message, when]);
}

export default usePrompt;
