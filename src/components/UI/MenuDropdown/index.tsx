import { useMemo, useState } from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MenuDropdownSearch from '@components/UI/MenuDropdownSearch';
import StrongButton from '@components/UI/StrongButton';
import { IMenuDropdownProps } from './interface';
import {
  DropdownMenuSXStyles,
  StyledMenuDropdownFooter,
  StyledMenuDropdownHeader,
  StyledMenuIcon,
  StyledMenuLabel,
} from './style';
import { primary } from '@/colors';
import checkIcon from '@images/checkIcon.svg';
import checkedIcon from '@images/checkedIcon.svg';

const SELECT_WIDTH = 200;
const SELECT_MAX_WIDTH = 300;
const MenuProps = {
  PaperProps: {
    sx: DropdownMenuSXStyles,
  },
};

const MenuDropdown = ({
  menuLabel,
  menuName,
  menuOptions,
  menuOnChange,
  menuReset,
  appliedOptions,
  menuWidth,
  maxMenuWidth,
  register,
}: IMenuDropdownProps) => {
  const [value, setValue] = useState('');

  const matchedOptions = useMemo(() => {
    return menuOptions.filter(option => {
      return option.toLowerCase().includes(value.toLowerCase());
    });
  }, [menuOptions, value]);

  return (
    <FormControl
      sx={{
        m: 0,
        width: menuWidth || SELECT_WIDTH,
        maxWidth: maxMenuWidth || SELECT_MAX_WIDTH,
      }}
      size="small"
    >
      <Select
        {...(register && { ...register(menuName) })}
        sx={{
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: primary,
            color: primary,
          },
        }}
        IconComponent={() => (
          <StyledMenuIcon>
            <ExpandMoreIcon />
          </StyledMenuIcon>
        )}
        multiple
        displayEmpty
        inputProps={{ 'aria-label': 'Without label' }}
        value={appliedOptions}
        onChange={menuOnChange}
        name={menuName}
        input={<OutlinedInput />}
        renderValue={selected => {
          return (
            selected && (
              <StyledMenuLabel>
                <p>{menuLabel}: </p>
                <strong>
                  {selected.length === 0 ? 'Любое' : selected.join(', ')}
                </strong>
              </StyledMenuLabel>
            )
          );
        }}
        MenuProps={MenuProps}
      >
        <StyledMenuDropdownHeader>
          <p>{menuLabel}</p>
          <MenuDropdownSearch
            value={value}
            handleChange={(value: string) => setValue(value)}
          />
        </StyledMenuDropdownHeader>
        {matchedOptions.map(location => (
          <MenuItem key={location} value={location}>
            <Checkbox
              checked={appliedOptions!.indexOf(location) > -1}
              icon={<img src={checkIcon} alt="check" />}
              checkedIcon={<img src={checkedIcon} alt="checked" />}
            />
            <ListItemText primary={location} />
          </MenuItem>
        ))}
        <StyledMenuDropdownFooter>
          <StrongButton handleClick={menuReset}>СБРОСИТЬ</StrongButton>
          <StrongButton>ПРИМЕНИТЬ</StrongButton>
        </StyledMenuDropdownFooter>
      </Select>
    </FormControl>
  );
};

export default MenuDropdown;
