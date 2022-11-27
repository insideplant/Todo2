import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import AddBoxIcon from '@mui/icons-material/AddBox';
import EditIcon from '@mui/icons-material/Edit';
import { Box, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';

export default function TopLinkBox() {
  return (
    <Box sx={{ display: 'flex',justifyContent: 'space-evenly' }}>
        <Link to={`/new_todo`}>
          <IconButton>
                  <AddBoxIcon color="primary"></AddBoxIcon>
          </IconButton>
        </Link>
        <Link to={`/trash`}>
          <IconButton>
              <DeleteIcon></DeleteIcon>
          </IconButton>
        </Link>
        <Link to={`/draft_todo`}>
          <IconButton>
              <EditIcon color="success"></EditIcon>
          </IconButton>
        </Link>
    </Box>
  )
}
