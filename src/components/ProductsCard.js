import React, {useState} from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
//import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
//import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';


import ModalConfirm from './ModalConfirm';

const ProductsCard = ({
    /*id*/
    name,
    price,
    id,
    onRemoveProduct,
    onEditProduct
}) => {
  
  const [open, setOpen] = useState(false)

  const handleToggleModal = () => {
    setOpen(!open)
  }

  const handleConfirmModal = id => {
    onRemoveProduct(id)
    handleToggleModal()
  }
  
  const handleEditProduct = id => {
    onEditProduct(id)
  }

  return (
    <>
    
      <Card sx={{ maxWidth: 345 }}>
        <>
          {
            /* 
              <CardMedia
                component="img"
                height="140"
                image="/static/images/cards/contemplative-reptile.jpg"
                alt="green iguana"
              />
              */
          }
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {price}
            </Typography>
          </CardContent>
        </>
        <CardActions>
          <Button onClick={() => handleToggleModal()} size="small" color="primary">
            Delete Product
          </Button>
          <Button onClick={() => handleEditProduct(id)} size="small" color="primary">
            Edit Product
          </Button>
        </CardActions>
      </Card>
      <ModalConfirm 
        open={open}
        onClose={handleToggleModal}
        onConfirm={() => handleConfirmModal(id)}
        title='Excluir Produto'
        message='Deseja realmente excluir esse produto? Essa ação é irreversível.'
      />
    </>
  );
}

export default ProductsCard