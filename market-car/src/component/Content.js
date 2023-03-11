import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { DataGrid } from '@mui/x-data-grid';
import TableContent from './TableContent'

export default function Content() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  // const columns = [
  //   { field: 'id', headerName: 'ID', width: 70 },
  //   { field: 'firstName', headerName: 'First name', width: 130 },
  //   { field: 'lastName', headerName: 'Last name', width: 130 },
  //   {
  //     field: 'age',
  //     headerName: 'Age',
  //     type: 'number',
  //     width: 90,
  //   },
  //   {
  //     field: 'fullName',
  //     headerName: 'Full name',
  //     description: 'This column has a value getter and is not sortable.',
  //     sortable: false,
  //     width: 160,
  //     valueGetter: (params) =>
  //       `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  //   },
  // ];

  // const rows = [
  //   { id: 1, lastName: 'Snow', firstName: 'Toyota', age: 35 },
  //   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  //   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  //   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  //   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  //   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  //   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  //   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  //   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  // ];
  return (

    <Box>
      <Box sx={{ display: 'flex', justify: 'flex-start', alignItems: 'center' }}>
        <Typography variant="h5" sx={{ paddingRight: 10, mr: 10, color: '#2F465F' }}>CAR BRANDS LIST</Typography>

        <Box sx={{ minWidth: 150, marginRight: 5 }}>
          <FormControl fullWidth>
            <InputLabel>View All</InputLabel>
            <Select
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={'All'}>All</MenuItem>
              <MenuItem value={'Last_Updated'}>Last Updated</MenuItem>
              <MenuItem value={'Brand_Name'}>Brand Name</MenuItem>
              <MenuItem value={'Number_of_Models'}>Number of Models</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <TextField label="Search car brand" type="search" sx={{ borderRadius: '12px' }} />
        <Button variant="contained" startIcon={<AddIcon />} sx={{ ml: 20 }}>Add Brand</Button>
      </Box>
      <Box sx={{ height: 400, width: '100%', mt: 10 }}>
        {/* <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        /> */}
        <TableContent />
      </Box>
    </Box>
  );
}