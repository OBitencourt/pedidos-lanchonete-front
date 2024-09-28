import * as React from 'react';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

const Loading = () => {
  return (
    <Stack spacing={2} direction="row" alignItems="center">
      <CircularProgress color='secondary' size="30px" />
    </Stack>
  );
}

export default Loading