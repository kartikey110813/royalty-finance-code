import React, { useContext } from 'react'
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import LanguageContext from '../context/LanguageContext'


function Previoustransactions() {
    const { language } = useContext(LanguageContext);

    const columns = [
        {
            field: 'id',
            headerName: language === 'en' ? 'Transaction ID' : "ID transakcie",
            width: 200
        },
        {
            field: 'amount',
            headerName: language === 'en' ? 'Amount' : "Suma",
            width: 150,
        },
        {
            field: 'years',
            headerName: language === 'en' ? 'Years' : "roky",
            width: 150,
        },
    
        {
            field: 'date',
            headerName: language === 'en' ? 'Date' : "Dátum",
            width: 150,
        },
    ];
    
    const rows = [
    ];

    return (
        <div style={{ display: 'flex', width: '90%', align: "center", margin: "auto" }}>
            <Box sx={{ flexGrow: 1, background: 'white' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    disableSelectionOnClick
                    autoHeight
                    autoPageSize
                />
            </Box>
        </div>
    )
}

export default Previoustransactions