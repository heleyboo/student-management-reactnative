
import Realm from 'realm';

const membersSchema = {
    name: 'Members',
    properties: {
        members: { type: 'list', objectType: 'Developer' },
    },
};

const memberSchema = {
    name: 'Developer',
    properties: {
        id: 'int',
        name: 'string',
        skill: 'string?',
        location: 'string?',
        yearOfBirth: 'int?',
    },
}

const realm = new Realm({ schema: [memberSchema, membersSchema] });

export default realm;
