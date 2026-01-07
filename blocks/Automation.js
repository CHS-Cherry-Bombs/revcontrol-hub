// IDENTIFIERS_USED=leftBackDriveAsDcMotor,rightBackDriveAsDcMotor

/**
 * This function is executed when this OpMode is selected from the Driver Station.
 */
function runOpMode() {
  leftBackDriveAsDcMotor.setDualMode("STOP_AND_RESET_ENCODER", rightBackDriveAsDcMotor, "STOP_AND_RESET_ENCODER");
  leftBackDriveAsDcMotor.setDualMode("RUN_TO_POSITION", rightBackDriveAsDcMotor, "RUN_TO_POSITION");
  linearOpMode.waitForStart();
  if (linearOpMode.opModeIsActive()) {
    while (!linearOpMode.isStopRequested()) {
      leftBackDriveAsDcMotor.setPower(0.5);
      rightBackDriveAsDcMotor.setPower(0.5);
      leftBackDriveAsDcMotor.setDualTargetPosition(4000, rightBackDriveAsDcMotor, 4000);
      linearOpMode.sleep(1000);
    }
    telemetry.update();
  }
}
