<!-- 완벽한 계산기는 아님. 알고리즘에 오류가 있음. -->
<script>
export default {
  data() {
    return {
      output: null,   // 출력칸에 표시되어 사용자에게 노출되는 값
      prev: null,     // 이전에 입력된 값 또는 연산 결과
      cur: null,      // 현재 입력된 값
      operator: null, // 연산자
      operatorActions: {
        '+': (a,b) => a + b,
        '-': (a,b) => a - b,
        '*': (a,b) => a * b,
        '/': (a,b) => a / b,
      }
    };
  },
  methods: {
    clear() {
      this.output = null;
      this.prev = null;
      this.cur = null;
      this.operator = null;
    },
    calculate(value) {
      // 저장된 숫자가 없는데 연산 기호를 클릭한 경우
      if (!this.cur && !this.prev) {
        alert('숫자를 먼저 입력하세요.');
        return;
      }
      // 사칙연산 기호를 연달아 클릭한 경우
      if (this.operator !== null && !this.cur) {
        alert('사칙연산 기호를 연달아 누를 수 없습니다.');
        return;
      }
      // 등호를 클릭해 결과를 노출한 후 다시 등호를 클릭한 경우
      if ((value === '=') && (this.prev === this.cur)) {
        return;
      }
      
      this.cur = Number(this.cur);
      if (this.operator !== null) {
        this.prev = this.operatorActions[this.operator](this.prev, this.cur);
        
        if (value === '=') {
          this.operator = null;
          this.cur = this.prev;
          this.output = this.prev;
        } else {
          this.operator = value;
          this.cur = null;
          this.output = null;
        }
      } else {
        this.operator = value;
        this.prev = this.cur;
        this.cur = null;
        this.output = null;
      }
    },
    userInput(value) {
      // this.cur에 아무것도 없다면 value을 저장하고, 있다면 value을 append
      this.cur = (this.cur === null) ? value : (this.cur += value);
      this.output = this.cur;
    },
    operation(event) {
      const value = event.currentTarget.value;
      if (value === 'C') {
        this.clear();
      } else if (['+', '-', '*', '/', '='].includes(value)) {
        this.calculate(value);
      } else {
        this.userInput(value);
      }
    },
  },
}
</script>

<template>
  <div class="calculator">
      <form name="forms">
        <input v-model="output" type="text" name="output" readonly />
        <input type="button" class="clear" value="C" @click="operation" />
        <input type="button" class="operator" value="/" @click="operation" />
        <input type="button" value="1" @click="operation" />
        <input type="button" value="2" @click="operation" />
        <input type="button" value="3" @click="operation" />
        <input type="button" class="operator" value="*" @click="operation" />
        <input type="button" value="4" @click="operation" />
        <input type="button" value="5" @click="operation" />
        <input type="button" value="6" @click="operation" />
        <input type="button" class="operator" value="+" @click="operation" />
        <input type="button" value="7" @click="operation" />
        <input type="button" value="8" @click="operation" />
        <input type="button" value="9" @click="operation" />
        <input type="button" class="operator" value="-" @click="operation" />
        <input type="button" class="dot" value="." @click="operation" />
        <input type="button" value="0" @click="operation" />
        <input type="button" class="operator result" value="=" @click="operation" />
      </form>
    </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.calculator {
  width: 287px;
  border: 1px solid #333;
  background-color: #ccc;
  padding: 5px;
}

.calculator form {
  display: grid;
  grid-template-columns: repeat(4, 65px);
  grid-auto-rows: 65px;
  grid-gap: 5px;
}

.calculator form input {
  border: 2px solid #333;
  cursor: pointer;
  font-size: 19px;
}

.calculator form input:hover {
  box-shadow: 1px 1px 2px #333;
}

.calculator form .clear {
  background-color: #ed4848;
}

.calculator form .operator {
  background-color: orange;
}

.calculator form .dot {
  background-color: green;
}

.calculator form input[type='text'] {
  grid-column: span 4;
  text-align: right;
  padding: 0 10px;
}

.calculator form .clear {
  grid-column: span 3;
}

.calculator form .result {
  grid-column: span 2;
}
</style>
