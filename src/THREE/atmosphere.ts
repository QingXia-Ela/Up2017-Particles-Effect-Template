import * as THREE from 'three'
import g from '@/assets/images/gradient.png'
import { addonsBasic } from '../declare/THREE/addons'

export interface AtmosphereParticleProps {
  longestDistance: number
  particleSum: number
  renderUpdate?: (Point: THREE.Points) => void
  callback?: (Point: THREE.Points) => void
  onChangeModel?: (Point: THREE.Points) => void
}

const loader = new THREE.TextureLoader()
loader.crossOrigin = ''

const n = new THREE.PointsMaterial({
  size: 7,
  map: loader.load(g),
  blending: THREE.AdditiveBlending,
  depthWrite: false,
  transparent: true
})

function getRangeRandom(e: number, t: number) {
  return Math.random() * (t - e) + e
}

class AtmosphereParticle extends addonsBasic {
  private readonly longestDistance: number
  private readonly particleSum: number
  private readonly renderUpdate?: (Point: THREE.Points) => void
  private readonly onChangeModel?: (Point: THREE.Points) => void
  private readonly callback?: (Point: THREE.Points) => void
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
    options.callback?.call(this, this.Geometry)
  }

  update = () => {
    this.renderUpdate?.call(this, this.Geometry!)
  }

  ChangeModel = () => {
    this.onChangeModel?.call(this, this.Geometry!)
  }
}

export default AtmosphereParticle
