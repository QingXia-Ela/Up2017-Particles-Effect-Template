import * as React from 'react'
import Styles from './index.module.scss'

import ParticleSystem from '@/THREE'
import { useEffect, useRef } from 'react'
import AtmosphereParticle from '@/THREE/atmosphere'
import { ParticleModelProps } from '@/declare/THREE'
import Tween from '@tweenjs/tween.js'

function IndexPage() {
  const wrapper = useRef<HTMLDivElement | null>(null)
  let MainParticle: ParticleSystem | null = null

  let TurnBasicNum = { firefly: 0.002 }
  const al = 1500

  const tween2 = new Tween.Tween(TurnBasicNum).easing(Tween.Easing.Exponential.In)
  const tween1 = new Tween.Tween(TurnBasicNum).easing(Tween.Easing.Exponential.In)

  const Atomsphere1 = new AtmosphereParticle({
    longestDistance: al, particleSum: 500,
    renderUpdate: (Point) => {
      Point!.rotation.x -= TurnBasicNum.firefly
    },
    callback: (Point) => {
      if (Point) {
        Point.position.z = -1 * al
      }
    },
    onChangeModel: () => {
      tween2.stop()
      tween1.stop().to({ firefly: 0.04 }, 1500).chain(tween2)
      tween2.to({ firefly: 0.002 }, 1500)
      tween1.start()
    }
  })
  const Atomsphere2 = new AtmosphereParticle({
    longestDistance: al, particleSum: 500,
    renderUpdate: (Point) => {
      Point!.rotation.y += TurnBasicNum.firefly
    },
    callback: (Point) => {
      if (Point) {
        Point.position.y = -0.2 * al
        Point.position.z = -1 * al
      }
    }
  })
  const Atomsphere3 = new AtmosphereParticle({
    longestDistance: al, particleSum: 500,
    renderUpdate: (Point) => {
      Point!.rotation.z += TurnBasicNum.firefly / 2
    },
    callback: (Point) => {
      if (Point) {
        Point.position.z = -1.2 * al
      }
    }
  })

  const scaleNum = 500
  const Models: ParticleModelProps[] = [
    {
      name: 'cube',
      path: new URL('../../THREE/models/examples/cube.obj', import.meta.url).href,
      onLoadComplete(Geometry, PointGeometry) {
        Geometry.scale(scaleNum, scaleNum, scaleNum)
      },
    },
    {
      name: 'ball',
      path: new URL('../../THREE/models/examples/ball.obj', import.meta.url).href,
      onLoadComplete(Geometry, PointGeometry) {
        Geometry.scale(scaleNum, scaleNum, scaleNum)
        Geometry.translate(100, 100, 0)
      },
    },
    {
      name: 'AngularSphere',
      path: new URL('../../THREE/models/examples/AngularSphere.obj', import.meta.url).href,
      onLoadComplete(Geometry, PointGeometry) {
        Geometry.scale(scaleNum, scaleNum, scaleNum)
      },
    },
    {
      name: 'cone',
      path: new URL('../../THREE/models/examples/cone.obj', import.meta.url).href,
      onLoadComplete(Geometry, PointGeometry) {
        Geometry.scale(scaleNum, scaleNum, scaleNum)
      },
    }
  ]
  // @ts-ignore
  window.changeModel = (name: string) => {
    if (MainParticle) {
      MainParticle.ChangeModel(name)
    }
  }

  useEffect(() => {
    if ((MainParticle == null) && wrapper.current != null) {
      MainParticle = new ParticleSystem({
        CanvasWrapper: wrapper.current,
        Models,
        addons: [Atomsphere1, Atomsphere2, Atomsphere3],
        onModelsFinishedLoad: (point) => {
          point.rotation.y = -3.14 * 0.4
          new Tween.Tween(point.rotation).to({ y: 0 }, 5000).easing(Tween.Easing.Quintic.Out).start()
          setTimeout(() => {
            MainParticle?.ChangeModel('ball')
          }, 2500);
          MainParticle?.ListenMouseMove()
        }
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
