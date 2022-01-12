/** @format */

import * as path from 'path'
import { UserConfigExport, ConfigEnv } from 'vite'
import { viteMockServe } from 'vite-plugin-mock'
import vue from '@vitejs/plugin-vue'
import pkg from './package.json'
import PurgeIcons from 'vite-plugin-purge-icons'
import { VitePWA } from 'vite-plugin-pwa'

process.env.VITE_APP_VERSION = pkg.version
if (process.env.NODE_ENV === 'production') {
	process.env.VITE_APP_BUILD_EPOCH = new Date().getTime().toString()
}

export default ({ command }: ConfigEnv): UserConfigExport => {
	return {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: '@import "@/styles/index.scss";',
				},
			},
		},
		plugins: [
			VitePWA({
				// 配置待编辑
			}),
			vue({
				script: {
					refSugar: true,
					refTransform: true,
				},
			}),
			viteMockServe({
				mockPath: 'mock',
				localEnabled: command === 'serve',
			}),
			PurgeIcons({
				/* PurgeIcons Options */
			}),
		],
		resolve: {
			alias: {
				'@': path.resolve(__dirname, './src'),
			},
		},
	}
}
