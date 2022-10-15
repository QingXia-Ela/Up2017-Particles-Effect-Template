import * as React from 'react'
import Styles from './index.module.scss'

import ParticleSystem from '@/THREE'
import { useEffect, useRef } from 'react'

function IndexPage() {
  const wrapper = useRef<HTMLDivElement | null>(null)
  let MainParticle: ParticleSystem | null = null
  useEffect(() => {
    if ((MainParticle == null) && wrapper.current != null) {
      MainParticle = new ParticleSystem(wrapper.current)
    }
  })

  return (
    <div className={Styles.index_page}>
      <div className={Styles.canvas_wrapper} ref={wrapper}></div>
    </div>
  )
}

export default IndexPage
