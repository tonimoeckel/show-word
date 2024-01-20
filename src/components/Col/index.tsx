import React from "react";
export default ({children, className, style}: any) => {
    return (
        <div
            className={className}
            style={{ flexGrow: 1, gap: 8 , ...style, display: 'flex', flexDirection: 'column' }}
        >
            {children}
        </div>
    )
}