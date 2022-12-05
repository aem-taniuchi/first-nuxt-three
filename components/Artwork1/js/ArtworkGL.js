import * as THREE from "three";

export default class ArtworkGL {
  constructor(props) {
    this.scene = null;
    this.camera = null;
    this.renderer = null;

    this.size = {
        windowW: null,
        windowH: null
    };

    this.rotationX = 0;

    //変化する色
    this.r = 0;
    this.g = 1;
    this.b = 1;

    this.props = props;
    this.init(this.props.$canvas);
  }

  init($canvas) {
    this.setSize();

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      75, 
      this.size.windowW / this.size.windowH,
      0.1,
      1000
    );
    this.camera.position.set(0, 0, 25);
    this.camera.lookAt(this.scene.position);
    this.renderer = new THREE.WebGLRenderer({
      canvas: $canvas
    });

    this.renderer.setPixelRatio(window.devicePixelRatio);
    
    this.renderer.setClearColor(0x1a1a1a);
    this.renderer.setSize(this.size.windowW, this.size.windowH);

    //オブジェクト生成
    this.material = new THREE.MeshBasicMaterial({
      wireframe: true
    });
    this.octahedron = new THREE.Mesh(
      new THREE.OctahedronGeometry(10, 3),
      this.material
    );
    this.octahedron.position.set(0, 0, 0);
    this.scene.add(this.octahedron);

    this.scrollAll = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    window.addEventListener('scroll', this.onScroll.bind(this));
    window.addEventListener("resize", this.resize.bind(this));

    this.loop();
  }

  setSize() {
    this.size = {
      windowW: window.innerWidth,
      windowH: window.innerHeight
    }
  }

  resize() {
    this.setSize();
    this.camera.aspect = this.size.windowW / this.size.windowH;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(this.size.windowW, this.size.windowH);
  }

  render(){
    this.renderer.render(this.scene, this.camera);
  }

  loop() {
    //スクロール量で変化する値
    this.octahedron.rotation.y += 0.01;
    this.octahedron.rotation.x = this.rotationX;
    this.material.color.setRGB(this.r, this.g, this.b);

    this.render();
    requestAnimationFrame(this.loop.bind(this));
  }

  onScroll() {
    this.rotationX = Math.PI * (document.documentElement.scrollTop / this.scrollAll);

    //スクロール量でマテリアルの色変化
    this.r = document.documentElement.scrollTop / this.scrollAll;
    this.g = 1 - (document.documentElement.scrollTop / this.scrollAll);
    this.b = 1 - ((document.documentElement.scrollTop / this.scrollAll) / 2);

    console.log(this.r);
    console.log(this.g);
    console.log(this.b);
  }
}