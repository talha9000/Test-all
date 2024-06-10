import React, { useState, useEffect, useCallback } from 'react';
import DataGrid, {
  Column,
  GroupPanel,
  SearchPanel,
  Pager,
  Paging,
  Editing,
} from 'devextreme-react/data-grid';
import 'devextreme/dist/css/dx.light.css';
import data from '../App/data';

const CustomOIl = () => {
  const [dataSource, setDataSource] = useState([]);
  const [selectedItemKeys, setSelectedItemKeys] = useState([]);
  const [editBox, setEditBox] = useState(true); // Add state for edit box toggle

  useEffect(() => {
    setDataSource(JSON.parse(JSON.stringify(data.data)));
  }, []);

  const onSelectionChanged = useCallback((data) => {
    setSelectedItemKeys(data.selectedRowKeys);
  }, []);

  const onRowUpdated = useCallback((e) => {
    // Handle row update here
    console.log('Row updated:', e.data);
    // You can perform update operation here, like calling an API
  }, []);

  return (
    <div className='pt-44 container'>
      <div className='row'>
        <div className='col'>
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              value=""
              className="sr-only peer mt-5 ml-3"
              checked={editBox}
              onChange={() => setEditBox(!editBox)}
            />
            <div className="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ms-3 text-sm font-medium text-gray-400 dark:text-gray-500">
              {editBox ? "Disable Editing" : "Enable Editing"}
            </span>
          </label>

          <DataGrid
            dataSource={dataSource}
            allowColumnReordering={true}
            rowAlternationEnabled={true}
            showBorders={true}
            width="100%"
            selectedRowKeys={selectedItemKeys}
            onSelectionChanged={onSelectionChanged}
            onRowUpdated={onRowUpdated}
          >
            <GroupPanel visible={true} />
            <SearchPanel visible={true} highlightCaseSensitive={true} />
            <Pager allowedPageSizes={[10, 20, 50]} showPageSizeSelector={true} />
            <Paging defaultPageSize={50} />
            <Editing mode="cell" allowUpdating={editBox} />

            <Column
              dataField="car_name"
              width={250}
              fixed={true}
              caption={'OIL DATA::'}
              dataType="string"
              allowEditing={false}
            />

            {dataSource.length > 0 &&
              Object.keys(dataSource[0]).map((field, index) => {
                if (!['car_name'].includes(field)) {
                  return (
                    <Column
                      key={index}
                      dataField={field}
                      dataType="string"
                      allowEditing={(e) => {
                        const row = e.row.data;
                        // Example condition: non-editable if group_name is 'DATE/TIME CHECK'
                        return editBox && row.group_name !== 'id';
                      }}
                      cellRender={(e) => {
                        const isEditable = editBox && e.row.data.group_name !== 'id';
                        const cellStyles = {
                          backgroundColor: isEditable ? 'white' : 'lightgray',
                          cursor: isEditable ? 'pointer' : 'not-allowed',
                        };

                        return (
                          <div style={cellStyles}>
                            {e.value}
                          </div>
                        );
                      }}
                    />
                  );
                }
                return null;
              })}

            <Column
              dataField="car_name"
              caption={':'}
              dataType="string"
              groupIndex={0}
              sortingMethod={(e) => {
                // Custom sorting method
              }}
            />
          </DataGrid>
        </div>
      </div>
    </div>
  );
};

export default CustomOIl;
