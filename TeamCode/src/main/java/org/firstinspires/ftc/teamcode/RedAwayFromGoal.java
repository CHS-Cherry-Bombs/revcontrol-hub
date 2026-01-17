package org.firstinspires.ftc.teamcode;

import com.qualcomm.robotcore.eventloop.opmode.Autonomous;
import com.qualcomm.robotcore.eventloop.opmode.LinearOpMode;

import org.firstinspires.ftc.teamcode.mechanisms.Motors;
import org.firstinspires.ftc.teamcode.mechanisms.Shoot;

@Autonomous(name = "Red Away From Goal - 5:46")
public class RedAwayFromGoal extends LinearOpMode {

    Motors motors = new Motors();
    Shoot shoot = new Shoot();

    @Override
    public void runOpMode() {
        motors.init(hardwareMap);
        shoot.init(hardwareMap);

        waitForStart();

        //Go forward
       motors.setLeftMotorSpeed(1);
       motors.setRightMotorSpeed(1);

       sleep(1500);

       //Shoot

        motors.setLeftMotorSpeed(0.5);
        motors.setRightMotorSpeed(-0.5);

        sleep(100);

        motors.setLeftMotorSpeed(0.2);
        motors.setRightMotorSpeed(0.2);

        sleep(300);

        motors.setLeftMotorSpeed(0);
        motors.setRightMotorSpeed(0);

       shoot.setOuttakePower(1);
        sleep(3000);
       shoot.setIntakePower(0.3);

       sleep(3000);

       //Move back

        shoot.setOuttakePower(0);
        shoot.setIntakePower(0);

        motors.setLeftMotorSpeed(-0.5);
        motors.setRightMotorSpeed(0.5);

        sleep(1000);

        // --- STEP 5: Stop everything ---
        motors.setLeftMotorSpeed(0);
        motors.setRightMotorSpeed(0);
        shoot.setIntakePower(0);
        shoot.setOuttakePower(0);
    }
}
