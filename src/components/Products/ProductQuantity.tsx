import { Button, TextField } from '@mui/material'

type Props = {
    countItems: number
    onclickFuncInc: any
    onclickFuncDec?: any
}
const ProductQuantity = ({
    countItems,
    onclickFuncInc,
    onclickFuncDec,
}: Props) => {
    return (
        <div className="product-quantity">
            <Button
                variant="outlined"
                onClick={onclickFuncDec}
                disabled={countItems <= 1}
            >
                -
            </Button>
            <TextField size="small" value={countItems} />
            <Button variant="outlined" onClick={onclickFuncInc}>
                +
            </Button>
        </div>
    )
}
export default ProductQuantity
