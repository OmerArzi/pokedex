import MainNavigation from "./MainNavigation";
import React from 'react'
type Props = {
    children?: JSX.Element | JSX.Element[]
}

const Layout :React.FC<Props> = (props) => {
    
    return (
        <>
            <MainNavigation/>
            <div>{props.children}</div>
        </>
    );
}

export default Layout;