import dayjs from 'dayjs'
class TicketPage{
   constructor(){}
    clickTimeVisit(){
        cy.visit('');
    }
    

    checkLink() {
        cy.url().should('include', '/login')
        cy.url().should('eq', '')
        cy.get('.brand-logo').should('be.visible');
     }

     changeLang(){
        cy.get('#app > div > div > header > div > div.hidden-xs-only.el-col.el-col-24.el-col-sm-19.el-col-md-19.default-layout__nav-items-col > div > ul > li.el-menu-item.is-active.dynamic-nav__menu-item__select_language > div > div > div > span > span > i').click();
        cy.get('.el-scrollbar__view > :nth-child(1)').click();
        cy.get('.selected').invoke('text').should('eq', 'EN');
     }

    userlogin(){
        cy.get('#Password').type('')
        cy.get('#UserName').type('').type('{enter}')
    }
          ///select upcoming date and time 
    selectTime(){
        let now = dayjs();
        var d1 = now.add('8','hours').add('25','minutes').add('20','seconds').format("HH:mm")
        const feild = cy.get('#pane-default > div > div > form > div.el-row.is-justify-center.is-align-middle > div:nth-child(3) > div > div > div > div.el-input.el-input--suffix > input')
        feild.click({ force: true })
        feild.type(d1)   
    }

     selectDate(){
        let now = dayjs();
        var d2 = now.add('8','years').add('25','months').add('20','days').format("DD-MM-YYYY")
        const feild = cy.get('#pane-default > div > div > form > div.el-row.is-justify-center.is-align-middle > div:nth-child(3) > div > div > div > div.el-input.el-input--suffix > input')
        feild.click({ force: true })
        feild.type(d1) 
       
          
    }

    
}
export default TicketPage
