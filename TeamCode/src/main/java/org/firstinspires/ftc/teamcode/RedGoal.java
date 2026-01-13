package org.firstinspires.ftc.teamcode;

import com.qualcomm.robotcore.eventloop.opmode.Autonomous;
import com.qualcomm.robotcore.eventloop.opmode.OpMode;

import org.firstinspires.ftc.teamcode.mechanisms.AprilTagWebcam;
import org.firstinspires.ftc.teamcode.mechanisms.Motors;
import org.firstinspires.ftc.teamcode.mechanisms.Shoot;
import org.firstinspires.ftc.vision.apriltag.AprilTagDetection;

@Autonomous(name="Red Goal")
public class RedGoal extends OpMode {

    //This is the ideal distance for the robot to be in inches because this is the default.
    //May need to be adjusted.
    public final double IDEAL_Y_DISTANCE = 135.0 / 2.54; //Divided by 2.54 to convert cm to inches
    public final double TICK_LIMIT = 2113; //3.5 feet approx. according to Gemini may need to be adjusted
    Motors motors = new Motors();
    Shoot shoot = new Shoot();
    AprilTagWebcam aprilTagWebcam = new AprilTagWebcam();

    @Override
    public void init() {
        motors.init(hardwareMap);
        shoot.init(hardwareMap);
        aprilTagWebcam.init(hardwareMap, telemetry);
        telemetry.addData("Status", "Initialized");
    }


    @Override
    public void loop() {

        aprilTagWebcam.update();

        AprilTagDetection id24 = aprilTagWebcam.getTagBySpecificId(24);

        // Get the absolute distance traveled in ticks
        double currentTicks = Math.abs(motors.getEncoderTicks());

        telemetry.addData("Encoder Ticks:", currentTicks);

        // 1. FIRST PRIORITY: Fail-safe. Stop if we go too far.
        if (currentTicks >= TICK_LIMIT) {
            telemetry.addLine("FAIL-SAFE: Distance limit reached. Stopping.");
            motors.setLeftMotorSpeed(0);
            motors.setRightMotorSpeed(0);
        }
        // 2. SECOND PRIORITY: If we haven't seen the tag yet, keep searching.
        else if (id24 == null) {
            telemetry.addLine("Robot is looking for AprilTag...");
            motors.setLeftMotorSpeed(-0.2); // Slower is better for camera detection
            motors.setRightMotorSpeed(-0.2);
        }
        // 3. THIRD PRIORITY: Tag spotted! Adjust distance.
        else {
            double yDistance = id24.ftcPose.y;
            telemetry.addData("Tag Spotted", "Distance: %.2f inches", yDistance);
            shoot.setOuttakePower(1.0);

            if (yDistance < IDEAL_Y_DISTANCE) {
                telemetry.addLine("Adjusting: Backing up to target.");
                motors.setLeftMotorSpeed(-0.2);
                motors.setRightMotorSpeed(-0.2);
            } else {
                telemetry.addLine("Target Reached! Stopping.");
                motors.setLeftMotorSpeed(0);
                motors.setRightMotorSpeed(0);
                shoot.setIntakePower(1.0);
            }
        }
    }
}
