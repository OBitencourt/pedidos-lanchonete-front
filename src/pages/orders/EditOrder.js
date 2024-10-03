
import React, { useEffect, useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Button } from '@mui/material';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import Toasty from '../../components/Toasty';
import Loading from '../../components/Loading';

export default function SelectLabels() {
  const { id } = useParams();

  const [status, setStatus] = useState('');

  const [openToasty, setOpenToasty] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (event) => {
    console.log('New status selected:', event.target.value); // Adicione este log
    setStatus(event.target.value);
  };

  useEffect(() => {
    axios.get(`http://localhost:8080/lanchonete/orders/${id}`)
      .then(response => {
        const actualStatus = response.data[0].status;
        console.log('Actual Status from API:', actualStatus); // Adicione este log

        // Normalize o valor do status para corresponder aos valores disponíveis no Select
        const normalizedStatus = normalizeStatus(actualStatus);
        setStatus(normalizedStatus);
      })
      .catch(error => {
        console.error('Error fetching order status:', error);
      });
  }, [id]);

  const normalizeStatus = (status) => {
    // Mapeie os valores possíveis e normalize conforme necessário
    const statusMap = {
      'Em entrega': 'Em Entrega',
      'Em preparo': 'Em Preparo',
      'Pendente': 'Pendente',
      'Entregue': 'Entregue',
      'Cancelado': 'Cancelado'
    };

    return statusMap[status] || status;
  };

  const handleSubmitButton = () => {
    setIsLoading(true)

    const normalizedStatus = normalizeStatus(status)

    axios.put(`http://localhost:8080/lanchonete/orders/${id}`, {status: normalizedStatus})
        .then(() => {
            setOpenToasty(true)
            setIsLoading(false)
        })
  }

  return (
    <>
      <FormControl sx={{ mt: 3, mb: 3, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">Status</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={status}
          label="Status"
          onChange={handleChange}
        >
          <MenuItem value='Pendente'>Pendente</MenuItem>
          <MenuItem value='Em Preparo'>Em Preparo</MenuItem>
          <MenuItem value='Em Entrega'>Em Entrega</MenuItem>
          <MenuItem value='Entregue'>Entregue</MenuItem>
          <MenuItem value='Cancelado'>Cancelado</MenuItem>
        </Select>
      </FormControl>
      <div>
        <Button
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
            text='The status has been edited successfully!'
            onClose={() => {
                setOpenToasty(false)
            }}
        />
      </div>
    </>
  );
}