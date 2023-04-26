<template>
  <div>
    <SideBarKixComponent/>
      <div class="container-fluid p-4 row mx-2 d-flex">
        <div class="card card-body col-sm-12" >
          <img src="../assets/chambeaya.png" class="d-block img-fluid img-thumbnail jover" style="width: 85px" alt="">
          <h6 class="my-3">ChambeaYa!</h6>

<!-- Carousel wrapper -->
<div
  id="carouselVideoExample"
  class="carousel slide carousel-fade"
  data-mdb-ride="carousel"
>
  <!-- Inner -->
  <div class="carousel-inner">
    <!-- Single item -->
    <div class="carousel-item active">
      <video class="img-fluid"  autoplay loop muted>
        <source src="../assets/video/chambeaya.mp4" type="video/mp4" />
      </video>
      <div class="carousel-caption d-md-block overflow-hidden">
        <h5 class="text-white fw-bold"> <img src="../assets/chambeaya.png" style="width:50px; height: 50px;" alt=""> ChambeaYa!</h5>
        <p class="text-white fw-bold">
          Para su mejor futuro, proporcionamos un trabajo seguro 
        </p>
      </div>
    </div>

  </div>
  <!-- Inner -->

</div>
<!-- Carousel wrapper -->

<!-- Gallery -->
<div class="row">
  <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
    <img
      src="https://masdemx.com/wp-content/uploads/2017/04/oficios-mexicanos-taquero.jpg"
      class="w-100 h-auto h-auto shadow-1-strong rounded mb-4 jover"
      alt="Boat on Calm Water"
    />

    <img
      src="https://th.bing.com/th/id/R.d756add7c46ee7d9940ef620b0cf357e?rik=m%2fXlc1zwP3ceQw&pid=ImgRaw&r=0"
      class="w-100 h-auto shadow-1-strong rounded mb-4 jover"
      alt="Wintry Mountain Landscape"
    />
  </div>

  <div class="col-lg-4 mb-4 mb-lg-0">
    <img
      src="https://www.imer.mx/rmi/wp-content/uploads/sites/3/2014/08/8185.jpg"
      class="w-100 h-auto shadow-1-strong rounded mb-4 jover"
      alt="Mountains in the Clouds"
    />

    <img
      src="https://th.bing.com/th/id/R.b0902057335c9f2607712d44903b6f45?rik=lpSqEicjUqD02Q&riu=http%3a%2f%2fmxcity.mx%2fwp-content%2fuploads%2f2015%2f11%2fmxcity.mx_oficios-.jpg&ehk=2v9lZ2HhRB3nAw0Ud%2bYjpAb7vbWrgeWJUmHlnyKn8HQ%3d&risl=&pid=ImgRaw&r=0"
      class="w-100 h-auto shadow-1-strong rounded mb-4 jover"
      alt="Boat on Calm Water"
    />
  </div>

  <div class="col-lg-4 mb-4 mb-lg-0">
    <img
      src="https://mxcity.mx/wp-content/uploads/2015/11/zapatero.jpg"
      class="w-100 h-auto shadow-1-strong rounded mb-4 jover"
      alt="Waves at Sea"
    />

    <img
      src="https://th.bing.com/th/id/OIP.FjERM0tu_bIPz198l9d30QHaLH?pid=ImgDet&rs=1"
      class="w-100 h-auto shadow-1-strong rounded mb-4 jover"
      alt="Yosemite National Park"
    />
  </div>
</div>
<!-- Gallery -->



        </div>
        


        

      </div>
  </div>
</template>

<script>
import SideBarKixComponent from '@/components/SideBarKixComponent.vue'


export default {
  components: {
    SideBarKixComponent
  }
}

</script>
