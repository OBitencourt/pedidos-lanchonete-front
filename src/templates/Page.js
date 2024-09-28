import Typography from '@mui/material/Typography';

const TemplatePage = ({title, Component}) => {
    return (

        <>
            <Typography sx={{mt: 5}} variant='h2'>
                {title}
            </Typography>
            <Component />
        </>
    )
}


export default TemplatePage