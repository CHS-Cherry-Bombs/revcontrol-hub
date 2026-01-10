// IDENTIFIERS_USED=gamepad1,leftBackDriveAsDcMotor,leftFrontDriveAsDcMotor,rightBackDriveAsDcMotor,rightFrontDriveAsDcMotor,testanAsTouchSensor,testdigAsTouchSensor,TestServoAsServo

/**
 * Describe this function...
 */
function runOpMode() {
  leftBackDriveAsDcMotor.setDirection("REVERSE");
  leftFrontDriveAsDcMotor.setDirection("REVERSE");
  linearOpMode.waitForStart();
  while (linearOpMode.opModeIsActive()) {
    if (gamepad1.getStart()) {
      linearOpMode.terminateOpModeNow();
    }
    leftBackDriveAsDcMotor.setDualPower(gamepad1.getLeftStickY() + gamepad1.getLeftStickX(), leftFrontDriveAsDcMotor, gamepad1.getLeftStickY() + gamepad1.getLeftStickX());
    rightBackDriveAsDcMotor.setDualPower(gamepad1.getLeftStickY() - gamepad1.getLeftStickX(), rightFrontDriveAsDcMotor, gamepad1.getLeftStickY() - gamepad1.getLeftStickX());
    if (gamepad1.getB() || testdigAsTouchSensor.getIsPressed() || testanAsTouchSensor.getIsPressed()) {
      TestServoAsServo.setPosition(1);
    } else {
      TestServoAsServo.setPosition(0);
    }
  }
}
