// IDENTIFIERS_USED=gamepad1

var myTfodRecognitions, USE_WEBCAM, myTfodProcessorBuilder, myTfodProcessor, myTfodRecognition, myVisionPortalBuilder, x, y, myVisionPortal;

/**
 * This function is executed when this OpMode is selected from the Driver Station.
 */
function runOpMode() {
  USE_WEBCAM = true;
  // Initialize TFOD before waitForStart.
  initTfod();
  telemetryAddTextData('DS preview on/off', '3 dots, Camera Stream');
  telemetryAddTextData('>', 'Touch Play to start OpMode');
  telemetry.update();
  linearOpMode.waitForStart();
  if (linearOpMode.opModeIsActive()) {
    while (linearOpMode.opModeIsActive()) {
      telemetryTfod();
      // Push telemetry to the Driver Station.
      telemetry.update();
      if (gamepad1.getDpadDown()) {
        // Temporarily stop the streaming session.
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
 * Initialize TensorFlow Object Detection.
 */
function initTfod() {
  myTfodProcessorBuilder = tensorFlowAccess.createBuilder();
  myTfodProcessor = tensorFlowAccess.build(myTfodProcessorBuilder);
  myVisionPortalBuilder = visionPortalAccess.createBuilder();
  if (USE_WEBCAM) {
    // Use a webcam.
    visionPortalAccess.setCamera(myVisionPortalBuilder, navigationAccess.getWebcamName("Webcam 1"));
  } else {
    // Use the device's back camera.
    visionPortalAccess.setCamera(myVisionPortalBuilder, navigationAccess.getBuiltinCameraDirection("BACK"));
  }
  visionPortalAccess.addProcessor(myVisionPortalBuilder, myTfodProcessor);
  myVisionPortal = visionPortalAccess.build(myVisionPortalBuilder);
}

/**
 * Display info (using telemetry) for a detected object
 */
function telemetryTfod() {
  // Get a list of recognitions from TFOD.
  myTfodRecognitions = JSON.parse(tensorFlowAccess.getRecognitions(myTfodProcessor));
  telemetryAddTextData('# Objects Detected', listLength(miscAccess, myTfodRecognitions));
  // Iterate through list and call a function to
  // display info for each recognized object.
  for (var myTfodRecognition_index in myTfodRecognitions) {
    myTfodRecognition = myTfodRecognitions[myTfodRecognition_index];
    telemetry.addLine('');
    // Display the label and confidence for the recognition.
    telemetryAddTextData('Image', [startBlockExecution("TfodRecognition.Label") ? endBlockExecution(myTfodRecognition.Label) : 0,' (',miscAccess.formatNumber((startBlockExecution("TfodRecognition.Confidence") ? endBlockExecution(myTfodRecognition.Confidence) : 0) * 100, 0),' % Conf.)'].join(''));
    x = ((startBlockExecution("TfodRecognition.Left") ? endBlockExecution(myTfodRecognition.Left) : 0) + (startBlockExecution("TfodRecognition.Right") ? endBlockExecution(myTfodRecognition.Right) : 0)) / 2;
    y = ((startBlockExecution("TfodRecognition.Top") ? endBlockExecution(myTfodRecognition.Top) : 0) + (startBlockExecution("TfodRecognition.Bottom") ? endBlockExecution(myTfodRecognition.Bottom) : 0)) / 2;
    // Display the position of the center of the detection boundary for the recognition
    telemetryAddTextData('- Position', [miscAccess.formatNumber(x, 0),', ',miscAccess.formatNumber(y, 0)].join(''));
    // Display the size of detection boundary for the recognition
    telemetryAddTextData('- Size', [miscAccess.formatNumber(startBlockExecution("TfodRecognition.Width") ? endBlockExecution(myTfodRecognition.Width) : 0, 0),' x ',miscAccess.formatNumber(startBlockExecution("TfodRecognition.Height") ? endBlockExecution(myTfodRecognition.Height) : 0, 0)].join(''));
  }
}
