<template>
	<el-row class="container">
		<el-col :span="24" class="header">
			<el-col :span="3" class="logo">
				<img src="../../src/assets/heng.png" style="width: 100%;height: 100%" >
			</el-col>
			<el-col :span="5">
				<div class="tools" @click.prevent="collapse">
					<i class="fa fa-align-justify"></i>
				</div>
			</el-col>
			<el-col :span="10" class="userinfo">
				<el-dropdown trigger="hover">
					<span class="el-dropdown-link userinfo-inner">登录员工： [{{sysUserName}}]&nbsp; &nbsp; </span>

					<span class="el-dropdown-link userinfo-inner">登录网点： [{{sysUserName}}]</span>

				</el-dropdown>
				<el-button @click="logout" class="buTTon">退出登录</el-button>
			</el-col>

		</el-col>
		<el-col :span="24" class="main">
			<aside :class="collapsed?'menu-collapsed':'menu-expanded'">
				<!--导航菜单-->
                <el-input type="text" placeholder="搜索框"  v-model="msg"></el-input>
				<el-menu :default-active="path" class="el-menu-vertical-demo" @open="handleopen" @close="handleclose" @select="handleselect"
					 unique-opened router v-show="!collapsed">
					<template v-for="(item,index) in routerOptions" v-if="!item.hidden">
					<!--	收起-->
						<el-submenu :index="index+''" v-if="!item.leaf" >
							<template slot="title"><i :class="item.iconCls"></i>{{item.name}}</template>
							<el-menu-item v-for="child in item.children" :index="child.path" :key="child.path" v-if="!child.hidden" @click="addTab(editableTabsValue2,child.name,child.path)" >{{child.name}}</el-menu-item>
						</el-submenu>
						<el-menu-item v-if="item.leaf&&item.children.length>0" :index="item.children[0].path" ><i :class="item.iconCls"></i>{{item.children[0].name}}</el-menu-item>
					</template>
				</el-menu>
				<!--导航菜单-折叠后-->
				<ul class="el-menu el-menu-vertical-demo collapsed" v-show="collapsed" ref="menuCollapsed">
					<li v-for="(item,index) in routerOptions" v-if="!item.hidden" class="el-submenu item">
						<template v-if="!item.leaf">
							<div class="el-submenu__title" style="padding-left: 20px;" @mouseover="showMenu(index,true)" @mouseout="showMenu(index,false)"><i :class="item.iconCls"></i></div>
							<ul class="el-menu submenu" :class="'submenu-hook-'+index" @mouseover="showMenu(index,true)" @mouseout="showMenu(index,false)"  @click="addTab(editableTabsValue2,child.name,child.path)">
								<li v-for="child in item.children" v-if="!child.hidden" :key="child.path" class="el-menu-item" style="padding-left: 40px;" :class="$route.path==child.path?'is-active':''" @click="addTab(editableTabsValue2,child.name,$router.push(child.path))">{{child.name}}</li>
							</ul>
						</template>
						<template v-else>
							<li class="el-submenu">
								<div class="el-submenu__title el-menu-item" style="padding-left: 20px;height: 56px;line-height: 56px;padding: 0 20px;" :class="$route.path==item.children[0].path?'is-active':''" @click="$router.push(item.children[0].path)"><i :class="item.iconCls"></i></div>
							</li>
						</template>
					</li>
				</ul>
			</aside>

			<section class="content-container">
				<div class="grid-content bg-purple-light">
					<el-col :span="24" class="breadcrumb-container">
						<el-tabs v-model="editableTabsValue2" type="card" closable @tab-remove="removeTab" @tab-click="handleClick">
							<el-tab-pane v-for="(item, index,key) in editableTabs2" :key="item.name" :label="item.title" :name="item.name">
							<span style="display: none">{{item.content}}</span>

							</el-tab-pane>

						</el-tabs>
						<router-view></router-view>
					</el-col>
				</div>
			</section>
		</el-col>
	</el-row>
</template>
<script>
    import ElButton from "../../node_modules/element-ui/packages/button/src/button";
    
	export default {

        data() {
			return {
				msg:'',
				path:this.$route.path,
				routerOptions:this.$router.options.routes,
				sysName:'VUEADMIN',
				collapsed:false,
				sysUserName: '',
				sysUserAvatar: '',
				form: {
					name: '',
					region: '',
					date1: '',
					date2: '',
					delivery: false,
					type: [],
					resource: '',
					desc: ''
				},

				//table 切换
				editableTabsValue2: '',
				editableTabs2: [{
				title: '首页',
					name:'首页',
				content: '/table'
				}],
				tabIndex: 0
					}
		},
		methods: {
            //新增table
			addTab(targetName,title,content) {
				let newTabName = ++this.tabIndex + '';
				this.editableTabs2.push({
				title:title,
				name: newTabName,
				content:content
				});
				this.editableTabsValue2 = newTabName;
			},
			//删除table
			removeTab(targetName) {
			    console.log(this.editableTabsValue2)
                console.log(this.editableTabs2)
				let tabs = this.editableTabs2;
				let activeName = this.editableTabsValue2;
				if (activeName === targetName) {
				    this.$router.go(-1)
				tabs.forEach((tab, index) => {
					if (tab.name === targetName) {
					let nextTab = tabs[index + 1] || tabs[index - 1];
					if (nextTab) {
						activeName = nextTab.name;
					}
					}
				});
				}
				this.editableTabsValue2 = activeName;
				this.editableTabs2 = tabs.filter(tab => tab.name !== targetName);
            },
			//跳转table
			handleClick(tab, event) {
			    console.log(this.name)
				console.log(tab.$route.fullPath);
				console.log(tab.$el.innerText);
				this.$router.push(""+tab.$el.innerText);
			},
			onSubmit() {
				console.log('submit!');
			},
			handleopen(key, keyPath) {
				console.log(this.$route.path);
				console.log(this.$router.options.routes);
				console.log(key, keyPath);
				console.log('handleopen');
			},
			handleclose(key, keyPath) {
				console.log(key, keyPath);
				console.log('handleclose');
			},
			handleselect: function (a,b) {
            },
			//退出登录
			logout: function () {
                var _this = this;
				this.$confirm('确认退出吗?', '提示', {
					//type: 'warning'
				}).then(() => {
					sessionStorage.removeItem('user');
					_this.$router.push('/login');
				}).catch(() => {
				});
			},
			//折叠导航栏
			collapse:function(){
				this.collapsed=!this.collapsed;
			},
			showMenu(i,status){
				this.$refs.menuCollapsed.getElementsByClassName('submenu-hook-'+i)[0].style.display=status?'block':'none';
			}
		},
		watch:{
			$route () {
				console.log(this.$route.name);
			},
			msg(val,oldval) {
			    var routename=this.routerOptions
				for(var i=0;i<routename.length;i++){
			        console.log(routename[3].name)
                    if(val== routename[i].name){
                        console.log(this)
                        this.path = '/'+val;
                        console.log(this.path)
                        console.log(val);
                        this.$router.push('/val');

                    }
				}

            }
		},
		method(){

		},
		mounted() {
			var user = sessionStorage.getItem('user');
			if (user) {
				user = JSON.parse(user);
				this.sysUserName = user.name || '';
				this.sysUserAvatar = user.avatar || '';
			}

		}
	}

</script>

<style  lang="scss">
	.container {
		position: absolute;
		top: 0px;
		bottom: 0px;
		width: 100%;
		.header {
			height: 60px;
			line-height: 60px;
			background:hsla(187, 100%, 42%, 0.7);
			color:#fff;
			.buTTon{
				border-top-style: none;
				border-right-style: none;
				border-bottom-style: none;
				border-left-style: none;

			}
			.userinfo {
				text-align: right;
				padding-right: 35px;
				float: right;
				.userinfo-inner {
					cursor: pointer;
					color:#fff;
					img {
						width: 40px;
						height: 40px;
						border-radius: 20px;
						margin: 10px 0px 10px 10px;
						float: right;
					}
				}
			}
			.login-form-input .el-input__inner {

				border: 0 none;
				border-bottom: 1px solid #ccc;
				border-radius: 0px;
			}
			.logo {
				//width:230px;
				height:60px;
				font-size: 22px;

				img {
					width: 40px;
					float: left;

				}
				.txt {
					color:#fff;
				}
			}
			.logo-width{
				width:230px;
			}
			.logo-collapse-width{
				width:60px
			}
			.tools{
				padding: 0px 23px;
				width:14px;
				height: 60px;
				line-height: 60px;
				cursor: pointer;
			}
		}
		.main {
			display: flex;
			// background: #324057;
			position: absolute;
			top: 60px;
			bottom: 0px;
			overflow: hidden;
			aside {
				flex:0 0 230px;
				width: 230px;
				// position: absolute;
				// top: 0px;
				// bottom: 0px;
				.el-menu{
					height: 100%;
				}
				.collapsed{
					width:60px;
					.item{
						position: relative;
					}
					.submenu{
						position:absolute;
						top:0px;
						left:60px;
						z-index:99999;
						height:auto;
						display:none;
					}

				}
			}
			.menu-collapsed{
				flex:0 0 60px;
				width: 60px;
			}
			.menu-expanded{
				flex:0 0 230px;
				width: 230px;
			}
			.content-container {
				// background: #f1f2f7;
				flex:1;
				// position: absolute;
				// right: 0px;
				// top: 0px;
				// bottom: 0px;
				// left: 230px;
				overflow-y: scroll;
				padding: 4px;
				.breadcrumb-container {
					//margin-bottom: 15px;
					.title {
						width: 200px;
						float: left;
						color: #475669;
					}
					.breadcrumb-inner {

						float: right;
					}
				}
				.el-tabs__header{
					margin: 0 0;
				}
				.toolbar{
					margin: 3px 0px;
				}
				.content-wrapper {
					background-color: #fff;
					box-sizing: border-box;
				}
			}
		}
	}
</style>