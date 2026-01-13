package org.firstinspires.ftc.teamcode.mechanisms;

import com.qualcomm.robotcore.hardware.DcMotor;
import com.qualcomm.robotcore.hardware.HardwareMap;

public class Shoot {
    private DcMotor outtake;
    private DcMotor intake;

    public void init(HardwareMap hwMap){
        outtake = hwMap.get(DcMotor.class, "Outtake");
        intake = hwMap.get(DcMotor.class, "Intake");

    }

    public void setOuttakePower(double speed){
        outtake.setPower(speed);
    }
    public void setIntakePower(double speed){
        intake.setPower(speed);
    }


}
