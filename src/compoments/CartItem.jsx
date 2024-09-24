import {useState, useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { changeQuantity } from '../stores/cart.jsx';

const CartItem = () => {
    // const {productId, quantity} = props.data;
    const [detail, setDetail] = useState([]);
    const dispatch = useDispatch();
    useEffect(() => {
        const findDetail = detail.filter(detail => detail.name === "casqueKask");
        setDetail(findDetail);
    }, [detail])
    const handleMinusQuantity = () => {
        dispatch(changeQuantity({
            productId: 1,
            quantity: 1 - 1
        }));
    }
    const handlePlusQuantity = () => {
        dispatch(changeQuantity({
            productId: 1,
            quantity: 1 + 1
        }));
    }
    return (
        <div className='flex justify-between items-center bg-slate-600 text-white p-2 border-b-2 border-slate-700 gap-5 rounded-md'>
            <img src={detail.image} alt="" className='w-12'/>
            <h3>{detail.name}</h3>
            <p>${detail}</p>
            <div className='w-20 flex justify-between gap-2'>
                <button className='bg-gray-200 rounded-full w-6 h-6 text-cyan-600' onClick={handleMinusQuantity}>-</button>
                <span></span>
                <button className='bg-gray-200 rounded-full w-6 h-6 text-cyan-600' onClick={handlePlusQuantity}>+</button>
            </div>
        </div>
    )
}

export default CartItem