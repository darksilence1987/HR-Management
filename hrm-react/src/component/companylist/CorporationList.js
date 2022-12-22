import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useDispatch, useSelector } from "react-redux";
import {Stack, Button} from "@mui/material";
import {findallCorporation} from "../../store/features/CorporationSlice";



export default function DataTableComp() {


    const columns = [
        { field: 'id', headerName: 'ID', width: 60 },
        { field: 'name', headerName: 'Company  Name', width: 100 },
        { field: 'title', headerName: 'Title', width: 70 },
        { field: 'email', headerName: 'Email', width: 120 },
        { field: 'phone', headerName: 'Phone', width: 120 },
        { field: 'address', headerName: 'Address', width: 100 },

        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            sortable: false,
            disableClickEventBubbling: true,

            renderCell: (params) => {
                const onClick = (e) => {
                    const currentRow = params.row;



                    return alert(JSON.stringify(currentRow, null, 4));
                };

                return (

                    <Stack direction="row" spacing={2}>
                        <Button variant="outlined" color="warning" size="small" onClick={onClick}>Details</Button>
                        {/*<Button variant="outlined" color="error" size="small" onClick={onClick}>Delete</Button>*/}
                    </Stack>
                );
            },
        },


    ];



    const dispatch = useDispatch();


    const findAllCorporation = async () =>{
        const response = await dispatch(findallCorporation());

    }
    const corporationListUpdate = useSelector((state) => state.corporation.corporationListUpdate);
    const corporationList = useSelector((state) => state.corporation.corporationList);
    const corporation = useSelector((state) => state.corporation.corporation);

console.log(corporationListUpdate);
    React.useEffect(() => {
        findAllCorporation().then(r => r);},
        [corporationListUpdate]);
    // ??);


    // const [userChoose, setUserChoose] = React.useState([{address: null, department: null, email: null
    // ,firstName: null,id: null,job: null,lastName: null,phone: null,photo:null,role:null}]);


//   const onRowsSelectionHandler = (ids) => {
// setUserChoose(ids.map((id) => userProfileList.find((row) => row.id === id)))
//   };



    return (
        <div className="container">

            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={corporationList}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}

                    isCellEditable={(params) => params.row.age % 2 === 0}
                    experimentalFeatures={{ newEditingApi: true }}
                    disableMultipleSelection={true}



                />
            </div>

        </div>
    );
}