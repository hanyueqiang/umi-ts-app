export default [
  {
    title: '首页',
    link: '/dashboard',
    key: 'dashboard',
    icon: '',
    children: [],
  },
  {
    title: '列表页',
    link: '/list',
    key: 'list',
    icon: '',
    children: [
      {
        title: '查询列表',
        link: '/list/queryTable',
        key: 'queryTable',
        icon: '',
        children: [],
      },
    ],
  },
  {
    title: '个人页',
    link: '/account',
    key: 'account',
    icon: '',
    children: [
      {
        title: '个人页',
        link: '/account/settings',
        key: 'settings',
        icon: '',
        children: [],
      },
    ],
  },
];
