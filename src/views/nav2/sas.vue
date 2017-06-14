<template>

    <div>
        <div class="ms-doc">
            <div id="head">
                <ul class="clearfloat">
                    <li v-for="item in items"><div ><img :src="item.imgPic" alt=""><span>{{item.title}}</span></div></li>
                </ul>
            </div>
            <div class="container1" style="display:flex;">
                <div class="side" style="width:20%;height:680px;">
                    <div id="title1">部门结构</div>
                    <el-tree :data="data1" :props="defaultProps"  style="width:100%;height:645px;border:0;overflow:auto;"></el-tree>
                </div>
                <div class="section" style="width:77%;height:100%;margin:6px 0 0 20px;">
                    <div class="top" style="width:100%;height:280px;margin-bottom:6px;">
                        <div id="title">部门编辑</div>
                        <div class="info">
                            <el-form :label-position="labelPosition" label-width="80px">
                                <el-form-item label="名称">
                                    <input style="width:200px;height:25px;">
                                </el-form-item>
                                <el-form-item label="活动区域">
                                    <input style="width:200px;height:25px;">
                                </el-form-item>
                            </el-form>
                            <el-form :inline="true" :label-position="labelPosition" label-width="80px">
                                <el-form-item label="名称">
                                    <input style="width:200px;height:25px;">
                                </el-form-item>
                                <el-form-item label="活动区域">
                                    <input style="width:200px;height:25px;">
                                </el-form-item>
                            </el-form>
                            <el-form :inline="true" :label-position="labelPosition" label-width="80px">
                                <el-form-item label="名称">
                                    <input style="width:200px;height:25px;">
                                </el-form-item>
                                <el-form-item label="活动区域">
                                    <input style="width:200px;height:25px;">
                                </el-form-item>
                            </el-form>
                            <el-form :inline="true" :label-position="labelPosition" label-width="80px">
                                <el-form-item label="名称">
                                    <input style="width:200px;height:25px;">
                                </el-form-item>
                                <el-form-item label="部门描述">
                                    <el-input type="textarea" style="width:400px;height:25px;"></el-input>
                                </el-form-item>
                            </el-form>
                        </div>
                    </div>
                    <div class="botoom" style="width:100%;height:395px;border: 1px solid rgba(204, 204, 204, 1);">
                        <el-table :data="tableData" border style="width: 100%;" >
                            <el-table-column :prop="item.label" :label="item.label" width="130" style="padding:0;" v-for="item in elItems">
                            </el-table-column>
                        </el-table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        data: function(){
            return {
                labelPosition: 'right',
                formInline: {
                    name: '',
                    region: '',
                    type:'',
                },
                items:[
                    {title:"查询",imgPic:"../../../static/img/u10.png"},
                    {title:"新增",imgPic:"../../../static/img/u20.png"},
                    {title:"编辑",imgPic:"../../../static/img/u25.png"},
                    {title:"删除",imgPic:"../../../static/img/u30.png"},
                    {title:"保存",imgPic:"../../../static/img/u35.png"},
                    {title:"导入",imgPic:"../../../static/img/u818.png"},
                ],
                elItems:[
                    {label:"部门编号"},
                    {label:"部门名称"},
                    {label:"部门全称"},
                    {label:"使用网点类型"},
                    {label:"上级部门"},
                    {label:"部门拼音"},
                    {label:"所属层级"},
                    {label:"部门描述"},
                    {label:"创建人"},
                    {label:"创建时间"}
                ],
                tableData: [
                    {
                        date: '',
                        name: '',
                        address: ''
                    },
                    {
                        date: '',
                        name: '',
                        address: ''
                    },
                    {
                        date: '',
                        name: '',
                        address: ''
                    },
                    {
                        date: '',
                        name: '',
                        address: ''
                    }

                ],
                data1: [
                    {
                        label: '一级直营网点',
                        children: [
                            {
                                label: '二级客服部',
                                children: [{
                                    label: '销售部'
                                },
                                    {label: '二级销售部'}
                                ]
                            }]
                    },
                    {
                        label: '一级加盟网点',
                        children: [{
                            label: '二级 2-1',
                            children: [{
                                label: '三级 2-1-1'
                            }]
                        },
                            {
                                label: '二级 2-2',
                                children: [{
                                    label: '三级 2-2-1'
                                }]
                            }]
                    },
                    {
                        label: '一级 3',
                        children: [{
                            label: '二级 3-1',
                            children: [{
                                label: '三级 3-1-1'
                            }]
                        },
                            {
                                label: '二级 3-2',
                                children: [{
                                    label: '三级 3-2-1'
                                }]
                            }]
                    },
                    {
                        label: '一级 3',
                        children: [{
                            label: '二级 3-1',
                            children: [{
                                label: '三级 3-1-1'
                            }]
                        },
                            {
                                label: '二级 3-2',
                                children: [{
                                    label: '三级 3-2-1'
                                }]
                            }]
                    },
                    {
                        label: '一级 3',
                        children: [{
                            label: '二级 3-1',
                            children: [{
                                label: '三级 3-1-1'
                            }]
                        },
                            {
                                label: '二级 3-2',
                                children: [{
                                    label: '三级 3-2-1'
                                }]
                            }]
                    },
                    {
                        label: '一级 3',
                        children: [{
                            label: '二级 3-1',
                            children: [{
                                label: '三级 3-1-1'
                            }]
                        },
                            {
                                label: '二级 3-2',
                                children: [{
                                    label: '三级 3-2-1'
                                }]
                            }]
                    },
                    {
                        label: '一级 3',
                        children: [{
                            label: '二级 3-1',
                            children: [{
                                label: '三级 3-1-1'
                            }]
                        },
                            {
                                label: '二级 3-2',
                                children: [{
                                    label: '三级 3-2-1'
                                }]
                            }]
                    },
                    {
                        label: '一级 3',
                        children: [{
                            label: '二级 3-1',
                            children: [{
                                label: '三级 3-1-1'
                            }]
                        },
                            {
                                label: '二级 3-2',
                                children: [{
                                    label: '三级 3-2-1'
                                }]
                            }]
                    }
                ],
                defaultProps: {
                    children: 'children',
                    label: 'label'
                }
            }
        },
        methods:{
            onSubmit() {
                console.log('submit!');
            }
        }
    }
</script>

<style scoped>

    .ms-doc {
        width: 100%;
        height: 800px;
        box-sizing: border-box;
        border-color: rgba(204, 204, 204, 1);
        padding: 5px 0;
    }

    .ms-doc #head{
        width: 100%;
        height: 65px;
        background-color: rgba(255, 255, 255, 1);
        box-sizing: border-box;
        border: 1px solid rgba(204, 204, 204, 1);

    }
    .ms-doc #head ul {
        list-style:none;
        margin-left: -40px;
        margin-top: 5px;
    }
    .ms-doc #head ul li {
        float:left;

    }
    .ms-doc #head ul li div {
        display: block;
        width: 40px;
        height: 40px;
        text-align:center;
    }

    .ms-doc #head img{
        width: 30px;
        height: 30px;
    }
    .container1 {
        width:100%;
        height:700px;
        margin-top:10px;
        border: 1px solid rgba(204, 204, 204, 1);
    }
    .container1 #title {
        height: 34px;
        background: #eef1f6;
        line-height: 34px;
        font-size: 13px;
        font-weight: 800;
        border-left: 5px solid #e57715;
        padding-left:3px;
    }
    .side {
        margin-top: 6px;margin-left: 6px;
        border: 1px solid rgba(204, 204, 204, 1);

    }
    .top{
        border: 1px solid rgba(204, 204, 204, 1);

    }
    .el-form-item {
        margin-bottom: 0px;
    }
</style>