
# Club Penguin Space

A client for Club Penguin Space (a CPPS) that makes playing the Flash game possible after January 12, 2021.


## Features

- Automatically clearing the users' cache when the application is launched (parties and features update instantly!),
- Discord Rich Presence support. Have a shiny Discord status when playing,
- Embedded (Pepper) Flash Player. There's no need to install Flash manually,
- Cross platform - works on Windows and macOS.

## Development

To create a client for your CPPS using this source you will need: Git, Node.js.

1. Clone the repository:

```bash
git clone https://github.com/CPSpace/cpspace_app
```

2. Install Node dependencies:

```bash
npm install
```

3. Edit the files. You need to:
- Replace the URL of mainWindow.loadURL in main.js to your own play page or landing page,
- Replace the clientId and details of the Discord RPC in main.js.
- Change "cpspace" in name in files: package.json, package-lock.json and "Desktop client for Club Penguin Space" in description in package.json.
- Change appId ("com.cpspace") and product name ("Club Penguin Space") in package.json to your CPPS.

1. Test your client:

```bash
npm start
```

5. If everything functions as you wish, build the client:

Windows: 
```bash
  npm run-script build
```
macOS:
```bash
  npm run-script build-mac # building for macOS is supported only on macOS
```

6. After the clients build, open the folder called `dist` and you will find a .exe installer for Windows and .pkg for macOS. You can share those for your users to download and install.
## Acknowledgements

Originally created by AltoDev.

Adopted by Club Penguin Space and adapted for cpspace.net.

Licensed under the Creative Commons Zero v1.0 Universal license.

If you wish to develop a client for your own CPPS using this code you are required to leave the acknowledgements here and inside the client unchanged.

## Support

Please join our [Discord Server](https://discord.gg/space) to report any bugs or issues you find.