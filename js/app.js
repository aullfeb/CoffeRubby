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
        price: 89000,
        discount:30000,
        img: "beans3.jpg",
      },
      {
        id: 4,
        name: "Lampung Beans",
        price: 70000,
        discount:32000,
        img: "beans4.jpg",
      },
      {
        id: 5,
        name: "Italian Beans",
        price: 120000,
        discount:90000,
        img: "beans5.jpg",
      },
    ],
  }));

  Alpine.store("bag", ({
    items: [],
    total: 0,
    quantity: 0,
    add(newItem) {
      // Cek apakah item sudah ada di keranjang
      const bagItem = this.items.find(item => item.id === newItem.id);

      //jika item belum ada/bag masih kosong
      if (!bagItem) {
        this.items.push({...newItem, quantity: 1, total: newItem.price});
        this.quantity++;
        this.total += newItem.price;
      } else {
        // Jika item sudah ada, cek apakah barang beda atau sama dengan yang ada di shopbag
        this.items = this.items.map(item => {
          //jika item beda
          if (item.id !== newItem.id) {
            return item;
          } else {
            //jika item sama, tambah kuantitas dan total
            item.quantity++; 
            item.total = item.price * item.quantity;
            this.quantity++;
            this.total += item.price;
            return item;
          }
        });
      }
    },
    remove(itemToRemove) {
      const bagItem = this.items.find(item => item.id === itemToRemove.id);
      if (bagItem) {
        if (bagItem.quantity > 1) {
          bagItem.quantity--;
          bagItem.total = bagItem.price * bagItem.quantity;
          this.quantity--;
          this.total -= bagItem.price;
        } else {
          this.items = this.items.filter(item => item.id !== itemToRemove.id);
          this.quantity--;
          this.total -= bagItem.price;
        }
      }
    }
  }));
});

//konversi ke rupiah
window.rupiah = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(number);
};