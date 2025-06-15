'use client';
import {memo} from 'react';
import Image from 'next/image';
import {FLAG_COUNTRY_CODES, FLAG_HEIGHT_PX, FLAG_WIDTH_PX} from '@/components/CountryFlag/constants';
import imageFlags from '../../../public/flags.png';

export type CountryFlagProps = {
    countryCode: string;
};

export default memo(function CountryFlag({countryCode}: CountryFlagProps) {
    const flagIndex = FLAG_COUNTRY_CODES.findIndex(code => code === countryCode);

    return (
        <div className='relative overflow-hidden bg-black/10 ' style={{
            width: `${FLAG_WIDTH_PX}px`,
            height: `${FLAG_HEIGHT_PX - 2}px`,
        }}>
            {flagIndex !== -1 && <Image className='relative' style={{
                top: `${-flagIndex * FLAG_HEIGHT_PX - 1}px`,
            }} src={imageFlags} alt={`${countryCode} flag`}/>}
        </div>
    );
});
