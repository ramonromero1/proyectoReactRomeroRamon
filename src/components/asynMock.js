const products = [
  {
    id: "1",
    name: "Remera",
    price: 1000,
    category: "Remeras",
    img: "/src/assets/img/remeras-base-hombres-salmon13-scaled.jpg",
    stock: 25,
    description: "Remera",
  },
  {
    id: "2",
    name: "Bermuda",
    price: 800,
    category: "Bermudas",
    img: "/src/assets/img/e43c8d09-8004-427b-b186-c9c238050428-173cb5c942df1e6f3816638807676122-640-0.png",
    stock: 16,
    description: "Bermuda",
  },
  {
    id: "3",
    name: "Medias",
    price: 1200,
    category: "Medias",
    img: "/src/assets/img/Medias_A_Media_Pantorrilla_Acolchadas_3_Tiras_3_Pares_Gris_IC1323_03_standard.avif",
    stock: 10,
    description: "Medias",
  },
  {
    id: "4",
    name: "Zapatillas",
    price: 1200,
    category: "Zapatillas",
    img: "/src/assets/img/diseno-sin-titulo-35-cf3dabf0702eba80da17128613837832-640-0.png",
    stock: 5,
    description: "Zapatillas",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 1000);
  });
};

export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((prod) => prod.category === categoryId));
    }, 1000);
  });
};

export const getProductById = (productoId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === productoId));
    }, 1000);
  });
};
