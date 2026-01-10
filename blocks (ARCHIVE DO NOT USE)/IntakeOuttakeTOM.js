// IDENTIFIERS_USED=gamepad1,IntakeAsDcMotor,LeftDriveAsDcMotor,OuttakeAsDcMotor,OuttakeBlockAsServo,RightDriveAsDcMotor

var Binary, IntakePower;

/**
 * This sample contains the bare minimum Blocks for any regular OpMode. The 3 blue
 * Comment Blocks show where to place Initialization code (runs once, after touching the
 * DS INIT button, and before touching the DS
 * Start arrow), Run code (runs once, after
 * touching Start), and Loop code (runs repeatedly
 * while the OpMode is active, namely not
 * Stopped).
 */
function runOpMode() {
  LeftDriveAsDcMotor.setDirection("REVERSE");
  Binary = 0.0625;
  linearOpMode.waitForStart();
  if (linearOpMode.opModeIsActive()) {
    while (linearOpMode.opModeIsActive()) {
      telemetry.update();
      LeftDriveAsDcMotor.setDualPower(gamepad1.getLeftStickY(), RightDriveAsDcMotor, gamepad1.getRightStickY());
      if (gamepad1.getLeftBumperWasPressed()) {
        if (IntakePower) {
          IntakePower = false;
          IntakeAsDcMotor.setPower(0);
        } else {
          IntakePower = true;
          IntakeAsDcMotor.setPower(-1);
        }
      }
      if (gamepad1.getRightBumperWasPressed()) {
        if (IntakePower) {
          IntakePower = false;
          OuttakeAsDcMotor.setPower(0);
        } else {
          IntakePower = true;
          OuttakeAsDcMotor.setPower(1);
        }
      }
      if (gamepad1.getXWasPressed()) {
        Binary = Binary * 2;
      }
      if (gamepad1.getYWasPressed()) {
        Binary = Binary / 2;
      }
      if (gamepad1.getBWasPressed()) {
        OuttakeBlockAsServo.setPosition(OuttakeBlockAsServo.getPosition() - Binary);
      }
      if (gamepad1.getAWasPressed()) {
        OuttakeBlockAsServo.setPosition(OuttakeBlockAsServo.getPosition() + Binary);
      }
      if (gamepad1.getDpadDownWasPressed()) {
        OuttakeBlockAsServo.setPosition(0.5625);
      }
    }
  }
}
