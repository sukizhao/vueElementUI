<template>

<!-- vue的模板里面 所有的内容要被一个根节点包含起来  -->

  <div id="app">

      <h2 v-bind:title="title">绑定属性{{msg}}</h2>

      <br>
      这是一个根组件

    <br>

    <h3>{{obj.name}}</h3>
    <hr>

    <ul>
      <li v-for="item in list">
          {{item}}
      </li>
    </ul>
    <hr>

    <ul>
      <li v-for="item in list1">
          {{item.title}}
      </li>
    </ul>

      <hr>

      <ul>
        <li v-for="item in list2">
            {{item.cate}}

            <ol>
              <li v-for="news in item.list">
                  {{news.title}}
              </li>
            </ol>

        </li>
      </ul>

  <v-home></v-home>
 </div>
</template>

<script>
import Home from './components/Home.vue';//1、引入组建
 export default {
      data () {  /*业务逻辑里面定义的数据*/
        return {
          msg: '你好vue',
          title:"我是绑定的属性",
          obj:{
            name:"张三"
          },
          list:['111','222','333'],
          list1:[
            {'title':'11111'},
            {'title':'222'},
            {'title':'333333'},
            {'title':'44444'}
          ],
          list2:[
              {
                "cate":"国内新闻",
                "list":[

                   {'title':'国内新闻11111'},
                   {'title':'国内新闻2222'}
                ]
              },
              {
                "cate":"国际新闻",
                "list":[

                   {'title':'国际新闻11111'},
                   {'title':'国际新闻2222'}
                ]
              }

          ]

        }
      },
      // 2、挂载组建  3、在app.vue里面使用模块
      components:{
        'v-home':Home
      }
    }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
