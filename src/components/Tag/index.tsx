import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { tags } from '../../constants/feedData';

const Tag = () => (
  <Stack direction="row" spacing={1}>
    {tags.map(tag => (
      <Chip key={tag.id} label={tag.tag} />
    ))}
  </Stack>
);

export default Tag;
