import React, { Component } from "react";
import * as THREE from "three";
class App extends Component {
  componentDidMount() {
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );
    var geometry = new THREE.BoxGeometry(10, 3, 16, 100);
    const material = new THREE.MeshBasicMaterial({color: 0xFF6347, wireframe: true});
    const torus = new THREE.Mesh(geometry, material);

    scene.add(torus);

    function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    }

    animate();
   
  }
  render() {
    return (
      <div ref={ref => (this.mount = ref)} />
    )
  }
}

