/* eslint-disable max-len */

/* eslint-disable @typescript-eslint/restrict-plus-operands */

/* eslint-disable @typescript-eslint/no-unsafe-call */

/* eslint-disable @typescript-eslint/no-unsafe-return */

/* eslint-disable @typescript-eslint/no-unsafe-assignment */

/* eslint-disable react/jsx-props-no-spreading */

/* eslint-disable @typescript-eslint/no-unsafe-argument */

/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import MuiDrawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { CSSObject, Theme, styled } from '@mui/material/styles';
import clsx from 'clsx';
import * as React from 'react';
import {
  ArrowLeft,
  ArrowRight,
  CreditCard,
  Layout,
  Menu,
} from 'react-feather';
import { useSearchParams } from 'react-router-dom';

import BodyStyleSection from './BodyStyleSection';
import HeaderStyleSection from './HeaderStyleSection';

const drawerWidth = 240;
const ContainerStyled = styled(Box)`
  .MuiDrawer-paper {
    position: initial;
  }
  .MuiToolbar-root {
    min-height: 10px;
  }
  .MuiDrawer-paperAnchorDockedLeft > div {
    min-height: 30px;
    height: 0px;
  }
  .MuiDrawer-docked {
    z-index: 1;
  }
` as typeof Box;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop: string) => prop !== 'open',
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  position: 'absolute',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

export default function ChangeStyleBox() {
  const [open, setOpen] = React.useState(false);
  const [containerWidth, setContainerWidth] = React.useState('0%');
  const [searchParams, setSearchParams] = useSearchParams();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const onMinimize = () => {
    if (containerWidth === '30%') {
      setContainerWidth('0%');
    } else {
      setContainerWidth('30%');
    }
  };
  return (
    <div
      className="bg-gray-300 border-2 border-gray-800 w-1/5 h-full min-h-screen fixed right-0 top-0"
      style={{
        direction: 'ltr',
        transition: 'width 0.7s',
        width: containerWidth,
      }}
    >
      <button
        className="absolute  bg-white rounded-lg z-10 -left-9 p-2 border-2 border-red-500 w-fit top-56"
        onClick={onMinimize}
      >
        {containerWidth === '30%' ? <ArrowRight /> : <ArrowLeft />}
      </button>

      <ContainerStyled sx={{ display: 'flex' }}>
        <CssBaseline />

        <Drawer variant="permanent" open={open} className="h-full">
          <DrawerHeader
            className={clsx('', {
              'w-0': containerWidth === '0%',
            })}
          >
            {!open ? (
              <IconButton sx={{ marginRight: '5px' }}>
                <ArrowLeft onClick={handleDrawerOpen} />
              </IconButton>
            ) : (
              <IconButton>
                <ArrowRight onClick={handleDrawerClose} />
              </IconButton>
            )}
          </DrawerHeader>
          <Divider />
          <List>
            {['Header', 'Body', 'Footer'].map((text) => (
              <ListItem
                key={text}
                disablePadding
                sx={{ display: 'block' }}
                onClick={() => {
                  searchParams.delete('section');
                  searchParams.append('section', text.toLocaleLowerCase());
                  setSearchParams(searchParams);
                  setOpen(false);
                }}
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    {text === 'Header' && <CreditCard />}
                    {text === 'Body' && <Layout />}
                    {text === 'Footer' && (
                      <CreditCard className="rotate-180" />
                    )}
                  </ListItemIcon>
                  <ListItemText
                    primary={text}
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Drawer>
        <Box component="main" sx={{ ml: 10 }}>
          {searchParams.get('section') === 'header' && (
            <HeaderStyleSection />
          )}
          {searchParams.get('section') === 'body' && <BodyStyleSection />}
        </Box>
      </ContainerStyled>
    </div>
  );
}
