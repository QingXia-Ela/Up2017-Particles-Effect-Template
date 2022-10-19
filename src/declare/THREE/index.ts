import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { MMDLoader } from 'three/examples/jsm/loaders/MMDLoader'
import { PCDLoader } from 'three/examples/jsm/loaders/PCDLoader'
import { PDBLoader } from 'three/examples/jsm/loaders/PDBLoader'
import { PRWMLoader } from 'three/examples/jsm/loaders/PRWMLoader'
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader'

export type ALL_LOADER = OBJLoader | FBXLoader | DRACOLoader | GLTFLoader | MMDLoader | PCDLoader | PDBLoader | PRWMLoader | SVGLoader

export interface CustomLoader {
  /** 加载器实例 */
  loaderInstance: ALL_LOADER
  /**
   * 完成加载的回调函数
   *
   * 接受的参数是你指定加载器加载后的结果
   *
   * 你需要返回一个 `BufferGeometry` 对象，他记录着你的模型的所有顶点信息
   */
  load: (...args: any) => THREE.BufferGeometry
}

export interface ParticleModelProps {
  /** 模型名字，请确保是唯一名字 */
  name: string
  /**
   * 模型路径，相对当前文件路径引入
   *
   * 可以查看这篇指南引入：https://vitejs.cn/vite3-cn/guide/assets.html#new-url-url-import-meta-url
   */
  path: string
  /** 粒子的材质，不传入则使用内置的默认材质 */
  material?: THREE.PointsMaterial
  /** 模型加载完成后的回调 */
  onLoadComplete?: (Geometry: THREE.BufferGeometry, PointGeometry: THREE.Points) => void

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
}
