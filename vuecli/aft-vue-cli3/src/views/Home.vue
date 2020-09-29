<template>
  <div class="home">
    <el-checkbox
      v-model="isCheckedAll"
      :indeterminate="indetermintate"
      @change="handleCheckAllChange">
      全选
    </el-checkbox>
    <div
      class="divRow"
      v-for="(caseDtosItem, caseDtosIndex) in dtos"
      :key="caseDtosIndex">
      <div class="leftCheckbox">
        {{caseDtosItem.selected}}
        <el-checkbox
          :key="caseDtosIndex"
          :indeterminate="caseDtosItem.indetermintate"
          v-model="caseDtosItem.selected"
          @change="handleCaseDtosItemChange(
            caseDtosIndex, 
            caseDtosItem.id, 
            $event
          )">
        </el-checkbox>
      </div>
      <div 
        class="rightCheckbox">
        <div v-if="caseDtosItem.flowNodeDtos">
          <div
            class="flowItem"
            v-for="(flowItem, flowIndex) in caseDtosItem.flowNodeDtos"
            :key="flowIndex">
            <el-checkbox-button
              :key="flowItem.id"
              v-model="flowItem.selected"
              @change="handleFlowItemchange(
                caseDtosIndex,
                flowItem.id,
                caseDtosItem.id,
                $event
              )">{{flowItem.casecode}}
            </el-checkbox-button>
            <i class="el-icon-right"
              v-if="flowIndex < caseDtosItem.flowNodeDtos.length - 1">
            </i>
          </div>
        </div>
        <div v-else>
          <el-checkbox-button
            :key="caseDtosItem.id"
            v-model="caseDtosItem.selected"
            @change="handleCaseDtosItemChange(
              caseDtosIndex, 
              caseDtosItem.id, 
              $event
            )">{{caseDtosItem.casecode}}
          </el-checkbox-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "Home",
    data() {
      return {
        selectSceneDto: {},
        dtos: [],
        indetermintate: false,
        isCheckedAll: false
      }
    },
    created() {
      this.setAllData()
    },
    methods: {
      setAllData() {
        axios({
          url: 'http://10.101.167.184:8080/atfcloud2.0a/sceneController/selectScene',
          method: 'post',
          data: {
            id: "1216"
          }
        }).then(res => {
          this.selectSceneDto = res.data.selectSceneDto
          // console.log(this.selectSceneDto)
          const { caseDtos } = this.selectSceneDto
          caseDtos.forEach(element => {
            this.$set(element, 'selected', false)
            this.$set(element, 'indetermintate', false)
            if(Array.isArray(element.flowNodeDtos)) {
              for(let i = 0, len = element.flowNodeDtos.length; i < len; i++) {
                this.$set(element.flowNodeDtos[i], 'selected', false)
              }
            }
          });
          this.dtos = caseDtos
          // console.log(this.dtos)
        }).catch(err => {
          console.log('出现异常')
        })
      },
      // 全选事件
      handleCheckAllChange(val) {
        this.isCheckedAll = val
        this.indetermintate = false
        for(let i = 0, len = this.dtos.length; i < len; i ++) {
          // 二级全选反选
          this.$set(this.dtos[i], 'selected', val)
          if(this.dtos[i].flowNodeDtos) {
            for(let j = 0, nodeLen = this.dtos[i].flowNodeDtos.length; j < nodeLen; j ++) {
              this.$set( this.dtos[i].flowNodeDtos[j], 'selected', val)
            }
          }
        }
      },
      // 设置二级事件切换
      handleCaseDtosItemChange(index, id, val) {
        console.log('进行修改', index, this.dtos[index].selected)
        if(!val) {
          this.$set(this.dtos[index], 'indetermintate', false)
        }
        if(this.dtos[index].flowNodeDtos) {
          for(let i = 0, len = this.dtos[index].flowNodeDtos.length; i < len; i ++) {
            this.$set(this.dtos[index].flowNodeDtos[i], 'selected', val)
          }
        }
        this.$set(this.dtos[index], 'selected', val)
        this.setCheckAll()
        console.log(this.dtos)
      },
      // 设置三级事件切换
      handleFlowItemchange(index, currentId, parentId, val) {
        let arrayFlow = this.dtos[index].flowNodeDtos
        let startCount = 0, endCount = 0, 
              arrayLength = arrayFlow? arrayFlow.length: 0;
        for(let i = 0, len = arrayLength; i < len; i++) {
          if(currentId === arrayFlow[i].id) {
            // arrayFlow[i].id = val
            this.$set(arrayFlow[i], 'selected', val)
          }
          if(arrayFlow[i].selected) startCount ++
          else endCount ++
        }
        if(startCount == arrayLength) {
          this.$set(this.dtos[index], 'indetermintate', false)
          this.$set(this.dtos[index], 'selected', true)
        }else if(endCount === arrayLength) {
          this.$set(this.dtos[index], 'indetermintate', false)
          this.$set(this.dtos[index], 'selected', false)
        }else {
          this.$set(this.dtos[index], 'indetermintate', true)
          this.$set(this.dtos[index], 'selected', false)
        }
        this.setCheckAll()
      },

      // 设置全选与二级
      setCheckAll() {
        let startCount = 0,
            endCount = 0,
            arrayLength = this.dtos.length
        for(let i = 0; i < arrayLength; i++) {
          if(this.dtos[i].selected) {
            startCount ++
          }else {
            endCount ++ 
          }
        }
        if(startCount == arrayLength) {
          this.isCheckedAll = true
          this.indetermintate = false
        }else if(endCount == arrayLength) {
          this.isCheckedAll = false
          this.indetermintate = false
        }else {
          this.isCheckedAll = false
          this.indetermintate = true
        }
      }
    }
  };
</script>

<style lang="less" scoped>
  .divRow {
    width: 100%;
    height: 60px;
    margin-top: 5px;
    margin-bottom: 10px;
    background: #e7f2ff;
    display: flex;
    align-items: center;
    .leftCheckbox {
      width: 20px;
      height: 20px;
      margin-left: 5px;
      margin-right: 10px;
    }
    .rightCheckbox {
      flex: 1;
      height: 40px;
      .flowItem {
        display: inline-block;
        margin: 0px 10px 0 0;
        .el-checkbox-button {
          margin-right: 10px;
        }
      }
    }
  }
</style>
