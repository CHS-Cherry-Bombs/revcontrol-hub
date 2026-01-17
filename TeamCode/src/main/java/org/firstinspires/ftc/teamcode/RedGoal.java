package org.firstinspires.ftc.teamcode;

import com.qualcomm.robotcore.eventloop.opmode.Autonomous;
import org.firstinspires.ftc.teamcode.mechanisms.Motors;
import org.firstinspires.ftc.teamcode.mechanisms.Shoot;
import com.qualcomm.robotcore.eventloop.opmode.LinearOpMode;

@Autonomous(name="Red Goal - 5:46")
public class RedGoal extends LinearOpMode {

    Motors motors = new Motors();
    Shoot shoot = new Shoot();
    //Imu robotImu = new Imu(); // 1. Instantiate the IMU

    @Override
    public void runOpMode() {
        motors.init(hardwareMap);
        shoot.init(hardwareMap);
        //robotImu.init(hardwareMap); // 2. Initialize the IMU

        waitForStart();

        // --- STEP 1: Back up from the Goal ---
        motors.setLeftMotorSpeed(-0.5);
        motors.setRightMotorSpeed(-0.5);
        sleep(900);
        motors.setLeftMotorSpeed(0);
        motors.setRightMotorSpeed(0);

        // --- STEP 2: Shooting ---
        shoot.setOuttakePower(1.0);
        sleep(2800);
        shoot.setIntakePower(0.25);
        sleep(600);
        shoot.setIntakePower(0);
        sleep(300);
        shoot.setIntakePower(0.25);
        sleep(1500);
        shoot.setOuttakePower(0);
        shoot.setIntakePower(0);


        sleep(500);

        motors.setLeftMotorSpeed(-0.5);
        motors.setRightMotorSpeed(0.5);
        sleep(500);

        motors.setLeftMotorSpeed(-0.5);
        motors.setRightMotorSpeed(-0.5);

        sleep(600);


//        // --- STEP 3: Precise Turn using IMU ---
//        turnToHeading(160, 0.05 );
//
//        // --- STEP 4: Drive into balls ---
//        sleep(100);
//
//        motors.setLeftMotorSpeed(-0.4);
//        motors.setRightMotorSpeed(-0.4);
//
//        sleep(800);

        shoot.setIntakePower(0);
        shoot.setOuttakePower(0);
        motors.setLeftMotorSpeed(0);
        motors.setRightMotorSpeed(0);

//        sleep(800);
//
//        motors.setLeftMotorSpeed(0);
//        motors.setRightMotorSpeed(0);
//
//        sleep(2000);
//
//        motors.setLeftMotorSpeed(0.4);
//        motors.setRightMotorSpeed(0.4);
//
//        sleep(710);
//
//        motors.setLeftMotorSpeed(0);
//        motors.setRightMotorSpeed(0);
//
//        robotImu.resetIMU();
//
//        turnToHeading(150, 0.05 );


    }

    //    public void turnToHeading(double targetAngle, double speed) {
//        // Simple logic: if current heading is less than target, turn one way, else the other
//        while (opModeIsActive() && Math.abs(robotImu.getHeading() - targetAngle) > 2) {
//            if (robotImu.getHeading() < targetAngle) {
//                motors.setLeftMotorSpeed(speed);
//                motors.setRightMotorSpeed(-speed);
//            }
//            telemetry.addData("Target", targetAngle);
//            telemetry.addData("Current", robotImu.getHeading());
//            telemetry.update();
//        }
//        // Stop motors after turn is complete
//        motors.setLeftMotorSpeed(0);
//        motors.setRightMotorSpeed(0);
//    }
}
