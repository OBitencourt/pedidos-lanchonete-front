import React, {useState} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import ModalConfirm from './ModalConfirm';

const OrdersCard = ({
    clienteId,
    produtos,
    status,
    onRemoveOrder,
    id
}) => {

  const [open, setOpen] = useState(false)

  const handleToggleModal = () => {
    setOpen(!open)
  }

  const handleConfirmButton = id => {
    onRemoveOrder(id)
    handleToggleModal()
  }

  return (
    <>
      <Card sx={{ maxWidth: 345 , mr: 3, mt: 2, mb: 2}}>
        
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {clienteId.name}
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            <b>Produtos:</b> 
            {produtos.map(produto => (
              <p>{`${produto.produtoId.name} `} - {`Quantidade: ${produto.quantidade}`}</p>
            ))}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            <b>Status:</b> {status}
            
          </Typography>
          
        </CardContent>
        <CardActions>
          <Button
            size="small"
            onClick={handleToggleModal}
          >
            Delete Order
          </Button>
          <Button size="small">Edit Status</Button>
        </CardActions>
      </Card>
      <ModalConfirm 
        open={open}
        onClose={() => {
          setOpen(false)
        }}
        title='Delete Order'
        message={`Are you sure that you want to delete ${clienteId.name} order? This action can not be reverted`}
        onConfirm={() => handleConfirmButton(id)}
      />
    </>
  );
}


export default OrdersCard