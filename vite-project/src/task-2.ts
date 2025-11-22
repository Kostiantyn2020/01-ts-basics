interface product {
  readonly id: number;
  title: string;
  description?: string;
}

const product: product = {
  id: 1,
  title: "Tablet",
  description: "Compact and fast",
};

console.log(`Product: ${JSON.stringify(product)}`);
