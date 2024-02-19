const cameraGear = [
  { name: "Camera", brand: "Canon", model: "EOS_70D", price: 100 },
  { name: "Camera", brand: "Nikon", model: "D3400", price: 120 },
  { name: "Camera", brand: "GoPro", model: "Hero_4", price: 80 },
  { name: "Drone", brand: "DJI", model: "Phantom", price: 50 },
  { name: "Drone", brand: "GoPro", model: "Karma", price: 200 },
];

const prices = {
  EOS_70D: 100,
  D3400: 120,
  Hero_4: 80,
  Phantom: 50,
  Karma: 200,
};

function calculateTotalPrice(shoppingCart) {
  // Din kod här
  const totalPrice = shoppingCart.reduce((total, product) => {
      const model = product.model;
      const priceModel = prices[model] || 0; // Om modellen inte finns i priser, sätt priset till 0
      return total + priceModel;
  }, 0);

  return totalPrice;
}

// Test
console.log(calculateTotalPrice(cameraGear)); // Ska logga: 550
