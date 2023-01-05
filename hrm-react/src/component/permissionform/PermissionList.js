import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import {Button, Stack} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {findAllPermission, permissionConfirmed, permissionRejected} from "../../store/features/PermissionSlice";


export default function PermissionList() {
  const dispatch = useDispatch();
  const email = useSelector((state) => state.auth.auth.email);

    const findPermission = async () =>{
        const response = await dispatch(findAllPermission(email));

    }
  const approve = async () =>{
    const response = await dispatch(permissionConfirmed(email));

  }
  const reject = async () =>{
    const response = await dispatch(permissionRejected(email));

  }
  const approvedPermissionList = useSelector(state => state.permission.permissionListUpdate)
  React.useEffect(() => {
    findPermission()
  }, [approvedPermissionList]);

  const allPermission = useSelector((state)=>state.permission.allPermission);
  console.log(allPermission);


  const columns = [
    { field: 'id', headerName: 'ID', width: 90, hide: true },
    {
      field: 'userEmail',
      headerName: 'Email',
      width: 150,
      editable: true,
    },
    {
      field: 'permissionType',
      headerName: 'Permission Type',
      sortable: false,
      width: 160,
    },
    {
      field: 'dayAmount',
      headerName: 'Day Off',
      type: 'number',
      width: 110,
      editable: true,
    },
    {
      field: 'startDate',
      headerName: 'Start Date',
      sortable: false,
      type: 'date',
      width: 160,
    },
    {
      field: 'status',
      headerName: 'Status',
      sortable: false,
      width: 160,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 220,
      sortable: false,
      disableClickEventBubbling: true,
      renderCell: (params) => {
        const GetUser = () => {
          // setUserInfo(params.row);
        };
        return (

            <Stack direction="row" spacing={2}>
              <Button variant="outlined" color="warning" size="small" onClick={approve} >Approve</Button>
              <Button variant="outlined" color="error" size="small" onClick={reject} >Reject</Button>
            </Stack>
        );
      },
    },
  ];
  return (
      <Box sx={{ height: 400, width: '100%' }}>
        <DataGrid
            rows={allPermission}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            // checkboxSelection
            disableSelectionOnClick
            experimentalFeatures={{ newEditingApi: true }}
        />
      </Box>
  );
}


