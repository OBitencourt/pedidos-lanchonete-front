
import React, {useState} from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import Toasty from '../../components/Toasty'

import axios from 'axios'


const AddProduct = () => {

    const [form, setForm] = useState({
        name: '',
        price: ''
    })

    const [openToasty, setOpenToasty] = useState(false)

    const handleOnInputChange = (e) => {
        const {name, value} = e.target

        setForm({
            ...form,
            [name]: value,
        })
    }
    
    const handleOnSendButton = () => {

        console.log('Dados que serão enviados:', form);

        axios.post('http://localhost:8080/lanchonete/products', form)
            .then(response => {
                console.log('ok', response)
                setOpenToasty(true)
            })

    }
    return (
        <>
            <div>
                <TextField sx={{mt: 4}}
                    variant='outlined' 
                    label='Name'
                    name='name'
                    value={form.value}
                    onChange={handleOnInputChange}
                />
            </div>
            <div>
                <TextField sx={{mt: 2}}
                    variant='outlined' 
                    label='Price'
                    name='price'
                    value={form.value}
                    onChange={handleOnInputChange}
                />
            </div>
            <div>
                <Button 
                    sx={{mt: 2}} 
                    variant='contained'
                    onClick={handleOnSendButton}
                >
                    Send
                </Button>
            </div>
            <Toasty 
                open={openToasty}
                onClose={() => {
                    setOpenToasty(false)
                }}
                text='The product was sent successfully!'
                severity='success'
            />
        </>
    )
}

export default AddProduct