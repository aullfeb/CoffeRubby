document.addEventListener("alpine:init", () => {
  Alpine.data("products", () => ({
    items: [
      {
        id: 1,
        name: "Robusta Beans",
        price: 50000,
        discount:100000,
        img: "beans1.jpg",
      },
      {
        id: 2,
        name: "Black Beans",
        price: 89000,
        discount:115000,
        img: "beans2.jpg",
      },
      {
        id: 3,
        name: "Arabica Beans",
        price: 30000,
        discount:89000,
        img: "beans3.jpg",
      },
      {
        id: 4,
        name: "Arabica Beans",
        price: 30000,
        discount:89000,
        img: "beans4.jpg",
      },
      {
        id: 5,
        name: "Arabica Beans",
        price: 30000,
        discount:90000,
        img: "beans5.jpg",
      },
    ],
  }));

  Alpine.store("bag", () => ({
    items: [],
    total: 0,
    quantity: 0,
    add(newItem) {
      this.items.push(newItem);
      this.quantity++;
      this.total += newItem.price;
      console.log(this.total);
    }
  }));
});


//konversi ke rupiah

const rupiah = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(number);
}