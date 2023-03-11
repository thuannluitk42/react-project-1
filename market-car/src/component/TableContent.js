// import * as faker from '@faker-js/faker';
import { faker } from '@faker-js/faker';
import * as React from 'react';
import { styled } from '@mui/system';
import { useEffect } from 'react';
import axios from 'axios';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  Grid,
  Typography,
  TablePagination,
  TableFooter
} from '@material-ui/core';
import { Link } from '@material-ui/core';
import carImage from '../images/car.jpg';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import LensIcon from '@mui/icons-material/Lens';


const useStyles = styled((theme) => ({
  table: {
    minWidth: 650,
  },
  tableContainer: {
    borderRadius: 15,
    margin: '10px 10px',
    maxWidth: 950
  },
  tableHeaderCell: {
    fontWeight: 'bold',
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.getContrastText(theme.palette.primary.dark)
  },
  avatar: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.getContrastText(theme.palette.primary.light)
  },
  name: {
    fontWeight: 'bold',
    color: theme.palette.secondary.dark
  },
  status: {
    fontWeight: 'bold',
    fontSize: '0.75rem',
    color: 'white',
    backgroundColor: 'grey',
    borderRadius: 8,
    padding: '3px 10px',
    display: 'inline-block'
  }
}));

let USERS = [], STATUSES = ['Active', 'Pending', 'Blocked'];
for (let i = 0; i < 14; i++) {
  USERS[i] = {
    name: faker.name.firstName(),
    email: faker.internet.email(),
    phone: faker.phone.phoneNumber(),
    jobTitle: faker.name.jobTitle(),
    company: faker.company.companyName(),
    joinDate: faker.date.birthdate().toLocaleDateString('en-US'),
    status: STATUSES[Math.floor(Math.random() * STATUSES.length)]
  }
}

export default function TableContent() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const [cars, setCars] = React.useState([]);
  // call data
  useEffect(() => {
    axios.get('https://car-data.p.rapidapi.com/cars', {
      params: {
        limit: '10',
        page: '0'
      },
      headers: {
        'X-RapidAPI-Key': '9c7fae566cmshbc8cac89e57fefbp133518jsn3e0e50eb1703',
        'X-RapidAPI-Host': 'car-data.p.rapidapi.com'
      }
    })
      .then(function (response) {
        setCars(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <TableContainer component={Paper} className={classes.tableContainer}>
      <Table className={classes.table} aria-label="simple table">
        <TableBody>
          {/* {USERS.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => ( */}
          {cars.map(row => (
            <TableRow key={row.name}>
              <TableCell>
                <Grid container>
                  <Grid item>
                    <FormControl>
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                      >
                        <FormControlLabel value="female" control={<Radio />} />
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                  <Grid item>
                    <Avatar alt={row.model} src={carImage} className={classes.avatar} />
                  </Grid>
                </Grid>
              </TableCell>
              <TableCell>
                <Grid container>
                  <Grid>
                    <Typography className={classes.name}>{row.type}</Typography>
                    <Grid container spacing={2}>
                      <Grid item>
                        <Typography color="textSecondary" variant="body2">{row.model} |</Typography>
                      </Grid>
                      <Grid item>
                        <Typography color="textSecondary" variant="body2"><Link href="">{row.make} Models</Link></Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </TableCell>
              <TableCell>
                <Typography color="primary" variant="subtitle2">Last Update</Typography>
                <Typography color="textSecondary" variant="body2">25/12/{row.year}</Typography>
              </TableCell>
              <TableCell>
                <Button variant="outlined" style={{color:'green'}} startIcon={<LensIcon style={{color:'green'}} />}>
                  Active
                </Button>
              </TableCell>
              <TableCell>
              <Button variant="outlined" style={{borderColor:'black', color:'black'}}>
                  View Details
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        {/* <TableFooter>
        <TablePagination
            rowsPerPageOptions={[5, 10, 15]}
            component="div"
            count={USERS.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
        />
        </TableFooter> */}
      </Table>
    </TableContainer>
  );
}