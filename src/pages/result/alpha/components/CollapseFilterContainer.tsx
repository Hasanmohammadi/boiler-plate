import { Box } from '@mui/material';
import { useAppWebInfoContext } from 'context';
import { useEffect, useRef, useState } from 'react';
import { ChevronDown, ChevronUp } from 'react-feather';

export default function CollapseFilterContainer({
  children,
  title,
  className,
  additionalHeight = 0,
}: {
  children: React.ReactElement;
  title?: string;
  className?: string;
  additionalHeight?: number;
}) {
  const { siteColors } = useAppWebInfoContext();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);

  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [isCollapsed]);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
  return (
    <div className={className}>
      <div className="flex justify-between">
        <p>{title}</p>
        <div className="h-full flex items-center">
          {isCollapsed && (
            <ChevronDown
              className="cursor-pointer"
              color={siteColors.primary}
              onClick={toggleCollapse}
            />
          )}
          {!isCollapsed && (
            <ChevronUp
              className="cursor-pointer"
              color={siteColors.primary}
              onClick={toggleCollapse}
            />
          )}
        </div>
      </div>
      <Box
        sx={{
          height: isCollapsed
            ? '0px'
            : `${contentHeight + additionalHeight}px`,
          overflow: 'hidden',
          marginTop: '16px',
          transition: 'height 0.4s',
        }}
      >
        <div ref={contentRef}>{children}</div>
      </Box>
    </div>
  );
}
