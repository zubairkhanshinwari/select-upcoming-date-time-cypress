/// <reference types="Cypress" />
import dayjs from 'dayjs'

const TicketPage = require('../PageObject/TicketPage');


describe('Login', function(){
    const login = new TicketPage()

    // it('Link Verifcation', function(){
    //     login.clickTimeVisit()
    //     login.checkLink()
        
    // })

    // it('Language changing', function(){
    //     login.clickTimeVisit()
    //     login.changeLang()
    
    // })
   
    it('valid user name and invalid password', function(){
        login.clickTimeVisit()
        cy.wait(4000)
        login.userlogin() 
        cy.wait(9000)
        // login.selectTime()
        // cy.wait(9000)
        // login.selectDate()
    })

 
   
   
})