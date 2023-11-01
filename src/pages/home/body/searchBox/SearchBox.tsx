import { Tabs } from 'common';
import { useAppWebInfoContext } from 'context';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import Flights from './Flights';

export default function SearchBox() {
  const { siteColors } = useAppWebInfoContext();

  const [searchBoxSize, setSearchBoxSize] = useState<'sm' | 'md' | 'lg'>();
  const [activeTab, setaActiveTab] = useState<number>(0);

  const { control } = useForm({
    defaultValues: {
      startAndEndDate: {
        from: {
          day: 1,
          year: 2023,
          month: 8,
        },
        to: {
          day: 1,
          year: 2023,
          month: 9,
        },
      },
    },
  });

  return (
    <div className="px-5 pt-4 pb-10 rounded-lg max-w-[1300px] w-3/4 flex gap-3 m-auto bg-white">
      <Tabs
        className="w-full"
        activeTab={activeTab}
        setActiveTabIndex={setaActiveTab}
        tabsPosition="center"
        primaryColor={siteColors.primary}
        secondaryColor={siteColors.secondary}
        tabs={[
          { name: 'Flight', children: <Flights /> },
          { name: 'Stays', children: <div>Stays</div> },
        ]}
      />
    </div>
  );
}
