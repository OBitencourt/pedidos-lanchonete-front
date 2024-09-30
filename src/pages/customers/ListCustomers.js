
import CustomersCard from '../../components/CustomersCard'

import Grid from '@mui/material/Grid';

import axios from 'axios';
import { useEffect , useState} from 'react';

const ListCustomers = () => {

    const [users, setUsers] = useState([])
    

    useEffect(() => {
        axios.get('http://localhost:8080/lanchonete/customers')
            .then(response => {
                const data = response.data

                setUsers(data)
            })
    }, [])

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
                            />
                        </Grid>
                    ))
                }
            </Grid>
        </>
    )
}


export default ListCustomers