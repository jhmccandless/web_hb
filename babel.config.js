module.exports = {
  presets: [
    "@babel/preset-env",
    // ["@babel/preset-react", { runtime: "automatic" }],
    ["@babel/preset-env", { targets: { node: "current" } }],
    "@babel/preset-typescript",
  ],
};
