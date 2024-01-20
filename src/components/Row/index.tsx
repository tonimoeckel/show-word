import React from "react";
export default ({children, className, style}: any) => {
    return (
        <div
            className={className}
            style={{ gap: 8, ...style, display: 'flex', flexDirection: 'row' }}
        >
            {children}
        </div>
    )
}