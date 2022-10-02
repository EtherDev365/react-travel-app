import React from 'react';
import { useLocation } from 'react-router-dom';
import {
    Button,
    MenuItem,
    Box,
    Menu,
    Avatar,
    IconButton,
    Tooltip,
    AppBar,
    Toolbar,
    Typography,
    Drawer,
    CssBaseline,
    Divider,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    ClickAwayListener
} from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import HotelIcon from '@mui/icons-material/Hotel';
import FlightIcon from '@mui/icons-material/Flight';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import ArticleIcon from '@mui/icons-material/Article';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AddCommentIcon from '@mui/icons-material/AddComment';
import DirectionsBoatIcon from '@mui/icons-material/DirectionsBoat';
import DescriptionIcon from '@mui/icons-material/Description';
import GroupIcon from '@mui/icons-material/Group';
import logo from '../../images/logo.svg';

const pages = ['Documents', 'Insurance', 'Blog', 'Corporate'];
const drawerWidth = 240;
const openedMixin = theme => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
    }),
    overflowX: 'hidden'
});
const closedMixin = theme => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`
    }
});
const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    // justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar
}));
const CustomAppBar = styled(AppBar, {
    shouldForwardProp: prop => prop !== 'open'
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen
        })
    })
}));
const CustomDrawer = styled(Drawer, {
    shouldForwardProp: prop => prop !== 'open'
})(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
        ...openedMixin(theme),
        '& .MuiDrawer-paper': openedMixin(theme)
    }),
    ...(!open && {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme)
    })
}));

function Header() {
    const theme = useTheme();
    const location = useLocation();
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    const [loggedIn, setLoggedIn] = React.useState(false);
    const [currentLocation, setCurrentLocation] = React.useState('');
    React.useEffect(() => {
        let loc = location.pathname;
        if (loc === '/') loc = '/flights';
        loc = loc.split('/')[1];
        setCurrentLocation(loc);
    }, [location]);
    const handleDrawerOpen = event => {
        event.preventDefault();
        event.stopPropagation();
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleClickAway = () => {
        setOpen(false);
    };

    const handleOpenNavMenu = event => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = event => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    return (
        <>
            <CssBaseline />
            <CustomAppBar
                position="sticky"
                open={open}
                className="!bg-indigo-500"
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{
                            marginRight: 5,
                            ...(open && { display: 'none' })
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    {!open && (
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                        >
                            <a href="/">
                                <img src={logo} className="h-[50px]" />
                            </a>
                        </Typography>
                    )}
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{
                            flexGrow: 1,
                            justifyContent: 'center',
                            display: { xs: 'flex', md: 'none' }
                        }}
                    >
                        <a href="/">
                            <img src={logo} className="h-[50px]" />
                        </a>
                    </Typography>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'none', md: 'flex' }
                        }}
                    >
                        {pages.map(page => (
                            <Button
                                key={page}
                                component="a"
                                href={`/${page.toLowerCase()}`}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
                {/* </Container> */}
            </CustomAppBar>
            <ClickAwayListener onClickAway={handleClickAway}>
                <CustomDrawer
                    variant="permanent"
                    open={open}
                    className={open ? 'visible' : 'invisible xl:visible'}
                >
                    <DrawerHeader>
                        <Typography variant="h6" noWrap component="div">
                            <a href="/">
                                <img src={logo} className="h-[50px]" />
                            </a>
                        </Typography>
                        <IconButton
                            onClick={handleDrawerClose}
                            sx={{ position: 'absolute', right: 0 }}
                        >
                            {theme.direction === 'rtl' ? (
                                <ChevronRightIcon />
                            ) : (
                                <ChevronLeftIcon />
                            )}
                        </IconButton>
                    </DrawerHeader>
                    <List>
                        {['Flights', 'Hotels', 'Cars', 'Cruises'].map(
                            (text, index) => (
                                <ListItemButton
                                    key={text}
                                    component="a"
                                    href={`/${text.toLowerCase()}`}
                                    sx={{
                                        minHeight: 48,
                                        justifyContent: open
                                            ? 'initial'
                                            : 'center',
                                        px: 2.5,
                                        backgroundColor:
                                            text.toLowerCase() ===
                                            currentLocation
                                                ? '#999999'
                                                : ''
                                    }}
                                >
                                    <ListItemIcon
                                        sx={{
                                            minWidth: 0,
                                            mr: open ? 3 : 'auto',
                                            justifyContent: 'center'
                                        }}
                                    >
                                        {index === 0 && (
                                            <Tooltip
                                                title="Flights"
                                                placement="right"
                                                arrow
                                            >
                                                <FlightIcon />
                                            </Tooltip>
                                        )}
                                        {index === 1 && (
                                            <Tooltip
                                                title="Hotels"
                                                placement="right"
                                                arrow
                                            >
                                                <HotelIcon />
                                            </Tooltip>
                                        )}
                                        {index === 2 && (
                                            <Tooltip
                                                title="Cars"
                                                placement="right"
                                                arrow
                                            >
                                                <DirectionsCarIcon />
                                            </Tooltip>
                                        )}
                                        {index === 3 && (
                                            <Tooltip
                                                title="Cruises"
                                                placement="right"
                                                arrow
                                            >
                                                <DirectionsBoatIcon />
                                            </Tooltip>
                                        )}
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={text}
                                        sx={{ opacity: open ? 1 : 0 }}
                                    />
                                </ListItemButton>
                            )
                        )}
                    </List>
                    <Divider />
                    <List>
                        {['Documents', 'Insurance', 'Blog', 'Corporate'].map(
                            (text, index) => (
                                <ListItemButton
                                    key={text}
                                    component="a"
                                    href={`/${text.toLowerCase()}`}
                                    sx={{
                                        minHeight: 48,
                                        justifyContent: open
                                            ? 'initial'
                                            : 'center',
                                        px: 2.5,
                                        backgroundColor:
                                            text.toLowerCase() ===
                                            currentLocation
                                                ? '#999999'
                                                : ''
                                    }}
                                >
                                    <ListItemIcon
                                        sx={{
                                            minWidth: 0,
                                            mr: open ? 3 : 'auto',
                                            justifyContent: 'center'
                                        }}
                                    >
                                        {index === 0 && (
                                            <Tooltip
                                                title="Documents"
                                                placement="right"
                                                arrow
                                            >
                                                <DescriptionIcon />
                                            </Tooltip>
                                        )}
                                        {index === 1 && (
                                            <Tooltip
                                                title="Insurance"
                                                placement="right"
                                                arrow
                                            >
                                                <ArticleIcon />
                                            </Tooltip>
                                        )}
                                        {index === 2 && (
                                            <Tooltip
                                                title="Blog"
                                                placement="right"
                                                arrow
                                            >
                                                <AddCommentIcon />
                                            </Tooltip>
                                        )}
                                        {index === 3 && (
                                            <Tooltip
                                                title="Corporate"
                                                placement="right"
                                                arrow
                                            >
                                                <GroupIcon />
                                            </Tooltip>
                                        )}
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={text}
                                        sx={{ opacity: open ? 1 : 0 }}
                                    />
                                </ListItemButton>
                            )
                        )}
                    </List>
                </CustomDrawer>
            </ClickAwayListener>
        </>
    );
}

export default Header;
