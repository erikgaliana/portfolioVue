<template>
    
  <section class="bg-light page-section" id="portfolio">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h2 class="section-heading text-uppercase">Portfolio</h2>
          <h3 class="section-subheading text-muted">Latest projects</h3>
        </div>
      </div>
      <div class="row">

        <div class="col-md-4 col-sm-6 portfolio-item" v-for="(obj, key) in portfolioJson" :key="key">
          <ProjectCard  :imgname="obj.img" :caption="obj.caption" :title="obj.title" :link="obj.link"></ProjectCard>
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
            caption : "Erik's Portfolio",
            title :"Front End Vue SPA",
            link : "https://github.com/erikgaliana/portfolioVue"
        },
        {
            img : "https://res.cloudinary.com/ekgaliana/image/upload/v1579988564/portfolioVue/01-thumbnail_qqgisk.jpg",
            caption : "Solve It App",
            title :"MERN SPA App",
            link : "https://github.com/erikgaliana/Solve-it-Client"
        },
        {
            img : "https://res.cloudinary.com/ekgaliana/image/upload/v1579988564/portfolioVue/01-thumbnail_qqgisk.jpg",
            caption : "Cyrano App",
            title :"Mongo Express Node & Handlebars Web app",
            link : "https://github.com/erikgaliana/cyrano"
        },
        {
             img : "https://res.cloudinary.com/ekgaliana/image/upload/v1579988564/portfolioVue/01-thumbnail_qqgisk.jpg",
            caption : "Space Invaders Project",
            title :"Javascript ES5&ES6",
            link : "https://github.com/erikgaliana/space-invaders"

        },
        {
             img : "https://res.cloudinary.com/ekgaliana/image/upload/v1579988564/portfolioVue/01-thumbnail_qqgisk.jpg",
            caption : "Tarjetines SL e-commerce",
            title :"Wordpress+woocommerce",
            link : "https://www.tarjetinesparafloristerias.com"
        }
        
        ]

    })
    
}
</script>

<style>

</style>