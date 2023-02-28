import { AgGridReact } from '@ag-grid-community/react';
import '@ag-grid-community/styles/ag-grid.css';
import '@ag-grid-community/styles/ag-theme-alpine.css';
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import { getModules } from '../install/install';
import { createOptions } from '../gridOptions/gridOptions';
import ReactDOM, { createPortal } from 'react-dom';
import { assert } from '@lead/std';
import { getway, home } from '@lead/data-access';
import { Button } from '@mui/material';
/* eslint-disable-next-line */
export interface AgGridGraphQLProps {}

export function AgGridGraphQL(props: AgGridGraphQLProps) {
  const { subscribeToMore, data, error, loading } = getway.useHomesQuery();
  const [
    createHome,
    { data: homeResult, error: homeError, loading: homeLoading },
  ] = getway.useCreateHomeMutation({
    // variables: {
    //   payload: {
    //     description: 'omg',
    //     is_active: true,
    //     name: 'lala',
    //   },
    // },
  });
  const [columnDefs] = useState([
    { field: 'id' },
    { field: 'name' },
    { field: 'description' },
  ]);
  const gridOptions = createOptions();
  const gridRef = useRef<HTMLDivElement | null>(null);
  const [showAgPaginationTemplateContent, renderFooter] =
    useState<Element | null>(null);
  const onGridReady = useCallback(() => {
    assert(gridRef.current);
    const template = gridRef.current.getElementsByClassName(
      'AgPaginationTemplateContent'
    )[0];
    assert(template);
    assert(template.childNodes.length === 0);
    renderFooter(template);
    // ReactDOM.render(
    //   <Slot homeResult={homeResult} data={data}></Slot>,
    //   template
    // );
  }, []);
  return (
    <div>
      {showAgPaginationTemplateContent &&
        createPortal(
          <div>
            <div>Last: {homeResult?.createHome?.name || 'Tap create bth'}</div>
            <div>
              From gql pub-sub:
              {(data?.homes && data?.homes[0] && data?.homes[0].name) ||
                'Tap create bth'}
            </div>
          </div>,
          showAgPaginationTemplateContent
        )}
      <Button
        onClick={() => {
          subscribeToMore<
            home.HomeAddedSubscription,
            home.HomeAddedSubscriptionVariables
          >({
            context: {
              clientName: 'home',
            },
            document: home.HomeAddedDocument,
            variables: { id: '' },
            updateQuery: (prev, { subscriptionData, variables }) => {
              if (Object.keys(prev || {}).length === 0) {
                // there's nothing in cache, return empty array otherwise crash!
                return { homes: [] };
              }
              if (!subscriptionData.data || !subscriptionData.data.homeAdded) {
                if (!prev) {
                  return { homes: [] };
                }
                return prev;
              }
              const newFeedItem = subscriptionData.data.homeAdded;
              // const sd = data?.homes;
              return Object.assign({}, prev, {
                homes: [
                  {
                    ...newFeedItem,
                    user: { ...newFeedItem.user, username: 'unknown' },
                  },
                  ...(prev.homes || []),
                ],
              });
            },
          });
        }}
      >
        Subscribe
      </Button>
      <Button
        onClick={() => {
          const name = Date.now() + 'lala_';
          console.log(name);
          createHome({
            variables: {
              payload: {
                description: 'omg',
                is_active: true,
                name: name,
              },
            },
          });
        }}
      >
        createHome
      </Button>
      <div
        ref={gridRef}
        className="ag-theme-alpine"
        style={{ width: '100%', height: 500 }}
      >
        <AgGridReact
          rowData={data?.homes}
          columnDefs={columnDefs}
          onGridReady={onGridReady}
          gridOptions={gridOptions}
          modules={getModules()}
        ></AgGridReact>
      </div>
    </div>
  );
}
