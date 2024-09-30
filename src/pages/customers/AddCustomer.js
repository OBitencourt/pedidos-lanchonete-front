
import React, {useState} from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import Toasty from '../../components/Toasty'

import axios from 'axios'
import Loading from '../../components/Loading'

const AddCustomer = () => {

    const [isLoading, setIsLoading] = useState(false)
    const [openToasty, setOpenToasty] = useState(false)

    const [form, setForm] = useState({
        name: '',
        email: '',
        tel: '',
        adress: ''
    })

    const handleOnInputChange = e => {
        const {name, value} = e.target

        setForm({
            ...form,
            [name]: value
        })
    }


    const handleSubmitButton = () => {
        setIsLoading(true)

        axios.post('http://localhost:8080/lanchonete/customers', form)
            .then(() => {
                setIsLoading(false)
                setOpenToasty(true)
            })
        console.log(form, 'Esses são os dados que serão enviados.')
    }

    return (
        <>
            <div>
                <TextField 
                    label='Name'
                    name='name'
                    variant='outlined'
                    sx={{mt: 2}}
                    value={form.name}
                    onChange={handleOnInputChange}
                />
            </div>
            <div>
                <TextField 
                    label='Email'
                    name='email'
                    variant='outlined'
                    sx={{mt: 2}}
                    value={form.email}
                    onChange={handleOnInputChange}
                />
            </div>
            <div>
                <TextField 
                    label='Phone'
                    name='tel'
                    variant='outlined'
                    sx={{mt: 2}}
                    value={form.tel}
                    onChange={handleOnInputChange}
                />
            </div>
            <div>
                <TextField 
                    label='Adress'
                    name='adress'
                    variant='outlined'
                    sx={{mt: 2}}
                    value={form.adress}
                    onChange={handleOnInputChange}
                />
            </div>
            <Button 
                sx={{mt: 2}} 
                variant='contained'
                onClick={handleSubmitButton}
            >
                {
                    isLoading 
                    ? <Loading />
                    : 'Send'
                }
            </Button>
            <Toasty 
                open={openToasty}
                severity='success'
                text='The customer was added successufully!'
                onClose={() => {
                    setOpenToasty(false)
                }}
            />
        </>


    )
}


export default AddCustomer