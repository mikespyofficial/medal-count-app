import {render} from '@testing-library/react';
import CountryFlag from '@/components/CountryFlag/CountryFlag';
import {FLAG_WIDTH_PX, FLAG_HEIGHT_PX, FLAG_COUNTRY_CODES} from '@/components/CountryFlag/constants';

describe('CountryFlag', () => {
    it('renders α country correctly', () => {
        const countryIndex = 2;
        const countryCode = FLAG_COUNTRY_CODES[countryIndex];

        const {getByRole} = render(
            <CountryFlag countryCode={countryCode} />,
        );

        const image = getByRole('img');
        const imageContainer = image.parentElement;

        expect(imageContainer?.style?.width).toEqual(`${FLAG_WIDTH_PX}px`);
        expect(imageContainer?.style?.height).toEqual(`${FLAG_HEIGHT_PX}px`);
        expect(imageContainer?.classList.contains('overflow-hidden')).toBeTruthy();
        expect(image.style.top).toEqual(`-${countryIndex * FLAG_HEIGHT_PX}px`);
        expect(image?.classList.contains('relative')).toBeTruthy();
    });
    it('renders the first country correctly', () => {
        const {getByRole} = render(
            <CountryFlag countryCode={FLAG_COUNTRY_CODES[0]} />,
        );

        const image = getByRole('img');
        expect(image.style.top).toEqual('0px');
    });
    it('renders the last country correctly', () => {
        const {getByRole} = render(
            <CountryFlag countryCode={FLAG_COUNTRY_CODES[FLAG_COUNTRY_CODES.length - 1]} />,
        );

        const image = getByRole('img');
        expect(image.style.top).toEqual(`-${(FLAG_COUNTRY_CODES.length - 1) * FLAG_HEIGHT_PX}px`);
    });
    it('does not render an image if the country was not found', () => {
        const {container}= render(
            // @ts-expect-error This country is not supported
            <CountryFlag countryCode='LOL' />,
        );

        const imageContainer = container.firstChild as HTMLElement;
        expect(imageContainer).toBeDefined();
        expect(imageContainer.style?.width).toEqual(`${FLAG_WIDTH_PX}px`);
        expect(imageContainer.style?.height).toEqual(`${FLAG_HEIGHT_PX}px`);
        expect(imageContainer.querySelector('img')).toEqual(null);
    });
});

