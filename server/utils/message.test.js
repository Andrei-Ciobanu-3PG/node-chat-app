const expect = require('expect');
const {generateMessage} = require('./message');

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