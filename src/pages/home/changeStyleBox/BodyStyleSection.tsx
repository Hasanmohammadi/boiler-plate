import { Tabs } from 'common';
import { useAppBodyContext } from 'context/BodyContext';
import { useState } from 'react';

import SearchBox from '../body/searchBox/SearchBox';

export default function BodyStyleSection() {
  const [bgUrl, setBgUrl] = useState('');
  const [activeTab, setActiveTab] = useState(0);
  const {
    setTextPosition,
    textPosition,
    setMarginX,
    setMarginY,
    marginX,
    marginY,
    setBackgroundImage,
    titleColor,
    setSubTitleColor,
    setTitleColor,
    subTitleColor,
    setSubTitle,
    setTitle,
    subTitle,
    title,
  } = useAppBodyContext();

  const onColorChange = (e: {
    target: { name: string; value: string };
  }) => {
    if (e.target.name === 'title') {
      setTitleColor(e.target.value);
    } else {
      setSubTitleColor(e.target.value);
    }
  };
  const onTextChange = (e: {
    target: { name: string; value: string };
  }) => {
    if (e.target.name === 'title') {
      setTitle(e.target.value);
    } else {
      setSubTitle(e.target.value);
    }
  };

  const onTextPositionChange = (e: { target: { value: string } }) => {
    setTextPosition(e.target.value as 'start' | 'center' | 'end');
  };

  const onInputChange = (e: {
    target: { name: string; value: string };
  }) => {
    if (e.target.name === 'margin-X') {
      setMarginX(e.target.value as 'start' | 'center' | 'end');
    } else {
      setMarginY(e.target.value as 'start' | 'center' | 'end');
    }
  };

  const onInputBackgroundChange = (e: { target: { value: string } }) => {
    setBgUrl(e.target.value);
  };

  const onSubmitBackground = () => {
    setBackgroundImage(bgUrl);
  };

  return (
    <>
      <Tabs
        activeTab={activeTab}
        setActiveTabIndex={setActiveTab}
        tabs={[
          {
            name: 'text',
            children: (
              <>
                {' '}
                <div>
                  <p className="text-center font-semibold text-gray-600 ">
                    Texts
                  </p>
                  <div className=" gap-10">
                    <div className="flex flex-col">
                      <div className="flex gap-2 mt-2">
                        <p>Texts position</p>
                        <select
                          name="logoSize"
                          className="h-6 border-2 border-red-500 rounded-lg"
                          onChange={onTextPositionChange}
                          value={textPosition}
                        >
                          <option value="start">Start</option>
                          <option value="center">Center</option>
                          <option value="end">End</option>
                        </select>
                      </div>
                      <div className="flex gap-2 mt-2 justify-between">
                        <span>Padding-X</span>
                        <div>
                          <input
                            className="border-2 mr-0.5 border-red-500 rounded-lg w-14 text-center"
                            type="number"
                            onChange={onInputChange}
                            name="margin-X"
                            min={0}
                            value={marginX}
                          />
                          px
                        </div>
                      </div>
                      <div className="flex gap-2 mt-2 justify-between">
                        <span>Padding-Y</span>
                        <div>
                          <input
                            className="border-2 mr-0.5 border-red-500 rounded-lg w-14 text-center"
                            type="number"
                            onChange={onInputChange}
                            name="margin-Y"
                            min={0}
                            value={marginY}
                          />
                          px
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="flex gap-3 mt-2 justify-between">
                        <span>Title color</span>
                        <input
                          name="title"
                          value={title}
                          onChange={onTextChange}
                          className="rounded-lg border-2 border-red-500 pl-1"
                        />
                      </div>
                      <div className="flex gap-3 mt-2">
                        <span>Subtitle color</span>
                        <input
                          name="subTitle"
                          value={subTitle}
                          onChange={onTextChange}
                          className="rounded-lg border-2 border-red-500 pl-1"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex gap-2 mt-2 w-40 justify-between">
                        <span>Title color</span>
                        <input
                          type="color"
                          name="title"
                          value={titleColor}
                          onChange={onColorChange}
                          className="rounded-lg"
                        />
                      </div>
                      <div className="flex gap-2 mt-2">
                        <span>Subtitle color</span>
                        <input
                          type="color"
                          name="subTitle"
                          value={subTitleColor}
                          onChange={onColorChange}
                          className="rounded-lg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ),
          },
          {
            name: 'background',
            children: (
              <>
                {' '}
                <div className="mt-2">
                  <div className="flex flex-col gap-4">
                    <p className="m-auto font-semibold text-gray-600">
                      Background Image
                    </p>
                    <input
                      value={bgUrl}
                      onChange={onInputBackgroundChange}
                      className="border-2 border-red-500 rounded-lg"
                    />
                    <button
                      onClick={onSubmitBackground}
                      className="border-2 border-red-500 rounded-lg px-4 py-1"
                    >
                      Confirm
                    </button>
                  </div>
                </div>
              </>
            ),
          },
          {
            name: 'Serach box',
            children: <>SearchBox</>,
          },
        ]}
      />
    </>
  );
}
