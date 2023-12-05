import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{

    theme: {
        extend: {
            colors: {
                'neptune': {
                    '50': '#f1faf9',
                    '100': '#dbf2f2',
                    '200': '#b9e4e4',
                    '300': '#8dd2d3',
                    '400': '#58b6b8',
                    '500': '#3c9a9e',
                    '600': '#357e85',
                    '700': '#30676e',
                    '800': '#2e565c',
                    '900': '#2a494f',
                    '950': '#182f34',
                },
                'cod-gray': {
                    '50': '#f4f7f7',
                    '100': '#e2eaeb',
                    '200': '#c9d6d8',
                    '300': '#a3b9bd',
                    '400': '#76949a',
                    '500': '#5a7880',
                    '600': '#4e656c',
                    '700': '#43555b',
                    '800': '#3c494e',
                    '900': '#363f43',
                    '950': '#090b0c',
                },


            }
        }
    }

}