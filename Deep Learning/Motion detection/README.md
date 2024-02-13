# Motion Detection Project

This project is a simple motion detection application using Python and OpenCV. It captures frames from a video file, detects motion between consecutive frames, draws bounding boxes around moving objects, and saves the processed video with motion detection annotations.

## Features
- Detects motion in a video file.
- Draws bounding boxes around moving objects.
- Saves the processed video with motion detection annotations.

## Dependencies

- Python 3.x
- OpenCV (cv2)


## Installation

1. Clone this repository to your local machine:
git clone https://github.com/tarekmallam/

2. Navigate to the project directory:
cd motion-detection

3. Install the required dependencies using pip:
pip install opencv-python-headless


## Usage

1. Place the video file you want to process in the project directory.
2. Modify the `cap = cv2.VideoCapture("vtest.avi")` line in the `motion_detection.py` file to specify the name of your video file.
3. Run the `motion_detection.py` file:

python motion_detection.py


4. Press the 'q' key to exit the application.

## Contributing

Contributions are welcome! If you have any ideas for improvements or find any issues, feel free to open an issue or submit a pull request.

