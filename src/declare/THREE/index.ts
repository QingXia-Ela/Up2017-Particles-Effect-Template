import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { MMDLoader } from 'three/examples/jsm/loaders/MMDLoader'
import { PCDLoader } from 'three/examples/jsm/loaders/PCDLoader'
import { PDBLoader } from 'three/examples/jsm/loaders/PDBLoader'
import { PRWMLoader } from 'three/examples/jsm/loaders/PRWMLoader'
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader'

import type { Tween as TweenProps } from '@tweenjs/tween.js'

export type ALL_LOADER = OBJLoader | FBXLoader | DRACOLoader | GLTFLoader | MMDLoader | PCDLoader | PDBLoader | PRWMLoader | SVGLoader

export interface TWEEN_POINT {
  x: number
  y: number
  z: number
  /** tween 实例 */
  tweenctx?: TweenProps<TWEEN_POINT>
  /** 粒子是否处于模型切换中的状态 */
  isPlaying?: boolean
}

export interface CustomLoader {
  /** 加载器实例 */
  loaderInstance: ALL_LOADER
  /**
   * 完成加载的回调函数
   *
   * 接受的参数是你指定加载器加载后的结果，比如 obj 和 fbx 就是 `Group` 实例，gltf 就是 `GLTF` 实例
   *
   * 你需要返回一个 `BufferGeometry` 对象，他记录着你想展示的模型的所有顶点信息
   */
  load: (...args: any) => THREE.BufferGeometry
}

export interface ParticleModelProps {
  /** 模型名字，请确保是唯一名字 */
  name: string
  /**
   * 自定义 Geometry，传入后则会取消从指定路径加载的功能
   *
   * **通过这种方式设置的几何体不会通过内置的粒子去重方法进行处理**，可以引入 `src/utils` 下的去重方法自行处理
   */
  geometry?: THREE.BufferGeometry
  /**
   * 模型路径，相对当前文件路径引入，如果传入了自定义 geometry 可以省略
   *
   * 可以查看这篇指南引入：https://vitejs.cn/vite3-cn/guide/assets.html#new-url-url-import-meta-url
   */
  path?: string
  /**
   * 自定义加载器
   * @example
   * loader: {
   *   loaderInstance: new OBJLoader(),
   *   // OBJLoader 读取出的模型是 group
   *   load: (group) => {
   *      let finalVertices = new Float32Array([]), finalGeometry = new THREE.BufferGeometry()
   *      // 对 group 提取其坐标点
   *      for (const i of group.children) {
   *        const arr = i.geometry.attributes.position.array
   *        finalVertices = new Float32Array([...finalVertices, ...arr])
   *      }
   *      // 设置属性
   *      finalGeometry.setAttribute('position', new THREE.BufferAttribute(finalVertices, 3))
   *      // 返回结果
   *      return finalGeometry
   *   }
   * }
   */
  loader?: CustomLoader
  /**
   * 是否需要进行粒子去重
   *
   * 通过加载器加载的几何体对于每一个面都进行了一次粒子的单独计算，这样会造成大量粒子的位置重叠，增加不必要的性能开销与影响体验，因此该功能会默认开启
   *
   * 本质上是对 `BufferGeometry` 内的数组进行粒子位置去重，如果自定义模型展示不正常可以考虑关闭该功能
   * @default true
   */
  NeedRemoveDuplicateParticle?: boolean
  /**
   * 模型加载完成后的回调
   *
   * @param {THREE.BufferGeometry} Geometry 加载完成后的几何体
   *  */
  onLoadComplete?: (Geometry: THREE.BufferGeometry) => void
  /**
   * 开始进入该模型时触发的回调
   * @param {THREE.Points} PointGeometry 表演粒子实例
   *  */
  onEnterStart?: (PointGeometry: THREE.Points) => void
  /**
   * 模型切换完成时触发的回调
   *
   * **注意！**只有在模型彻底切换完成后才会触发，中途切换则不会触发该钩子
   *
   * @param {THREE.Points} PointGeometry 表演粒子实例
   */
  onEnterEnd?: (PointGeometry: THREE.Points) => void
  /**
   * 动画帧更新时的回调
   *
   * 执行区间：模型开始入场时 -> 切换到其他模型时的第一帧
   *
   * @param PerfromPoint 表演粒子实例，即渲染到屏幕上的实例
   * @param TweenList tween 实例列表
   * @param Geometry 原几何体
   * @returns 一个 `boolean` 值或不返回任何内容，如果返回 `true` 则会帮你自动更新表演粒子的几何体上的所有 `attribute` 属性，详情见：
   *  https://threejs.org/docs/index.html#api/zh/core/BufferAttribute.needsUpdate
   */
  onAnimationFrameUpdate?: (PerfromPoint: THREE.Points<THREE.BufferGeometry, THREE.PointsMaterial>, TweenList: TWEEN_POINT[], Geometry: THREE.BufferGeometry) => unknown
}
