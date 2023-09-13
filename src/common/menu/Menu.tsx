import MenuCP from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Button } from 'common';
import * as React from 'react';
import { Check, ChevronDown, ChevronUp } from 'react-feather';

interface MenuItemsI {
  text: string | React.ReactElement;
  onClick: () => void;
}

interface MenuPropsI {
  menuItems: MenuItemsI[];
  btnText: string | React.ReactElement;
  className?: string;
}

export default function Menu({
  className,
  menuItems,
  btnText,
}: MenuPropsI) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={className}>
      <Button
        onClick={(event) =>
          handleClick(event as React.MouseEvent<HTMLButtonElement>)
        }
        className="text-gray-900 flex justify-between w-full"
        color="ghost-just-text"
      >
        <>
          <span>{btnText}</span>
          {open ? (
            <ChevronUp className="ml-1" />
          ) : (
            <ChevronDown className="ml-1" />
          )}
        </>
      </Button>
      <MenuCP
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {menuItems.map(({ onClick, text }) => (
          <MenuItem
            onClick={() => {
              onClick();
              if (typeof text === 'string') {
                setAnchorEl(null);
              }
            }}
            sx={{ background: text === btnText ? '#f8e495' : '' }}
          >
            <div className="flex gap-2 w-full">
              {text === btnText && <Check size={20} className="mt-0.5" />}
              {text}
            </div>
          </MenuItem>
        ))}
      </MenuCP>
    </div>
  );
}
