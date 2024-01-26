describe('Berhasil menambahkan produk ke keranjang', () => {
    it('should add products to cart successfully', () => {
      cy.visit('/inventory.html');
      cy.get('.product').each(($product) => {
        cy.wrap($product).find('.add-to-cart-button').click();
      });
      cy.get('.shopping_cart_link').click();
      cy.get('.cart_item').should('have.length.gt', 0);
    });
  });
  