import * as THREE from "three";
import { DeviceOrientationControls } from "three/examples/jsm/controls/DeviceOrientationControls";

export default class ArtworkGL {
  constructor(props) {
    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.object = null;
    this.controls = null;

    this.size = {
        windowW: null,
        windowH: null
    };

    this.rotationX = 0;
    this.rotationY = 0;

    this.props = props;
    this.init(this.props.$canvas);
  }

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
      canvas: $canvas,
    });
    console.log($canvas);
    this.renderer.setClearColor(0x0000ff, 1.0);
    console.log(this.size.windowW);
    this.renderer.setSize(this.size.windowW, this.size.windowH);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setAnimationLoop(() => {
      this.render();
    });
  };

  render() {
    this.object.rotation.x += 0.01;
    this.object.rotation.y += 0.01;
    this.controls.update();
    this.renderer.render(this.scene, this.camera);
  };
};