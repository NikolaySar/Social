import { IconButton, TextField, inputLabelClasses } from '@mui/material';
import { Close, Search } from '@mui/icons-material';
import { IMenuInputSearchProps } from './interface';
import { gray, primary } from '@/colors';

const MenuDropdownSearch = ({ value, handleChange }: IMenuInputSearchProps) => {
  return (
    <TextField
      onKeyDown={e => e.stopPropagation()}
      size="small"
      label="Поиск..."
      InputLabelProps={{
        sx: {
          [`&.${inputLabelClasses.shrink}`]: {
            color: gray,
          },
        },
      }}
      onChange={e => {
        e.stopPropagation();
        handleChange(e.target.value);
      }}
      value={value}
      InputProps={{
        endAdornment: value ? (
          <IconButton onClick={() => handleChange('')}>
            <Close />
          </IconButton>
        ) : (
          <IconButton>
            <Search />
          </IconButton>
        ),
        sx: {
          padding: 0,
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: primary,
            color: primary,
          },
        },
      }}
    />
  );
};

export default MenuDropdownSearch;
