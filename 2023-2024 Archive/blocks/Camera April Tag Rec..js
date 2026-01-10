// IDENTIFIERS_USED=gamepad1

var myAprilTagDetections, USE_WEBCAM, myAprilTagProcessor, myAprilTagDetection, myVisionPortal;

/**
 * This function is executed when this OpMode is selected from the Driver Station.
 */
function runOpMode() {
  USE_WEBCAM = true;
  // Initialize AprilTag before waitForStart.
  initAprilTag();
  telemetryAddTextData('DS preview on/off', '3 dots, Camera Stream');
  telemetryAddTextData('>', 'Touch Play to start OpMode');
  telemetry.update();
  linearOpMode.waitForStart();
  if (linearOpMode.opModeIsActive()) {
    while (linearOpMode.opModeIsActive()) {
      telemetryAprilTag();
      // Push telemetry to the Driver Station.
      telemetry.update();
      if (gamepad1.getDpadDown()) {
        // Temporarily stop the streaming session. This can save CPU
        // resources, with the ability to resume quickly when needed.
        visionPortalAccess.stopStreaming(myVisionPortal);
      } else if (gamepad1.getDpadUp()) {
        // Resume the streaming session if previously stopped.
        visionPortalAccess.resumeStreaming(myVisionPortal);
      }
      // Share the CPU.
      linearOpMode.sleep(20);
    }
  }
}

/**
 * Initialize AprilTag Detection.
 */
function initAprilTag() {
  myAprilTagProcessor = aprilTagAccess.easyCreateWithDefaults();
  if (USE_WEBCAM) {
    myVisionPortal = visionPortalAccess.easyCreateWithDefaults_oneProcessor(navigationAccess.getWebcamName("Webcam 1"), myAprilTagProcessor);
  } else {
    myVisionPortal = visionPortalAccess.easyCreateWithDefaults_oneProcessor(navigationAccess.getBuiltinCameraDirection("BACK"), myAprilTagProcessor);
  }
}

/**
 * Display info (using telemetry) for a recognized AprilTag.
 */
function telemetryAprilTag() {
  // Get a list of AprilTag detections.
  myAprilTagDetections = JSON.parse(aprilTagAccess.getDetections(myAprilTagProcessor));
  telemetryAddTextData('# AprilTags Detected', listLength(miscAccess, myAprilTagDetections));
  // Iterate through list and call a function to
  // display info for each recognized AprilTag.
  for (var myAprilTagDetection_index in myAprilTagDetections) {
    myAprilTagDetection = myAprilTagDetections[myAprilTagDetection_index];
    telemetry.addLine('');
    if (startBlockExecution("AprilTagDetection.metadata") ? endBlockExecution(myAprilTagDetection.metadata != null) : 0) {
      telemetry.addLine(['==== (ID ',startBlockExecution("AprilTagDetection.id") ? endBlockExecution(myAprilTagDetection.id) : 0,') ',startBlockExecution("AprilTagDetection.metadata.name") ? endBlockExecution(myAprilTagDetection.metadata.name) : 0].join(''));
      telemetry.addLine(['XYZ ',miscAccess.formatNumber_withWidth(startBlockExecution("AprilTagDetection.ftcPose.x") ? endBlockExecution(myAprilTagDetection.ftcPose.x) : 0, 6, 1),' ',miscAccess.formatNumber_withWidth(startBlockExecution("AprilTagDetection.ftcPose.y") ? endBlockExecution(myAprilTagDetection.ftcPose.y) : 0, 6, 1),' ',miscAccess.formatNumber_withWidth(startBlockExecution("AprilTagDetection.ftcPose.z") ? endBlockExecution(myAprilTagDetection.ftcPose.z) : 0, 6, 1),'  (inch)'].join(''));
      telemetry.addLine(['PRY ',miscAccess.formatNumber_withWidth(startBlockExecution("AprilTagDetection.ftcPose.pitch") ? endBlockExecution(myAprilTagDetection.ftcPose.pitch) : 0, 6, 1),' ',miscAccess.formatNumber_withWidth(startBlockExecution("AprilTagDetection.ftcPose.roll") ? endBlockExecution(myAprilTagDetection.ftcPose.roll) : 0, 6, 1),' ',miscAccess.formatNumber_withWidth(startBlockExecution("AprilTagDetection.ftcPose.yaw") ? endBlockExecution(myAprilTagDetection.ftcPose.yaw) : 0, 6, 1),'  (deg)'].join(''));
      telemetry.addLine(['RBE ',miscAccess.formatNumber_withWidth(startBlockExecution("AprilTagDetection.ftcPose.range") ? endBlockExecution(myAprilTagDetection.ftcPose.range) : 0, 6, 1),' ',miscAccess.formatNumber_withWidth(startBlockExecution("AprilTagDetection.ftcPose.bearing") ? endBlockExecution(myAprilTagDetection.ftcPose.bearing) : 0, 6, 1),' ',miscAccess.formatNumber_withWidth(startBlockExecution("AprilTagDetection.ftcPose.elevation") ? endBlockExecution(myAprilTagDetection.ftcPose.elevation) : 0, 6, 1),'  (inch, deg, deg)'].join(''));
    } else {
      telemetry.addLine(['==== (ID ',startBlockExecution("AprilTagDetection.id") ? endBlockExecution(myAprilTagDetection.id) : 0,') Unknown'].join(''));
      telemetry.addLine(['Center ',miscAccess.formatNumber_withWidth(startBlockExecution("AprilTagDetection.center.x") ? endBlockExecution(myAprilTagDetection.center.x) : 0, 6, 0),'',miscAccess.formatNumber_withWidth(startBlockExecution("AprilTagDetection.center.y") ? endBlockExecution(myAprilTagDetection.center.y) : 0, 6, 0),' (pixels)'].join(''));
    }
  }
  telemetry.addLine('');
  telemetry.addLine('key:');
  telemetry.addLine('XYZ = X (Right), Y (Forward), Z (Up) dist.');
  telemetry.addLine('PRY = Pitch, Roll & Yaw (XYZ Rotation)');
  telemetry.addLine('RBE = Range, Bearing & Elevation');
}
