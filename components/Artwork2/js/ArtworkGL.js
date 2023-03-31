import * as THREE from "three";
import { DeviceOrientationControls } from "three/examples/jsm/controls/DeviceOrientationControls";

export default class ArtworkGL {
  constructor(props) {
    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.object = null;
    this.controls = null;
    this.videoInput = null;
    this.videoStream = null;

    this.size = {
        windowW: null,
        windowH: null
    };

    this.rotationX = 0;
    this.rotationY = 0;

    this.props = props;

    this.checkDeviceOrien(this.props.$modal, this.props.$modal_button)
      .then(() => {
        this.init(this.props.$canvas);
        this.initVideo(this.props.$video);
      })
      .catch((error) => {
        alert('モーションセンサーの使用が可能な端末からアクセスしてください。');
      })
  }

  isIos() {
    const ua = navigator.userAgent.toLowerCase();
    return (
      ua.indexOf("iphone") >= 0 ||
      ua.indexOf("ipad") >= 0 ||
      ua.indexOf("ipod") >= 0
    );
  };

  isGyro() {
    return window.DeviceOrientationEvent && 'ontouchstart' in window;
  }

  checkDeviceOrien($modal, $modal_button) {
    return new Promise((resolve, reject) => {
      if (!this.isGyro()) {
        reject("resolve");
      }
      
      // iOS以外（android）の場合には追加処理が必要ないのでresolveを返す
      if (!this.isIos()) {
        resolve("resolve");
      }

      if (this.isIos()) {
        const deviceOrienEvent = () => {
          hideDeviceOrienModal($modal);
          window.removeEventListener("deviceorientation", deviceOrienEvent, false);
          resolve("resolve");
        };
        
        window.addEventListener("deviceorientation", deviceOrienEvent, false);
        const alertMessage = "モーションセンサーの使用が拒否されました。\nこのページを楽しむには、デバイスモーションセンサーの使用を許可する必要があります。\nSafariのアプリを再起動して、モーションセンサーの使用（「動作と方向」へのアクセス）を許可をしてください。";
        $modal.classList.remove("is-hidden");
        $modal_button.addEventListener("click", () => {
          if (
            DeviceMotionEvent && 
            DeviceMotionEvent.requestPermission &&
            typeof DeviceMotionEvent.requestPermission === "function"
          ) {
            DeviceMotionEvent.requestPermission().then((res) => {
              console.log(res);
              if (res === "granted") {
                this.hideDeviceOrienModal($modal);
                resolve("resolve");
              } else {
                alert(alertMessage);
                reject("resolve");
              }
            })
          }
        })
      }
    });
  };

  hideDeviceOrienModal($modal) {
    $modal.classList.add("is-hidden");
  };

  init($canvas) {
    this.size = {
      windowW: window.innerWidth,
      windowH: window.innerHeight
    }
    this.setScene();
    this.setCamera();
    this.setObject();
    this.setRenderer($canvas);
  };

  initVideo($video) {
    $video.addEventListener("loadedmetadata", this.adjustVideo($video));
    navigator.mediaDevices
    .enumerateDevices()
    .then((devices) => {
      this.videoInput = devices.filter((device) => device.kind === "videoinput");
      this.getVideo($video);
    })
  };

  setVideo() {
    return {
      audio: false,
      video: {
        deviceId: this.videoInput,
        facingMode: "environment",
        width: { min: 1280, max: 1920 },
        height: { min: 720, max: 1080 }
      }
    }
  };

  getVideo($video) {
    if (this.videoStream) {
      this.videoStream.getTracks().forEach((track) => track.stop());
    }
    navigator.mediaDevices
      .getUserMedia(this.setVideo())
      .then(function (stream) {
        $video.srcObject = stream;
        $video.play();
        this.videoStream = stream;
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  adjustVideo($video) {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const videoWidth = $video.videoWidth;
    const videoHeight = $video.videoHeight;

    let videoAspect = videoWidth / videoHeight;
    let windowAspect = windowWidth / windowHeight;

    if (windowAspect < videoAspect) {
      let newWidth = videoAspect * windowHeight;
      $video.style.width = newWidth + "px";
      $video.style.marginLeft = -(newWidth - windowWidth) / 2 + "px";
      $video.style.height = windowHeight + "px";
      $video.style.marginTop = "0px";
    } else {
      let newHeight = 1 / (videoAspect / windowWidth);
      $video.style.height = newHeight + "px";
      $video.style.marginTop = -(newHeight - windowHeight) / 2 + "px";
      $video.style.width = windowWidth + "px";
      $video.style.marginLeft = "0px";
    }
  }

  setScene() {
    this.scene = new THREE.Scene();
  };

  setCamera() {
    this.camera = new THREE.PerspectiveCamera(45, this.size.windowW / this.size.windowH, 0.1, 30);
    this.camera.position.set(0, 0, 5);
    this.camera.lookAt(0, 0, 0);
    this.scene.add(this.camera);
    this.controls = new DeviceOrientationControls(this.camera, true);
  }

  setObject() {
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshNormalMaterial();
    this.object = new THREE.Mesh(geometry, material);
    this.object.position.set(0, 0, 0);
    this.scene.add(this.object);
  };

  setRenderer($canvas) {
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      preserveDrawingBuffer: true,
      canvas: $canvas,
    });
    this.renderer.setClearColor(0x000000, 0);
    this.renderer.setSize(this.size.windowW, this.size.windowH);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setAnimationLoop(() => {
      this.render();
    });
    // this.takePicture(this.renderer, $shutter_button);
  };

  render() {
    this.object.rotation.x += 0.01;
    this.object.rotation.y += 0.01;
    this.controls.update();
    this.renderer.render(this.scene, this.camera);
  };

  // takePicture(renderer, $shutter_button) {
  //   $shutter_button.addEventListener('click', function() {
	// 		var dataURL = renderer.domElement.toDataURL();
			
	// 		var link = document.createElement("a");
	// 		link.download = "ar_test.png";
	// 		link.href = dataURL;
	// 		link.target = "_blank";
  //     document.body.appendChild(link);
	// 		link.click();
  //   });
  // };
};