// IDENTIFIERS_USED=gamepad1,leftBackDriveAsDcMotor

/**
 * This function is executed when this OpMode is selected from the Driver Station.
 */
function runOpMode() {
  linearOpMode.waitForStart();
  if (linearOpMode.opModeIsActive()) {
    while (linearOpMode.opModeIsActive()) {
      telemetry.update();
      if (gamepad1.getA()) {
        leftBackDriveAsDcMotor.setPower(1);
      } else {
        leftBackDriveAsDcMotor.setPower(0);
      }
    }
  }
}
