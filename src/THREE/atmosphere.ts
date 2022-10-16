import * as THREE from 'three'
import g from '@/assets/images/gradient.png'
import { addonsBasic } from './addons'

export interface AtmosphereParticleProps {
  longestDistance: number
  particleSum: number
  renderUpdate?: (Point: THREE.Points) => void
  callback?: (Point: THREE.Points) => void
  onChangeModel?: (Point: THREE.Points) => void
}

const n = new THREE.PointsMaterial({
  size: 7,
  map: new THREE.TextureLoader().load(g),
  blending: THREE.AdditiveBlending,
  depthWrite: false,
  transparent: true,
});

function getRangeRandom(e: number, t: number) {
  return Math.random() * (t - e) + e
}

class AtmosphereParticle extends addonsBasic {
  private longestDistance: number
  private particleSum: number
  private renderUpdate?: (Point: THREE.Points) => void
  private onChangeModel?: (Point: THREE.Points) => void
  private callback?: (Point: THREE.Points) => void
  public Geometry?: THREE.Points

  constructor(options: AtmosphereParticleProps) {
    super()
    const { longestDistance, particleSum, renderUpdate, onChangeModel } = options
    this.longestDistance = longestDistance
    this.particleSum = particleSum
    this.renderUpdate = renderUpdate
    this.onChangeModel = onChangeModel

    const vertices = []
    for (let i = 0; i < this.particleSum; i++) {
      const x = getRangeRandom(-1 * longestDistance, longestDistance)
      const y = getRangeRandom(-1 * longestDistance, longestDistance)
      const z = getRangeRandom(-1 * longestDistance, longestDistance)
      vertices.push(x, y, z)
    }
    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3))
    this.Geometry = new THREE.Points(geometry, n)

    options.callback && options.callback(this.Geometry)
  }

  update = () => {
    this.renderUpdate && this.renderUpdate(this.Geometry!)
  }

  ChangeModel = () => {
    this.onChangeModel && this.onChangeModel(this.Geometry!)
  }
}

export default AtmosphereParticle
