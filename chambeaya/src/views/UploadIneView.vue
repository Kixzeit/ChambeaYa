<template>
  <div class="container-fluid p-4 mx-3">
    <UploadImageComponent
    class ="centra" 
    titulo="subir imagen de identificacion" 
    radio="1.66" 
    apiUrl="https://upload.qbits.mx/api/up/upload-identification"
    returnUrl="/ui/ine"/>
    <FooterComponent class="down" />
  </div>
</template>

<script>
import UploadImageComponent from '@/components/UploadImageComponent.vue';

export default {
  components: {
    UploadImageComponent
  }
}
</script>

<style scoped>
.centra {
  max-width: 600px;
  margin: auto;
  padding-top: 10%;
  padding-bottom: 200px;
}
.fondo-card {
  background-color: #efefff;
}
.croppedImage {
  display: block;
  width: 80%;
  height: auto;
}
.img-user {
  text-align: center;
  padding: 20px;
}
img {
  height: 300px;
  margin: 0 auto;
}
.drag {
  background-color: gray;
  color: white;
}
</style>

 <!-- // aspRadio puede ser:
        //    0 (formato libre),
        //    1/1 (cuadrado),
        //    16/9 (rectángulo horizontal),
        //    9/16 (rectangulo vertical), etc -->