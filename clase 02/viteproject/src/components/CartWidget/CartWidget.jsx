import {BsCart} from 'react-icons/bs'
import { Badge } from '@mui/material'

const CartWidget = () => {
    return (
        <Badge color='secondary' badgeContent={4} >
            <BsCart size={25} />
        </Badge>
    )
}

export default CartWidget