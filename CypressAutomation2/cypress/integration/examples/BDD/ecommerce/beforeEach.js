beforeEach(function() {
    cy.fixture('example').then((data) => {
        this.data = data;  // Store the data correctly in the test context
    });
});