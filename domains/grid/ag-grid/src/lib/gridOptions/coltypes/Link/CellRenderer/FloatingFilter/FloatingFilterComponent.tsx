import {
  FilterChangedEvent,
  IFilter,
  IFloatingFilterParams,
  IFloatingFilterParent,
  NumberFilterModel,
} from '@ag-grid-community/core';
import { IFloatingFilterReactComp } from '@ag-grid-community/react';
import { isNotUndefined } from '@lead/std';
import React, {
  FormEvent,
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { FloatingFilterParams } from './FloatingFilterParams';
import { CellData, InbuiltParentType } from './ports';

type CustomParams = IFloatingFilterParams<InbuiltParentType, CellData> &
  FloatingFilterParams<IFloatingFilterParams<InbuiltParentType, CellData>>;

export default forwardRef<IFloatingFilterReactComp, CustomParams>(
  (props, ref) => {
    const [currentValue, setCurrentValue] = useState<number | null>(null);
    const inputRef = useRef<HTMLInputElement | null>(null);

    // expose AG Grid Filter Lifecycle callbacks
    useImperativeHandle(ref, () => {
      const _: IFloatingFilterReactComp = {
        onParentModelChanged(
          parentModel: NumberFilterModel,
          filterChangedEvent
        ): void {
          if (!inputRef.current) return;
          // When the filter is empty we will receive a null value here
          if (!parentModel) {
            inputRef.current.value = '';
            setCurrentValue(null);
          } else {
            inputRef.current.value = parentModel.filter + '';
            setCurrentValue(
              isNotUndefined(parentModel.filter) ? parentModel.filter : null
            );
          }
        },
      };
      return _;
    });

    const onInputBoxChanged = (input: FormEvent<HTMLInputElement>) => {
      if (input.currentTarget.value === '') {
        // Remove the filter
        props.parentFilterInstance((instance) => {
          instance.onFloatingFilterChanged(null, null);
        });
        return;
      }

      setCurrentValue(Number(input.currentTarget.value));
      props.parentFilterInstance((instance) => {
        instance.onFloatingFilterChanged(
          'greaterThan',
          input.currentTarget.value
        );
      });
    };

    return (
      <>
        &gt;{' '}
        <XHtml.input
          ref={inputRef}
          type="number"
          min="0"
          onInput={onInputBoxChanged}
        />
      </>
    );
  }
);
