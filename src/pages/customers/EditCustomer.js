import React from 'react';

import axios from 'axios'

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import {useState, useEffect} from 'react'

import {useParams} from 'react-router-dom'

import Loading from '../../components/Loading';
import Toasty from '../../components/Toasty'


const EditCustomer = () => {

    const [isLoading, setIsLoading] = useState(false)
    const [openToasty, setOpenToasty] = useState(false)

    const { id } = useParams()

    const [form, setForm] = useState({
        name: {
            value:'',
            error: false,

        },
        email: {
            value:'',
            error: false,
            
        },
        tel: {
            value:'',
            error: false,
            
        },
        adress: {
            value:'',
            error: false,
            
        }
    })

    useEffect(() => {
        axios.get(`http://localhost:8080/lanchonete/customers/${id}`)
            .then(response => {
                const user = response.data[0]

                console.log(user)

                setForm({
                    name: {
                        value: user.name,
                        error: false
                    },
                    email: {
                        value: user.email,
                        error: false
                    },
                    tel: {
                        value: user.tel,
                        error: false
                    },
                    adress: {
                        value: user.adress,
                        error: false
                    }
                })
            })
    }, [id])

    const handleOnInputChange = e => {
        const {name, value} = e.target

        setForm({
            ...form,
            [name]: {
                ...form[name],
                value: value
            }
        })
    }

    const handleSubmitButton = () => {
        setIsLoading(true)

        let hasError = false

        const newFormErrorState = {
            ...form
        }

        if(!form.name.value) {
            hasError = true
            newFormErrorState.name = {
                value: form.name.value,
                error: true, 
                helperText: 'Fill the name correctly!"'
            }
        }

        if(!form.email.value) {
            hasError = true
            newFormErrorState.email = {
                value: form.email.value,
                error: true, 
                helperText: 'Fill the email correctly!"'
            }
        }

        if(!form.tel.value) {
            hasError = true
            newFormErrorState.tel = {
                value: form.tel.value,
                error: true, 
                helperText: 'Fill the phone correctly!"'
            }
        }

        if(!form.adress.value) {
            hasError = true
            newFormErrorState.adress = {
                value: form.adress.value,
                error: true, 
                helperText: 'Fill the adress correctly!"'
            }
        }

        if (hasError) {
            return setForm(newFormErrorState)
        }


        axios.put(`http://localhost:8080/lanchonete/customers/${id}`, {
            name: form.name.value,
            email: form.email.value,
            tel: form.tel.value,
            adress: form.adress.value

        })
        .then(response => {
            console.log(response)
            setIsLoading(false)
        })
    }

    return (
        <>
            <div>
                <TextField 
                    label='Name'
                    variant='outlined'
                    name='name'
                    sx={{mt: 2}}
                    value={form.name.value}
                    onChange={handleOnInputChange}
                    error={form.name.error}
                    helperText={form.name.error ? form.name.helperText : ''}
                />
            </div>
            <div>
                <TextField 
                    label='Email'
                    variant='outlined'
                    name='email'
                    sx={{mt: 2}}
                    value={form.email.value}
                    onChange={handleOnInputChange}
                    error={form.email.error}
                    helperText={form.email.error ? form.email.helperText : ''}
                />
            </div>
            <div>
                <TextField 
                    label='Phone'
                    variant='outlined'
                    name='tel'
                    sx={{mt: 2}}
                    value={form.tel.value}
                    onChange={handleOnInputChange}
                    error={form.tel.error}
                    helperText={form.tel.error ? form.tel.helperText : ''}
                />
            </div>
            <div>
                <TextField 
                    label='Adress'
                    variant='outlined'
                    name='adress'
                    sx={{mt: 2}}
                    value={form.adress.value}
                    onChange={handleOnInputChange}
                    error={form.adress.error}
                    helperText={form.adress.error ? form.adress.helperText : ''}
                />
            </div>
            <div>
                <Button
                    variant='contained'
                    sx={{mt: 2}}
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
                onClose={() => {
                    setOpenToasty(false)
                }}
                severity='success'
                text='The customer has been edited successfully!'
            />
        </>
    )
}

export default EditCustomer