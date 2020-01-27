<template>
    <div>
          <a class="portfolio-link" data-toggle="modal" href="#portfolioModal1">
            <div class="portfolio-hover">
              <div class="portfolio-hover-content">
                <i class="fas fa-plus fa-3x"></i>
              </div>
            </div>
            <img class="img-fluid" :src="img" alt="">
          </a>
          <div class="portfolio-caption">
            <h4>{{caption}}</h4>
            <p class="text-muted">{{title}}</p>
            <a :href="link" target="_blank">Go to project</a>
          </div>
     </div>
</template>

<script>
export default {
    props: ['img','caption','title','link']
}

</script>

<style>

</style>