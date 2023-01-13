import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import {Button, Stack} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {
    findAllFinalizedPermissions,
} from "../../store/features/PermissionSlice";

export default function ApprovedPermissionList() {

    const approvedPermissionList = useSelector(state => state.permission.permissionListUpdate)

    const dispatch = useDispatch();
    const email = useSelector((state) => state.auth.auth.email);

    const findApprovedPermission = async () =>{
        const response = await dispatch(findAllFinalizedPermissions(email));
    }

    React.useEffect(() => {
        findApprovedPermission()
    }, [approvedPermissionList]);

    const allApprovedPermission = useSelector((state)=>state.permission.allAprrovedPermission);
    console.log(allApprovedPermission);




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

    ];

    return (
        <Box sx={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={allApprovedPermission}
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


