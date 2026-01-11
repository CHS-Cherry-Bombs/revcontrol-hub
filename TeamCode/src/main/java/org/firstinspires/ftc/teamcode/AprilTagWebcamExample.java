package org.firstinspires.ftc.teamcode;

import com.qualcomm.robotcore.eventloop.opmode.Autonomous;
import com.qualcomm.robotcore.eventloop.opmode.OpMode;
import org.firstinspires.ftc.teamcode.mechanisms.AprilTagWebcam;
import org.firstinspires.ftc.vision.apriltag.AprilTagDetection;

@Autonomous
public class AprilTagWebcamExample extends OpMode {
    AprilTagWebcam aprilTagWebcam = new AprilTagWebcam();

    @Override
    public void init() {
        telemetry.addData("Hello", "April Tag");
        aprilTagWebcam.init(hardwareMap, telemetry);
    }

    @Override
    public void loop() {
        aprilTagWebcam.update();
        AprilTagDetection id20 = aprilTagWebcam.getTagBySpecificId(20);
        aprilTagWebcam.displayDetectionTelemetry(id20);

        AprilTagDetection id21 = aprilTagWebcam.getTagBySpecificId(21);
        aprilTagWebcam.displayDetectionTelemetry(id21);

        AprilTagDetection id22 = aprilTagWebcam.getTagBySpecificId(22);
        aprilTagWebcam.displayDetectionTelemetry(id22);

        AprilTagDetection id23 = aprilTagWebcam.getTagBySpecificId(23);
        aprilTagWebcam.displayDetectionTelemetry(id23);

        AprilTagDetection id24 = aprilTagWebcam.getTagBySpecificId(24);
        aprilTagWebcam.displayDetectionTelemetry(id24);

        AprilTagDetection id25 = aprilTagWebcam.getTagBySpecificId(25);
        aprilTagWebcam.displayDetectionTelemetry(id25);

    }
}
