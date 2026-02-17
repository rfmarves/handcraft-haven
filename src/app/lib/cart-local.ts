export type CartLine = { productId: string; quantity: number };

const CART_KEY = "handcraft_haven_cart_v1";

export function readCart(): CartLine[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(CART_KEY);
    const parsed = raw ? (JSON.parse(raw) as CartLine[]) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function writeCart(lines: CartLine[]) {
  localStorage.setItem(CART_KEY, JSON.stringify(lines));
}

export function addToCart(productId: string, qty = 1) {
  const cart = readCart();
  const next = [...cart];
  const i = next.findIndex((x) => x.productId === productId);
  if (i === -1) next.push({ productId, quantity: Math.max(1, qty) });
  else next[i] = { ...next[i], quantity: next[i].quantity + Math.max(1, qty) };
  writeCart(next);
}

export function removeFromCart(productId: string) {
  writeCart(readCart().filter((x) => x.productId !== productId));
}

export function clearCart() {
  localStorage.removeItem(CART_KEY);
}
