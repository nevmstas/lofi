import {WebpackOverrideFn} from '@remotion/bundler';
 
export const enableSvgr: WebpackOverrideFn = (currentConfiguration) => {
  return {
    ...currentConfiguration,
    module: {
      ...currentConfiguration.module,
      rules: [
        {
          test: /\.svg$/i,
          issuer: /\.[jt]sx?$/,
          resourceQuery: {not: [/url/]}, // Exclude react component if *.svg?url
          use: ['@svgr/webpack'],
        },
        ...(currentConfiguration.module?.rules ?? []).map((r) => {
          if (!r) {
            return r;
          }
          if (r === '...') {
            return r;
          }
          if (!r.test?.toString().includes('svg')) {
            return r;
          }
          return {
            ...r,
            // Remove Remotion loading SVGs as a URL
            test: new RegExp(r.test.toString().replace(/svg\|/g, '').slice(1, -1)),
          };
        }),
      ],
    },
  };
};