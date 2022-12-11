import DeleteIconFilled from '@mui/icons-material/Delete';
import AddBoxIcon from '@mui/icons-material/AddBox';
import EditIcon from '@mui/icons-material/Edit';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Box, IconButton } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

type Props = {
  pageTitle: 'New' | 'Trash' | 'Edit' | 'Root';
}

export default function TopLinkBtns(props: Props) {
  const {pageTitle} = props;
  const navigate = useNavigate();

  return (
    <Box sx={{ display: 'flex',justifyContent: 'space-evenly' }}>
        <Link to={`/new_todo`}>
          <IconButton>
              <AddBoxIcon color={pageTitle=='New'? "primary":"inherit"}></AddBoxIcon>
          </IconButton>
        </Link>
        <Link to={`/trash`}>
          <IconButton>
              <DeleteIconFilled color={pageTitle=='Trash'? "primary":"inherit"} ></DeleteIconFilled>
          </IconButton>
        </Link>        
        <IconButton disabled={pageTitle=='Root'? true:false} onClick={() => navigate(-1)}>              
          <ArrowBackIcon/>
        </IconButton>
    </Box>
  )
}
