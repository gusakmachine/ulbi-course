import {classNames} from "./classNames";

describe('classNames', () => {
    test('with only first param', () => {
        expect(classNames('name')).toBe('name');
    });

    test('with additional class', () => {
        expect(classNames('name', {}, ['cl1', 'cl2'])).toBe('name cl1 cl2');
    });

    test('with mods', () => {
        expect(classNames(
            'name', {cl1: true, cl2: false},
        )).toBe('name cl1');
    });
});