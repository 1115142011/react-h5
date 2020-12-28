import React, { lazy } from 'react'

export interface RouteItem {
  path: string
  component: React.LazyExoticComponent<React.FC>
  title: string
  isLogin?: boolean
}

/*
 * isLogin default true
 */
const ROUTES: RouteItem[] = [
  {
    path: '/login',
    title: '登录',
    isLogin: false,
    component: lazy(() => import('../pages/login/index')),
  },
  {
    path: '/home',
    title: '首页',
    component: lazy(() => import('../pages/home/index')),
  },
  {
    path: '/user-center',
    title: '个人中心',
    component: lazy(() => import('src/pages/userInfo/userCenter')),
  },
  {
    path: '/user-register',
    title: '开通账户',
    component: lazy(() => import('src/pages/userInfo/registerAccount/registerForm')),
  },
  {
    path: '/user-bank-card',
    title: '我的银行卡',
    component: lazy(() => import('src/pages/userInfo/userBankCard')),
  },

  {
    path: '/add-bank-card',
    title: '绑定银行卡',
    component: lazy(() => import('src/pages/userInfo/bindBankCard/addBankCard')),
  },
  {
    path: '/setting-tel',
    title: '登录手机号变更',
    component: lazy(() => import('src/pages/userInfo/changePhoneNumber/settingTel')),
  },
  {
    path: '/protocol',
    title: '服务协议',
    isLogin: false,
    component: lazy(() => import('src/pages/protocol')),
  },
]
export default ROUTES
