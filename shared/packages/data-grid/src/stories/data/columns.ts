import type { GridColDef } from '../../grid';

export interface UserColDef extends GridColDef {
  pinned?: boolean;
  hidden?: boolean;
}

export const COLUMN_NAME: UserColDef = {
  field: 'name',
  headerName: 'Name',
  width: 150,
  pinnable: true,
  hideable: false,
};

export const COLUMN_NUMBER: UserColDef = {
  field: 'brandPartnerNumber',
  headerName: 'Number',
  type: 'number',
  width: 80,
  pinnable: true,
  hideable: false,
};

export const COLUMN_ID: UserColDef = {
  field: 'id',
  headerName: 'Id',
  type: 'number',
  hidden: true,
  hideable: false,
};

export const COLUMN_BIRTHDATE: UserColDef = {
  field: 'birthDate',
  headerName: 'Birth Date',
  type: 'date',
  align: 'right',
};

export const COLUMN_EMAIL: UserColDef = {
  field: 'email',
  headerName: 'E-mail',
  width: 180,
};

export const COLUMN_RECRUITED: UserColDef = {
  field: 'recruited1',
  headerName: 'Recruited',
  align: 'right',
  type: 'number',
};

export const COLUMN_STARTERS: UserColDef = {
  field: 'starters1',
  headerName: 'Starters',
  align: 'right',
  type: 'number',
};

export const COLUMN_DISCOUNT: UserColDef = {
  field: 'discount',
  headerName: 'Discount',
  align: 'right',
  type: 'number',
};

export const COLUMN_BP: UserColDef = {
  field: 'bp',
  headerName: 'BP',
  align: 'right',
  type: 'number',
};

export const COLUMN_GROUPBP: UserColDef = {
  field: 'groupbp',
  headerName: 'Group BP',
  align: 'right',
  type: 'number',
};

export const COLUMN_NEWDISCOUNTRATEACHIEVED: UserColDef = {
  field: 'newDiscountRateAchieved',
  headerName: 'New discount rate achieved',
  align: 'center',
};

export const COLUMN_SPONSORNUMBER: UserColDef = {
  field: 'sponsorNumber',
  headerName: 'Sponsor number',
  align: 'right',
  type: 'number',
};

export const COLUMN_SPONSORNAME: UserColDef = {
  field: 'sponsorName',
  headerName: 'Sponsor name',
};

export const COLUMN_TYPENAME: UserColDef = {
  field: 'consultantTypeName',
  headerName: 'Type Name',
};

export const COLUMNS = [
  COLUMN_NAME,
  COLUMN_NUMBER,
  COLUMN_BIRTHDATE,
  COLUMN_EMAIL,
  COLUMN_TYPENAME,
  COLUMN_RECRUITED,
  COLUMN_STARTERS,
  COLUMN_DISCOUNT,
  COLUMN_BP,
  COLUMN_GROUPBP,
  COLUMN_NEWDISCOUNTRATEACHIEVED,
  COLUMN_SPONSORNAME,
  COLUMN_SPONSORNUMBER,
  COLUMN_ID,
];
