interface product {
  readonly id: number; // тільки для читання
  title: string;
  description?: string; // необов'язкове поле
}

const product: product = {
  id: 1,
  title: "Tablet",
  description: "Compact and fast",
};

console.log(`Product: ${JSON.stringify(product)}`);
