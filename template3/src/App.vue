<template>
  <div id="app">
    <div class="grid-container">
      <div class="grid-element-header">
        <div>
          <img src="./assets/images/logo.png" alt="">
        </div>
        <ul class="navigation">
          <li v-for="item in navigation">{{ item.title }}</li>
        </ul>
      </div>
      <div class="grid-element-banner">
        <div class="hint">
          <h1 class="hint-title">GARDENING TIPS</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, laboriosam! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, laboriosam! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, laboriosam! </p>
        </div>
      </div>
      <div class="grid-element-gallery">
        <ul>
          <li v-for="item in gallery">
            <ul>
              <li><img :src="item.img" alt=""></li>
              <li>
                <h5>{{ item.title }}</h5>
                <div>{{ item.describe }}</div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      navigation: [
        {title: 'Home', url: 'http://www.google.com'},
        {title: 'About', url: 'http://www.google.com'},
        {title: 'Plants', url: 'http://www.google.com'},
        {title: 'Gardens', url: 'http://www.google.com'},
        {title: 'News', url: 'http://www.google.com'},
        {title: 'Contact', url: 'http://www.google.com'}
      ],
      gallery: [
        {
          title: 'Tips',
          describe: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
          img: require('./assets/images/gardening2.jpg')
        },
        {
          title: 'Happy Gardener',
          describe: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
          img: require('./assets/images/gardening3.jpg')
        },
        {
          title: 'Planting',
          describe: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
          img: require('./assets/images/gardening4.jpg')
        },
      ]
    }
  }
}
</script>

<style lang="scss">
body {
  margin: 0px;
}
/*
* {
  border: solid 1px red;
} */
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.grid-container {
  display: grid;
  grid-template-columns: 20px auto 20px;
  grid-template-rows: 195px 500px 100px;
  background-color: rgb(53, 102, 24);
  grid-template-areas:
    "header"
    "banner";
  .grid-element-header {
    grid-area: header;
    grid-column-start: 2;
    grid-column-end: 3;
    background-color: white;
    div {
      height: 95px;
      text-align: center;
      img {
        position: relative;
        top: 50%;
        transform: translateY(-50%);
      }
    }
    ul {
      width: 100%;
      height: 100%;
      padding: 0px; //要加入reset
      margin: 0px;
      li {
        display: inline-block;
        text-align: center;
        font-size: 16px;
        font-weight: bolder;
        width: calc(100% / 6 );
        line-height: 95px;
        background-color: rgb(75, 75, 75);
        color: rgb(217, 234, 207);
        &:first-child {
          background-color: rgb(150, 178, 133);
          color: rgb(44, 99, 0)
        }
        &:hover {
          background-color: rgb(217, 234, 207);
          color: rgb(75, 75, 75);
        }
      }
    }
  }
  .grid-element-banner {
    grid-area: banner;
    grid-row-start: 2;
    grid-row-end: 3;
    grid-column-start: 2;
    grid-column-end: 3;
    background: url(./assets/images/gardening1.jpg) no-repeat;
    background-size: cover;
    position: relative;
    .hint {
      box-sizing: border-box;
      position: absolute;
      bottom: 0px;
      padding: 10px;
      width: 100%;
      color: white;
      background-color: rgba(black, 0.5);
      h1, p {
        margin: 0px;
      }
      p::after {
        content: '';
        display: inline-block;
        background: url(./assets/images/next.png) no-repeat;
        background-size: cover;
        margin-left: 5px;
        width: 15px;
        height: 15px;
        cursor: pointer;
      }
    }
  }
  .grid-element-gallery {
    grid-area: gallery;
    grid-row-start: 3;
    grid-row-end: 4;
    grid-column-start: 2;
    grid-column-end: 3;
    ul {
      padding: 0px;
      li {
        display: inline-block;
        width: calc(100% / 3 );
        div {
          display: inline;
        }
        h5 {
          margin: 0px;
        }
      }
    }
  }
}



</style>
