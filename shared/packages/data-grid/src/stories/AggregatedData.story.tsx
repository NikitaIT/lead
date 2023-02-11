/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import type { GridRenderCellParams, GridValueGetterParams } from '..';
import {
  COLUMN_BIRTHDATE,
  COLUMN_EMAIL,
  COLUMN_NAME,
  COLUMN_NUMBER,
  COLUMN_RECRUITED,
  COLUMN_STARTERS,
  COLUMN_NEWDISCOUNTRATEACHIEVED,
  COLUMN_BP,
  COLUMN_GROUPBP,
  COLUMN_SPONSORNAME,
  COLUMN_SPONSORNUMBER,
  COLUMN_DISCOUNT,
  COLUMN_TYPENAME,
  ROWS,
} from './data';
import { Template } from './template.story';

export const AggregatedData = Template.bind({});
interface AggregatedPair<T = unknown> {
  val1: T;
  val2: T;
}

AggregatedData.args = {
  columns: [
    COLUMN_NAME,
    COLUMN_NUMBER,
    COLUMN_BIRTHDATE,
    COLUMN_EMAIL,
    {
      ...COLUMN_RECRUITED,
      field: 'recruited',
      // GridValueGetterParams<any, any>
      // merges two related fields to one object containing both fields for _renderCell_ function
      valueGetter: (params: GridValueGetterParams): AggregatedPair<number> => ({
        val1: Number(params.row[`${params.field}1`] ?? 0),
        val2: Number(params.row[`${params.field}2`] ?? 0),
      }),
      renderCell: (params: GridRenderCellParams) => {
        const values = params.value as AggregatedPair<number>;
        const isDecrease = values.val1 < values.val2;

        return (
          <div className="compareData">
            <div className={isDecrease ? 'negative' : undefined}>
              {values.val1}
            </div>
            <div className="secondary">{values.val2}</div>
          </div>
        );
      },
    },
    {
      ...COLUMN_STARTERS,
      field: 'starters',
      // GridValueGetterParams<any, any>
      // merges two related fields to one object containing both fields for _renderCell_ function
      valueGetter: (params: GridValueGetterParams): AggregatedPair<number> => ({
        val1: Number(params.row[`${params.field}1`] ?? 0),
        val2: Number(params.row[`${params.field}2`] ?? 0),
      }),
      renderCell: (params: GridRenderCellParams) => {
        const values = params.value as AggregatedPair<number>;
        const isDecrease = values.val1 < values.val2;

        return (
          <div className="compareData">
            <div className={isDecrease ? 'negative' : undefined}>
              {values.val1}
            </div>
            <div className="secondary">{values.val2}</div>
          </div>
        );
      },
    },
    {
      ...COLUMN_NEWDISCOUNTRATEACHIEVED,
      field: 'newDiscountRateAchieved',
      // GridValueGetterParams<any, any>
      // merges two related fields to one object containing both fields for _renderCell_ function
      renderCell: (params: GridRenderCellParams) => {
        const value = params.row[params.field];
        const isPositive = value === 'Yes';

        return (
          <div className="compareData">
            <div className={isPositive ? 'positive' : undefined}>{value}</div>
          </div>
        );
      },
    },
    COLUMN_BP,
    COLUMN_GROUPBP,
    COLUMN_DISCOUNT,
    COLUMN_SPONSORNAME,
    COLUMN_SPONSORNUMBER,
    COLUMN_TYPENAME,
  ],
  rows: ROWS,
  disableColumnMenu: true,
  disableSelectionOnClick: true,
};

AggregatedData.parameters = {
  loki: { skip: true },
};

AggregatedData.parameters = {
  storySource: { source: 'Template.bind({})' },
  ...AggregatedData.parameters,
};
