import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicButtons() {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="text" size="small">일괄변경</Button>
      <Button variant="contained" size="small">일괄변경</Button>
      <Button variant="outlined">일괄변경</Button>
    </Stack>
  );
}