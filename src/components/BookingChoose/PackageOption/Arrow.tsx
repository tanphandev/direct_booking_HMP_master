import React from 'react';
import { VisibilityContext } from 'react-horizontal-scrolling-menu';

import ArrowLeftIcon from '@/app/assets/icons/ArrowLeftIcon';
import ArrowRightIcon from '@/app/assets/icons/ArrowRightIcon';

function Arrow({
  children,
  disabled,
  onClick
}: {
  children: React.ReactNode;
  disabled: boolean;
  onClick: VoidFunction;
}) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      style={{
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        right: '1%',
        opacity: disabled ? '0' : '1',
        userSelect: 'none'
      }}
    >
      {children}
    </button>
  );
}

export function LeftArrow() {
  const { isFirstItemVisible, scrollPrev, visibleItemsWithoutSeparators } = React.useContext(VisibilityContext);

  const [disabled, setDisabled] = React.useState(!visibleItemsWithoutSeparators.length && isFirstItemVisible);
  React.useEffect(() => {
    // NOTE: detect if whole component visible
    if (visibleItemsWithoutSeparators.length) {
      setDisabled(isFirstItemVisible);
    }
  }, [isFirstItemVisible, visibleItemsWithoutSeparators]);

  return (
    <Arrow disabled={disabled} onClick={() => scrollPrev()}>
      <div className="transition-all bg-white rounded-full p-2 mr-2">
        <ArrowLeftIcon width="24px" height="24px" />
      </div>
    </Arrow>
  );
}

export function RightArrow() {
  const { isLastItemVisible, scrollNext, visibleItemsWithoutSeparators } = React.useContext(VisibilityContext);

  const [disabled, setDisabled] = React.useState(!visibleItemsWithoutSeparators.length && isLastItemVisible);
  React.useEffect(() => {
    if (visibleItemsWithoutSeparators.length) {
      setDisabled(isLastItemVisible);
    }
  }, [isLastItemVisible, visibleItemsWithoutSeparators]);

  return (
    <Arrow disabled={disabled} onClick={() => scrollNext()}>
      <div className="transition-all bg-white rounded-full p-2 ml-2">
        <ArrowRightIcon width="24px" height="24px" />
      </div>
    </Arrow>
  );
}
