import React from 'react'
import Box from '@mui/material/Box'
import './New.css'

const Grid = () => {

  return (
    <div className='gridsystem'>
       <Grid container>
  <Grid >
    <Box bgcolor='primary-light' p={2}>
      item-1
      </Box>
    </Grid>
  <Grid >
  <Box bgcolor='primary-light' p={2}>
    item-2
    </Box>
    </Grid>
  <Grid >
  <Box bgcolor='primary-light' p={2}>
    item-3
    </Box>
   </Grid>
  <Grid >
  <Box bgcolor='primary-light' p={2}>
    item-4
    </Box>
 </Grid>
</Grid>
    </div>
  )
}
export default Grid
