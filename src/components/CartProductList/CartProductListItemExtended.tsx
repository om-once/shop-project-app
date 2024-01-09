import { Button, Card, CardContent, Grid } from '@mui/material'
import { Product } from 'utils/productsArray'
import DeleteIcon from '@mui/icons-material/Delete'
import ProductQuantity from 'components/Products/ProductQuantity'
import { useState } from 'react'

type Props = {
    product: Product
    productCount: number
    removeProductFromCart: (id: number) => void
}

const CartProductListItemExtended = ({
    product,
    productCount,
    removeProductFromCart,
}: Props) => {
    const [count, setProductCount] = useState(productCount)
    const onIncrementClick = () => {
        setProductCount((prevState) => prevState + 1)
    }

    const onDecrementClick = () => {
        setProductCount((prevState) => prevState - 1)
    }
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card variant="outlined">
                <CardContent>
                    <div className="product-img">
                        <img src={product.image} alt={product.title} />
                    </div>
                    <div>{product.title}</div>
                    <p>Price for one item: {product.price}</p>
                    <ProductQuantity
                        countItems={count}
                        onclickFuncInc={onIncrementClick}
                        onclickFuncDec={onDecrementClick}
                    />
                    <Button
                        variant="outlined"
                        onClick={() => removeProductFromCart(product.id)}
                    >
                        <DeleteIcon />
                    </Button>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default CartProductListItemExtended
