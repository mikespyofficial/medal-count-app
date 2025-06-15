'use client';
import {memo} from 'react';
import type {MedalTier} from '@/lib/medal/types';

export type MedalBadgeProps = {
    medalTier: MedalTier;
    size?: number;
};

export default memo(function MedalBadge({medalTier, size = 24}: MedalBadgeProps) {
    let color;

    switch (medalTier) {
        case 'gold':
            color = '#F1CC4A';
            break;
        case 'silver':
            color = '#929CA5';
            break;
        case 'bronze':
            color = '#754A28';
            break;
    }

    return (
        <div className='rounded-full' style={{
            background: color,
            width: `${size}px`,
            height: `${size}px`,
        }} />
    );
});
