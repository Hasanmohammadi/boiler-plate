import { Checkbox } from 'common';
import { useAppWebInfoContext } from 'context';
import { useState } from 'react';
import { XSquare } from 'react-feather';

import CollapseFilterContainer from './CollapseFilterContainer';
import RangeFilter from './RangeFilter';

export default function AlphaFilters() {
  const [hasFilter, setHasFilter] = useState(true);
  const { siteColors } = useAppWebInfoContext();
  return (
    <div
      className="bg-white rounded-lg w-1/5 py-4 h-fit"
      style={{ direction: 'rtl' }}
    >
      <div className="flex justify-between items-center border-b-2 border-b-gray-200 px-4 pb-3">
        <p className="text-gray-600 font-medium text-lg">فیلترها</p>
        {hasFilter && (
          <div className="flex gap-3">
            <p className="text-gray-400 font-medium text-base">
              لغو فیلترها
            </p>
            <span className="text-gray-400 font-medium text-lg cursor-pointer self-center">
              <XSquare size={20} />
            </span>
          </div>
        )}
      </div>
      <CollapseFilterContainer
        className="mt-2 px-4"
        title="تعداد توقف"
        additionalHeight={5}
      >
        <>
          <Checkbox
            hasBorder={false}
            className="my-2"
            label={<span className="text-gray-400">بدون توقف</span>}
            primaryColor={siteColors.primary}
          />
          <Checkbox
            hasBorder={false}
            className="my-2"
            label={<span className="text-gray-400">یک توقف</span>}
            primaryColor={siteColors.primary}
          />
          <Checkbox
            hasBorder={false}
            className="my-2"
            label={<span className="text-gray-400">دو توقف و بیشتر</span>}
            primaryColor={siteColors.primary}
          />
        </>
      </CollapseFilterContainer>
      <CollapseFilterContainer
        className="mt-10 px-4"
        title="شرکت های هواپیمایی"
        additionalHeight={5}
      >
        <div>
          <>
            <Checkbox
              hasBorder={false}
              className="my-2"
              label={<span className="text-gray-400">ایران ایر</span>}
              primaryColor={siteColors.primary}
            />
            <Checkbox
              hasBorder={false}
              className="my-2"
              label={<span className="text-gray-400">ماهان</span>}
              primaryColor={siteColors.primary}
            />
            <Checkbox
              hasBorder={false}
              className="my-2"
              label={<span className="text-gray-400">کاسپین</span>}
              primaryColor={siteColors.primary}
            />
          </>
        </div>
      </CollapseFilterContainer>
      <CollapseFilterContainer className="mt-10 px-4" title="بازه قیمت">
        <div className="pt-2">
          <RangeFilter
            className="w-40 m-auto"
            currency="ريال"
            maxValue={10000000}
            minValue={100000}
          />
        </div>
      </CollapseFilterContainer>
      {/* <CollapseFilterContainer className="mt-10 px-4" title="ساعت پرواز">
        <div className="h-28 ">dddddd </div>
      </CollapseFilterContainer> */}
      <CollapseFilterContainer
        className="mt-10 px-4"
        additionalHeight={6}
        title="نوع بلیط"
      >
        <>
          <Checkbox
            hasBorder={false}
            className="my-2"
            label={<span className="text-gray-400">سیستمی</span>}
            primaryColor={siteColors.primary}
          />
          <Checkbox
            hasBorder={false}
            className="my-2"
            label={<span className="text-gray-400">چارتری</span>}
            primaryColor={siteColors.primary}
          />
        </>
      </CollapseFilterContainer>
    </div>
  );
}
