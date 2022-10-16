import * as React from 'react'
import Styles from './index.module.scss'

import ParticleSystem from '@/THREE'
import { useEffect, useRef } from 'react'
import AtmosphereParticle from '@/THREE/atmosphere'

function IndexPage() {
  const wrapper = useRef<HTMLDivElement | null>(null)
  let MainParticle: ParticleSystem | null = null
  const TurnBasicNum = 0.002

  const al = 1500
  const Atomsphere1 = new AtmosphereParticle({
    longestDistance: al, particleSum: 500,
    renderUpdate: (Point) => {
      Point!.rotation.x -= TurnBasicNum
    },
    callback: (Point) => {
      if (Point) {
        Point.position.x = -0.1 * al
        Point.position.z = -1.1 * al
      }
    }
  })
  const Atomsphere2 = new AtmosphereParticle({
    longestDistance: al, particleSum: 500,
    renderUpdate: (Point) => {
      Point!.rotation.y += TurnBasicNum
    },
    callback: (Point) => {
      if (Point) {
        Point.position.y = -0.2 * al
        Point.position.z = -0.8 * al
      }
    }
  })
  const Atomsphere3 = new AtmosphereParticle({
    longestDistance: al, particleSum: 500,
    renderUpdate: (Point) => {
      Point!.rotation.z += TurnBasicNum / 2
    },
    callback: (Point) => {
      if (Point) {
        Point.position.z = -1.2 * al
      }
    }
  })

  useEffect(() => {
    if ((MainParticle == null) && wrapper.current != null) {
      MainParticle = new ParticleSystem({
        CanvasWrapper: wrapper.current,
        addons: [Atomsphere1, Atomsphere2, Atomsphere3]
      })
    }
  })

  return (
    <div className={Styles.index_page}>
      <div className={Styles.canvas_wrapper} ref={wrapper}></div>
    </div>
  )
}

export default IndexPage
