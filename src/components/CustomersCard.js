

import React, {useState} from 'react';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';

import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';

import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { purple } from '@mui/material/colors';

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ModalConfirm from './ModalConfirm';


const CustomersCard = ({
    name,
    email,
    tel,
    adress,
    id,
    onRemoveCustomer
}) => {

  const [open, setOpen] = useState(false)

  const handleToggleModal = () => {
    setOpen(!open)
  }

  const handleConfirmModal = id => {
    onRemoveCustomer(id)
    handleToggleModal()
  }
 
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: purple[500] }} aria-label="recipe">
              
            </Avatar>
          }
          
          title={name}
          subheader={email}
        />
        
        <CardContent>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            <div><b>Phone:</b> {tel}</div>
            <div><b>Adress:</b> {adress}</div>
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton onClick={handleToggleModal} sx={{mr: 2}} aria-label="add to favorites">
            <DeleteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <EditIcon />
          </IconButton>
          
        </CardActions>
        
      </Card>
      <ModalConfirm 
        open={open}
        onClose={handleToggleModal}
        onConfirm={() => handleConfirmModal(id)}
        title='Excluir Cliente'
        message={`Deseja realmente excluir ${name}? Essa ação será irreversível.`}
      />
    </>
  );
}

export default CustomersCard
