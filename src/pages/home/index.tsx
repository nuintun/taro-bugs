import styles from '/scss/home/index.module.scss';

import React, { useState } from 'react';

import { Text, View } from '@tarojs/components';
import InputNumber from '/components/InputNumber';

export default function Page() {
  const [value, setValue] = useState(1);

  return (
    <View className={styles.stage}>
      <InputNumber min={1} max={20} onChange={setValue} />
      <Text>Value: {value}</Text>
    </View>
  );
}
