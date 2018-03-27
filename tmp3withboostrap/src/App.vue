<template>
  <div id="app">
    <div class="poster">
      <div class="container header">
        <div class="row header-img">
          <div class="col-md-12 col-lg-12 col-xs-12">
            <img src="./assets/images/logo.png" class="img-fluid" alt="">
          </div>
        </div>
        <div class="row header_content">
          <div class="col-6 col-md-6 col-lg-2 col-xs-2" :key="index" v-for="(item, index) in nav"><a :href="item.link">{{ item.title }}</a></div>
        </div>
      </div>
      <div class="container content">
        <div class="row content_upside">
          <div class="col-md-12 col-lg-12 col-xs-12">
            <div class="row content_upside_ad">
              <div class="col-md-12 col-lg-12 col-xs-12">
                <h5>GARDENING TIPS</h5>
                <p>This is just a place holder, so you can see what the site would like. This is just a place holder, so you can see what the site would like. This is just a place holder, so you can see what the site would like.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="row content_cneter">
          <div class="col-md-12 col-lg-4 col-xs-12 media" :key="index" v-for="(item, index) in medias">
            <img class="d-flex mr-3" :src="item.img" alt="Generic placeholder image">
            <div class="media-body">
              <h5 class="mt-0">{{ item.title }}</h5>
              <p>{{ item.des }}</p>
            </div>
          </div>
        </div>
        <div class="row content_downside">
            <div class="col-md-12 col-lg-12 col-xs-12 content_downside_title content_downside_content_first">
              <h4>FEATURED GARDENS</h4>
            </div>
            <div class="row content_downside_content">
              <div class="col-md-12 col-lg-3 col-xs-12" v-for="(item, index) in gallery">
                <img class="d-flex mr-3 img-fluid" src="./assets/images/garden1.jpg" alt="Generic placeholder image">
                <h5>JULIET'S GARDEN</h5>
                <p>This is just a place holder, so you can see what the site would like.</p>
              </div>
              <div class="col-md-12 col-lg-12 col-xs-12 content_downside_content_seconed">
                <div class="row">
                  <div class="col-md-4 col-lg-4 col-xs-12">
                   <img class="d-flex align-self-center mr-3 img-fluid col-xs-12" src="./assets/images/gardening5.jpg" alt="Generic placeholder image">
                  </div>
                  <div class="col-md-8 col-lg-8 col-xs-12 content_downside_content_seconed_place_holder">
                    <h5 class="mt-0 content_downside_content_seconed_title">TIPS OF THE WEEK</h5>
                    <ol class="mt-0 ">
                      <li v-for="item in 3">This is just a place holder, so you can see what the site would like. This is just a place holder, so you can see what the site would like.</li>
                    </ol>
                  </div>
                </div>
                <footer-component></footer-component>
                
              </div>
          </div>
        </div>
      </div>
      <div class="row footer_on_the_bottom">
        <div class="col-md-12 col-lg-12 col-xs-12">

            <p class="copyright">&COPY; 2023 Zerotype. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FOOTER from './components/footer.vue';

export default {
  name: 'app',
  components: {
    'footer-component': FOOTER
  },
  data () {
    return {
      nav: [
        {
          'title': 'Home',
          'link' : 'https://www.google.com'
        },
        {
          'title': 'About',
          'link' : 'https://www.google.com'
        },
        {
          'title': 'Plants',
          'link' : 'https://www.google.com'
        },
        {
          'title': 'Gardens',
          'link' : 'https://www.google.com'
        },
        {
          'title': 'News',
          'link' : 'https://www.google.com'
        },
        {
          'title': 'Contact',
          'link' : 'https://www.google.com'
        }
      ],
      'medias': [
        {
          'title': 'Tips',
          'img': require('./assets/images/gardening4.jpg'),
          'des': 'This is just a place holder. This is just a place holder.',
          'link': 'https://www.google.com'
        },
        {
          'title': 'Happy Gardener',
          'img': require('./assets/images/gardening3.jpg'),
          'des': 'This is just a place holder. This is just a place holder.',
          'link': 'https://www.google.com'
        },
        {
          'title': 'Planting',
          'img': require('./assets/images/gardening2.jpg'),
          'des': 'This is just a place holder. This is just a place holder.',
          'link': 'https://www.google.com'
        },
      ],
      'gallery': [
        {
          'title': 'JULIET\'S GARDEN',
          'img': require('./assets/images/garden1.jpg'),
          'des': 'This is just a place holder, so you can see what the site would like.'
        },
        {
          'title': 'JULIET\'S GARDEN',
          'img': require('./assets/images/garden2.jpg'),
          'des': 'This is just a place holder, so you can see what the site would like.'
        },
        {
          'title': 'JULIET\'S GARDEN',
          'img': require('./assets/images/garden3.jpg'),
          'des': 'This is just a place holder, so you can see what the site would like.'
        },
        {
          'title': 'JULIET\'S GARDEN',
          'img': require('./assets/images/garden4.jpg'),
          'des': 'This is just a place holder, so you can see what the site would like.'
        }
      ]
    }
  },

}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
html {
  margin: 0px;
}
body {
  background-image: url("./assets/images/bg-body.jpg");
  padding-left: 155px;
  padding-right: 155px;
  margin: 0px;
}
.poster {
  height: auto;
  margin:0px auto;
  background-color: rgb(42, 85, 19);
  text-align: center;
}
.content, .content .content_downside .content_downside_first_title {
  padding-left: 20px;
  padding-right: 20px;
}
.header-img {
  background-color: white;
  padding-top: 35px;
  padding-bottom: 20px;
  margin: auto;
  margin-left: 20px;
  margin-right: 20px;
}
.header_content {
  margin-left: 20px;
  margin-right: 20px;
  color: white;
}
.header_content div {
  padding: 10px;
  cursor: pointer;
  background-color: rgb(58, 58, 58);
  text-align: center;
  border-bottom: 2px solid white;
  &:hover {
    background-color: rgb(134, 166, 115);
    color: rgb(44, 44, 44);
  }
}
.header_content div a {
  color: inherit;
}
.header_content div:first-child {
  color: rgb(44, 44, 44);
  background-color: rgb(134, 166, 115);
}
.content .content_upside {
  background-image: url("./assets/images/gardening1.jpg");
  -webkit-background-size:auto;
  margin-left: 15px;
  margin-right: 15px;
}
.content .content_upside .content_upside_ad {
  background: rgba(0, 0, 0, 0.5);
  margin-top: 310px;
  text-align: left;
}
.content .content_upside .content_upside_ad h5 {
  color: rgb(210, 230, 197);
  margin-top: 20px;
}
.content .content_upside .content_upside_ad p {
  color: white;
}
.content .content_upside .content_upside_ad p::after {
  content: url('./assets/images/next.png');
}
.content .content_cneter {
  padding: 20px;
  padding-left: 30px;
  text-align: left;
  line-height: 18px;
  color: white;
}
.content .content_cneter img {
  border: 1px solid white;
}
.content .content_cneter h5 {
  color: rgb(210, 230, 197);
}
.content .content_downside {
  text-align: left;
  background-color: white;
  padding-left: 20px;
  padding-right: 20px;
  margin-left: 15px;
  margin-right: 15px;
  color: rgb(105, 105, 105);
}
.content .content_downside h5 {
  color: rgb(104, 60, 23);
  margin-right: -4px;
}
.content .content_downside_title {
  background-color: rgb(212, 228, 203);
  border-bottom: 1px solid rgb(46, 88, 27);
  margin: 20px;
  margin-left: 0px;
  padding-top: 7px;
  padding-right: 1px;
  color: rgb(104, 60, 23);
}
.content .content_downside_content h5 {
  margin-top: 20px;
}
.content .content_downside_content img {
  margin-right: 10px;
}
.content_downside_content_seconed h5 {
  margin-left: 25px;
  padding: 10px;
  background-color: rgb(212, 228, 203);
  color: rgb(104, 60, 23);
}
.content_downside_content_seconed .content_downside_content_seconed_title {
  border-bottom: 1px solid rgb(46, 88, 27);
}
.content_downside_content_seconed .content_downside_content_seconed_title {
  margin-left: 15px;
}
.content_downside_content_seconed .content_downside_content_seconed_place_holder {
  padding-left: 0px;
  padding-right: 18px;
  font-size: 15px;
}
.content_downside_content_seconed li {
  margin-top: 15px;
  color: rgb(105, 105, 105);
}

.icons_list {
  margin-left: -4px;

}
.icons_list span a {
  color: rgb(105, 105, 105);
}
.footer_on_the_bottom {
  margin: 0px;
  padding-top: 10px;
  background-color: rgb(42, 85, 19);
  text-align: center;
  color: white;
}
@media (max-width: 990px) {
  body {
    padding-left: 85px;
    padding-right: 85px;
  }
  .content .content_upside .content_upside_ad {
    background: rgba(0, 0, 0, 0.5);
    margin-top: 180px;
  }
}
@media (max-width: 770px) {
  body {
    padding-left: 15px;
    padding-right: 15px;
  }
  .content .content_upside .content_upside_ad {
    background: rgba(0, 0, 0, 0.5);
    margin-top: 90px;
  }
}
</style>
