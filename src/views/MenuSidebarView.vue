<template>
  <div>
    <SideBarKixComponent />
    <div class="container-fluid p-5 mx-3">
      <div class="card p-2">
        <h1>Login</h1>
        <div class="row">
          <div class="col-sm-12 mb-2">
            <input
              type="text"
              class="form-control icon-user"
              id="text-usr"
              v-model="fieldUser"
              placeholder="william@email.com"
            />
            <span :class="usrErrorMsgClass">Formato de correo inválido</span>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12">
            <div class="d-flex justify-content-between">
              <input
                :type="credential"
                class="form-control icon-key"
                id="text-usr"
                v-model="fieldPassword"
                placeholder="******"
              />
              <a :class="eye" href="#" @click="toogle"></a>
            </div>
            <span :class="passErrorMsgClass">Formato de clave inválido</span>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-12" style="text-align: right">
            <a class="liga " href="/ui/forgot">Forgot password ?</a>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12">
            <div class="d-flex justify-content-between">
              <button
                class="btn btn-success"
                :disabled="inhabilitado"
                @click="checkCredentials"
              >
                Login
              </button>
              <a class="btn btn-warning" href="/ui/register">Register</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideBarKixComponent from "@/components/SideBarKixComponent.vue";

export default {
  components: {
    SideBarKixComponent,
  },
};
</script>
