describe('The Landing Page', async () => {
    it('successfully transitions to other sections', () => {
        cy.visit('/');

        const sectionWithUrlSegment = {
            'services': 'services',
            'staff': 'staff',
            'contact': 'contact',
            'landing': ''
        };

        const assertTransitions = ([section, urlSegment]) => {
            cy.wait(2000);

            cy.get(`#link-${section}`).should('be.visible').click();

            cy.url().then(url => {
                const lastUrlSegment = url.split('/').pop()
                const lastUrlSegmentWithoutExtension = lastUrlSegment.split('.')[0];
                expect(lastUrlSegmentWithoutExtension).to.equal(urlSegment);
            });
        };

        Object.entries(sectionWithUrlSegment)
            .forEach(assertTransitions);
    });

    it('has valid anchor tags', () => {
        cy.visit('/');

        cy.get('a').each(a => expect(a).to.have.attr('href'));
    });
});
