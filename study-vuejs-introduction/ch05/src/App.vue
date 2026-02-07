<script>
  import FirstChild from '@/components/FirstChild.vue';
  import SecondChild from '@/components/SecondChild.vue';
  import UserProfile from '@/components/UserProfile.vue';
  import CustomButton from '@/components/CustomButton.vue';
  import DefaultLayout from '@/components/DefaultLayout.vue';
  import MixLayout from '@/components/MixLayout.vue';
  import DynamicLayout from '@/components/DynamicLayout.vue';
  import BasicScope from '@/components/BasicScope.vue';
  import { message, reversedMessage } from '@/keys.js';
  export default {
    components: {
      FirstChild,
      SecondChild,
      UserProfile,
      CustomButton,
      DefaultLayout,
      MixLayout,
      DynamicLayout,
      BasicScope,
    },
    provide() {
      return {
        // Symbol로 내보내는 것이 권장됨
        message: this.message,
        reversedMessage: this.reversedMessage,
        [message]: this.message,
        [reversedMessage]: this.reversedMessage,
      };
    },
    inject: ['globalMessage'],
    data() {
      return {
        visible: true,
        name: '김철수',
        age: 30,
        userName: '김철수',
        message: 'Hello, Vue JS!',
        parentNum: 5,
        dynamicName: 'header',
        count: 0,
      };
    },
    computed: {
      reversedMessage() {
        return this.message.split('').reverse().join('');
      },
      numOddEven() {
        return this.parentNum % 2 === 0 ? '짝수' : '홀수';
      },
    },
    // 뷰의 라이프사이클 훅
    beforeCreate() {
      console.log('beforeCreate');
    },
    created() {
      console.log('created');
      setTimeout(() => {
        this.visible = false;
      }, 3000);
    },
    beforeMount() {
      console.log('beforeMount');
    },
    mounted() {
      console.log('mounted');
      const domEl = this.$refs.domEl;
      const text = domEl.innerText;
      console.log(text);

      console.log(`메서드 호출 전: ${this.$refs.child.num}`);
      console.log(`메서드 호출 전: ${this.$refs.child.doubleNum}`);

      setTimeout(() => {
        this.$refs.child.increment();
        console.log(`메서드 호출 후: ${this.$refs.child.num}`);
        console.log(`메서드 호출 후: ${this.$refs.child.doubleNum}`);
      }, 1000);

      console.log(this.$refs.childRef.childNum);
      console.log(this.$refs.childRef.childNumOddEven);
      console.log(this.$refs.childRef.getChildNum());
    },
    beforeUpdate() {
      console.log('beforeUpdate');
    },
    updated() {
      console.log('updated');
    },
    beforeUnmount() {
      console.log('beforeUnmount');
    },
    unmounted() {
      console.log('unmounted');
    },
    methods: {
      printHello() {
        alert('안녕하세요!');
      },
      printHello2(name, age) {
        alert(`안녕하세요! 저는 ${name}이고, 나이는 ${age}살입니다.`);
      },
      printHello3(name, age) {
        alert(`안녕하세요! 저는 ${name}이고, 나이는 ${age}살입니다.`);
      },
      getParentNum() {
        return this.parentNum;
      },
    },
  };
</script>

<template>
  <FirstChild v-if="visible" ref="child" />
  <SecondChild />
  <hr />
  <h1 ref="domEl">h1 태그</h1>
  <hr />
  <UserProfile name="김철수" age="30" />
  <hr />
  <UserProfile :name="`김철수`" :age="30" />
  <hr />
  <UserProfile :name="name" :age="age" />
  <hr />
  <UserProfile :name="`김철수`" :user-name="userName" />
  <hr />
  <UserProfile :name="`김철수`" is-human />
  <hr />
  <UserProfile :name="`김철수`" :is-human="true" />
  <hr />
  <UserProfile name="김철수" @print-hello="printHello" />
  <hr />
  <UserProfile name="김철수" @print-hello2="(name, age) => printHello2(name, age)" />
  <hr />
  <UserProfile name="김철수" @print-hello3="({ name, age }) => printHello3(name, age)" />
  <hr />
  <FirstChild />
  <hr />
  <h1>{{ globalMessage }}</h1>
  <hr />
  <FirstChild ref="childRef" />
  <hr />
  <CustomButton />
  <hr />
  <CustomButton>더블 클릭</CustomButton>
  <hr />
  <DefaultLayout>
    <template v-slot:header>
      <header>
        <h1>Header</h1>
      </header>
    </template>
    <template v-slot:main>
      <main>
        <h1>Main</h1>
      </main>
    </template>
    <template v-slot:footer>
      <footer>
        <h1>Footer</h1>
      </footer>
    </template>
  </DefaultLayout>
  <hr />
  <MixLayout>
    <template #header>
      <header>
        <h1>Header</h1>
      </header>
    </template>
    <!-- <template #default> -->
    <!-- 있어도 되고 없어도 됨 -->
    <main>
      <h1>Main</h1>
    </main>
    <!-- </template> -->
    <!-- 있어도 되고 없어도 됨 -->
    <template #footer>
      <footer>
        <h1>Footer</h1>
      </footer>
    </template>
  </MixLayout>
  <hr />
  <DynamicLayout>
    <template #[dynamicName]>
      <!-- dynamicName가 바뀜에 따라 슬롯이 바뀜 -->
      <h2>동적 슬롯</h2>
    </template>
  </DynamicLayout>
  <hr />
  <!-- template을 포함한 축약형 -->
  <!-- <BasicScope v-slot="slotProps"> -->
  <BasicScope>
    <template #default="slotProps">
      <h1>범위</h1>
      <h1>범위: {{ message }} / {{ count }}</h1>
      <h1>{{ slotProps.message }} / {{ slotProps.count }}</h1>
    </template>
    <template #header="headerProps">
      <h1>{{ headerProps.message }}</h1>
    </template>
    <template #main="{ count }">
      <h1>{{ count }}</h1>
    </template>
  </BasicScope>
  <hr />
  <hr />
</template>

<style scoped>
  h1,
  p {
    color: orange !important;
  }
</style>
