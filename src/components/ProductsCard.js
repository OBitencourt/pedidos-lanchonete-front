
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
//import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
//import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';


const ProductsCard = ({
    /*id*/
    name,
    price,
    id,
    onRemoveProduct
}) => {
  return (
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
        <Button onClick={() => onRemoveProduct(id)} size="small" color="primary">
          Delete Product
        </Button>
        <Button size="small" color="primary">
          Edit Product
        </Button>
      </CardActions>
    </Card>
  );
}

export default ProductsCard