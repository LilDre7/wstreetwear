export interface Product {
  id: number
  name: string
  price: number
  image1: string
  image2: string
  colors?: string[]
  description?: string
}

export interface CartItem extends Omit<Product, "image1" | "image2"> {
  image: string
  quantity: number
  size?: string
}
