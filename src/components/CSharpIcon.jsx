import React from 'react';

export const CSharpIcon = ({ className = 'w-10 h-10' }) => {
    return (
        <svg
            className={className}
            viewBox="0 0 128 128"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fill="#68217A"
                d="M64 0l55.4 32v64L64 128 8.6 96V32L64 0z"
            />
            <text
                x="50%"
                y="55%"
                textAnchor="middle"
                fill="white"
                fontSize="36"
                fontFamily="Arial, sans-serif"
                dy=".3em"
                fontWeight="bold"
            >
                C#
            </text>
        </svg>
    );
};