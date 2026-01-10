// IDENTIFIERS_USED=LeftDriveAsDcMotor,OuttakeBlockAsServo,RightDriveAsDcMotor

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
  RightDriveAsDcMotor.setMode("RUN_WITHOUT_ENCODER");
  LeftDriveAsDcMotor.setMode("RUN_WITHOUT_ENCODER");
  OuttakeBlockAsServo.setPosition(0);
  linearOpMode.waitForStart();
  linearOpMode.sleep(25000);
  LeftDriveAsDcMotor.setPower(0.5);
  RightDriveAsDcMotor.setPower(0.5);
  linearOpMode.sleep(500);
  LeftDriveAsDcMotor.setPower(0);
  RightDriveAsDcMotor.setPower(0);
}
