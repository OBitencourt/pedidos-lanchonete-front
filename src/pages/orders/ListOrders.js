
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

                setOrders(orders)          
            })
    }, [])

    

    /*orders.map((order) => {

        setClienteId(order.clienteId)
        setProducts(order.produtos)

        

        return console.log(order.clienteId)
    })*/

    
    return (
        <>
            <Grid container>
                {
                    orders.map((order) => (
                        <Grid item>
                            <OrdersCard  
                                sx={{mr: 3}}
                                clienteId={order.clienteId} // Supondo que clienteId seja um objeto
                                produtos={order.produtos}   // Array de produtos
                                status={order.status}        // Supondo que o pedido tenha um status                           
                            />
                        </Grid>
                    ))
                }
            </Grid>
        </>
    )
}


export default ListOrders