import logo from 'assets/image/Logo.png';
import { Button } from 'common';
import { useAppHeaderContext, useAppWebInfoContext } from 'context';
import { Link, NavLink } from 'react-router-dom';

import HeaderStyledContainer from './Header.style';

export default function Header() {
  const { paddingX, paddingY, bgColor, logoSize, btns } =
    useAppHeaderContext();

  const { siteColors } = useAppWebInfoContext();

  return (
    <HeaderStyledContainer
      className="w-full flex justify-between"
      padding={`${paddingY}px ${paddingX}px`}
      sx={{ backgroundColor: bgColor }}
    >
      <NavLink to="/" className="p-0 cursor-pointer">
        <img src={logo} width={logoSize} height={logoSize} alt="logo" />
      </NavLink>
      <div className="flex gap-10 items-center">
        {btns.map(
          ({ type, color, size, text, hidden }) =>
            !hidden && (
              <div className="flex gap-3">
                {type === 'button' && (
                  <Button
                    primaryColor={siteColors.primary}
                    secondaryColor={siteColors.secondary}
                    size="md"
                  >
                    {text}
                  </Button>
                )}
                {type === 'link' && (
                  <Link
                    to={`/${text?.toLowerCase().replaceAll(' ', '-')}`}
                    style={{
                      fontSize: `${size as number}px`,
                      color,
                    }}
                  >
                    {text}
                  </Link>
                )}
              </div>
            ),
        )}
      </div>
    </HeaderStyledContainer>
  );
}
