import {
  defineConfig,
  presetIcons,
  presetWind3,
  presetTypography,
} from 'unocss';

export default defineConfig({
  content: {
    filesystem: [
      './src/**/*.{astro,html,ts,tsx,js,jsx,md,mdx}',
      './node_modules/@eliancodes/brutal-ui/**/*.{js,ts}',
    ],
  },
  presets: [
    presetWind3(),
    presetIcons({
      collections: {
        logos: () =>
          import('@iconify-json/logos/icons.json').then((i) => i.default),
        uil: () =>
          import('@iconify-json/uil/icons.json').then((l) => l.default),
      },
    }),
    presetTypography(),
  ],
});
