<template>
  <div class="sudoku">
    <Title title="数独" />
    <div class="content">
      <div class="box1">
        <div class="box_grid">
          <div class="row" v-for="(item1, index1) in arr2" :key="item1">
            <div
              class="row_item_outer"
              v-for="(item2, index2) in item1"
              :key="item2"
            >
              <div
                :class="{
                  row_item_inner_active: index1 + '' + index2 === divActive,
                }"
                class="row_item_inner"
                @click="divClick(index1, index2)"
              >
                <template v-if="item2 !== -1">
                  <template
                    v-if="unChanged.indexOf(index1 + '' + index2) === -1"
                  >
                    <span>{{ item2 }}</span>
                  </template>
                  <template v-else
                    ><span
                      style="color: blue; font-size: 18px; font-weight: bolder"
                      >{{ item2 }}</span
                    ></template
                  >
                </template>
              </div>
            </div>
          </div>
          <div class="numberBtns">
            <button v-for="item in 9" :key="item" @click="btnClick(item)">
              {{ item }}
            </button>
          </div>
          <div class="gameSetBtns">
            <button @click="restart()">重新开始</button>
            <button @click="reset()">复原</button>
            <el-button @click="finish()">完成</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { ElMessage, ElMessageBox } from "element-plus";
import type { Action } from "element-plus";

class Sudoku {
  digits: number[][];
  unChanged: string[];
  unChangedCount: number;
  constructor() {
    this.digits = this.makeMatrix(9);
    this.unChangedCount = 48;
    this.unChanged = [];
  }
  makeSudoku(): boolean {
    const temp = this.makeMatrix(9);
    let randNineArr = this.randNine();
    for (let i = 0; i < 9; i++) {
      temp[i].push(randNineArr[i]);
    }
    let box = this.makeMatrix(3);
    box[0] = [...randNineArr.slice(0, 3)];
    box[1] = [...randNineArr.slice(3, 6)];
    box[2] = [...randNineArr.slice(6)];
    for (let i = 1; i < 9; i++) {
      randNineArr = this.randNine();
      if (i % 3 === 0) {
        box = this.makeMatrix(3);
      }
      let count = 0;
      for (let j = 0; j < 9; j++) {
        if (
          box[Math.floor(j / 3)].indexOf(randNineArr[j]) === -1 &&
          temp[j].indexOf(randNineArr[j]) === -1
        ) {
          temp[j].push(randNineArr[j]);
          box[Math.floor(j / 3)].push(randNineArr[j]);
          count = 0;
        } else {
          count++;
          this.moveArrItem(randNineArr, j);
          j--;
          if (count > 8 - j) {
            return false;
          }
        }
      }
    }
    this.digits = temp;
    return true;
  }
  randNine() {
    return [1, 2, 3, 4, 5, 6, 7, 8, 9].sort(() => Math.random() - 0.5);
  }
  makeMatrix(n: number): number[][] {
    return Array.from(Array(n), (): number[] => []);
  }
  moveArrItem(arr: number[], start: number) {
    const first = arr[start];
    for (let i = start; i < 8; i++) {
      arr[i] = arr[i + 1];
    }
    arr[8] = first;
  }
  shuffle() {
    this.unChanged = [];
    while (this.unChanged.length < this.unChangedCount) {
      const x = Math.floor(Math.random() * 9);
      const y = Math.floor(Math.random() * 9);
      if (this.unChanged.indexOf(x + "" + y) !== -1) {
        continue;
      } else {
        this.unChanged.push(`${x}${y}`);
        this.digits[x][y] = -1;
      }
    }
  }
}

const indexs = ref([12, 12]);
const sudoku = new Sudoku();
while (!sudoku.makeSudoku()) {
  const x = 1;
}
sudoku.shuffle();
const arr2 = ref(copy(sudoku.digits));
const divActive = ref("");
const unChanged = ref([...sudoku.unChanged]);
function btnClick(x: number) {
  // const activeDivEl = document.querySelector(".row_item_inner_active");
  // if (activeDivEl) {
  //   activeDivEl.innerHTML = `<span style='color:aqua'>${x}</span>`;
  // }
  // console.log(arr2.value[0]);
  arr2.value[indexs.value[0]][indexs.value[1]] = x;
}
function divClick(index1: number, index2: number) {
  if (sudoku.unChanged.indexOf(index1 + "" + index2) !== -1) {
    divActive.value = index1 + "" + index2;
    indexs.value = [];
    indexs.value.push(index1, index2);
  }
}
function restart() {
  while (!sudoku.makeSudoku()) {
    const x = 1;
  }
  sudoku.shuffle();
  unChanged.value = [...sudoku.unChanged];
  arr2.value = copy(sudoku.digits);
}
function reset() {
  arr2.value = copy(sudoku.digits);
}
function isValidSudoku(board: number[][]): boolean {
  const col = {};
  const box = {};
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const x = board[i][j];
      const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
      if (col[j + "" + x] || box[boxIndex + "" + x]) {
        return false;
      }
      col[j + "" + x] = 1;
      box[boxIndex + "" + x] = 1;
    }
  }
  return true;
}
function copy(arr: number[][]): number[][] {
  const re: number[][] = [];
  for (let i = 0; i < arr.length; i++) {
    const temp = arr[i].concat();
    re.push(temp);
  }
  return re;
}
function finish() {
  for (const item of arr2.value) {
    for (const x of item) {
      if (x === -1) {
        ElMessageBox.alert("还未完成", "Title", {
          confirmButtonText: "OK",
          callback: (action: Action) => {
            ElMessage({
              type: "info",
              message: `action: ${action}`,
            });
          },
        });
        return;
      }
    }
  }
  if (isValidSudoku(arr2.value)) {
    ElMessageBox.alert("You Win!!!", "Title", {
      // if you want to disable its autofocus
      // autofocus: false,
      confirmButtonText: "OK",
      callback: (action: Action) => {
        ElMessage({
          type: "info",
          message: `action: ${action}`,
        });
      },
    });
  } else {
    ElMessageBox.alert("失败", "Title", {
      // if you want to disable its autofocus
      // autofocus: false,
      confirmButtonText: "OK",
      callback: (action: Action) => {
        ElMessage({
          type: "info",
          message: `action: ${action}`,
        });
      },
    });
  }
}
</script>

<style scoped lang="less">
.sudoku {
  .content {
    display: flex;
    justify-content: center;
    align-content: center;
    .box1 {
      padding: 20px;
      .box_grid {
        .row {
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;

          .row_item_outer {
            width: 30px;
            height: 30px;
            border: 0.2px solid rgba(0, 0, 0, 0.2);
            background-color: #fff;
          }

          .row_item_inner {
            width: 27px;
            height: 27px;
          }

          .row_item_inner_active {
            background-color: yellow;
          }

          .row_item_outer:first-child {
            border-left: 2px solid rgba(0, 0, 0, 1);
          }

          .row_item_outer:nth-child(3n) {
            border-right: 2px solid rgba(0, 0, 0, 1);
          }
        }

        .row:nth-child(1) {
          border-top: 2px solid rgba(0, 0, 0, 1);

          div {
            border-top: none;
          }
        }

        .row:nth-child(3n) {
          border-bottom: 2px solid rgba(0, 0, 0, 1);

          div {
            border-bottom: none;
          }
        }

        .numberBtns {
          margin-top: 15px;

          button {
            width: 30px;
            height: 30px;
          }
        }

        .gameSetBtns {
          margin-top: 15px;

          button {
            margin-right: 15px;
          }
        }
      }
    }
  }
}
</style>
