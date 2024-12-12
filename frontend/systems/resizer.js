export const setSize = (canvas, camera, renderer) => {
    camera.aspect = canvas.clientWidth / canvas.clientHeight;
    camera.updateProjectionMatrix();
  
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
  };
  
  class Resizer {
    constructor(canvas, camera, renderer) {
      // Set the camera's aspect ratio
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
  
      camera.updateProjectionMatrix();
  
      // update the size of the renderer AND the canvas
      renderer.setSize(canvas.clientWidth, canvas.clientHeight);
  
      // set the pixel ratio (for mobile devices)
      renderer.setPixelRatio(window.devicePixelRatio);
      setSize(canvas, camera, renderer);

    }
    onResize() {};
  }
  
  export { Resizer };
  