import { render } from '@react-three/fiber';
import { useEffect, useState } from 'react';
import React from 'react';
import { redirect } from 'react-router-dom';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { setSize, Resizer } from '../systems/resizer';
import image from '../../build/src/space.jpg';
import Popup from 'reactjs-popup';
import { useLocation } from 'react-router-dom';

function Main() {
  const location = useLocation();
  console.log(location.pathname);

  const [open, setOpen] = useState(true);
  const closeModal = () => setOpen(false);

  useEffect(() => {
    // scene
    const texture = new THREE.TextureLoader();
    texture.colorSpace = THREE.LinearSRGBColorSpace;
    const scene = new THREE.Scene();
    scene.background = texture.load();

    // camera
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 1000);
    camera.position.set(0, 0, 10);

    // renderer
    const canvas = document.getElementById('canvas');
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.physicallyCorrectLights = true;
    document.body.appendChild(renderer.domElement);

    //lights
    const ambient = new THREE.AmbientLight('white', 8);
    const light = new THREE.DirectionalLight('white', 8); // TODO
    light.position.set(0, 0, 10);

    //cube function
    const createCube = (color) => {
      const geometry = new THREE.BoxGeometry(1, 1, 1);

      //Materials take a specification object
      const spec = {
        color,
      };

      // create a default (white) Basic material
      const material = new THREE.MeshStandardMaterial(spec);

      // create a Mesh containing the geometry and material
      const cube = new THREE.Mesh(geometry, material);
      // cube.position.set(0, 0, 0);
      // cube.rotation.set(1, -0.1, 0.8);

      return cube;
    };

    const cube = createCube('purple');
    const cube2 = createCube('blue');
    const cube3 = createCube('red');
    const cube4 = createCube('purple');
    const cube5 = createCube('blue');
    const cube6 = createCube('red');
    const cube9 = createCube('purple');
    const cube7 = createCube('blue');
    const cube8 = createCube('red');

    const cube10 = createCube('purple');
    const cube11 = createCube('blue');
    const cube12 = createCube('red');
    const cube13 = createCube('purple');
    const cube14 = createCube('blue');
    const cube15 = createCube('red');
    const cube16 = createCube('purple');
    const cube17 = createCube('blue');
    const cube18 = createCube('red');

    const cube19 = createCube('purple');
    const cube20 = createCube('blue');
    const cube21 = createCube('red');
    const cube22 = createCube('purple');
    const cube23 = createCube('blue');
    const cube24 = createCube('red');
    const cube25 = createCube('purple');
    const cube26 = createCube('blue');
    const cube27 = createCube('red');

    cube2.position.set(1, 0, 0);
    cube3.position.set(-1, 0, 0);
    cube4.position.set(0, 0, 0);
    cube.position.set(1, 1, 0);
    cube5.position.set(-1, 1, 0);
    cube6.position.set(0, 1, 0);
    cube9.position.set(1, -1, 0);
    cube7.position.set(-1, -1, 0);
    cube8.position.set(0, -1, 0);

    cube10.position.set(1, 0, -1);
    cube11.position.set(-1, 0, -1);
    cube12.position.set(0, 0, -1);
    cube13.position.set(1, 1, -1);
    cube14.position.set(-1, 1, -1);
    cube15.position.set(0, 1, -1);
    cube16.position.set(1, -1, -1);
    cube17.position.set(-1, -1, -1);
    cube18.position.set(0, -1, -1);
    cube19.position.set(1, 0, -2);
    cube20.position.set(-1, 0, -2);
    cube21.position.set(0, 0, -2);
    cube22.position.set(1, 1, -2);
    cube23.position.set(-1, 1, -2);
    cube24.position.set(0, 1, -2);
    cube25.position.set(1, -1, -2);
    cube26.position.set(-1, -1, -2);
    cube27.position.set(0, -1, -2);

    // scene add
    scene.add(
      cube,
      cube2,
      cube3,
      light,
      ambient,
      cube4,
      cube5,
      cube6,
      cube7,
      cube8,
      cube9,
      cube10,
      cube11,
      cube12,
      cube13,
      cube14,
      cube15,
      cube16,
      cube17,
      cube18,
      cube19,
      cube20,
      cube21,
      cube22,
      cube23,
      cube24,
      cube25,
      cube26,
      cube27
    );

    // Orbit
    const controls = new OrbitControls(camera, canvas);
    controls.enableZoom = false;
    controls.enablePan = false;

    // resize
    const resizer = new Resizer(canvas, camera, renderer);
    resizer.onResize = () => {
      animate();
    };

    // clicking
    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2();

    function onPointerMove(event) {
      // calculate pointer position in normalized device coordinates
      // (-1 to +1) for both components
      camera.updateProjectionMatrix();
      controls.update();

      pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
      pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
      //console.log('working');
    }

    function hover() {
      raycaster.setFromCamera(pointer, camera);
      const intersects = raycaster.intersectObjects(scene.children);

      // for (let i = 0; i < intersects.length; i++) {
      //   intersects[i].object.material.color.set(0xff0000);
      // }
      //console.log('clicked');

      function pop() {
        setOpen((o) => !o);
      }

      if (intersects.length > 0) {
        if (intersects[0].object) {
          console.log(intersects[0].object);
        }
      }
    }

    // rendering loop
    const animate = () => {
      controls.update();
      renderer.render(scene, camera);
      window.addEventListener('pointermove', onPointerMove);
      window.addEventListener('click', hover);
      window.requestAnimationFrame(animate);
      //   window.addEventListener('resize', () => {
      //     // set the size again if a resize occurs
      //     setSize(canvas, camera, renderer);
      //   });
    };
    animate();

    return () => {
        // Anything in here is fired on component unmount.
        document.body.removeChild(renderer.domElement);
    }

  }, []);

  const containerStyle = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'skyblue',
  };

  return (
    <div>
      <canvas id='canvas'/>
    </div>
  );
}

export default Main;
