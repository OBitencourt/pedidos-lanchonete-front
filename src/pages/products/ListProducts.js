
import React, {useEffect, useState} from 'react'
import axios from 'axios'

import ProductsCard from '../../components/ProductsCard'

import Grid from '@mui/material/Grid';

import { useHistory } from 'react-router-dom';

const ListProducts = () => {

    const history = useHistory()

    const [products, setProducts] = useState([])

    useEffect(() => {

        axios.get('http://localhost:8080/lanchonete/products')
            .then(response => {
                const data = response.data

                setProducts(data)
            })

    }, [])

    const handleRemoveProduct = id => {
        axios.delete(`http://localhost:8080/lanchonete/products/${id}`)
            .then(response => {
                console.log('product removed successfully', response)
                const newProductsState = products.filter(product => product._id !== id)

                setProducts(newProductsState)
            })
    }

    const handleEditProduct = id => {
        history.push(`/products/edit/${id}`)
        window.location.reload()
    }

    console.log(products)
    console.log(products)

    return (
        <>
            <Grid container>

                {
                    products.map(product => (
                        <Grid item xs={12} md={4} sx={{mb: 5, mt:2}}>
                            <ProductsCard 
                                name={product.name}
                                price={product.price}     
                                id={product._id} 
                                onRemoveProduct={handleRemoveProduct}  
                                onEditProduct={handleEditProduct}                   
                            />
                        </Grid>
                    ))
                }
            </Grid>

        </>
    )
}


export default ListProducts