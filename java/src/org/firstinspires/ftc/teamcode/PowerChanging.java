package org.firstinspires.ftc.teamcode;

import com.qualcomm.robotcore.eventloop.opmode.LinearOpMode;
import com.qualcomm.robotcore.eventloop.opmode.TeleOp;
import com.qualcomm.robotcore.hardware.DcMotor;

@TeleOp(name = "PowerChanging (Blocks to Java)")
public class PowerChanging extends LinearOpMode {

  private DcMotor LeftDrive;
  private DcMotor RightDrive;

  /**
   * This sample contains the bare minimum Blocks for any regular OpMode. The 3 blue
   * Comment Blocks show where to place Initialization code (runs once, after touching the
   * DS INIT button, and before touching the DS Start arrow), Run code (runs once, after
   * touching Start), and Loop code (runs repeatedly while the OpMode is active, namely not
   * Stopped).
   */
  @Override
  public void runOpMode() {
    LeftDrive = hardwareMap.get(DcMotor.class, "Left Drive");
    RightDrive = hardwareMap.get(DcMotor.class, "Right Drive");

    LeftDrive.setDirection(DcMotor.Direction.REVERSE);
    waitForStart();
    if (opModeIsActive()) {
      while (opModeIsActive()) {
        telemetry.update();
        if (gamepad1.dpad_down_was_pressed()) {
          RightDrive.setPower(0);
        }
        if (gamepad1.a_was_pressed()) {
          RightDrive.setPower(0.25);
        }
        if (gamepad1.b_was_pressed()) {
          RightDrive.setPower(0.5);
        }
        if (gamepad1.x_was_pressed()) {
          RightDrive.setPower(0.75);
        }
        if (gamepad1.y_was_pressed()) {
          RightDrive.setPower(1);
        }
      }
    }
  }
}
