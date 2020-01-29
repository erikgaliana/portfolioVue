<template>
    <div>
          <a class="portfolio-link" data-toggle="modal" :href="deploy" target="_blank">
            <div class="portfolio-hover">
              <div class="portfolio-hover-content">
                <i class="fas fa-plus fa-3x"></i>
              </div>
            </div>
            <img class="img-fluid" :src="imgname" alt="">
          </a>
          <div class="portfolio-caption">
            <h4>{{caption}}</h4>
            <p class="text-muted">{{title}}</p>
            <a :href="link" target="_blank">View code</a>
          </div>
     </div>
</template>

<script>
export default {
    props: ['imgname','caption','title','deploy','link']
}

</script>

<style>

</style>