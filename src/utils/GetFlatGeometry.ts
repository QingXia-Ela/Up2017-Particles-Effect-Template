import * as THREE from 'three'
import g from '@/assets/images/gradient.png'

export default function GetFlatGeometry() {
  const AMOUNTX = 50
  const AMOUNTY = 50
  const SEPARATION = 100
  const numParticles = AMOUNTX * AMOUNTY
  const vertices = new Float32Array(numParticles * 3)
  const scales = new Float32Array(numParticles)

  let i = 0
  const TextureLoader = new THREE.TextureLoader()
  const material = new THREE.PointsMaterial({
    // 粒子大小
    size: 5,
    // false:粒子尺寸相同 ;true：取决于摄像头远近
    sizeAttenuation: true,
    transparent: true,
    opacity: 1,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    map: TextureLoader.load(g)
  })

  for (let ix = 0; ix < AMOUNTX; ix++) {
    for (let iy = 0; iy < AMOUNTY; iy++) {
      vertices[i] = ix * SEPARATION - ((AMOUNTX * SEPARATION) / 2) // x
      vertices[i + 1] = -300 // y
      vertices[i + 2] = iy * SEPARATION - ((AMOUNTY * SEPARATION) / 2) // z
      i += 3
    }
  }

  const geometry = new THREE.BufferGeometry()
  geometry.setAttribute(
    'position',
    new THREE.Float32BufferAttribute(vertices, 3)
  )
  geometry.setAttribute('scale', new THREE.BufferAttribute(scales, 1))
  const points = new THREE.Points(geometry, material)
  const wave = points.geometry
  // console.log(wave);
  wave.attributes.position.needsUpdate = true
  // wave.translate(0, -500, 0)
  // wave.rotateY(-30)
  return wave
}
