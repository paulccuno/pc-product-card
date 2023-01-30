# PC-Prudct-Card

Este es un paquete de pruebas de despliegue en NPM

### Paul Ccuno

## Ejemplo

```tsx
import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from '../components';
```

```tsx
<ProductCard
  key={product.id}
  product={product}
  initialValues={{
    count: 4,
    // maxCount: 10,
  }}
>
  {({ count, isMaxCountReached, maxCount, reset, increaseBy }) => (
    <>
      <ProductImage />
      <ProductTitle />
      <ProductButtons />
    </>
  )}
</ProductCard>
```
