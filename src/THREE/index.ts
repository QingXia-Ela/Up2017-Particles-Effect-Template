import * as THREE from 'three'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass'
import { BloomPass } from 'three/examples/jsm/postprocessing/BloomPass'
import { FilmPass } from 'three/examples/jsm/postprocessing/FilmPass'
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass'
import { FocusShader } from 'three/examples/jsm/shaders/FocusShader'

import Tween from '@tweenjs/tween.js'
import type { Tween as TweenProps, Group as TweenGroup } from '@tweenjs/tween.js'

import Stats from 'three/examples/jsm/libs/stats.module.js'
import { throttle } from 'lodash'

import g from '@/assets/images/gradient.png'
import { ParticleModelProps } from '@/declare/THREE'

function getRangeRandom(e: number, t: number) {
  return Math.random() * (t - e) + e
}

type THREE_POINT = THREE.Points<THREE.BufferGeometry, THREE.PointsMaterial>
interface TWEEN_POINT {
  x: number
  y: number
  z: number
  tweenctx?: TweenProps<{ x: number, y: number, z: number }>
}

class ParticleSystem {
  private readonly CanvasWrapper: HTMLDivElement
  private readonly modelList: Map<string, THREE_POINT>
  private _LOAD_COUNT_: number
  private readonly ModelPointer: number
  private maxParticlesCount: number
  private WIDTH: number
  private HEIGHT: number
  private scene?: THREE.Scene
  private camera?: THREE.PerspectiveCamera
  private renderer?: THREE.WebGLRenderer
  private readonly orbitControls?: OrbitControls
  private stats?: Stats
  private composer?: EffectComposer
  private PointMaterial?: THREE.PointsMaterial
  /** 表演粒子，即用于呈现模型的粒子载体对象 */
  public AnimateEffectParticle?: THREE.Points<THREE.BufferGeometry, THREE.PointsMaterial>
  private readonly AnimateDuration: number
  private readonly AnimateDelayDuration: number
  private mouseV: number
  private mouseK: number
  private hadListenMouseMove?: boolean
  private MainParticleGroup?: TweenGroup
  private readonly defaultLoader: OBJLoader
  private readonly ParticleAnimeMap: TWEEN_POINT[]
  /** 模型数组 */
  public Models: ParticleModelProps[]
  /** 额外插件的数组 */
  public addons?: any[]
  // 函数相关
  /** 当所有模型加载完成是进行调用 */
  private readonly onModelsFinishedLoad?: (preformPoint: THREE_POINT, scene: THREE.Scene) => void
  /** 对象内置的更新函数，内部使用 `requestAnimationFrame`，每渲染新的一帧时进行调用 */
  public onRendering?: (t: number) => void

  // 新编写的物体添加核心
  constructor(options: {
    CanvasWrapper: HTMLDivElement
    Models: ParticleModelProps[]
    /** addons，他应该是一个继承了 `addonsBasic` 类的对象 */
    addons?: any[]
    AnimateDuration?: number
    AnimateDelayDuration?: number
    onModelsFinishedLoad?: (preformPoint: THREE_POINT, scene: THREE.Scene) => void
  }) {
    const { AnimateDuration, AnimateDelayDuration, onModelsFinishedLoad } = options
    this.CanvasWrapper = options.CanvasWrapper
    this.addons = (options.addons != null) ? options.addons : []
    this.Models = [...options.Models]
    this.AnimateDuration = typeof AnimateDuration === 'number' ? AnimateDuration : 1500
    this.AnimateDelayDuration = typeof AnimateDelayDuration === 'number' ? AnimateDelayDuration : 1500
    this.onModelsFinishedLoad = onModelsFinishedLoad
    this.defaultLoader = new OBJLoader()
    /** 粒子Map */
    this.ParticleAnimeMap = []
    /* 宽高 */
    this.HEIGHT = window.innerHeight
    this.WIDTH = window.innerWidth
    /** 模型列表  */
    this.modelList = new Map()
    /** 已加载的模型数量统计 */
    this._LOAD_COUNT_ = 0
    /** 模型指针 */
    this.ModelPointer = 0
    /** 载入模型中粒子的最大数量 */
    this.maxParticlesCount = 0
    // 创建场景
    this.createScene()
    // 性能监控插件
    this.initStats()
    // 载入模型
    this._addModels()
    // 效果器
    this.createEffect()
    // 轨道控制插件（鼠标拖拽视角、缩放等）
    this.orbitControls = new OrbitControls(
      this.camera!,
      this.renderer!.domElement
    )
    this.mouseK = 0
    this.mouseV = 0
    // 循环更新渲染场景
    this.update(0)
  }

  private createScene() {
    // 创建场景
    this.scene = new THREE.Scene()
    // 在场景中添加雾的效果，参数分别代表‘雾的颜色’、‘开始雾化的视线距离’、刚好雾化至看不见的视线距离’
    this.scene.fog = new THREE.FogExp2(328972, 5e-4)
    // 创建相机
    const fieldOfView = 100
    const aspectRatio = this.WIDTH / this.HEIGHT
    const nearPlane = 1
    const farPlane = 5e4

    this.camera = new THREE.PerspectiveCamera(
      fieldOfView,
      aspectRatio,
      nearPlane,
      farPlane
    )

    // 设置相机的位置
    this.camera.position.set(0, 0, 1e3)
    this.camera.lookAt(new THREE.Vector3(0, 0, 0))

    // 坐标轴辅助器
    const axesHelper = new THREE.AxesHelper(500)
    this.scene.add(axesHelper)
    // addons 添加
    if (this.addons != null) {
      this.addons.forEach((val) => {
        this.scene?.add(val.Geometry)
      })
    }
    // 创建渲染器
    this.renderer = new THREE.WebGLRenderer({
      // 在 css 中设置背景色透明显示渐变色
      alpha: true
      // 开启抗锯齿
      // antialias: true,
    })
    // 自动清理，解决 bloomPass 效果器冲突
    this.renderer.autoClear = false
    // 渲染背景颜色同雾化的颜色
    this.renderer.setClearColor(this.scene.fog.color)
    // 定义渲染器的尺寸；在这里它会填满整个屏幕
    this.renderer.setSize(this.WIDTH, this.HEIGHT)

    // 打开渲染器的阴影地图
    this.renderer.shadowMap.enabled = true
    // this.renderer.shadowMapSoft = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap
    // 在 HTML 创建的容器中添加渲染器的 DOM 元素
    this.CanvasWrapper.appendChild(this.renderer.domElement)
    // 监听屏幕，缩放屏幕更新相机和渲染器的尺寸
    window.addEventListener(
      'resize',
      this.handleWindowResize,
      false
    )
  }

  // 窗口大小变动时调用
  private readonly handleWindowResize = () => {
    // 更新渲染器的高度和宽度以及相机的纵横比
    this.HEIGHT = window.innerHeight
    this.WIDTH = window.innerWidth
    this.renderer?.setSize(this.WIDTH, this.HEIGHT)
    this.composer?.reset()
    if (this.camera != null) {
      this.camera.aspect = this.WIDTH / this.HEIGHT
      this.camera.updateProjectionMatrix()
    }
  }

  // 性能监控
  private initStats() {
    this.stats = Stats()
    if (this.stats != null) {
      // 将性能监控屏区显示在左上角
      this.stats.domElement.style.position = 'absolute'
      this.stats.domElement.style.bottom = '0px'
      this.stats.domElement.style.top = '0px'
      this.stats.domElement.style.zIndex = '100'
      this.CanvasWrapper.appendChild(this.stats.domElement)
    }
  }

  // 效果器
  private createEffect() {
    this.composer = new EffectComposer(this.renderer!)
    const renderPass = new RenderPass(this.scene!, this.camera!)
    const bloomPass = new BloomPass(0.75)
    const filmPass = new FilmPass(0.5, 0.5, 1500, 0)
    const shaderPass = new ShaderPass(FocusShader)
    shaderPass.uniforms.screenWidth.value = window.innerWidth
    shaderPass.uniforms.screenHeight.value = window.innerHeight
    shaderPass.renderToScreen = true

    this.composer.addPass(renderPass)
    this.composer.addPass(bloomPass)
    this.composer.addPass(filmPass)
    this.composer.addPass(shaderPass)
  }

  // 添加模型
  private _addModels() {
    const TextureLoader = new THREE.TextureLoader()
    TextureLoader.crossOrigin = ''
    this.PointMaterial = new THREE.PointsMaterial({
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
    // 读取预置列表
    for (const i of this.Models) {
      let finalGeometry: THREE.BufferGeometry
      let finalVertices = new Float32Array([])

      const finishLoad = () => {
        // 材质选择
        const FinalPoints = new THREE.Points(finalGeometry, (i.material != null) ? i.material : this.PointMaterial)
        this.modelList.set(i.name, FinalPoints)
        // 回调
        i.onLoadComplete?.call(this, finalGeometry, FinalPoints)
        this._LOAD_COUNT_++
        // 所有模型加载完后触发播放事件
        if (this._LOAD_COUNT_ === this.Models.length) this._finishLoadModal()
      }

      if (i.loader != null) {
        const { loaderInstance, load } = i.loader
        loaderInstance.load(i.path, (args) => {
          finalGeometry = load(args)
          finishLoad()
        })
      } else {
        this.defaultLoader.load(i.path, (group) => {
          for (const j of group.children) {
            // @ts-expect-error 不知道是什么原因导致 ts 判断出错
            const arr = j.geometry.attributes.position.array
            finalVertices = new Float32Array([...finalVertices, ...arr])
          }
          finalGeometry = new THREE.BufferGeometry()
          finalGeometry.index = new THREE.BufferAttribute(finalVertices, 9)
          finalGeometry.setAttribute('position', new THREE.BufferAttribute(finalVertices, 3))
          finishLoad()
        })
      }
    }
  }

  // 完成模型加载
  private _finishLoadModal() {
    // 获得最大的粒子数量
    let maxParticlesCount = 0

    this.modelList.forEach(
      (val) => {
        maxParticlesCount = Math.max(maxParticlesCount, val.geometry.attributes.position.count)
      })

    this.maxParticlesCount = maxParticlesCount
    // 基于最大点构建一个动画载体
    const vertices = []
    const randMaxLength = 1500
    this.MainParticleGroup = new Tween.Group()
    for (let i = 0; i < maxParticlesCount; i++) {
      const x = getRangeRandom(-1 * randMaxLength, randMaxLength)
      const y = getRangeRandom(-1 * randMaxLength, randMaxLength)
      const z = getRangeRandom(-1 * randMaxLength, randMaxLength)
      vertices.push(x, y, z)

      const p: TWEEN_POINT = {
        x, y, z
      }
      p.tweenctx = new Tween.Tween(p, this.MainParticleGroup).easing(Tween.Easing.Exponential.In)
        // 处理内部私有变量
        .onStop((o) => {
          // @ts-expect-error
          o.tweenctx!._valuesStart.x = o.x
          // @ts-expect-error
          o.tweenctx!._valuesStart.y = o.y
          // @ts-expect-error
          o.tweenctx!._valuesStart.z = o.z
        }).onComplete((o) => {
          // @ts-expect-error
          o.tweenctx!._valuesStart.x = o.x
          // @ts-expect-error
          o.tweenctx!._valuesStart.y = o.y
          // @ts-expect-error
          o.tweenctx!._valuesStart.z = o.z
        })
      this.ParticleAnimeMap[i] = p
    }
    const AnimateEffectGeometry = new THREE.BufferGeometry()
    AnimateEffectGeometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3, false))
    this.AnimateEffectParticle = new THREE.Points(AnimateEffectGeometry, this.PointMaterial)
    this.scene?.add(this.AnimateEffectParticle)

    // 开始监听鼠标移动事件
    // 钩子
    this.onModelsFinishedLoad?.call(this, this.AnimateEffectParticle, this.scene!)
  }

  /**
   * 修改模型
   * @param {string} name 模型名字
   * @param {number?} time 动画时间长度，默认 `1500ms`
   */
  ChangeModel(name: string, time: number = 1500) {
    const item = this.modelList.get(name)
    if (item == null) {
      console.warn('未找到指定名字的模型，改变操作已终止！传入的名字：' + (name).toString())
      return
    }
    const targetModel = item.geometry.getAttribute('position')
    // !使用断言
    const sourceModel = this.AnimateEffectParticle!.geometry.getAttribute('position')
    // 停止当前所有动画
    for (let i = 0; i < this.maxParticlesCount; i++) {
      const p = this.ParticleAnimeMap[i]?.tweenctx
      const cur = i % targetModel.count
      p?.stop().to(
        {
          x: targetModel.array[cur * 3],
          y: targetModel.array[cur * 3 + 1],
          z: targetModel.array[cur * 3 + 2]
        },
        time
      ).delay(time * Math.random()).onUpdate((o) => {
        sourceModel.setXYZ(i, o.x, o.y, o.z)
        sourceModel.needsUpdate = true
      }).start()
    }
    // 触发 addons 的钩子
    this.addons?.forEach((val) => {
      val.ChangeModel?.call(this)
    })
  }

  /**
   * 开始监听鼠标移动的钩子
   *
   * 一般在入场动画结束后调用
   */
  ListenMouseMove() {
    if (this.hadListenMouseMove !== true) {
      window.addEventListener('mousemove', this.rotateScene)
      this.hadListenMouseMove = true
    }
  }

  // 监听鼠标移动旋转场景
  private readonly rotateScene = throttle((e: MouseEvent) => {
    this.mouseV = 3e-4 * (e.clientX - this.WIDTH / 2)
    this.mouseK = 1e-4 * (e.clientY - this.HEIGHT / 2)
  }, 100)

  // 更新场景旋转
  private _updateRotation() {
    if (this.scene != null) {
      this.scene.rotation.y += (this.mouseV - this.scene.rotation.y) / 50
      this.scene.rotation.x += (this.mouseK - this.scene.rotation.x) / 50
    }
  }

  // 循环更新渲染
  private update(t: number) {
    // 动画插件
    Tween.update()
    // 更新自己的动画组
    this.MainParticleGroup?.update()
    // 外置的渲染函数
    this.onRendering?.call(this, t)
    // 性能监测插件
    this.stats?.update()
    // 场景旋转检测
    this._updateRotation()
    // addons 执行更新
    this.addons?.forEach((val) => {
      val.update()
    })
    // 渲染器执行渲染
    // this.renderer.render(this.scene, this.camera);
    // 效果器执行渲染，如果不需要效果器请使用上方的渲染模式
    this.composer?.render()
    // 循环调用
    requestAnimationFrame((t) => {
      this.update(t)
    })
  }
}

export default ParticleSystem
