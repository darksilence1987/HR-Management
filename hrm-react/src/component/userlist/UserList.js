import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useDispatch, useSelector } from "react-redux";
import {findallUser} from "../../store/features/UserSlice";
import {Stack, Button} from "@mui/material";




export default function DataTable() {
  // const columns1 = [
  //   { field: 'id', headerName: 'ID', width: 70 },
  //   { field: 'authid', headerName: 'AuthID', width: 70 },
  //   { field: 'photo', headerName: 'Photo', width: 70 },
  //   { field: 'name', headerName: 'Name', width: 130 },
  //   { field: 'surname', headerName: 'Surname', width: 130 },
  //   { field: 'secondName', headerName: 'Second Name', width: 130 },
  //   { field: 'secondSurname', headerName: 'Second Surname', width: 130 },
  //   { field: 'birthDate', headerName: 'Birth Date', width: 130 },
  //   { field: 'birthPlace', headerName: 'Birth Place', width: 130 },
  //   { field: 'startDate', headerName: 'Start Date', width: 130 },
  //   { field: 'job', headerName: 'Job', width: 130 },
  //   { field: 'department', headerName: 'Department', width: 130 },
  //   { field: 'email', headerName: 'Email', width: 130 },
  //   { field: 'phone', headerName: 'Phone', width: 130 },
  //   { field: 'address', headerName: 'Address', width: 130 },
  //   { field: 'role', headerName: 'Role', width: 130 },
  //
  //
  //
  //
  //   // {
  //   //   field: 'fullName',
  //   //   headerName: 'Full name',
  //   //   description: 'This column has a value getter and is not sortable.',
  //   //   sortable: false,
  //   //   width: 160,
  //   //   valueGetter: (params) =>
  //   //       `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  //   // },
  //
  //
  // ];



  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },


    { field: 'email', headerName: 'Email', width: 130 },
      { field: 'photo', headerName: 'Photo', width: 70 },
    { field: 'name', headerName: 'First Name', width: 130 },
    { field: 'surname', headerName: 'Last Name', width: 130 },

    {
      field: 'action',
      headerName: 'Action',
      width: 180,
      sortable: false,
      disableClickEventBubbling: true,

      renderCell: (params) => {
        const onClick = (e) => {
          const currentRow = params.row;



          return alert(JSON.stringify(currentRow, null, 4));
        };

        return (

            <Stack direction="row" spacing={2}>
              <Button variant="outlined" color="warning" size="small" onClick={onClick}>User Details</Button>
              {/*<Button variant="outlined" color="error" size="small" onClick={onClick}>Delete</Button>*/}
            </Stack>
        );
      },
    },
    //   { field: 'secondName', headerName: 'Second Name', width: 130 },
    //   { field: 'secondSurname', headerName: 'Second Surname', width: 130 },
    //   { field: 'birthDate', headerName: 'Birth Date', width: 130 },
    //   { field: 'birthPlace', headerName: 'Birth Place', width: 130 },
    //   { field: 'startDate', headerName: 'Start Date', width: 130 },
    // { field: 'job', headerName: 'Job', width: 130 },
    // { field: 'department', headerName: 'Department', width: 130 },
    // { field: 'phone', headerName: 'Phone', width: 130 },
    // { field: 'address', headerName: 'Address', width: 130 },
    // { field: 'role', headerName: 'Role', width: 130 },

  ];



  const dispatch = useDispatch();


  const findAllUser = async () =>{
    const response = await dispatch(findallUser());

  }
  const userListUpdate = useSelector((state) => state.user.userListUpdate);
  const userProfileList = useSelector((state) => state.user.userProfileList);
  const user = useSelector((state) => state.user.userProfile);


  React.useEffect(() => {
    findAllUser();
  }, [userListUpdate]);


  // const [userChoose, setUserChoose] = React.useState([{address: null, department: null, email: null
  // ,firstName: null,id: null,job: null,lastName: null,phone: null,photo:null,role:null}]);


//   const onRowsSelectionHandler = (ids) => {
// setUserChoose(ids.map((id) => userProfileList.find((row) => row.id === id)))
//   };



  return (
      <div className="container">

        <div style={{ height: 400, width: '100%' }}>
          <DataGrid
              rows={userProfileList}
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