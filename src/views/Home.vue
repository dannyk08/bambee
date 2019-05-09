<template>
  <div class="home">
    <Container>
      <h1>Tell Us About Your Business</h1>
      <Input
        @input="handleInput($event)"
        :inputId="'fullName'"
        :inputName="'fullName'"
        :placeholder="'Full Name'"
      />
      <Input
        @input="handleInput($event)"
        :inputId="'email'"
        :inputName="'email'"
        :placeholder="'Business Email'"
      />
      <Input
        @input="handleInput($event)"
        :inputId="'businessName'"
        :inputName="'businessName'"
        :placeholder="'Business Name'"
      />
      <Input
        @input="handleInput($event)"
        :inputId="'companyAddress'"
        :inputName="'companyAddress'"
        :placeholder="'Company Address'"
      />
      <Input
        @input="handleInput($event)"
        :inputId="'businessAddress'"
        :inputName="'businessAddress'"
        :placeholder="'Business Address'"
      />
      <Input
        @input="handleInput($event)"
        :inputId="'businessSize'"
        :inputName="'businessSize'"
        :placeholder="'Business Size'"
      />
      <Input
        @input="handleInput($event)"
        :inputId="'businessPhone'"
        :inputName="'businessPhone'"
        :placeholder="'Business Phone'"
      />
      <Button @buttonClick="handleContinue()">
        <span>
          <font-awesome-icon icon="lock"></font-awesome-icon>
          <span>Continue</span>
        </span>
      </Button>
    </Container>
  </div>
</template>

<script>
import Input from "../components/Input.vue";
import Container from "../components/Container.vue";
import Button from "../components/Button.vue";

export default {
  name: "bb-home",
  components: {
    Input,
    Container,
    Button
  },
  methods: {
    handleInput({ target }) {
      this.form[target.name] = target.value;
    },
    handleContinue() {
      this.$router.push("schedule");
      // console.log("router", this.$router);
    }
  },
  data() {
    return {
      form: {
        fullName: "",
        email: "",
        businessName: "",
        companyAddress: "",
        businessAddress: "",
        businessSize: "",
        businessPhone: ""
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  justify-content: center;
}

.container {
  padding: 1rem 2rem 2rem;
  text-align: center;
}

.button {
  background: green;
  border-color: green;
  color: white;
}
</style>

