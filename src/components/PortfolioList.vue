<template>
    
  <section class="bg-light page-section" id="portfolio">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h2 class="section-heading text-uppercase">Portfolio</h2>
          <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
        </div>
      </div>
      <div class="row">

        <div class="col-md-4 col-sm-6 portfolio-item" v-for="(obj, key) in portfolioJson" :key="key">
          <a class="portfolio-link" data-toggle="modal" href="#portfolioModal1">
            <div class="portfolio-hover">
              <div class="portfolio-hover-content">
                <i class="fas fa-plus fa-3x"></i>
              </div>
            </div>
            <img class="img-fluid" :src="obj.img" alt="">
          </a>
          <div class="portfolio-caption">
            <h4>{{obj.caption}}</h4>
            <p class="text-muted">{{obj.title}}</p>
          </div>
        </div>
      </div>

        <!-- Modal 1 -->
  <div class="portfolio-modal modal fade" id="portfolioModal1" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="close-modal" data-dismiss="modal">
          <div class="lr">
            <div class="rl"></div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-lg-8 mx-auto">
              <div class="modal-body">
                <!-- Project Details Go Here -->
                <h2 class="text-uppercase">Project Name</h2>
                <p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                <img class="img-fluid d-block mx-auto" src="img/portfolio/01-full.jpg" alt="">
                <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                <ul class="list-inline">
                  <li>Date: January 2017</li>
                  <li>Client: Threads</li>
                  <li>Category: Illustration</li>
                </ul>
                <button class="btn btn-primary" data-dismiss="modal" type="button">
                  <i class="fas fa-times"></i>
                  Close Project</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>



    </div>
  </section>

  
</template>

<script>
export default {
   
   data: ()=> ({
        portfolioJson : [{
            img : "https://res.cloudinary.com/ekgaliana/image/upload/v1579988564/portfolioVue/01-thumbnail_qqgisk.jpg",
            caption : "Window",
            title :"Photography"
        },
        {
            img : "https://res.cloudinary.com/ekgaliana/image/upload/v1579988564/portfolioVue/01-thumbnail_qqgisk.jpg",
            caption : "Window",
            title :"Photography"
        },
        {
             img : "https://res.cloudinary.com/ekgaliana/image/upload/v1579988564/portfolioVue/01-thumbnail_qqgisk.jpg",
            caption : "Window",
            title :"Photography"
        },
        {
             img : "https://res.cloudinary.com/ekgaliana/image/upload/v1579988564/portfolioVue/01-thumbnail_qqgisk.jpg",
            caption : "Window",
            title :"Photography"
        }
        
        ]

    })
    
}
</script>

<style>

</style>