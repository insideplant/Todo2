import DeleteIconFilled from '@mui/icons-material/Delete';
import AddBoxIcon from '@mui/icons-material/AddBox';
import EditIcon from '@mui/icons-material/Edit';
import { Box, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';

type Props = {
  pageTitle: 'New' | 'Trash' | 'Edit' | 'Root';
}

export default function TopLinkBtns(props: Props) {
  const {pageTitle} = props;

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
        <Link to={`/draft_todo`}>
          <IconButton>
              <EditIcon color={pageTitle=='Edit'? "primary":"inherit"}/>
          </IconButton>
        </Link>
    </Box>
  )
}
