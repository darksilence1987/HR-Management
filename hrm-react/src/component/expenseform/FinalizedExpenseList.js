import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import {Button, Stack} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import { findAllFinalizedExpenses,} from "../../store/features/ExpenseSlice";
import {useState} from "react";


export default function FinalizedExpenseList() {

    const dispatch = useDispatch();

    const email = useSelector((state) => state.auth.auth.email);

    const findFinalizedExpense = async () =>{
        const response = await dispatch(findAllFinalizedExpenses(email));

    }

    const approvedExpenseList = useSelector(state => state.expense.expenseListUpdate)
    React.useEffect(() => {
        findFinalizedExpense()
    }, [approvedExpenseList]);

    const allFinalizedExpense = useSelector((state)=>state.expense.AllFinalizedExpense);

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
            width: 110,
            editable: true,
        },
        {
            field: 'expenseDate',
            headerName: 'Expense Date',
            sortable: false,
            type: 'date',
            width: 160,
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

    ];
    return (
        <Box sx={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={allFinalizedExpense}
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


