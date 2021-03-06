/*
 * @Author: Alan
 * @LastEditors: Alan
 */
import { IConfig } from 'umi-types';
import { resolve } from 'path';
import route from './route';

// ref: https://umijs.org/config/
const config: IConfig = {
    publicPath:'/',
    base: '/',
    treeShaking: true,
    ...route,
    chainWebpack(webconfig){
        webconfig.module
            .rule('sass-resources-loader')
            .test(/\.less$/)
            .use('sass-resources-loader')
            .loader('sass-resources-loader')
            .options({
                resources: [
                    resolve(__dirname, '../src/static/less/variable.less'),
                    resolve(__dirname, '../src/static/less/common.less'),
                    resolve(__dirname, '../src/static/less/util.less'),
                    resolve(__dirname, '../src/static/less/mixin/setOnepx.less')

                ]
            });
    },
    copy: [
        {
            from: 'src/assets',
            to: 'assets'
        }
    ],
    devServer: {

    },
    plugins: [
        // ref: https://umijs.org/plugin/umi-plugin-react.html
        ['umi-plugin-react', {
            antd: true,
            dva: true,
            dynamicImport: { webpackChunkName: true },
            dll: true,
            routes: {
                exclude: [
                    /models\//,
                    /services\//,
                    /model\.(t|j)sx?$/,
                    /service\.(t|j)sx?$/,
                    /components\//
                ]
            }
        }]
    ]
};

export default config;
