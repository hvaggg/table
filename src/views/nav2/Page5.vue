<template>
	<section>
		<div class="name">
			<h1>{{msg}}</h1>
		</div>
        export default {
            name: 'index',//组件名称
            created () {
                /***********************************************************
                 * 头部menu路由状态读取session缓存
                 */
                if(window.sessionStorage.menuTopList){
                    this.menuTopList = JSON.parse(window.sessionStorage.menuTopList);
                }
                if(window.sessionStorage.selectedMenu){
                    this.selectedMenu = parseInt(window.sessionStorage.selectedMenu);
                }
				/*********************************************************/
            },
            data () {
                return {
                    /***********************************************************
                     * 头部menu路由必须状态
                     */
                    menuTopList: [
                        {
                            path: '/',
                            name: '主页',
                            query: ''
                        }
                    ],
                    selectedMenu: 0,
					/*********************************************************/
                    theme2: 'light',
                    theme1: 'dark'
                }
            },
            watch: {
                /*******************************************************************
                 * 头部menu路由缓存
                 */
                menuTopList (list) {
                    window.sessionStorage.menuTopList = JSON.stringify(list);
                },
                selectedMenu (index) {
                    window.sessionStorage.selectedMenu = index;
                }
				/*****************************************************************/
            },
            methods: {
                /*******************************************************************
                 * 头部menu路由必须方法
                 */
                addTab (obj) {
                    this.$router.push({path: obj.path, query: obj.query})
                    let index = 0;
                    const isNewRouter = this.menuTopList.some((item, item_i) => {
                        index = item_i;
                        return item.path === obj.path;
                    })
                    if(!isNewRouter){
                        index = this.menuTopList.length;
                        this.menuTopList.push(obj);
                    }
                    setTimeout(() => {
                        this.selectedMenu = index
                    },10)
                },
                deleteTab (index) {
                    if(index === this.selectedMenu){
                        this.menuTopList.splice(index, 1);
                        const pageObj = this.menuTopList[index-1];
                        this.$router.push({path: pageObj.path, query: pageObj.query})
                        setTimeout(()=>{
                            this.selectedMenu = index-1;
                        },10)
                    }else{
                        this.menuTopList.splice(index, 1);
                    }
                },
                gotoPage (obj, index) {
                    this.selectedMenu = index;
                    this.$router.push({path: obj.path, query: obj.query, params: obj.params});
                }
				/*******************************************************************/
            }
        }

	</section>

</template>
<script>
    export default{
        data(){
            name:"name"
            return {
                msg:"jabdjnk"
            }
        }
    }
</script>