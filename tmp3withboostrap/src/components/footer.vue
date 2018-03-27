<template lang="html">
  <div class="row content_downside_footer">
    <div class="col-md-6 col-lg-3 col-xs-12 content_downside_footer_content left_footer" :class="item.footerClass" :key="index" v-for="(item, index) in footerNav">
      <h5>{{ item.title }}</h5>
      <p v-html="item2" v-for="item2 in item.des"></p>
    </div>
  </div>
</template>

<script>

export default {
  props: {},
  data() {
      return {
        'footerNav': [
          {
            'title': 'PLACE HOLDER',
            'des': [
              'This is just a place holder.',
              'This is just a place holder.',
              'This is just a place holder.'
            ],
            'footerClass': 'left_footer'
          },
          {
            'title': 'PLACE HOLDER',
            'des': [
              'This is just a place holder.',
              'This is just a place holder.',
              'This is just a place holder.'
            ],
            'footerClass': 'middle_left_footer'
          },
          {
            'title': 'PLACE HOLDER',
            'des': [
              'This is just a place holder.',
              'This is just a place holder.',
              'This is just a place holder.'
            ],
            'footerClass': 'middle_right_footer'
          },
          {
            'title': 'CONNECT',
            'des': [
              '<a href="https://www.google.com.tw"><i class="fa fa-envelope-o" aria-hidden="true"></i> Mail us</a></span>',
              '<a href="https://www.facebook.com/"><i class="fa fa-envelope-o" aria-hidden="true"></i> Facebook </a></span>',
              '<a href="https://twitter.com/?lang=zh-tw"><i class="fa fa-envelope-o" aria-hidden="true"></i> Twitter </a></span>',
              '<a href="https://plus.google.com/?hl=zh_tw"><i class="fa fa-envelope-o" aria-hidden="true"></i> Google+</a></span>'
            ],
            'footerClass': 'right_footer'
          },
        ]
      }
  },
  computed: {},
  components: {},
  // Life cycle hook
  beforeCreate() {},
  mounted() {},
  methods: {},
  watch: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

.content_downside_footer {
  margin-top: 20px;
  margin-left: -20px;
  margin-right: -22px;
}
.content_downside_footer_content {
  padding-bottom: 30px;
  background-color: rgb(212, 228, 203);
}
.content_downside_footer .left_footer,  .content_downside_footer .middle_left_footer,  .content_downside_footer .middle_right_footer,  .content_downside_footer .right_footer {
  border: 2px solid rgb(46, 88, 27);
  color: rgb(105, 105, 105);
  border-left: 0px;
}
.content_downside_footer_content h5 {
  margin-left: 0px;
}
.content_downside_footer_content p {
  margin-left: 10px;
  font-size: 15px;
  height: 8px;
}
</style>
