import { ICompanyAction } from '@/interfaces';
import { ICompanyState } from './interface';
import companyActions from '../enums/company';

const initialState: ICompanyState = {
  error: null,
  company: {},
  loading: false,
};

export const companyReducer = (state: ICompanyState = initialState, action: ICompanyAction) => {
  switch (action.type) {
    case companyActions.COMPANY_CREATE:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case companyActions.COMPANY_CREATE_SUCCESS:
      return {
        error: null,
        loading: false,
        company: action.payload,
      };

    case companyActions.COMPANY_CREATE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    case companyActions.START_GET_COMPANY:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case companyActions.GET_COMPANY_SUCCESS:
      return {
        error: null,
        loading: false,
        company: action.payload,
      };

    case companyActions.GET_COMPANY_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
};
