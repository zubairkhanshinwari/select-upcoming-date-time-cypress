import dayjs from 'dayjs'
class TicketPage{
   constructor(){}
    clickTimeVisit(){
        cy.visit('https://dev.corebyppmg.com/app/login.aspx?ReturnUrl=%2fapp%2flogin.aspx%3flogout%3d1');
    }

    checkLink() {
        cy.url().should('include', '/login')
        cy.url().should('eq', 'https://ct.digitaltolk.se/login')
        cy.get('.brand-logo').should('be.visible');
     }

     changeLang(){
        cy.get('#app > div > div > header > div > div.hidden-xs-only.el-col.el-col-24.el-col-sm-19.el-col-md-19.default-layout__nav-items-col > div > ul > li.el-menu-item.is-active.dynamic-nav__menu-item__select_language > div > div > div > span > span > i').click();
        cy.get('.el-scrollbar__view > :nth-child(1)').click();
        cy.get('.selected').invoke('text').should('eq', 'EN');
     }

    userlogin(){
        cy.get('#Password').type('thrill@progradesolutions.com')
        cy.get('#UserName').type('Password_123').type('{enter}')
    }

    selectTime(){
        let now = dayjs();
        var d1 = now.add('8','hours').add('25','minutes').add('20','seconds').format("HH:mm")
        const feild = cy.get('#pane-default > div > div > form > div.el-row.is-justify-center.is-align-middle > div:nth-child(3) > div > div > div > div.el-input.el-input--suffix > input')
        feild.click({ force: true })
        feild.type(d1)   
    }
    

    
}
export default TicketPage
