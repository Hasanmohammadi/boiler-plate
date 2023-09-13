import logo from 'assets/image/Logo.png';
import { Button } from 'common';
import { useAppHeaderContext } from 'context';

import HeaderStyledContainer from './Header.style';

export default function Header() {
  const { paddingX, paddingY, bgColor, logoSize, btns } =
    useAppHeaderContext();

  return (
    <HeaderStyledContainer
      className="w-full flex justify-between"
      padding={`${paddingY}px ${paddingX}px`}
      sx={{ backgroundColor: bgColor }}
    >
      <img src={logo} width={logoSize} height={logoSize} alt="logo" />
      <div className="flex gap-4 items-center">
        {btns.map(({ link, text, type }) => (
          <>
            <Button color={type}>{text}</Button>
          </>
        ))}
      </div>
    </HeaderStyledContainer>
  );
}
