const path = require("path")

module.exports = {
  stories: ["../src/**/*.stories.tsx"],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ["style-loader", "css-loader", "sass-loader"],
      include: path.resolve(__dirname, "../"),
    })

    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      // loader: require.resolve("babel-loader"),
      use: [
        require.resolve("babel-loader"),
        require.resolve("ts-loader"),
        {
          loader: require.resolve("react-docgen-typescript-loader"),
          options: {
            // presets: [["react-app", { flow: false, typescript: true }]],
            tsconfigPath: path.resolve(__dirname, "../tsconfig.json"),
          },
        },
      ],
    })

    // config.module.rules.push({
    //   test: /\.(ts|tsx)$/,
    //   include: path.resolve(__dirname, "../src"),
    //   use: [
    //     require.resolve("ts-loader"),
    //     {
    //       loader: require.resolve("react-docgen-typescript-loader"),
    //       options: {
    //         // Provide the path to your tsconfig.json so that your stories can
    //         // display types from outside each individual story.
    //         tsconfigPath: path.resolve(__dirname, "../tsconfig.json"),
    //       },
    //     },
    //   ],
    // })

    config.resolve.extensions.push(".ts", ".tsx")

    return config
  },
}
