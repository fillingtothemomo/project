from flask import Flask, Response, jsonify
import cv2
import numpy as np
# import dlib
from imutils import face_utils
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# # Initialize OpenCV camera, face detector, and landmark predictor
# cap = cv2.VideoCapture(0)
# detector = dlib.get_frontal_face_detector()
# predictor = dlib.shape_predictor("shape_predictor_68_face_landmarks.dat")

#status marking for current state
sleep = 0
drowsy = 0
active = 0
status=""
color=(0,0,0)

def compute(ptA,ptB):
    dist = np.linalg.norm(ptA - ptB)
    return dist

def blinked(a,b,c,d,e,f):
    up = compute(b,d) + compute(c,e)
    down = compute(a,f)
    ratio = up/(2.0*down)

    #Checking if it is blinked
    if(ratio>0.25):
        return 2
    elif(ratio>0.21 and ratio<=0.25):
        return 1
    else:
        return 0

@app.route('/status')
def get_status():
    global sleep, drowsy, active, status, color
    return jsonify({
        'status': status,
        'color': color
    })

def generate_frames():
    while True:
        success, frame = cap.read()
        if not success:
            break
        else:
            gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
            faces = detector(gray)
            for face in faces:
                x1 = face.left()
                y1 = face.top()
                x2 = face.right()
                y2 = face.bottom()

                face_frame = frame.copy()
                cv2.rectangle(face_frame, (x1, y1), (x2, y2), (0, 255, 0), 2)

                landmarks = predictor(gray, face)
                landmarks = face_utils.shape_to_np(landmarks)

                left_blink = blinked(landmarks[36], landmarks[37], 
                                    landmarks[38], landmarks[41], landmarks[40], landmarks[39])
                right_blink = blinked(landmarks[42], landmarks[43], 
                                    landmarks[44], landmarks[47], landmarks[46], landmarks[45])

                if left_blink == 0 or right_blink == 0:
                    status = "SLEEPING !!!"
                    color = (255, 0, 0)

                elif left_blink == 1 or right_blink == 1:
                    status = "Drowsy !"
                    color = (0, 0, 255)

                else:
                    status = "Active :)"
                    color = (0, 255, 0)

                cv2.putText(frame, status, (100,100), cv2.FONT_HERSHEY_SIMPLEX, 1.2, color,3)

                for n in range(0, 68):
                    (x,y) = landmarks[n]
                    cv2.circle(face_frame, (x, y), 1, (255, 255, 255), -1)

            ret, buffer = cv2.imencode('.jpg',frame)
            frame_bytes = buffer.tobytes()
            status_bytes = status.encode()  # Convert status string to bytes
            yield (b'--frame\r\n'
                   b'Content-Type: image/jpeg\r\n\r\n' + frame_bytes + b'\r\n' + b'Status: ' + status_bytes + b'\r\n')

@app.route('/video_feed')
def video_feed():
    return Response(generate_frames(), mimetype='multipart/x-mixed-replace; boundary=frame')

if __name__ == "__main__":
    app.run(debug=True)
