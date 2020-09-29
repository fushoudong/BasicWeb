<template>
  <div class="hello">
    <el-checkbox
      v-model="checkedAll"
      @change="doCheckAll"
      >全选
    </el-checkbox>
    <div slot="content" class="contentDiv">
      <div 
        class="checkbox-table" 
        v-for="(item, index) in dtos"
        :key="item.id">
        <template>
          <el-checkbox
            class="itemMainCheckBox"
            v-model="selectDtoRow"
            :label="item.id"
            @change="handleCheck(1, index)">
          </el-checkbox>
          <div class="itemRow">
            <div v-if="item.flowNodeDtos">
              <div 
                class="checkBoxItem"
                v-for="(listItem, indexItem) in item.flowNodeDtos"
                :key="listItem.id">
                <el-checkbox-button
                  :label="listItem.casecode"
                  v-model="selectDtoRow"
                  @change="handleCheck(2, indexItem)">
                </el-checkbox-button>
                <i 
                  class="el-icon-right arrowStyle" 
                  v-if="indexItem < item.flowNodeDtos.length - 1">
                </i>
              </div>
            </div>
            <div
              class="checkBoxItem"
              v-else>
              <el-checkbox-button
                :label="item.casecode"
                :key="item.id">
              </el-checkbox-button>
            </div>
          </div>
        </template>
      </div>
    </div>
    
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'HelloWorld',
    data () {
      return {
        checkedAll: true,
        checkeDtos: [],
        selectSceneDto: {},
        dtos: [],
        selectDtoRow: [],
      }
    },
    created() {
      this.getData()
    },
    methods: {
      // 选择全部数据
      doCheckAll() {

      },
      getData() {
        axios({
          url: 'http://10.101.167.184:8080/atfcloud2.0a/sceneController/selectScene',
          method: 'post',
          data: {
            id: "1216"
          }
        }).then(res => {
          this.selectSceneDto = res.data.selectSceneDto
          console.log(this.selectSceneDto)
          const { caseDtos } = this.selectSceneDto
          caseDtos.forEach(element => {
            element.selectFlowNodeDtos = []
            element.isSelectAll = true
          });
          this.dtos = caseDtos
          console.log(this.dtos)
        }).catch(err => {
          console.log('出现异常')
        })
      },
      handleCheck(type, index = 0) {
        let self = this
        if(type == 2) {
          self.dtos[index].flowNodeDtos.map(item => {
            if(self.selectDtoRow.indexOf(item.id) > -1) {
              index += 1
            }
          })
          if(index > 0) {
            if(self.selectDtoRow.indexOf(self.dtos[index].id) < 0) {
              self.selectDtoRow.push(self.dtos[index].id)
            }
          }else {
            if(self.selectDtoRow.indexOf(self.dtos[index].id) > 0) {
              self.selectDtoRow.splice(self.selectDtoRow.index(self.dtos[index].id), 1)
            }
          }
        }else {
          if(self.selectDtoRow.indexOf(self.dtos[index].id > -1)) {
            self.dtos[index].flowNodeDtos.map(item => {
              if(self.selectDtoRow.findIndex((n) => n == item.id) < 0) {
                self.selectDtoRow.push(item.id)
              }
            })
          }else {
            self.dtos[index].selectDtoRow.map(item => {
              if(self.selectDtoRow.findIndex((n) => n == item.id) > -1) {
                self.selectDtoRow.splice(self.selectDtoRow.findIndex((n) => n == item.id), 1)
              }
            })
          }
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .contentDiv {
    width: 600px;
    padding: 0px 40px;
    margin: 100px auto;
  }
  .itemMainCheckBox {
    position: relative;
    top: 5px;
    margin-left: 15px;
    font-weight: bold;
    width: 16px;
    overflow: hidden;
  }
  .itemRow {
    display: inline-block;
    margin-bottom: 10px;
  }
  .checkBoxItem {
    display: inline-block;
    margin: 0px 10px;
  }
  .arrowStyle {
    font-weight: bold;
    font-size: 24px; 
    position:relative; 
    top: 5px; 
    margin: 0px -10px 0px 5px;
  }
</style>
