const expect = require('expect');
const {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate the correct message', () => {
        const text = 'Text';
        const from = 'fromUser';
        const message = generateMessage(from, text);

        expect(message).toBeTruthy();
        expect(message).toMatchObject({
            from, text
        });
        expect(typeof message.createdAt).toBe('number');
    });
});

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        const latitude = 0.324344;
        const longitude = 0.1343;
        const from = 'fromUser';
        const url = 'https://www.google.com/maps?q=0.324344,0.1343';

        const message = generateLocationMessage(from, latitude, longitude);
        expect(message).toBeTruthy();
        expect(message).toMatchObject({
            from, url
        });
        expect(typeof message.createdAt).toBe('number');
    });
});