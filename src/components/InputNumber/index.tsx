import styles from './index.module.scss';

import React, { memo, useCallback, useMemo } from 'react';

import classNames from 'classnames';
import useControllableValue from '/hooks/useControllableValue';
import { BaseEventOrig, Image, Input, InputProps, View } from '@tarojs/components';

import Plus from '/images/icon-input-plus.svg';
import Minus from '/images/icon-input-minus.svg';

export interface InputNumberProps extends Omit<InputProps, 'value'> {
  min?: number;
  max?: number;
  step?: number;
  value?: number;
  controls?: boolean;
  defaultValue?: number;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  onChange?: (value: number) => void;
}

function resolveValue(value: number, props: InputNumberProps): number {
  const { min, max } = props;

  if (min != null && value < min) {
    return min;
  }

  if (max != null && value > max) {
    return max;
  }

  return value;
}

export default memo(function InputNumber(props: InputNumberProps): React.ReactElement {
  const { min, max, step = 1, className, disabled, controls = true, ...restProps } = props;

  const [value = min || 0, setValue] = useControllableValue<number>(props);

  const onIncrease = useCallback(() => {
    if (!disabled) {
      setValue((value = min || 0) => resolveValue(value + step, props));
    }
  }, [min, max, step, disabled]);

  const onDecrease = useCallback(() => {
    if (!disabled) {
      setValue((value = min || 0) => resolveValue(value - step, props));
    }
  }, [min, max, step, disabled]);

  const onInput = useCallback(
    (e: BaseEventOrig<InputProps.inputValueEventDetail>) => {
      const input = +e.detail.value;

      if (!Number.isNaN(input)) {
        const nextValue = resolveValue(input, props);

        setValue(nextValue);

        return nextValue;
      }

      return value;
    },
    [value, min, max]
  );

  const [increaseClassName, decreaseClassName] = useMemo(() => {
    const { disabled: disabledClassName } = styles;

    return [
      classNames(styles.increase, { [disabledClassName]: max == null ? disabled : value >= max }),
      classNames(styles.decrease, { [disabledClassName]: min == null ? disabled : value <= min })
    ];
  }, [value, min, max, disabled]);

  return (
    <View className={classNames(styles.inputNumber, className)}>
      {controls && (
        <View className={decreaseClassName} onClick={onDecrease}>
          <Image src={Minus} />
        </View>
      )}
      <Input
        {...restProps}
        controlled
        type="number"
        onInput={onInput}
        confirmType="done"
        cursorSpacing={50}
        disabled={disabled}
        value={value.toString()}
        className={classNames('ui-input', styles.input)}
      />
      {controls && (
        <View className={increaseClassName} onClick={onIncrease}>
          <Image src={Plus} />
        </View>
      )}
    </View>
  );
});
