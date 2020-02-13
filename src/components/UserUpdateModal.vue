<template>
  <div>
    <button class="button is-primary is-outlined m-t-sm" @click="isOpen=!isOpen" >Update Info</button>
    <div :class="['modal', {'is-active': isOpen}]">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">User Profile</p>
          <button class="delete" aria-label="close" @click="isOpen=false"></button>
        </header>
        <section class="modal-card-body">
          <form>
            <div class="field">
              <label class="title">Name</label>
              <input class="input" v-model="user.name">
            </div>
            <div class="field">
              <label class="title">User name</label>
              <input class="input" v-model="user.username">
            </div>
            <div class="field">
              <label class="title">Avatar</label>
              <input class="input" v-model="user.avatar">
            </div>
            <div class="field">
              <label class="title">Info</label>
              <input class="input" v-model="user.info">
            </div>
          </form>
        </section>
        <footer class="modal-card-foot">
          <button class="button is-success" @click="emitUser">Save changes</button>
          <button class="button" @click="isOpen=false">Cancel</button>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props:{
        authUser:{
            type: Object,
            required: true
        }        
    },
    data () {
      return {
        isOpen: false,
        user : {...this.authUser}
      }
    },    
    methods: {      
      emitUser(){          
          this.$emit('userSubmitted', {user:this.user, done: () => {
          debugger
          this.user.name = ''
          this.user.username = ''
          this.user.avatar = ''
          this.user.info = ''
          this.isOpen = false
        }})
      }
    }
}
</script>