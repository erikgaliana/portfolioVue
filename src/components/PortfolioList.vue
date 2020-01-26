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
          <ProjectCard  :imgname="obj.img" :caption="obj.caption" :title="obj.title"></ProjectCard>
        </div>
      </div>

       

    </div>
  </section>

  
</template>

<script>

import ProjectCard from './ProjectCard'

export default {
   
components :{
   ProjectCard
  },

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