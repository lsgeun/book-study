<script>
export default {
  data() {
    return {
      name: '철수',
      age: 19,
      message: '<h1>Hello, Vue JS!</h1>',
      className: 'red-color',
      visible: true,
      invisible: false,
      condition: 'A',
      showCondition: true,
      fruits: ['apple', 'banana', 'orange'],
      user: {
        name: 'John',
        age: 20,
        gender: 'male'
      },
      number: 0,
      number2: 0,
      name2: '철수',
      gender: '남자',
      age2: 20,
      uid: '',
      upw: '',
      message2: '',
      fruits2: true,
      fruits3: ['banana', 'orange'],
      gender2: 'male',
      selectItem: 'cafeLatte',
      message3: '',
      selected: 'banana',
      price: 500,
      firstName: "Gildong",
      lastName: "Hong",
      numArr: [1, 2, 3, 4, 5],
      inputStr: '',
      arr: [0, 1, 2],
      obj: { name: "chulsu" },
      primaryColor: 'red',
      primaryStyle: 'italic',
    };
  },
  methods: {
    clickHandler() {
      alert('click');
    },
    clickHandler2(event) {
      console.log(event);
    },
    onKeyupHandler(event) {
      if (event.keyCode === 13) { // 키보드 이벤트 객체에서 keyCode 속성값이 13인 경우 Enter 키를 의미
        console.log('Enter');
      }
    },
    onKeyupHandler2(event) {
      console.log('Enter');
    },
    increment() {
      this.number++;
    },
    increment2() {
      this.number2++;
      },
    login() {
      console.log(`id: ${this.uid}`);
      console.log(`pw: ${this.upw}`);
    },
    printData() {
      console.log(`id: ${this.message2}`);
    },
    printData2() {
      console.log(this.fruits3);
    },
    printData3() {
      console.log(this.gender2);
    },
    printData4() {
      console.log(this.selectItem);
    },
    onChangeHandler(event) {
      this.message3 = event.target.value;
    },
    onChangeHandler2(event) {
      if (this.selected === 'banana') {
        this.price = 500;
      }
      if (this.selected === 'apple') {
        this.price = 700;
      }
    },
    onSubmitHandler(e) {
      e.preventDefault();
      // ajax를 활용한 별도의 폼 전송 처리
      // ...
      console.log('onSubmit Handler!');
    },
    onKeyupHandler() {
      console.log('keyup event!');
    },
  },
  computed: {
    fullName() {
      console.log('computed fullname');
      return `${this.lastName} ${this.firstName}`;
    },
    evenSum() {
      return this.numArr
        .filter((v) => v % 2 === 0)
        .reduce((acc, cur) => acc + cur, 0);
    },
  },
  watch: {
    inputStr(newValue, oldValue) {
      console.log(`oldValue : ${oldValue}`);
      console.log(`newValue : ${newValue}`);
    },
    arr: {
      handler(newValue, oldValue) {
        console.log(`oldValue : ${oldValue}`);
        console.log(`newValue : ${newValue}`);
      },
      deep: true,
    },
    obj: {
      handler(newValue, oldValue) {
        console.log(`oldValue : ${JSON.stringify(oldValue)}`);
        console.log(`newValue : ${JSON.stringify(newValue)}`);
      },
      deep: true,
    },
  }
}</script>

<template>
  {{ name }}
  {{ age }}
  <p>내 이름은 {{ name }}입니다.</p>
  <p>나이는 {{ age }}살입니다.</p>
  {{ 10 * 20 * 30 }}
  {{ name.toUpperCase() }}
  <!-- 디렉티브 -->
  <div v-html="message"></div>
  <div v-text="message"></div>
  <h1 v-bind:class="className">Hello, Vue JS</h1>
  <h1 :class="className">Hello, Vue JS</h1>
  <p v-if="visible">이 요소는 렌더링됩니다.</p>
  <p v-if="invisible">이 요소는 렌더링되지 않습니다.</p>
  <p v-if="condition === 'A'">condition 데이터의 값은 A입니다.</p>
  <p v-else-if="condition === 'B'">condition 데이터의 값은 B입니다.</p>
  <p v-else-if="condition === 'C'">condition 데이터의 값은 C입니다.</p>
  <p v-else-if="condition === 'D'">condition 데이터의 값은 D입니다.</p>
  <p v-else>어떤 조건에도 해당되지 않습니다.</p>
  <p v-show="showCondition">v-show 디렉티브 조건이 참입니다.</p>
  <p v-show="!showCondition">v-show 디렉티브 조건이 거짓입니다.</p>
  <hr>
  <h1>fruits 데이터의 반복 결과</h1>
  <ul>
    <li v-for="(fruit, index) in fruits" :key="index">
      인덱스: {{ index }}, 값: {{ fruit }}
    </li>
  </ul>
  <hr>
  <h1>user 데이터의 반복 결과</h1>
  <ul>
    <li v-for="(value, key, index) in user" :key="index">
      {{ index }}, {{ key }}, {{ value }}
    </li>
  </ul>
  <hr>
  <button type="button" v-on:click="clickHandler">클릭</button>
  <button type="button" v-on:dblclick="clickHandler">더블 클릭</button>
  <button type="button" @dblclick="clickHandler">더블 클릭(축약형)</button>
  <br>
  <button type="button" @click="clickHandler2($event)">이벤트 객체 출력</button>
  <button type="button" @click="($event) => console.log($event)">이벤트 객체 출력(화살표 함수)</button>
  <hr>
  <span>if 문으로 enter키 확인</span><input type="text" @keyup="($event) => onKeyupHandler($event)"/>
  <br>
  <span>수식어로 enter키 확인</span><input type="text" @keyup.enter ="($event) => onKeyupHandler2($event)"/>
  <hr>
  <h1>{{ number }}</h1>
  <button type="button" @click="increment">증가</button>
  <h1 v-once>{{ number2 }}(증가 안 됨)</h1>
  <button type="button" @click="increment2">증가</button>
  <hr>
  <div v-memo="[name2, gender]">
    <p>이름: {{ name2 }}</p>
    <p>성별: {{ gender }}</p>
    <p>나이: {{ age2 }}</p>
  </div>
  <button type="button" @click="name2 = '영희'">이름 변경</button>
  <button type="button" @click="gender = '여자'">성별 변경</button>
  <button type="button" @click="age = 30">나이 변경</button>
  <hr>
  <form id="loginForm">
    <label for="uid">아이디: </label>
    <input type="text" id="uid" v-model="uid" />
    <label for="upw">비밀번호: </label>
    <input type="password" id="upw" v-model="upw" />
    <button type="button" @click="login">로그인</button>
  </form>
  <hr>
  <form id="loginForm2">
    <textarea v-model="message2"></textarea>
    <button type="button" @click="printData">데이터 출력</button>
  </form>
  <hr>
  <form id="loginForm3">
    <label for="banana">
      <input type="checkbox" id="banana" v-model="fruits2" value="banana" />banana
    </label>
  </form>
  <hr>
  <form id="loginForm4">
    <label for="banana">
      <input type="checkbox" id="banana" v-model="fruits3" value="banana" />banana
    </label>
    <label for="orange">
      <input type="checkbox" id="orange" v-model="fruits3" value="orange" />orange
    </label>
    <label for="apple">
      <input type="checkbox" id="apple" v-model="fruits3" value="apple" />apple
    </label>
    <button type="button" @click="printData2">확인</button>
  </form>
  <hr>
  <form id="loginForm5">
    <label for="male">
      <input type="radio" id="male" name="gender" v-model="gender2" value="male"/>male
    </label>
    <label for="female">
      <input type="radio" id="female" name="gender" v-model="gender2" value="female"/>female
    </label>
    <button type="button" @click="printData3">확인</button>
  </form>
  <hr>
  <form id="loginForm">
    <select v-model="selectItem">
      <option value="americano">아메리카노</option>
      <option value="espresso">에스프레소</option>
      <option value="cafeLatte">카페라떼</option>
    </select>
    <button type="button" @click="printData4">확인</button>
  </form>
  <hr>
  <input type="text" @input="onChangeHandler($event)" />
  {{ message3 }}
  <hr>
  <select v-model="selected" @change="onChangeHandler2">
    <option value="banana">바나나</option>
    <option value="apple">사과</option>
  </select>
  가격: {{ price }}원
  <hr>
  <form @submit="onSubmitHandler">
    <button type="submit">전송</button>
  </form>
  <hr>
  <input type="text" @keyup="onKeyupHandler" />
  <hr>
  <!-- computed 속성 -->
  <h1>{{ lastName }} {{ firstName }}</h1>
  <h1>{{ lastName }} {{ firstName }}</h1>
  <hr>
  <h1>{{ fullName }}</h1>
  <h1>{{ fullName }}</h1>
  <hr>
  <h1>{{ numArr.filter((v) => v % 2 === 0).reduce((acc, cur) => acc + cur, 0) }}</h1>
  <hr>
  <h1>{{ evenSum }}</h1>
  <hr>
  <input type="text" v-model="inputStr" />
  <hr>
  <!-- oldValue와 newValue가 동일하게 보이는 것은 얕은 복사라서 그런 것 -->
  <h1>{{ arr }}</h1>
  <h1>{{ obj }}</h1>
  <button @click="arr.push(3)">배열 변경</button>
  <button @click="obj.age = 20">객체 변경</button>
  <hr>
  <h1 :style="{ color: primaryColor, fontStyle: primaryStyle}">Inline Style</h1>
  <hr>
  <h1>Internal Style</h1>
  <hr>
  <hr>
  <hr>
  <hr>
</template>

<style scoped>
.red-color {
  color:red;
}
</style>

<style>
@import '~/main.css';
</style>
