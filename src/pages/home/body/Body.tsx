import { Box, Typography } from '@mui/material';
import clsx from 'clsx';
import { useAppHeaderContext } from 'context';
import { useAppBodyContext } from 'context/BodyContext';

import SearchBox from './searchBox/SearchBox';

export default function Body() {
  const {
    textPosition,
    marginX,
    marginY,
    backgroundImage,
    titleColor,
    subTitleColor,
    title,
    subTitle,
    textAlgin,
  } = useAppBodyContext();

  const { paddingY } = useAppHeaderContext();

  return (
    <Box
      sx={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: `calc(100vh - ${+paddingY}px)`,
      }}
      className="w-full flex flex-col"
    >
      <Box
        margin={`${marginY}px ${marginX}px`}
        className={clsx('w-full  flex ', {
          'justify-start': textPosition === 'start',
          'justify-center': textPosition === 'center',
          'justify-end': textPosition === 'end',
        })}
      >
        <div
          className={clsx({
            'text-left': textAlgin === 'left',
            'text-center': textAlgin === 'center',
            'text-end': textAlgin === 'right',
          })}
        >
          <Typography
            sx={{
              color: titleColor,
              fontSize: ' 2.25rem',
              lineHeight: '2.5rem',
              fontWeight: 600,
            }}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              color: subTitleColor,
              fontSize: '1.5rem',
              lineHeight: '2rem',
              fontWeight: 200,
            }}
          >
            {subTitle}
          </Typography>
        </div>
      </Box>
      <Box
        // margin={`${marginY}px ${marginX}px`}
        width="100%"
      >
        <SearchBox />
      </Box>
    </Box>
  );
}
