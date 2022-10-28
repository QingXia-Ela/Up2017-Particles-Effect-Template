/**
 * 数组粒子去重方法
 * @param arr 待去重的数组
 * @returns {Float32Array}
 */
export default function VerticesDuplicateRemove(arr: Float32Array) {
  const set = new Set<string>(); let t = []
  for (let i = 0; i < arr.length; i++) {
    t.push(arr[i])
    if (i % 3 === 2) {
      set.add(t.join(','))
      t = []
    }
  }
  const res: number[] = []
  set.forEach((val) => {
    res.push(...val.split(',').map((val) => Number(val)))
  })

  return new Float32Array(res)
}
