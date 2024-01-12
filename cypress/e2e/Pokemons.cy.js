describe('Покупка фото аватара [Chrom v120]', function () {
    it('e2e тест на покупку нового аватара для тренера', function () {
         cy.visit('https://pokemonbattle.me/');
         cy.wait(1000);
         cy.get(':nth-child(1) > .auth__input').type('S781@yandex.ru');
         cy.get('#password').type('Den123');
         cy.get('.auth__button').click();
         cy.wait(1000);
         cy.get('.header__btns > [href="/shop"]').click();
         cy.wait(1000);
         cy.get(':nth-child(6) > .shop__button').click();
         cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4620869113632996');
         cy.get(':nth-child(1) > .pay_base-input-v2').type('1025');
         cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');
         cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('Denis Kanin');
         cy.get('.pay-btn').click();
         cy.wait(1000);
         cy.get('#cardnumber').type('56456');
         cy.get('.payment__submit-button').click();
         cy.get('.payment__adv').click();
     })
 })