
import Grid from '@mui/material/Grid';

import axios from 'axios';
import { useEffect , useState} from 'react';
import OrdersCard from '../../components/OrdersCard';

// import { useHistory } from 'react-router-dom';

const ListOrders = () => {

    const [orders, setOrders] = useState([])
        

    useEffect(() => {

        axios.get('http://localhost:8080/lanchonete/orders')
            .then(response => {
                const orders = response.data
                console.log(orders)
                setOrders(orders)          
            })
    }, [])

    
    const handleRemoveOrder = id => {
        axios.delete(`http://localhost:8080/lanchonete/orders/${id}`)
            .then(response => {
                console.log('order deleted successufully', response)

                const newOrdersState = orders.filter(order => order._id !== id)

                setOrders(newOrdersState)
            })
    }

    
    return (
        <>
            <Grid container>
                {
                    orders.map((order) => (
                        <Grid item>
                            <OrdersCard  
                                id={order._id}
                                clienteId={order.clienteId} // Supondo que clienteId seja um objeto
                                produtos={order.produtos}   // Array de produtos
                                status={order.status}   
                                onRemoveOrder={handleRemoveOrder}   // Supondo que o pedido tenha um status                           
                            />
                        </Grid>
                    ))
                }
            </Grid>
        </>
    )
}


export default ListOrders