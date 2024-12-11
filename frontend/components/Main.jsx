import { render } from '@react-three/fiber';
import { useEffect } from 'react';
import React from 'react';
import { redirect } from 'react-router-dom';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { setSize, Resizer } from '../systems/resizer';

function Main() {
  useEffect(() => {
    // scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color('skyblue');

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

    cube2.position.set(1, 0, 0);
    cube3.position.set(-1, 0, 0);
    cube4.position.set(0, 1, 0);
    cube5.position.set(0, 1, 1);

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
      cube9
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
  }, []);

  const containerStyle = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'skyblue',
  };

  return (
    <div>
      <canvas id='canvas' />
    </div>
  );
}

export default Main;
