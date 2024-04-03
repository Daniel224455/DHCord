
<div align="center">
<img src="http://denishatingclub.eu/images/img69.jpg" width="520">
 <br>DHCord is a custom client based on ArmCord, designed to enhance your Discord experience while keeping everything lightweight. 
</div>

## Contributors
[<img alt="Daniel224455" src="https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/90069111?v=4&w=45&fit=cover&mask=circle&maxage=7d" />](https://github.com/Daniel224455)
[<img alt="wawalol" src="https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/126290309?v=4&w=45&fit=cover&mask=circle&maxage=7d" />](https://github.com/wawaloll)

# Features

- **Standalone client** 

   DHCord is built as a standalone client and doesn't rely on the original Discord client in any way.

- **Various mods built-in**
 
   [Vencord](https://github.com/Vendicated/Vencord) and [Shelter](https://github.com/uwu/shelter).

- **Themes**

   DHCord natively supports theming of the entire app, you can easily import BetterDiscord themes and manage them

- **Made for Privacy™**

   DHCord automatically blocks all of Discord's trackers; even without any client mods, you can feel safe and secure!

- **Supports Rich Presence**

   DHCord supports rich presence (game activity) out of the box thanks to [arRPC](https://arrpc.openasar.dev).
   
- **Mobile support**

   DHCord has **experimental** mobile support for phones running Linux such as the PinePhone. While this is still far from an ideal solution, we're slowly trying to improve it.

- **Much more stable**

   DHCord is using a newer build of Electron than the stock Discord app. This means you can have a much more stable and secure experience, along with slightly better performance.


- **Cross-platform support!**

   ArmCOrd was originally created for ARM64 Linux devices since Discord doesn't support them. We soon decided to support every platform that [Electron supports](https://github.com/electron/electron#platform-support)!
  
# How to run/install it?

### Windows and Linux
Use the pre-built installers from our releases page.


### Pre-built binaries:
 Check the **releases tab** for precompiled packages for Linux, Windows, <s>and Mac OS</s>.  

### Compiling:
 Alternatively, you can run DHCord from source ([NodeJS](https://nodejs.dev), [pnpm](https://pnpm.io/installation#using-npm), and [rust toolchain](https://www.rust-lang.org/tools/install) are required):    
 1. Clone DHCord repo: `git clone https://github.com/Daniel224455/DHCord`    
 2. Run `pnpm install` to install dependencies   
 3. Build with `npm run build`   
 4. Compile/Package with `npm run package`    


# FAQ
## Do you have a support Discord?

[Yes, we do.](https://discord.gg/jNYKGYfQ)

## Will I get banned for using this?   
- You are breaking [Discord ToS](https://discord.com/terms#software-in-discord%E2%80%99s-services) by using DHCord, but no one has been banned from using it or any of the client mods included.

## Can I use this on anything other than ARM?
- Yes! DHCord should work normally under Windows, MacOS, and Linux as long as it has Electron support.  

## How can I access the settings?
- Open Discord settings and there should be a button `DHCord Settings` button with a white Discord icon, you can also right click on the tray icon and click `Open Settings`

## How does this work?   
- We are using the official web app and wrapping it up in Electron. While you may think this is lame and done like thousands of times before, what makes us unique is that we actually strive for creating a customized experience. You can very easily load themes and mods with no installers/injectors. You can even make the client have transparency effects and follow the fluent design of Windows! At its core, it's just a simple web wrapper, however, we applied many patches to make this work well for you <3

## Why is macOS support lacking?
- Due to me not owning any macOS device, I can't easily debug/test or do anything related to it. Of course, VMs and Hackintosh machines exist but from my experience, these are unreliable or very time-consuming to set up and maintain. While DHCord "works" on macOS you may encounter weird issues or inconsistencies with other apps in terms of how they behave (for example macOS lack of tray).

## Where can I find the source code?
- The source code is on [GitHub](https://github.com/Daniel224455/DHCord).


# Credits
- [ArmCord UI design, branding, and a few features](https://github.com/kckarnige)
- [OpenAsar](https://github.com/GooseMod/OpenAsar)
- [arRPC (for Rich Presence)](https://github.com/OpenAsar/arrpc)
- (pre v3.1.0) [Cumcord](https://github.com/Cumcord/Cumcord)
- (pre v3.1.0) [GooseMod](https://github.com/GooseMod/GooseMod)
- (pre v3.1.0) [GooseMod Extension](https://github.com/GooseMod/extension)
- (pre v3.1.0) [FlickerMod](https://github.com/FlickerMod)
- (Pre v3.0.0) [custom-electron-titlebar](https://github.com/AlexTorresSk/custom-electron-titlebar)
- [electron-builder](https://electron.build)
Discord is trademark of Discord Inc. DHCord and DHCord is not affiliated with or endorsed by Discord Inc. 


