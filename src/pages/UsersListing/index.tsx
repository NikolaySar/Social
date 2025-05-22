import { useEffect, useMemo, useState } from 'react';
import { Badge, IconButton, SelectChangeEvent } from '@mui/material';
import { Close } from '@mui/icons-material';
import MenuDropdown from '@/components/UI/MenuDropdown';
import UserCard from '@/components/UserCard';
import { getUsersByFiltersService } from '@/services/user';
import { IUser } from '@/interfaces';
import { IUserFilters } from './interface';
import {
  StyledFilterChip,
  StyledFiltersButton,
  StyledUsersListing,
  StyledUsersListingFilters,
  StyledUsersListingFiltersChips,
  StyledUsersListingHeader,
  StyledUsersListingHeading,
  StyledUsersListingResult,
  StyledUsersListingTable,
} from './style';
import {
  filtersInterestsName,
  filtersLabelName,
  filtersLanguagesName,
  filtersLocationsName,
  interests,
  languages,
  locations,
} from '@/constants/filtersData';
import tuneIcon from '@images/tuneIcon.svg';

const UsersListing = () => {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [users, setUsers] = useState<IUser[]>([]);

  const [filters, setFilters] = useState<IUserFilters>({
    [filtersLocationsName]: [],
    [filtersLanguagesName]: [],
    [filtersInterestsName]: [],
  });

  const filtersCount = useMemo(() => {
    return Object.values(filters).reduce(
      (accumulator, currentValue) => (accumulator += currentValue.length),
      0
    );
  }, [filters]);

  useEffect(() => {
    getUsers();
  }, [filters]);

  const getUsers = async () => {
    const response = await getUsersByFiltersService(filters);

    setUsers(response.data);
  };

  const handleFiltersChange = (event: SelectChangeEvent<string[]>) => {
    const {
      target: { value },
    } = event;

    if (!value[0]) {
      return;
    }
    const filterName = event.target.name;

    setFilters({
      ...filters,
      [filterName]: typeof value === 'string' ? value.split(',') : value,
    });
  };

  const handleFilterReset = (filterName: string) => {
    setFilters({
      ...filters,
      [filterName]: [],
    });
  };

  return (
    <StyledUsersListing>
      <StyledUsersListingHeader>
        <StyledUsersListingHeading>Люди</StyledUsersListingHeading>
        <StyledFiltersButton>
          <IconButton onClick={() => setIsFiltersOpen(!isFiltersOpen)}>
            <Badge badgeContent={filtersCount}>
              <img src={tuneIcon} alt="tuneIcon" />
            </Badge>
          </IconButton>
        </StyledFiltersButton>
        <StyledUsersListingResult>
          Найдено {users.length} человек
        </StyledUsersListingResult>
        <StyledUsersListingFilters $maxHeight={isFiltersOpen ? '150px' : '0'}>
          <MenuDropdown
            menuName={filtersLocationsName}
            menuLabel="Локация"
            menuOptions={locations}
            menuOnChange={handleFiltersChange}
            menuReset={() => handleFilterReset(filtersLocationsName)}
            appliedOptions={filters.locations}
          />
          <MenuDropdown
            menuName={filtersLanguagesName}
            menuLabel="Языки"
            menuOptions={languages}
            menuOnChange={handleFiltersChange}
            menuReset={() => handleFilterReset(filtersLanguagesName)}
            appliedOptions={filters.languages}
          />
          <MenuDropdown
            menuName={filtersInterestsName}
            menuLabel="Интересы"
            menuOptions={interests}
            menuOnChange={handleFiltersChange}
            menuReset={() => handleFilterReset(filtersInterestsName)}
            appliedOptions={filters.interests}
          />
        </StyledUsersListingFilters>
        <StyledUsersListingFiltersChips
          $maxHeight={filtersCount ? '150px' : '0'}
        >
          {Object.entries(filters).map((filter: [string, string[]], index) => {
            return !filter[1].length ? (
              ''
            ) : (
              <StyledFilterChip key={index}>
                <small>{`${filtersLabelName[filter[0]]}: `}</small>
                <p>{filter[1].join('; ')}</p>
                <IconButton onClick={() => handleFilterReset(filter[0])}>
                  <Close fontSize="small" />
                </IconButton>
              </StyledFilterChip>
            );
          })}
        </StyledUsersListingFiltersChips>
      </StyledUsersListingHeader>
      <StyledUsersListingTable>
        {users.map(user => (
          <UserCard
            key={user._id}
            id={user._id}
            fullName={user.firstName + ' ' + user.lastName}
            isVerified={user.isEmailConfirmed}
            avatar={user.userInfo?.avatarUrl}
            work={user.userInfo?.lastWork}
            location={user.userInfo?.location}
            ahubLink={user.userInfo.ahubLink}
          />
        ))}
      </StyledUsersListingTable>
    </StyledUsersListing>
  );
};

export default UsersListing;
