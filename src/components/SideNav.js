
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import CollectionsIcon from '@mui/icons-material/Collections';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function SideNav() {
    const [state, setState] = React.useState({
        left: false
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    }

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <a className='linkNoDecoration' href="/">
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <img src="/logo192.png"
                                    style={{
                                        width: "24px",
                                        height: "24px"
                                    }}
                                    alt="Home"
                                />
                            </ListItemIcon>
                            <ListItemText>
                            Home
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>
                </a>

                <a className='linkNoDecoration' href="/about">
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <AccountCircleIcon />
                            </ListItemIcon>
                            <ListItemText>
                                About Us
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>
                </a>

                <a className='linkNoDecoration' href="/gallery">
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <CollectionsIcon />
                            </ListItemIcon>
                            <ListItemText>
                                Photo Gallery
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>
                </a>

                <a className='linkNoDecoration' href="/programming">
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <ShoppingCartIcon />
                            </ListItemIcon>
                            <ListItemText>
                                Place an order
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>
                </a>

                <a className='linkNoDecoration' href="/contact">
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <ConnectWithoutContactIcon />
                            </ListItemIcon>
                            <ListItemText>
                                Contact Us
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>
                </a>
            </List>

        </Box>
    );

    return (
        <div>
 
            <React.Fragment key={'left'}>
            <Button onClick={toggleDrawer('left', true)}><MenuIcon style={{color: "white"}} /></Button>
            <Drawer
                anchor={'left'}
                open={state['left']}
                onClose={toggleDrawer('left', false)}
            >
                {list('left')}
            </Drawer>
            </React.Fragment>
        
        </div>
    )
}
