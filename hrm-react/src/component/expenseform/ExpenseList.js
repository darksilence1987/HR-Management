import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import {Button, Stack} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {findAllExpense, expenseConfirmed, expenseRejected} from "../../store/features/ExpenseSlice";
import {useState} from "react";


export default function ExpenseList() {

    const dispatch = useDispatch();

    const email = useSelector((state) => state.auth.auth.email);

    const findExpense = async () =>{
        const response = await dispatch(findAllExpense(email));

    }
    const approve = async () =>{
        const response = await dispatch(expenseConfirmed(email));

    }
    const reject = async () =>{
        const response = await dispatch(expenseRejected(email));

    }


    const approvedExpenseList = useSelector(state => state.expense.expenseListUpdate)
    React.useEffect(() => {
        findExpense()
    }, [approvedExpenseList]);



    const allExpense = useSelector((state)=>state.expense.allExpense);
    console.log(allExpense);

    const [expenseName, setExpenseName] = useState("");
    const [expenseDescription, setExpenseDescription] = useState("");
    const [expenseDate, setExpenseDate] = useState("");
    const [expenseAmount, setExpenseAmount] = useState("");


    const columns = [
        { field: 'id', headerName: 'ID', width: 90, hide: true },
        {
            field: 'userEmail',
            headerName: 'Email',
            width: 150,
            editable: true,
        },
        {
            field: 'expenseName',
            headerName: 'Expense Name',
            sortable: false,
            width: 160,
        },
        {
            field: 'expenseAmount',
            headerName: 'Expense Amount',
            type: 'number',
            width: 130,
            editable: true,
        },
        {
            field: 'expenseDate',
            headerName: 'Expense Date',
            sortable: false,
            type: 'date',
            width: 130,
        },
        {
            field: 'corporationName',
            headerName: 'Corporation Name',
            sortable: false,
            width: 160,
        },
        {
            field: 'expenseDescription',
            headerName: 'Expense Description',
            sortable: false,
            width: 160,
        },
        {
            field: 'expenseStatus',
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
                rows={allExpense}
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


