import React from 'react';

import axios from 'axios'

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import {useState, useEffect} from 'react'

import {useParams} from 'react-router-dom'

import Loading from '../../components/Loading';
import Toasty from '../../components/Toasty'


const EditProduct = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [openToasty, setOpenToasty] = useState(true)

    const { id } = useParams()

    const [form, setForm] = useState({
        name: {
            value: '',
            error: false,
        },
        price: {
            value: '',
            error: false
        }
    })

    
    useEffect(() => {
        axios.get(`http://localhost:8080/lanchonete/products/${id}`)
            .then(response => {
                const product = response.data[0]

                setForm({
                    name: {
                        value: product.name,
                        error: false,
                    },
                    price: {
                        value: product.price,
                        error: false,
                    }
                })
            })

    }, [id])


    const handleInputChange = e => {
        const {name, value} = e.target

        setForm({
            ...form,
            [name]: {
                ...form[name],  // Preserve o estado de erro
                value: value,
            }
        })
    }
 
    const handleSubmitButton = () => {
        setIsLoading(true)

        let hasError = false

        const newFormErrorState = {
            ...form
        }

        if (!form.name.value) {
            hasError = true
            newFormErrorState.name = {
                value: form.name.value,
                error: true,
                helperText: 'Fill the product name correctly!'
            }            
        }

        if (!form.price.value) {
            hasError = true
            newFormErrorState.price = {
                value: form.price.value,
                error: true,
                helperText: 'Fill the product price correctly'
            }
        }

        if(hasError) {
            return setForm(newFormErrorState)
        }

        axios.put(`http://localhost:8080/lanchonete/products/${id}`, {
            name: form.name.value,
            price: form.price.value
        }).then(() => {
            setIsLoading(false)
            setOpenToasty(true)
        })
    }

    return (
        <>
            <div>
                <TextField 
                    sx={{mt: 3}} 
                    label='Name'
                    value={form.name.value}
                    onChange={handleInputChange}
                    name='name'
                    error={form.name.error}
                    helperText={form.name.error ? form.name.helperText : ''}
                />
            </div>
            <div>
                <TextField 
                    sx={{mt: 3}} 
                    label='Price'
                    value={form.price.value}
                    onChange={handleInputChange}
                    name='price'
                    error={form.price.error}
                    helperText={form.price.error ? form.price.helperText : ''}
                />
            </div>
            <div>
                <Button 
                    variant='contained' 
                    sx={{mt: 3}}
                    onClick={handleSubmitButton}
                >
                    {
                        isLoading 
                        ? <Loading />
                        : 'Send'
                    }
                </Button>
            </div>
            <Toasty
                open={openToasty}
                severity='success'
                text='The product has been edited successufully!'
                onClose={() => {
                    setOpenToasty(false)
                }}
            />
        </>
    )
}


export default EditProduct