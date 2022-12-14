import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useDispatch, useSelector } from "react-redux";
import {findallUser} from "../../store/features/UserSlice";



export default function DataTable() {
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'authid', headerName: 'AuthID', width: 70 },
    { field: 'photo', headerName: 'Photo', width: 70 },
    { field: 'name', headerName: 'Name', width: 130 },
    { field: 'surname', headerName: 'Surname', width: 130 },
    { field: 'secondName', headerName: 'Second Name', width: 130 },
    { field: 'secondSurname', headerName: 'Second Surname', width: 130 },
    { field: 'birthDate', headerName: 'Birth Date', width: 130 },
    { field: 'birthPlace', headerName: 'Birth Place', width: 130 },
    { field: 'birthPlace', headerName: 'Birth Place', width: 130 },
    { field: 'startDate', headerName: 'Start Date', width: 130 },
    { field: 'job', headerName: 'Job', width: 130 },
    { field: 'department', headerName: 'Department', width: 130 },
    { field: 'email', headerName: 'Email', width: 130 },
    { field: 'phone', headerName: 'Phone', width: 130 },
    { field: 'address', headerName: 'Address', width: 130 },
    { field: 'role', headerName: 'Role', width: 130 },


    // {
    //   field: 'fullName',
    //   headerName: 'Full name',
    //   description: 'This column has a value getter and is not sortable.',
    //   sortable: false,
    //   width: 160,
    //   valueGetter: (params) =>
    //       `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    // },


  ];



  const dispatch = useDispatch();


  const findAllUser = async () =>{
    const response = await dispatch(findallUser());
    console.log(response);
  }

  const userProfileList = useSelector((state) => state.user.userProfileList);
  const user = useSelector((state) => state.user.userProfile);

  React.useEffect(() => {
    findAllUser();
  }, []);

  console.log("userList", userProfileList);


  return (
      <div className="container">
        <div style={{ height: 400, width: '100%' }}>
          <DataGrid
              rows={userProfileList}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
              checkboxSelection
          />
        </div>

      </div>
  );
}