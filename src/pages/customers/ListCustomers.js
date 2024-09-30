
import CustomersCard from '../../components/CustomersCard'

import Grid from '@mui/material/Grid';

import axios from 'axios';
import { useEffect , useState} from 'react';

import { useHistory } from 'react-router-dom';


const ListCustomers = () => {

    const [users, setUsers] = useState([])
    const history = useHistory()


    useEffect(() => {
        axios.get('http://localhost:8080/lanchonete/customers')
            .then(response => {
                const data = response.data

                setUsers(data)
            })
    }, [])

    const handleRemoveCustomer = id => {
        axios.delete(`http://localhost:8080/lanchonete/customers/${id}`)
            .then(response => {
                console.log('customer deleted successufully', response)

                const newCustomersState = users.filter(user => user._id !== id)
                
                setUsers(newCustomersState)
            })
    }

    const handleEditCustomer = id => {
        history.push(`/customers/edit/${id}`)
        window.location.reload()
    }

    return (
        <>
            <Grid container>
                {
                    users.map(user => (
                        <Grid sx={{mt: 2, mb: 2}} item xs={12} md={6} lg={4}>
                            <CustomersCard 
                                id={user._id}
                                name={user.name}
                                email={user.email}
                                tel={user.tel}
                                adress={user.adress}
                                onRemoveCustomer={handleRemoveCustomer}
                                onEditCustomer={handleEditCustomer}
                            />
                        </Grid>
                    ))
                }
            </Grid>
        </>
    )
}


export default ListCustomers