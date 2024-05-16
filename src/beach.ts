import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

type QuarternaryConfig = CustomThemeConfig & {
	properties: {
		'--on-quarternary': string;
		'--color-quarternary-50': string;
		'--color-quarternary-100': string;
		'--color-quarternary-200': string;
		'--color-quarternary-300': string;
		'--color-quarternary-400': string;
		'--color-quarternary-500': string;
		'--color-quarternary-600': string;
		'--color-quarternary-700': string;
		'--color-quarternary-800': string;
		'--color-quarternary-900': string;
	};
};

export const beach: QuarternaryConfig = {
	name: 'beach',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		'--theme-font-family-heading': `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		'--theme-font-color-base': 'var(--color-surface-500)',
		'--theme-font-color-dark': 'var(--color-primary-500)',
		'--theme-rounded-base': '9999px',
		'--theme-rounded-container': '8px',
		'--theme-border-base': '1px',
		// =~= Theme On-X Colors =~=
		'--on-primary': 'var(--color-surface-900)',
		'--on-secondary': 'var(--color-surface-900)',
		'--on-tertiary': 'var(--color-surface-900)',
		'--on-quarternary': 'var(--color-surface-900)',
		'--on-success': '0 0 0',
		'--on-warning': '0 0 0',
		'--on-error': '255 255 255',
		'--on-surface': 'var(--color-primary-500)',
		// =~= Theme Colors  =~=
		// primary | #eae4c4
		'--color-primary-50': '252 251 246', // #fcfbf6
		'--color-primary-100': '251 250 243', // #fbfaf3
		'--color-primary-200': '250 248 240', // #faf8f0
		'--color-primary-300': '247 244 231', // #f7f4e7
		'--color-primary-400': '240 236 214', // #f0ecd6
		'--color-primary-500': '234 228 196', // #eae4c4
		'--color-primary-600': '211 205 176', // #d3cdb0
		'--color-primary-700': '176 171 147', // #b0ab93
		'--color-primary-800': '140 137 118', // #8c8976
		'--color-primary-900': '115 112 96', // #737060
		// secondary | #f6a434
		'--color-secondary-50': '254 241 225', // #fef1e1
		'--color-secondary-100': '253 237 214', // #fdedd6
		'--color-secondary-200': '253 232 204', // #fde8cc
		'--color-secondary-300': '251 219 174', // #fbdbae
		'--color-secondary-400': '249 191 113', // #f9bf71
		'--color-secondary-500': '246 164 52', // #f6a434
		'--color-secondary-600': '221 148 47', // #dd942f
		'--color-secondary-700': '185 123 39', // #b97b27
		'--color-secondary-800': '148 98 31', // #94621f
		'--color-secondary-900': '121 80 25', // #795019
		// tertiary | #32a98d
		'--color-tertiary-50': '224 242 238', // #e0f2ee
		'--color-tertiary-100': '214 238 232', // #d6eee8
		'--color-tertiary-200': '204 234 227', // #cceae3
		'--color-tertiary-300': '173 221 209', // #adddd1
		'--color-tertiary-400': '112 195 175', // #70c3af
		'--color-tertiary-500': '50 169 141', // #32a98d
		'--color-tertiary-600': '45 152 127', // #2d987f
		'--color-tertiary-700': '38 127 106', // #267f6a
		'--color-tertiary-800': '30 101 85', // #1e6555
		'--color-tertiary-900': '25 83 69', // #195345
		// quarternary | #e498b1
		'--color-quarternary-50': '251 240 243', // #fbf0f3
		'--color-quarternary-100': '250 234 239', // #faeaef
		'--color-quarternary-200': '248 229 236', // #f8e5ec
		'--color-quarternary-300': '244 214 224', // #f4d6e0
		'--color-quarternary-400': '236 183 200', // #ecb7c8
		'--color-quarternary-500': '228 152 177', // #e498b1
		'--color-quarternary-600': '205 137 159', // #cd899f
		'--color-quarternary-700': '171 114 133', // #ab7285
		'--color-quarternary-800': '137 91 106', // #895b6a
		'--color-quarternary-900': '112 74 87', // #704a57
		// success | #84cc16
		'--color-success-50': '237 247 220', // #edf7dc
		'--color-success-100': '230 245 208', // #e6f5d0
		'--color-success-200': '224 242 197', // #e0f2c5
		'--color-success-300': '206 235 162', // #ceeba2
		'--color-success-400': '169 219 92', // #a9db5c
		'--color-success-500': '132 204 22', // #84cc16
		'--color-success-600': '119 184 20', // #77b814
		'--color-success-700': '99 153 17', // #639911
		'--color-success-800': '79 122 13', // #4f7a0d
		'--color-success-900': '65 100 11', // #41640b
		// warning | #EAB308
		'--color-warning-50': '252 244 218', // #fcf4da
		'--color-warning-100': '251 240 206', // #fbf0ce
		'--color-warning-200': '250 236 193', // #faecc1
		'--color-warning-300': '247 225 156', // #f7e19c
		'--color-warning-400': '240 202 82', // #f0ca52
		'--color-warning-500': '234 179 8', // #EAB308
		'--color-warning-600': '211 161 7', // #d3a107
		'--color-warning-700': '176 134 6', // #b08606
		'--color-warning-800': '140 107 5', // #8c6b05
		'--color-warning-900': '115 88 4', // #735804
		// error | #D41976
		'--color-error-50': '249 221 234', // #f9ddea
		'--color-error-100': '246 209 228', // #f6d1e4
		'--color-error-200': '244 198 221', // #f4c6dd
		'--color-error-300': '238 163 200', // #eea3c8
		'--color-error-400': '225 94 159', // #e15e9f
		'--color-error-500': '212 25 118', // #D41976
		'--color-error-600': '191 23 106', // #bf176a
		'--color-error-700': '159 19 89', // #9f1359
		'--color-error-800': '127 15 71', // #7f0f47
		'--color-error-900': '104 12 58', // #680c3a
		// surface | #043854
		'--color-surface-50': '245 251 255', // #F5FBFF
		'--color-surface-100': '226 244 254', // #E2F4FE
		'--color-surface-200': '201 235 252', // #C9EBFC
		'--color-surface-300': '172 223 251', // #ACDFFB
		'--color-surface-400': '133 209 249', // #85D1F9
		'--color-surface-500': '85 190 247', // #55BEF7
		'--color-surface-600': '31 170 244', // #1FAAF4
		'--color-surface-700': '10 143 214', // #0A8FD6
		'--color-surface-800': '8 110 166', // #086EA6
		'--color-surface-900': '4 56 84' // #043854
	}
};
