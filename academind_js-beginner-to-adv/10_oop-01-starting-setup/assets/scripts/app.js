const productList = {
  products : [
    {
      title: "A pillow",
      imageUrl:
        "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGlsbG93fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=60",
      price: 19.99,
      description: "A Soft Pillow",
    },
    {
      title: "A Carpet",
      imageUrl:
        "https://images.unsplash.com/photo-1594040226829-7f251ab46d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cnVnfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=60",
      price: 89.99,
      description: "A Soft Pillow",
    },
  ],
  render() {
    const renderHook = document.getElementById('app');
    const prodList = document.createElement('ul');
    productList.className = 'product-list';
    for (const prod of this.products) {
      const prodEl = document.createElement('li');
      prodEl.className = 'product-item';
      prodEl.innerHTML = `
          <div class="product-item__content">
            <img src=${prod.imageUrl} alt=${prod.title}>
            <h2>${prod.title}</h2>
            <h3>\$${prod.price}</h3>
            <p>${prod.description}</p>
            <button>Add to Cart</button>
          </div>
        `;
      prodList.append(prodEl);
    }
    renderHook.append(prodList);
  }

}

productList.render();
