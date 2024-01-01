import React, { useContext, useEffect, useState } from 'react';
import "./dash.css"
import Cardsdashboard from '../../../components/dashboard/cardsdashboard';
import { Dashboardcontext } from '../dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import CheckIcon from '@mui/icons-material/Check';
import PaidIcon from '@mui/icons-material/Paid';
import { Checkbox, FormControlLabel, Box, Button, Fade, Typography, Modal, Backdrop, createTheme } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { Navigate, useNavigate } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import Themodal from '../../../components/themodal';



const Dash = (props) => {
    const theme = useContext(Dashboardcontext)
    const [checked, setChecked] = React.useState(false);
    const [numbercommande, setnumbercommande] = useState(0)
    const navigate = useNavigate()
    const instance = axios.create();
    const handleChange = (event) => {
        setChecked(event.target.checked);

    };

    const [conter, setconter] = useState(0)

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const theme4 = createTheme({
        components: {
            MuiTablePagination: {
                styleOverrides: {
                    root: {
                        color: 'white', // Change pagination text color
                        backgroundColor: "black"// Change pagination background color
                    },
                },
            },
        },
    });
    const [moneyearnedvl, setmoneyearned] = useState(0)
    const [getcookies, setcookies] = useCookies(["acces_token", "refresh_token"])
    const [getnoverified, setnoverifies] = useState(0)
    const [getverified, setverifies] = useState(0)
    const [rows, setrows] = useState([])
    const [modlv, setmdlv] = useState([])
    const handlemdl = async (info_seller) => {
        setmdlv(info_seller[0], info_seller[1], info_seller[2], info_seller[3])
        handleOpen()
    }
    const columns = [
        { field: 'id', headerName: 'ID', width: 90, headerClassName: 'super-app-theme--header', flex: 1, align: "center", headerAlign: "center", },
        {
            field: 'JERSEY',
            headerName: 'JERSEY',

            editable: true, headerClassName: 'super-app-theme--header',
            flex: 1, align: "center", headerAlign: "center",
        },
        {
            field: 'taille',
            headerName: 'taille',

            editable: true,
            headerClassName: 'super-app-theme--header',
            flex: 0.5, align: "center", headerAlign: "center",
        },
        {
            field: 'prix',
            headerName: 'prix',
            type: 'number',

            editable: true,
            headerClassName: 'super-app-theme--header',
            flex: 0.5, align: "center", headerAlign: "center",

        },
        {
            field: 'info_seller',
            headerName: 'info seller',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            flex: 1,
            align: "center",
            headerAlign: "center",

            headerClassName: 'super-app-theme--header',
            renderCell: ({ row: { info_seller } }) => {
                return (<Button
                    variant="contained"
                    color="primary"
                    onClick={() => {
                        handlemdl(info_seller)
                    }}

                >
                    Open Modal
                </Button>)
            },

        }, {
            field: 'verified',
            headerName: 'verified',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,

            headerClassName: 'super-app-theme--header', flex: 1, align: "center", headerAlign: "center",
            renderCell: ({ row: { verified } }) => {
                return (
                    verified


                )
            },

        }, {
            field: 'quantity',
            headerName: 'quantity',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,

            headerClassName: 'super-app-theme--header', flex: 1, align: "center", headerAlign: "center",

        },
    ];

    const refreshToken = async () => {
        try {
            const res = await instance.post(`${process.env.REACT_APP_APIURL}/seller/refresh`, { refresh: getcookies.refresh_token });
            if (res && res.status == 200) {
                setcookies("acces_token", res.data.token)
                return instance.request(res.config);
            } else {
                navigate("/login")
            }
        }
        catch (error) {
            console.log("the error is " + error.message)
        }


    }

    const moneyearned = async () => {
        try {
            const response = await instance.get(`${process.env.REACT_APP_APIURL}/commande/moneyearned`, {
                headers: {
                    Authorization: `Bearer ${getcookies.acces_token}`,
                },
            })
            setmoneyearned(response.data.data)
            setverifies(response.data.verified)
            console.log(moneyearnedvl)

        }
        catch (error) {
            console.error('Error fetching sold items:', error.message);
        }

    }

    const verifiercommande = async (id) => {
        try {
            const resp = await instance.post(`${process.env.REACT_APP_APIURL}/commande/verify/${id}`, {
                headers: {
                    Authorization: `Bearer ${getcookies.acces_token}`,
                },
            })
            if (resp.status == 200) {
                setconter(conter + 1)
            } else {
                alert(resp.data.message)
            }
        }
        catch (error) {
            alert(error.message)
            console.error('Error fetching sold items:', error.message);
        }

    }

    const allcommandes = async () => {
        try {
            const response = await instance.get(`${process.env.REACT_APP_APIURL}/commande/allcommandes`, {
                headers: {
                    Authorization: `Bearer ${getcookies.acces_token}`,
                },
            })
            let arrayy = []
            let verifiedinfo;
            response.data.data.map(dt => {
                if (dt.verified == true) {
                    verifiedinfo = <Button variant="contained" sx={{ backgroundColor: "red" }}>VERIFIED</Button>
                } else {
                    verifiedinfo = <Button variant="contained" onClick={() => {

                        verifiercommande(dt._id)
                    }} sx={{ backgroundColor: "green" }}>INVERIFIED</Button>

                }

                arrayy.push(

                    {
                        id: dt._id,
                        JERSEY: dt.id_jersey.name,
                        taille: dt.taille,
                        prix: dt.price,
                        info_seller: [{
                            prenom: dt.firstname, nom: dt.lastname, phonenumber: dt.phonenumber, email: dt.email
                        }], verified: verifiedinfo, quantity: dt.quantity
                    }

                )
                console.log("name " + dt.firstname)

            })
            setrows(arrayy)
        }
        catch (error) {

        }
    }

    const totalcommadesnumber = async () => {
        try {
            const response = await instance.get(`${process.env.REACT_APP_APIURL}/commande/fullcommandenumber`, {
                headers: {
                    Authorization: `Bearer ${getcookies.acces_token}`,
                },
            })
            setnumbercommande(response.data.data)
            console.log(moneyearnedvl)

        }
        catch (error) {
            console.error('Error fetching sold items:', error.message);
        }
    }

    const getnoverifiednumber = async () => {
        try {
            const response2 = await instance.get(`${process.env.REACT_APP_APIURL}/commande/getverifiednumber`, {
                headers: {
                    Authorization: `Bearer ${getcookies.acces_token}`,
                },
            })

            setnoverifies(response2.data.noverified)
            setverifies(response2.data.verified)
            console.log(response2.data)
            console.log("non")

        } catch (error) {
            console.log("requete error " + error.message)
        }
    }



    useEffect(() => {
        //Runs only on the first render
        instance.interceptors.response.use(
            (response) => response,
            async (error) => {
                if (error.response && error.response.status === 401 && !error.config._retry) {
                    error.config._retry = true;
                    try {
                        const token = await refreshToken();
                        error.config.headers.Authorization = `Bearer ${token}`;
                        return instance(error.config);
                    } catch (refreshError) {
                        return Promise.reject(refreshError);
                    }
                }
                return Promise.reject(error);
            }
        );

        moneyearned()
        getnoverifiednumber()
        totalcommadesnumber()
        allcommandes()
    }, [getcookies.acces_token, conter]);

    return (

        <div >

            <div id='crds'>
                <Cardsdashboard title="ORDERS" vl={numbercommande} theme={theme.palette.success} logo={<ShoppingCartIcon sx={{ fontSize: 50, color: localStorage.getItem('mode') == "dark" ? theme.palette.common.white : theme.palette.common.black }} />} />
                <Cardsdashboard title="NON VERIFIED ORODERS" vl={getnoverified} theme={theme.palette.error} logo={<HighlightOffIcon sx={{ fontSize: 50, color: localStorage.getItem('mode') == "dark" ? theme.palette.common.white : theme.palette.common.black }} />} />
                <Cardsdashboard title="VERIFIED ORDERS" logo={<CheckIcon sx={{ fontSize: 50, color: localStorage.getItem('mode') == "dark" ? theme.palette.common.white : theme.palette.common.black }} />} vl={getverified} theme={theme.palette.primary} />
                <Cardsdashboard title="MONEY EARNED" logo={<PaidIcon sx={{ fontSize: 50, color: localStorage.getItem('mode') == "dark" ? theme.palette.common.white : theme.palette.common.black }} />} theme={theme.palette.warning} vl={<span>{moneyearnedvl}<sup style={{ fontWeight: "300" }}>DH</sup></span>} />
            </div>
            <ThemeProvider theme={theme4}>
                <Box sx={{
                    height: 400, width: '100%', color: "white", backgroundColor: "black", '& .MuiDataGrid-cell': {
                        color: 'white',
                    }, '& .MuiDataGrid-col': {
                        color: 'white',
                    }, '& .super-app-theme--header': {
                        color: "white",
                    }
                }}>
                    <DataGrid

                        rows={rows}
                        columns={columns}

                        initialState={{
                            pagination: {
                                paginationModel: {
                                    pageSize: 5,

                                }


                            },
                        }}
                        pageSizeOptions={[5]}
                        checkboxSelection
                        disableRowSelectionOnClick
                    />
                </Box>
            </ThemeProvider>
            <Themodal open={open} setOpen={setOpen} first={modlv.prenom} last={modlv.nom} email={modlv.email} phone={modlv.phonenumber} />
            <div>

            </div>


        </div>
    );
}

export default Dash;
