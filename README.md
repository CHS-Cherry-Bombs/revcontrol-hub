Hiya.

We want to go Java only, and phasing out blocks. Please use your code editor of choice, preferably an actual IDE. Just don't edit documents inside of Discord or on the Github website. The REV code editor is fine but discouraged. Android Studio is the IDE recommended by Brogan Patt. Great contenders are JetBrains, VSCodium (don't use VSCode, please.), and ~~Emacs~~ Neovim. Neovim is objectively the best, but, autonomy and personal choice matters. I'll respect your choice, even if it's wrong :)

This file serves as an index for the programs we have on the robot.

# Bench Folder

The Bench folder contains everything *else* we might need when not on field. This might be in Ms. Valletta's classroom, Noah's home, or in the pit before/between/after matches. So, all we might need working on the robot. 

The file names don't need much explanation.

# Auton

Auton is short for autonomous operation mode.

The file names are mostly self explanatory, detailing the way the robot moves. ".d25" means there is a delay of 25 seconds. "Score 3" means the robot attempts to shoot into the goal. 

BottomAOM is an alternative auton for starting at the bottom of the field, and ShootAOM is a borked auton which attempts to shoot when placed against the goal.

The autons are planned to be reworked, and renamed to be more intuitive at first glance. It is recommended to review the file contents to familiarize yourself with what they do.

# Teleop

Teleop is short for teleoperation mode, tele being a Latin prefix meaning at a distance. This is for drivers to manually control the robot.

tank-drive allows you to independently control each drive train. This is what our drivers are most used to at the moment, and comes with a learning curve, especially for driving backwards which is a ***necessity*** to loading balls.

game-drive allows you to independently control speed and steer. It's much like a video game or an RC car. This can be very useful if we need to suddenly switch drivers in an emergency, since the learning curve is minimal. It is intended to replace tank-drive and be the primary teleop.

Both teleops are just as capable, and in theory have no compromises compared to each other. Despite what you may think at first, both can be used on a tank drive system. game-drive is not exclusive to mecanum, and actually doesn't support mecanum. I didn't make it just for fun.

---

# To Do:

- Replace names with the following format: Delay, color, starting position, and shooting status.
  - delay-blue-bottom.js
  - red-top-shoot.js
- Redesign teleop controller scheme.