import React from 'react';

export const GradientSplash = () => {
    const splashes = [
        { top: '10%', left: '15%', size: 'w-40 h-40', opacity: 'opacity-60', rotate: 'rotate-12' },
        { top: '30%', left: '70%', size: 'w-52 h-52', opacity: 'opacity-20', rotate: '-rotate-6' },
        { top: '60%', left: '30%', size: 'w-36 h-36', opacity: 'opacity-25', rotate: 'rotate-45' },
        { top: '80%', left: '80%', size: 'w-28 h-28', opacity: 'opacity-40', rotate: '-rotate-12' },
        { top: '90%', left: '0%', size: 'w-28 h-28', opacity: 'opacity-20', rotate: '-rotate-12' },
    ];

    return (
        <div className="absolute inset-0 z-0 pointer-events-none">
            {splashes.map((splash, idx) => (
                <div
                    key={idx}
                    className={`
                        absolute 
                        ${splash.top && `top-[${splash.top}]`} 
                        ${splash.left && `left-[${splash.left}]`} 
                        ${splash.size} 
                        ${splash.opacity} 
                        ${splash.rotate}
                        bg-gradient-to-r from-blue-500 to-purple-600 
                        blur-3xl 
                        rounded-full
                        mix-blend-screen
                    `}
                    style={{ top: splash.top, left: splash.left }}
                />
            ))}
        </div>
    );
};
