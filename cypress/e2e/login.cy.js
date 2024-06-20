import { ne,Faker} from '@faker-js/faker';
const { faker } = require('@faker-js/faker');
import loginPage from './pom/login';



export const nepFaker = new Faker({
    locale: [ne],
  });

beforeEach(() => {
    cy.viewport(1080,720)
    cy.visit("/") 
});

describe('Random Fake Data', () => {


    it('Random English Fake data are added here', () => {
     
        const firstName = faker.person.firstName()
        const lastName = faker.person.lastName()
        const emailAdd = firstName + lastName + '@gmail.com'
        const password = faker.internet.password()


        loginPage.login(firstName,lastName,emailAdd,password)
    });


    it('Random Nepali Fake data are added here', () => {

        const firstName = nepFaker.person.firstName()
        const lastName = nepFaker.person.lastName()
        const emailAdd = firstName + lastName + '@gmail.com'
        const password = nepFaker.internet.password()


        loginPage.login(firstName,lastName,emailAdd,password)
    });
});