const package = require("./package.json");

module.exports = {
    packagerConfig: {
        appCopyright: "Copyright © " + new Date().getFullYear() + " " + package.name,
        name: package.name,
        appVersion: package.version,
        icon: 'src/build/icons/win/icon.ico',
        out: 'build',
        platform: 'win32',
        asar: true
    },
    plugins: [
        ['@electron-forge/plugin-electronegativity',
            { isSarif: true }
        ]
    ],
    makers: [
        {
            name: "@electron-forge/maker-wix",
            config: {
                name: package.name,
                manufacturer: package.name,
                version: package.version,
                appIconPath: 'src/build/icons/win/icon.ico',
                ui: {
                    chooseDirectory: true
                }
            }
        }
    ]
}