/**
 * @jest-environment jsdom
 */

import createHeader from './header.js';

describe('Header Component', () => {
    test('should create a header element with the correct title', () => {
        const headerElement = createHeader('My Header');
        expect(headerElement.nodeName).toEqual('H1');
    });

    test('should have the correct class name', () => {
        const headerElement = createHeader('My Header');
        expect(headerElement.className).toEqual('title');
    });
});
