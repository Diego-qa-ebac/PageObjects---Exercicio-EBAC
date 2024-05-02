import { faker } from '@faker-js/faker';

    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const phone = faker.phone.number();
    const email = faker.internet.email();
    const password = faker.internet.password();
    const repassword = faker.internet.password();