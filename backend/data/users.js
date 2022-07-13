import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Thomas',
        email: 'thomas@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Christine',
        email: 'christine@example.com',
        password: bcrypt.hashSync('123456', 10),
    }
]

export default users