<template>
<div>
  <h1>我是ElementUI组建</h1>
  <!-- <Card dis-hover>
    <Grid ref="grid" :data="config"></Grid>
  </Card> -->
</div>
</template>
<script>
 export default {
      name:'myElementUI',
      data () {  
      let self = this
        let table = {
          nowrap: true,
          actionColumn: 'Action',
          indexCol: true,
          indexColTitle: '序号',
          indexColWidth: 60,
          theme: 'simple',
          pagination: true,
          columns: [
            { name: 'systemCode', title: '系统编码' },
            { name: 'systemName', title: '系统名称' },
            {
              name: 'Action',
              title: '操作',
              render: function(h, param) {
                var forbid_text
                forbid_text = param.row.isEnable == '0' ? '启用' : '禁用'
                var buttons = []
                if(param.row.isEnable==0){
                    buttons.unshift(param.grid.defaultDeleteRender(h, param.row))
                }
              buttons.unshift(
                  h(
                    'Button',
                    {
                      props: {
                        type: 'info',
                        size: 'small'
                      },
                      style: {
                        margin: '0 5px'
                      },
                      on: {
                        click: function() {
                          console.log("888")
                        }
                      }
                    },
                    '详情'
                  )
                )
                return h('div', {}, buttons)
              }
            }
          ],
          query: {
            labelWidth:120,
            fields: [
              {
                name: 'systemCode',
                label: '系统编号'
              },
              {
                name: 'systemName',
                label: '系统名称'
              },
              {
                name: 'organizationName',
                label: '单位名称'
              },
              {
                name: 'contactMobile',
                label: '联系人手机号'
              },
              {
                name: 'isEnable',
                label: '状态',
                type: 'select',
                options: {
                  choices: [
                    {
                      label: '已启用',
                      value: '1'
                    },
                    {
                      label: '已禁用',
                      value: '0'
                    }
                  ]
                }
              },
            ],
            showLine:2,
            layout: [
                [
                  {
                    name: "systemCode",
                    colspan: 6
                  },
                  {
                    name: "systemName",
                    colspan: 6
                  },
                  {
                    name: "organizationName",
                    colspan: 6
                  },
                  {
                    name: "contactMobile",
                    colspan: 6
                  },
                ],
                [
                  {
                    name: "isEnable",
                    colspan: 6
                  },
                ]
              ]			
          },
          buttons: [
            [
              {
                label: '新增系统接入',
                type: 'primary',
                onClick: function(target, store) {
                    
                }
              }
            ],
          ],
          onDeleteRow: function(row, callback) {
          
          },
          onLoadData: function(url, param, callback) {
              callback([{
                      systemCode:'11111',
                      systemName:'11111',

              }])
          }
        }
        return {
            config: table,
        }
    }
 }
</script>

 <style  scoped>
    h1{color:red;}
</style>