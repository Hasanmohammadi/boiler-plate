import { Box } from '@mui/material';
import { useAppWebInfoContext } from 'context';

export default function AlphaAbout() {
  const { generalAbout, about, siteColors } = useAppWebInfoContext();
  return (
    <Box className="w-full h-full py-14 px-40 " sx={{ direction: 'rtl' }}>
      <p className="text-xl font-medium">درباره ما</p>
      <div className="p-8 rounded-lg bg-white mt-8 shadow-md flex flex-col gap-10">
        <div>
          <p className="text-gray-500">{generalAbout}</p>
        </div>
        <div>
          {about.map(({ description, title }) => (
            <Box
              className="my-4 border rounded-lg p-4"
              sx={{ borderColor: siteColors.secondary }}
            >
              <p className="text-gray-800">{title}: </p>
              <p className="mt-1 text-gray-500">{description}</p>
            </Box>
          ))}
        </div>
      </div>
    </Box>
  );
}
