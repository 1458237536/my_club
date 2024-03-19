export const apiName = {
  /**
   * 查询分类
   */
  queryPrimaryCategory: '/category/queryPrimaryCategory',
  /**
   * 获取二级和三级标签
   */
  getCategoryLabelInfo: '/admin/question/category/getCategoryLabelInfo',

  /**
   * 查询大类下分类
   */
  queryCategoryByPrimary: '/category/queryCategoryByPrimary',

  // 根据分类查标签
  queryLabelByCategoryId: '/label/queryLabelByCategoryId',

  // 查询分类及标签
  queryCategoryAndLabel: '/category/queryCategoryAndLabel'
}

/**
 * 大分类中的背景图颜色
 */
export const categoryBackColor = {
  0: '#13B4FF',
  1: '#1DD39A',
  2: '#9254DE',
  3: '#EB3F31',
  4: '#3776AB',
  5: '#06599F',
  6: '#DF59D6',
  7: '#5C5BE0',
  8: '#DF4A77',
  9: '#EC804C',
  10: '#EC804C',
  11: '#FFA940',
  12: '#29C4D2',
  13: '#343F71',
  14: '#EC513A',
  15: '#6FB333',
  16: '#F6683E',
  17: '#646AB2',
  18: '#1AAED8',
  19: '#00B973',
  20: '#3A49AC',
}

export const mockCategoryList = [
  {
    title: '后端',
    total: 3284,
    id: 1
  },
  {
    title: '前端',
    total: 1832,
    id: 2
  },
  {
    title: '数据库',
    total: 263,
    id: 3
  },
  {
    title: 'Java',
    total: 222,
    id: 4
  },
  {
    title: 'Python',
    total: 192,
    id: 5
  },
  {
    title: 'C++',
    total: 45,
    id: 6
  },
  {
    title: '并行计算',
    total: 80,
    id: 7
  },
  {
    title: '面向对象',
    total: 90,
    id: 8
  },
  {
    title: '系统设计',
    total: 25,
    id: 9
  },
  {
    title: '大数据',
    total: 7,
    id: 10
  },
  {
    title: 'Django',
    total: 121,
    id: 11
  },
  {
    title: '人工智能',
    total: 68,
    id: 12
  },
  {
    title: 'Linux 命令行',
    total: 69,
    id: 13
  },
  {
    title: 'Git 命令行',
    total: 14,
    id: 14
  },
  {
    title: 'Spring Boot',
    total: 120,
    id: 15
  },
  {
    title: 'HTNL & CSS',
    total: 95,
    id: 16
  },
  {
    title: 'PHP',
    total: 25,
    id: 17
  },
  {
    title: 'Golang',
    total: 63,
    id: 18
  },
  {
    title: 'Vue',
    total: 56,
    id: 19
  },
  {
    title: 'C 语言',
    total: 31,
    id: 20
  },
]
