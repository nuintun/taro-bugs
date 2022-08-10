/**
 * @module global
 */

/// <reference types="react" />
/// <reference types="@tarojs/taro" />
/// <reference types="webpack/module" />

declare module '*.png';
declare module '*.gif';
declare module '*.jpg';
declare module '*.svg';
declare module '*.css';
declare module '*.jpeg';
declare module '*.less';
declare module '*.scss';
declare module '*.sass';
declare module '*.styl';

declare type Timeout = NodeJS.Timeout;

declare function clearTimeout(timeoutId?: NodeJS.Timeout): void;

// @ts-ignore
declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production';
    TARO_ENV: 'weapp' | 'swan' | 'alipay' | 'h5' | 'rn' | 'tt' | 'quickapp' | 'qq' | 'jd';
  }
}
