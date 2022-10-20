import React from "react";
import s from "../Styles/SourceButton.module.css";

const SourceButton = ( { children, handleSource, sourceToRender } ) => {
    return (
        <button
            className={`${s.button} ${sourceToRender === children.toLowerCase() && s.selected}`}
            onClick={handleSource}
        >
            {children}
        </button>
    );
};

export default SourceButton;
