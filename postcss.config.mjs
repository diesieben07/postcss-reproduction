import postcssPresetEnv from 'postcss-preset-env';

export default {
    plugins: [
        postcssPresetEnv({
            "browsers": [
                "defaults and supports css-variables"
            ]
        })
    ],
};
