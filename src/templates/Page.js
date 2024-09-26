import Typography from '@mui/material/Typography';

const TemplatePage = ({title, Component}) => {
    return (

        <>
            <Typography variant='h2'>{title}</Typography>
            <Component />
        </>
    )
}


export default TemplatePage