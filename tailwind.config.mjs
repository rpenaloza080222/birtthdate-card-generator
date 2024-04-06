/** @type {import('tailwindcss').Config} */
import animations from '@midudev/tailwind-animations'
import {colors} from "./src/resources/lib/data"
var re = new RegExp("a|b", "i");
/bg-(red|green|blue)-(100|200|300)/

const utilities = ["bg", "via", "text", "border"].join("|")
const colorsVariants = colors.flatMap(color=>color.variants)
const safelist = colors.map(color=>{
	const mapUtilities = `(${utilities})`
	const mapColor = `(${colorsVariants.join("|")})` 
	const regex = `${mapUtilities}-${color.value}-${mapColor}`
	const regexExp = new RegExp(regex, "i");
	return {
		pattern: regexExp,
		variants: ["sm","md",'lg', 'hover', 'focus', 'lg:hover'],
	}
})
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [animations],
	safelist
}
