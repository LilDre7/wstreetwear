import type { Product } from "@/types/product"

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "SDFM Classic Black",
    price: 149.99,
    image1: "https://i.pinimg.com/736x/92/06/56/920656e03f09691d871e149b5dad8f7f.jpg",
    image2: "https://i.pinimg.com/736x/94/d3/14/94d31436dfc73fcf93058089f69ffd96.jpg",
    colors: ["black", "gray"],
    description: "Premium black hoodie with signature SDFM design",
  },
  {
    id: 2,
    name: "SDFM Premium Gray",
    price: 154.99,
    image1: "https://i.pinimg.com/736x/92/06/56/920656e03f09691d871e149b5dad8f7f.jpg",
    image2: "https://i.pinimg.com/736x/94/d3/14/94d31436dfc73fcf93058089f69ffd96.jpg",
    colors: ["gray", "black"],
    description: "Comfortable gray hoodie with modern fit",
  },
  {
    id: 3,
    name: "SDFM Signature Navy",
    price: 159.99,
    image1: "https://i.pinimg.com/736x/92/06/56/920656e03f09691d871e149b5dad8f7f.jpg",
    image2: "https://i.pinimg.com/736x/94/d3/14/94d31436dfc73fcf93058089f69ffd96.jpg",
    colors: ["navy", "black"],
    description: "Exclusive navy colorway for true streetwear enthusiasts",
  },
  {
    id: 4,
    name: "SDFM Limited Edition",
    price: 199.99,
    image1: "https://i.pinimg.com/736x/92/06/56/920656e03f09691d871e149b5dad8f7f.jpg",
    image2: "https://i.pinimg.com/736x/94/d3/14/94d31436dfc73fcf93058089f69ffd96.jpg",
    colors: ["black", "red"],
    description: "Limited edition design with premium materials",
  },
]

export const CART_STORAGE_KEY = "vlomust-cart"
export const FREE_SHIPPING_THRESHOLD = 100
export const SHIPPING_COST = 10
export const TAX_RATE = 0.08
