// IDENTIFIERS_USED=IntakeAsDcMotor,LeftDriveAsDcMotor,OuttakeAsDcMotor,RightDriveAsDcMotor

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
  linearOpMode.waitForStart();
  OuttakeAsDcMotor.setPower(1);
  LeftDriveAsDcMotor.setPower(1);
  RightDriveAsDcMotor.setPower(-1);
  linearOpMode.sleep(1340);
  IntakeAsDcMotor.setPower(1);
}
