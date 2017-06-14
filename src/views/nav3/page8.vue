<template>
    <div>
        <div class="wdgl">
            <!-- head start -->
            <div id="head" style="margin-top:6px;">
                <ul class="clearfloat">
                    <li v-for="item in items"><a href="#"><img :src="item.imgPic" alt=""><span>{{item.title}}</span></a></li>
                </ul>
            </div>
            <!-- head end -->

            <!-- section start -->
            <div class="section" style="margin-top:6px;border: 1px solid rgba(204, 204, 204, 1);">
                <div id="title">数据字典编辑区域</div>
                <div class="info" style="height:100%;margin-top:6px;">
                    <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
                        <el-form-item label="所属类型">
                            <select style="width:157px;height:30px;">
                                <option value="类型程序写死或后台配置" >类型程序写死或后台配置</option>
                            </select>
                        </el-form-item>
                        <el-form-item label="类型编码">
                            <input id="u1810input" type="text" value="系统自动带出" style="width:153px;height:25px;">
                        </el-form-item>
                    </el-form>
                    <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
                        <el-form-item label="名称">
                            <input v-model="formLabelAlign.name" style="width:153px;height:25px;">
                        </el-form-item>
                    </el-form>
                    <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
                        <el-form-item label="名称">
                            <input v-model="formLabelAlign.name" style="width:153px;height:25px;">
                        </el-form-item>
                        <el-form-item label="类型编码">
                            <input id="u1810_input" type="text" value="系统自动带出" style="width:153px;height:25px;">
                        </el-form-item>
                    </el-form>
                    <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
                        <el-form-item label="名称">
                            <input v-model="formLabelAlign.name" style="width:153px;height:25px;">
                        </el-form-item>
                        <el-form-item label="">
                            <el-radio class="radio" v-model="radio" label="1">是否默认</el-radio>
                            <el-radio class="radio" v-model="radio" label="2">是否启用</el-radio>
                        </el-form-item>
                    </el-form>
                </div>
            </div>
            <!-- section end -->

            <!-- from start -->

            <div class="form" style="margin-top: 10px;">
                <el-table
                        :data="tableData4"
                        border
                        style="width: 100%;"
                        max-height="500px">
                    <el-table-column
                            prop="date"
                            label="编号"
                            width="110">
                    </el-table-column>
                    <el-table-column
                            prop="name"
                            label="名称"
                            width="150">
                    </el-table-column>
                    <el-table-column
                            prop="province"
                            label="网点类型"
                            width="150">
                    </el-table-column>
                    <el-table-column
                            prop="city"
                            label="管理模式"
                            width="150">
                    </el-table-column>
                    <el-table-column
                            prop="address"
                            label="启用状态"
                            width="170">
                    </el-table-column>
                    <el-table-column
                            prop="zip"
                            label="助记码"
                            width="150">
                    </el-table-column>
                    <el-table-column
                            prop="zip"
                            label="上级网点"
                            width="150">
                    </el-table-column>
                    <el-table-column
                            prop="zip"
                            label="运作日期"
                            width="150">
                    </el-table-column>
                    <el-table-column
                            prop="zip"
                            label="启用状态"
                            width="150">
                    </el-table-column>
                    <el-table-column
                            prop="zip"
                            label="省份"
                            width="150">
                    </el-table-column>
                    <el-table-column
                            prop="zip"
                            label="城市"
                            width="150">
                    </el-table-column>
                </el-table>
            </div>
            <!-- from end -->

        </div>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                labelPosition: 'right',
                formLabelAlign: {
                    name: '',
                    region: '',
                    type: ''
                },
                radio:1,
                arr:[],
                msgData:[
                ],
                tableData4: [
                    {
                        date: '2016-05-03',
                        name: '王小虎',
                        province: '上海',
                        city: '普陀区',
                        address: '上海市普陀区金沙江路 1518 弄',
                        zip: 200333
                    },
                    {
                        date: '2016-05-03',
                        name: '王小虎',
                        province: '上海',
                        city: '普陀区',
                        address: '上海市普陀区金沙江路 1518 弄',
                        zip: 200333
                    },
                    {
                        date: '2016-05-03',
                        name: '王小虎',
                        province: '上海',
                        city: '普陀区',
                        address: '上海市普陀区金沙江路 1518 弄',
                        zip: 200333
                    },
                    {
                        date: '2016-05-03',
                        name: '王小虎',
                        province: '上海',
                        city: '普陀区',
                        address: '上海市普陀区金沙江路 1518 弄',
                        zip: 200333
                    },
                    {
                        date: '2016-05-02',
                        name: '王小虎',
                        province: '上海',
                        city: '普陀区',
                        address: '上海市普陀区金沙江路 1518 弄',
                        zip: 200333
                    }
                ],
                items:[
                    {title:"查询",imgPic:"../../../static/img/u10.png"},
                    {title:"新增",imgPic:"../../../static/img/u20.png"},
                    {title:"编辑",imgPic:"../../../static/img/u25.png"},
                    {title:"删除",imgPic:"../../../static/img/u30.png"},
                    {title:"保存",imgPic:"../../../static/img/u35.png"},
                    {title:"导入",imgPic:"../../../static/img/u818.png"},
                ],
                data: [
                    {
                        label: '一级 1',
                        children: [{
                            label: '二级 1-1',
                            children: [{
                                label: '三级 1-1-1'
                            }]
                        }]
                    }, {
                        label: '一级 2',
                        children: [{
                            label: '二级 2-1',
                            children: [{
                                label: '三级 2-1-1'
                            }]
                        }, {
                            label: '二级 2-2',
                            children: [{
                                label: '三级 2-2-1'
                            }]
                        }]
                    }, {
                        label: '一级 3',
                        children: [{
                            label: '二级 3-1',
                            children: [{
                                label: '三级 3-1-1'
                            }]
                        }, {
                            label: '二级 3-2',
                            children: [{
                                label: '三级 3-2-1'
                            }]
                        }]
                    }],
            }
        },
        methods: {
            deleteRow(index, rows) {
                rows.splice(index, 1);
            },
            add(){
                var ul = document.getElementById('dizhi');
                var li = ul.children[0];
                this.arr.push(li)
            }
        }
    }
</script>
<style scoped>
    #head{
        width: 100%;
        height: 65px;
        background-color: rgba(255, 255, 255, 1);
        box-sizing: border-box;
        border: 1px solid rgba(204, 204, 204, 1);
    }
    #head ul {
        list-style:none;
        margin-left: -40px;
        margin-top: 5px;
    }
    #head ul li {
        float:left;
    }
    #head ul li a {
        display: block;
        width: 40px;
        height: 40px;
        text-align:center;
    }

    #head img{
        width: 30px;
        height: 30px;
    }

    #title {
        height: 34px;
        background: #eef1f6;
        line-height: 34px;
        border-left: 5px solid #e57715;
        font-size: 13px;
        font-weight: 800;
        padding-left:3px;
    }
    .el-form {
        margin-bottom: 6px;
    }
    .el-form-item {
        display: inline-block;
        margin-bottom: 3px;
    }
    .middle .el-form-item {
        display: inline-block;
    }
    .el-table-column {
        text-align: center;
    }
</style>