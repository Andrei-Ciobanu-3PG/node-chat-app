const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {

    let users;
    let mike = {
        id: '1',
        name: 'Mike',
        room: 'Node Course'
    };
    let jen = {
        id: '2',
        name: 'Jen',
        room: 'React Course'
    };
    let julie = {
        id: '3',
        name: 'Julie',
        room: 'Node Course'
    };
    beforeEach(() => {
        users = new Users();
        users.users = [
            mike,
            jen,
            julie
        ]
    });

    it('should add new user', () => {
        let users = new Users();
        let user = {
            id: '123',
            name: 'Andrei',
            room: 'The Office Fans'
        };
        let res = users.addUser(user.id, user.name, user.room);

        expect(users.users).toEqual([user]);
    });

    it('should return name for Node Course', () => {
        let userList = users.getUserList('Node Course');
        expect(userList).toEqual(['Mike', 'Julie']);
    });

    it('should return name for React Course', () => {
        let userList = users.getUserList('React Course');
        expect(userList).toEqual(['Jen']);
    });

    it('should remove a user', () => {
        let removedUser = users.removeUser('1');
        expect(removedUser).toEqual(mike);
        expect(users.users.length).toBe(2);
    });

    it('should not remove user', () => {
        let removedUser = users.removeUser('44');
        expect(removedUser).toBeFalsy();
        expect(users.users.length).toBe(3);
    });

    it('should find user', () => {
        let user = users.getUser('1');
        expect(user).toEqual(mike);
    });

    it('should not find user', () => {
        let user = users.getUser('44');
        expect(user).toBeFalsy();
    });
});