import React, { useState, useEffect,useCallback } from 'react';
import DataGrid, {
  Column,
  RowDragging,
  GroupPanel,
  SearchPanel,
  Pager,
  Paging,
  Editing,
  DataGridTypes,
  Selection, Lookup, Toolbar, Item
} from 'devextreme-react/data-grid';
import 'devextreme/dist/css/dx.light.css'; // or dx.dark.css
import RawData from '../App/data'
import data from '../App/data';

const OilData = () => {
  const [dataSource, setDataSource] = useState([]);
 
  useEffect(() => {
    // Set the data source when the component mounts
    setDataSource(JSON.parse(JSON.stringify(data.data)));
    
  }, []);

//handle change
const handleRowUpdated = useCallback((e) => {
  const editData = e.data;
  const [matchedItem, index] = dataSource.map((item, index) => [item, index]).find(([item]) => item.id === editData.id) || [null, -1];
  
  if (matchedItem) {
     console.log("Matched item:", matchedItem, "at index:", index, "Edit item:", editData,"orignal data ",data.data[index]);
     const temp=data.data[index]
     for (const k in matchedItem){
      
       if(temp[k]!==matchedItem[k]){
        console.log("Item didnt match orignal is ::::",temp[k])
       }
     } 
     dataSource[index]=matchedItem
      data.data[index]=editData
    
    } else {
      console.log("No matching ID found.");
  }
}, [dataSource]);


  return (
    <div className='pt-44 container'>
      <div className='row'>
        <div className='col'>
          <DataGrid
            dataSource={dataSource}
            allowColumnReordering={true}
            rowAlternationEnabled={true}
            showBorders={true}
            width="100%"
            onRowUpdated={handleRowUpdated}
           
          >
            <GroupPanel visible={true} />
            <SearchPanel
              visible={true}
              highlightCaseSensitive={true}
            />
      
                  <Column dataField=':: User Oil Info' groupIndex={0}/>
                   
                  <Column dataField='next_oilChange_date'  groupIndex={2}/>
            <Column dataField="id" caption="ID" dataType="number" />
            <Column dataField="car_name" caption="Car Name" dataType="string" />
            <Column dataField="car_model" caption="Car Model" dataType="number" />
            <Column dataField="odometer_reading" caption="Odometer Reading" dataType="number" />
            <Column dataField="odometer_reading_next" caption="Next Odometer Reading" dataType="number" />
            <Column dataField="oil_change_date" caption="Oil Change Date" dataType="datetime" />
            <Column dataField="next_oilChange_date" caption="Next Oil Change Date" dataType="datetime" />
            <Column dataField="oil_grade" caption="Oil Grade" dataType="string" />
            <Column dataField="provider" caption="Provider" dataType="string" />
            <Column dataField="air_filter" caption="Air Filter" dataType="string" />
            <Column dataField="oil_filter" caption="Oil Filter" dataType="string" />
            <Column dataField="ac_filter" caption="AC Filter" dataType="string" />
            <Column dataField="total_cost" caption="Total Cost" dataType="number" format="currency" />
            <Column dataField="oil_vander" caption="Oil Vander" dataType="string" />
            <Column dataField="notes" caption="Notes" dataType="string" />
            <Column dataField="creation_date" caption="Creation Date" dataType="datetime" />
            <Column dataField="last_update" caption="Last Update" dataType="datetime" />
            <Column dataField="cuid" caption="CUID" dataType="number" />

            <Pager
              allowedPageSizes={[10, 20, 50]}
              showPageSizeSelector={true}
              
            />
            <Paging defaultPageSize={50} />
            <Editing
          mode="cell"
          allowUpdating={true}
           />
     
          </DataGrid>
        </div>
      </div>
    </div>
  );
};

export default OilData;
