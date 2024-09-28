
import React, {useEffect, useState} from 'react'
import axios from 'axios'

import ProductsCard from '../../components/ProductsCard'

import Grid from '@mui/material/Grid';

const ListProducts = () => {

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
                window.location.reload()
            })
    }

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
                            />
                        </Grid>
                    ))
                }
            </Grid>

        </>
    )
}


export default ListProducts