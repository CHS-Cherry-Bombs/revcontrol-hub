// IDENTIFIERS_USED=gamepad1,gamepad2,IntakeAsDcMotor,LeftDriveAsDcMotor,OuttakeAsDcMotor,OuttakeBlockAsServo,RightDriveAsDcMotor

var outtake_block_on_, Outtake_On_, Intake_On_;

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
  RightDriveAsDcMotor.setDirection("FORWARD");
  IntakeAsDcMotor.setDirection("FORWARD");
  OuttakeAsDcMotor.setDirection("REVERSE");
  OuttakeBlockAsServo.setDirection("FORWARD");
  OuttakeBlockAsServo.setPosition(0.35);
  outtake_block_on_ = -1;
  Outtake_On_ = -1;
  Intake_On_ = -1;
  linearOpMode.waitForStart();
  if (linearOpMode.opModeIsActive()) {
    while (linearOpMode.opModeIsActive()) {
      if (gamepad1.getRightBumper()) {
        LeftDriveAsDcMotor.setDualPower(gamepad1.getLeftStickY() * 0.25, RightDriveAsDcMotor, gamepad1.getRightStickY() * 0.25);
      } else {
        LeftDriveAsDcMotor.setDualPower(gamepad1.getLeftStickY(), RightDriveAsDcMotor, gamepad1.getRightStickY());
        telemetry.update();
      }
      if (gamepad2.getAWasPressed()) {
        Intake_On_ = (typeof Intake_On_ == 'number' ? Intake_On_ : 0) + 1;
      }
      if (gamepad2.getBWasPressed()) {
        Outtake_On_ = (typeof Outtake_On_ == 'number' ? Outtake_On_ : 0) + 1;
      }
      if (gamepad2.getXWasPressed()) {
        outtake_block_on_ = (typeof outtake_block_on_ == 'number' ? outtake_block_on_ : 0) + 1;
      }
      if (Intake_On_ / 2 == Math.round(Intake_On_ / 2)) {
        IntakeAsDcMotor.setPower(-1);
      } else {
        IntakeAsDcMotor.setPower(0);
      }
      if (outtake_block_on_ / 2 == Math.round(outtake_block_on_ / 2)) {
        OuttakeBlockAsServo.setPosition(0);
      } else {
        OuttakeBlockAsServo.setPosition(0.35);
      }
      if (gamepad2.getRightStickY() != 0) {
        IntakeAsDcMotor.setPower(gamepad2.getRightStickY());
        Intake_On_ = -1;
      } else {
        if (Outtake_On_ / 2 == Math.round(Outtake_On_ / 2)) {
          OuttakeAsDcMotor.setPower(1);
        } else {
          OuttakeAsDcMotor.setPower(0);
        }
      }
    }
  }
}
