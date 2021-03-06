/*
 * @Author: Alan
 * @LastEditors: Alan
 */
import React from 'react';
import { Toast } from 'antd-mobile';
import { AliveScope } from 'react-activation';

export const dva = {
    config: {
        onError(err: ErrorEvent) {
            err.preventDefault();
            console.error(err.message);
        }
    }
};

Toast.config({ duration:1});


export function rootContainer(container: React.ReactNode) {
    return React.createElement(AliveScope, null, container);
}
