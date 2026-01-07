// IDENTIFIERS_USED=testAsTouchSensor,TestServoAsServo

/**
 * This function is executed when this OpMode is selected from the Driver Station.
 */
function runOpMode() {
  linearOpMode.waitForStart();
  if (linearOpMode.opModeIsActive()) {
    while (linearOpMode.opModeIsActive()) {
      if (testAsTouchSensor.getIsPressed()) {
        TestServoAsServo.setPosition(1);
      } else {
        TestServoAsServo.setPosition(0);
      }
      telemetry.update();
    }
  }
}
