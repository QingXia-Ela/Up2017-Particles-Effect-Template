export interface ParticleModelProps {
  /** 模型名字，请确保是唯一名字 */
  name: string
  /** 
   * 模型路径，相对当前文件路径引入
   * 
   * 可以查看这篇指南引入(**这种引入方式不支持服务端渲染**)：https://vitejs.cn/vite3-cn/guide/assets.html#new-url-url-import-meta-url
   */
  path: string
  /** 粒子的材质，不传入则使用内置的默认材质 */
  material?: THREE.PointsMaterial
  /** 模型加载完成后的回调 */
  onLoadComplete?: (Geometry: THREE.BufferGeometry, PointGeometry: THREE.Points) => void
}