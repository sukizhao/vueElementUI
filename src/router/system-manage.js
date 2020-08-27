// 重庆 事项目录
// import Main from '@/components/main'
export const systemMgt = {
        path: '/system_role_mgt',
        name: 'system_role_mgt',
        meta: {
            title: '机构角色管理'
        },
        component: Main,
        children: [{
                path: 'regional_mgt',
                name: 'regional_mgt',
                meta: {
                    title: '区域管理',
                    access: ['regional_mgt'] //设置access与name名称相同
                },
                component: () =>
                    import('@/view/org-role-manager/region-manager')
            },
        ]
}