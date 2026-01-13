package org.firstinspires.ftc.teamcode.mechanisms;

import com.qualcomm.robotcore.hardware.DcMotor;
import com.qualcomm.robotcore.hardware.DcMotorSimple;
import com.qualcomm.robotcore.hardware.HardwareMap;

public class Motors {

    private DcMotor leftMotor;
    private DcMotor rightMotor;


    public void init(HardwareMap hwMap) {
        leftMotor = hwMap.get(DcMotor.class,"Left Drive");
        leftMotor.setMode(DcMotor.RunMode.RUN_USING_ENCODER);
        leftMotor.setZeroPowerBehavior(DcMotor.ZeroPowerBehavior.BRAKE);

        rightMotor = hwMap.get(DcMotor.class,"Right Drive");
        rightMotor.setMode(DcMotor.RunMode.RUN_USING_ENCODER);
        rightMotor.setDirection(DcMotor.Direction.REVERSE);
        rightMotor.setZeroPowerBehavior(DcMotor.ZeroPowerBehavior.BRAKE);

    }

    public void setLeftMotorSpeed(double speed){
        leftMotor.setPower(speed);
    }
    public void setRightMotorSpeed(double speed){
        rightMotor.setPower(speed);
    }

    public double getEncoderTicks(){
        int leftMotorTicks = leftMotor.getCurrentPosition();
        int rightMotorTicks = rightMotor.getCurrentPosition();

        return (leftMotorTicks + rightMotorTicks) / 2.0;
    }

}
