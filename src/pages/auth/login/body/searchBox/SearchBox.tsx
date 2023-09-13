import { Button, DatePicker, Tabs } from 'common';
import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'react-feather';
import { useForm } from 'react-hook-form';

import Flights from './Flights';

export default function SearchBox() {
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
    <div className="px-5 pt-4 pb-10 rounded-lg w-3/4 flex gap-3 m-auto bg-white">
      <Tabs
        className="w-full"
        activeTab={activeTab}
        setActiveTabIndex={setaActiveTab}
        tabsPosition="center"
        tabs={[
          { name: 'Flight', children: <Flights /> },
          { name: 'Stays', children: <div>Stays</div> },
        ]}
      />
    </div>
  );
}
