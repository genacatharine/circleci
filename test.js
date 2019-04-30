import { Selector } from 'testcafe';

fixture `Getting Started`
    .page `http://greenchef.com`;

    test('My first test', async t => {
        let num = Math.floor(Math.random() * 10000)
        let email = 'user+' + num + '@greenchef.com'
        await t
            .click('.btn-start')
            .typeText('#email', email)
            .typeText('#zip-code', 'test')
            .click()
    });