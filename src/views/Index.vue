<template>
    <div class="index">
        
        <div class="section-1 padding-bottom-100">
            <div class="container-fluid">
                <div class="row">

                    <div class="col-md-6 col-lg-6 col-xl-5">
                        <div class="single-blog">
                            <div class="img-wrapper">
                                <img src="../assets/image/magazine/1.jpg" alt>
                            </div>
                            <div class="short-details position-right-bottom">
                                <h3 class="short-details-categories">tours & travel</h3>
                                <div class="short-details-title">created face stars sixth forth fow earth firmament meat</div>
                                <div class="short-details-extra-info"><span class="short-details-extra-info-date">march 12, 2019 .</span><span class="short-details-extra-info-author">by allen mark</span></div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6 col-lg-6 col-xl-4">
                        <div class="single-blog style-one">
                            <div class="img-wrapper">
                                <img src="../assets/image/magazine/2.jpg" alt>
                            </div>
                            <div class="short-details">
                                <h3 class="short-details-categories">tours & travel</h3>
                                <div class="short-details-title">created face stars sixth forth fow earth firmament meat</div>
                                <div class="short-details-extra-info"><span class="short-details-extra-info-date">march 12, 2019 .</span><span class="short-details-extra-info-author">by allen mark</span></div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-12 col-xl-3">
                        
                        <div class="row">
                            <div class="col-12 col-md-6 col-lg-6 col-xl-12">
                                <div class="single-blog style-two mb-30">
                                    <div class="img-wrapper">
                                        <img src="../assets/image/magazine/3.jpg" alt>
                                    </div>
                                    <div class="short-details">
                                        <h3 class="short-details-categories">lifestyle</h3>
                                        <div class="short-details-title">The Abundantly Brought After Day Fish There Image</div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-12 col-md-6 col-lg-6 col-xl-12">
                                <div class="single-blog style-two ">
                                    <div class="img-wrapper">
                                        <img src="../assets/image/magazine/4.jpg" alt>
                                    </div>
                                    <div class="short-details">
                                        <h3 class="short-details-categories">lifestyle</h3>
                                        <div class="short-details-title">The Abundantly Brought After Day Fish There Image</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>

        <div class="section-2">
            <div class="container">
                <div class="row">
                    <div class="co-lg-8 col-xl-6">
                        <div class="single-blog row no-gutters border-one style-three">
                            <div class="col-12 col-sm-5">
                                <div class="img-wrapper">
                                    <img src="../assets/image/magazine/5.jpg">
                                </div>
                            </div>
                            <div class="col-12 col-sm-7">
                                <div class="short-details">
                                    <h3 class="short-details-categories">tours & travel</h3>
                                    <div class="short-details-title">Brought all day dominion appear from subdue dominion firmament over face</div>
                                    <div class="short-details-extra-info"><span>march 12, 2019.</span><span>by allen mark</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-xl-3">
                        <div class="single-blog border-two style-four">
                            <div class="img-wrapper">
                                <img src="../assets/image/magazine/6.jpg">
                            </div>
                            <div class="short-details">
                                <h3 class="short-details-categories">tours & travel</h3>
                                <div class="short-details-title">abundantly forth late appear fourth us.</div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-xl-3">
                        <div class="single-blog border-two style-four">
                            <div class="img-wrapper">
                                <img src="../assets/image/magazine/7.jpg">
                            </div>
                            <div class="short-details">
                                <h3 class="short-details-categories">tours & travel</h3>
                                <div class="short-details-title">abundantly forth late appear fourth us.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="third-block area-padding">
            <div class="area-heading">
                <h3 class="area-heading-title">Eidtor Picks</h3>
                <p class="area-heading-subtitle">Abundantly creeping saw forth spirit can made appear fourth us.</p>
            </div>

            <div class="container">
                <div class="row">

                    <div class="col-lg-5 col-xl-6">
                        <div class="single-blog" v-for="(blog,index) in editorList.slice(0,1)" :key="index">
                            <div class="img-wrapper">
                                <img :src="blog.img">
                            </div>
                            <div class="short-details position-right-bottom" >
                                <h3 class="short-details-categories">{{blog.categories}}</h3>
                                <div class="short-details-title">{{blog.title}}</div>
                                <div class="short-details-extra-info"><span>{{blog.date}}.</span><span>by {{blog.author}}</span></div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-7 col-xl-6">

                        <div class="single-blog row no-gutters" :class="{'mb-30': index === 0}"  v-for="(blog,index) in editorList.slice(1)" :key="index">
                            <div class="col-12 col-sm-7">
                                <div class="short-details" :class="removePadding(index)" >
                                    <h3 class="short-details-categories">{{blog.categories}}</h3>
                                    <div class="short-details-title font-20">{{blog.title}}</div>
                                    <p>{{blog.paragraph}}</p>
                                </div>
                            </div>
                            <div class="col-12 col-sm-5" :class="{'reverse-order': reverseOrder(index)}">
                                <div class="img-wrapper">
                                    <img :src="blog.img" alt>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>

        <div class="video-section area-padding background-one">
            <div class="area-heading">
                <h3 class="area-heading-title">Travel News</h3>
                <p class="area-heading-subtitle">Abundantly creeping saw forth spirit can made appear fourth us.</p>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-7">
                        <div class="single-blog video-style">
                            <div class="video-img-wrapper">
                                <img src="../assets/image/magazine/11.jpg">
                                <div class="play_btn">
                                    <a href="javascript:;" class="play_btn-icon"><i class="ti-control-play"></i></a>
                                </div>
                            </div>
                            <div class="short-details" >
                                <h3 class="short-details-categories">shoes / MARCH 15, 2019</h3>
                                <div class="short-details-title">Created Face Stars Sixth Forth Fow Earth Firmament Meat</div>
                                <div class="short-details-extra-info">
                                    <div class="icons">
                                        <span><i class="ti-comment"></i>05 comment</span>
                                        <span><i class="ti-heart"></i>0 like</span>
                                        <span><i class="ti-eye"></i>1k view</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-5">
                        <div class="single-blog row mb-30 video-style-small">

                            <div class="video-img-wrapper col-12 col-sm-5 padding-right-0">
                                <img src="../assets/image/magazine/12.jpg">
                                <div class="play_btn">
                                    <a href="javascript:;" class="play_btn-icon"><i class="ti-control-play"></i></a>
                                </div>
                            </div>

                            
                            <div class="short-details col-12 col-sm-7" >
                                <h3 class="short-details-categories">beauty</h3>
                                <div class="short-details-title font-20">Blessed Night Morning On Them You Great</div>
                                <div class="short-details-extra-info">
                                    <div class="icons">
                                        <span><i class="ti-time"></i>mar 12</span>
                                        <span><i class="ti-heart"></i>0 like</span>
                                        <span><i class="ti-eye"></i>1k view</span>
                                    </div>
                                </div>
                            </div>
                            
                        </div>

                        <div class="single-blog row mb-30 video-style-small">

                            <div class="video-img-wrapper col-12 col-sm-5 padding-right-0">
                                <img src="../assets/image/magazine/13.jpg">
                                <div class="play_btn">
                                    <a href="javascript:;" class="play_btn-icon"><i class="ti-control-play"></i></a>
                                </div>
                            </div>

                            
                            <div class="short-details col-12 col-sm-7" >
                                <h3 class="short-details-categories">beauty</h3>
                                <div class="short-details-title font-20">Blessed Night Morning On Them You Great</div>
                                <div class="short-details-extra-info">
                                    <div class="icons">
                                        <span><i class="ti-time"></i>mar 12</span>
                                        <span><i class="ti-heart"></i>0 like</span>
                                        <span><i class="ti-eye"></i>1k view</span>
                                    </div>
                                </div>
                            </div>
                            
                        </div>

                        <div class="single-blog row video-style-small">

                            <div class="video-img-wrapper col-12 col-sm-5 padding-right-0">
                                <img src="../assets/image/magazine/14.jpg">
                                <div class="play_btn">
                                    <a href="javascript:;" class="play_btn-icon"><i class="ti-control-play"></i></a>
                                </div>
                            </div>

                            
                            <div class="short-details col-12 col-sm-7" >
                                <h3 class="short-details-categories">beauty</h3>
                                <div class="short-details-title font-20">Blessed Night Morning On Them You Great</div>
                                <div class="short-details-extra-info">
                                    <div class="icons">
                                        <span><i class="ti-time"></i>mar 12</span>
                                        <span><i class="ti-heart"></i>0 like</span>
                                        <span><i class="ti-eye"></i>1k view</span>
                                    </div>
                                </div>
                            </div>
                            
                        </div>

                    </div>
                </div>
            </div>
        </div>

        <div class="fifth-block area-padding">
            <div class="area-heading">
                <h3 class="area-heading-title">Fashion News</h3>
                <p class="area-heading-subtitle">Abundantly creeping saw forth spirit can made appear fourth us.</p>
            </div>

            <div class="container">
                <div class="row">
                    <div class="col-lg-4">
                        <div class="single-blog style-five">
                            <div class="img-wrapper">
                                <img src="../assets/image/magazine/15.jpg">
                            </div>
                            <div class="short-details" >
                                <h3 class="short-details-categories">shoes / MARCH 15, 2019</h3>
                                <div class="short-details-title font-20">Shall For Rule Whose Toge One May Heaven To Dat</div>
                                <div class="short-details-extra-info">
                                    <div class="icons">
                                        <span><i class="ti-comment"></i>05 comment</span>
                                        <span><i class="ti-heart"></i>0 like</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="single-blog style-five">
                            <div class="img-wrapper">
                                <img src="../assets/image/magazine/16.jpg">
                            </div>
                            <div class="short-details position-relative-right" >
                                <h3 class="short-details-categories">shoes / MARCH 15, 2019</h3>
                                <div class="short-details-title font-20">Shall For Rule Whose Toge One May Heaven To Dat</div>
                                <div class="short-details-extra-info">
                                    <div class="icons">
                                        <span><i class="ti-comment"></i>05 comment</span>
                                        <span><i class="ti-heart"></i>0 like</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="single-blog style-five">
                            <div class="img-wrapper">
                                <img src="../assets/image/magazine/17.jpg">
                            </div>
                            <div class="short-details position-relative-right" >
                                <h3 class="short-details-categories">shoes / MARCH 15, 2019</h3>
                                <div class="short-details-title font-20">Shall For Rule Whose Toge One May Heaven To Dat</div>
                                <div class="short-details-extra-info">
                                    <div class="icons">
                                        <span><i class="ti-comment"></i>05 comment</span>
                                        <span><i class="ti-heart"></i>0 like</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="sixth-block area-padding">
            <div class="area-heading">
                <h3 class="area-heading-title">Fashion News</h3>
                <p class="area-heading-subtitle">Abundantly creeping saw forth spirit can made appear fourth us.</p>
            </div>

            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="single-blog style-five">
                            <div class="img-wrapper">
                                <img src="../assets/image/magazine/18.jpg">
                            </div>
                            <div class="short-details" >
                                <h3 class="short-details-categories">shoes / MARCH 15, 2019</h3>
                                <div class="short-details-title font-20">Shall For Rule Whose Toge One May Heaven To Dat</div>
                                <div class="short-details-extra-info">
                                    <div class="icons">
                                        <span><i class="ti-comment"></i>05 comment</span>
                                        <span><i class="ti-heart"></i>0 like</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="single-blog style-five">
                                    <div class="img-wrapper">
                                        <img src="../assets/image/magazine/19.jpg">
                                    </div>
                                    <div class="short-details  padding-20 " >
                                        <h3 class="short-details-categories">shoes / MARCH 15, 2019</h3>
                                        <div class="short-details-title font-14">Shall For Rule Whose Toge One May Heaven To Dat</div>
                                        <div class="short-details-extra-info">
                                            <span>march 15, 2019</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-6">
                                <div class="single-blog style-five">
                                    <div class="img-wrapper">
                                        <img src="../assets/image/magazine/20.jpg">
                                    </div>
                                    <div class="short-details  padding-20 " >
                                        <h3 class="short-details-categories">shoes / MARCH 15, 2019</h3>
                                        <div class="short-details-title font-14">Shall For Rule Whose Toge One May Heaven To Dat</div>
                                        <div class="short-details-extra-info">
                                            <span>march 15, 2019</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-6">
                                <div class="single-blog style-five">
                                    <div class="img-wrapper">
                                        <img src="../assets/image/magazine/21.jpg">
                                    </div>
                                    <div class="short-details  padding-20 " >
                                        <h3 class="short-details-categories">shoes / MARCH 15, 2019</h3>
                                        <div class="short-details-title font-14">Shall For Rule Whose Toge One May Heaven To Dat</div>
                                        <div class="short-details-extra-info">
                                            <span>march 15, 2019</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-6">
                                <div class="single-blog style-five">
                                    <div class="img-wrapper">
                                        <img src="../assets/image/magazine/22.jpg">
                                    </div>
                                    <div class="short-details  padding-20 " >
                                        <h3 class="short-details-categories">shoes / MARCH 15, 2019</h3>
                                        <div class="short-details-title font-14">Shall For Rule Whose Toge One May Heaven To Dat</div>
                                        <div class="short-details-extra-info">
                                            <span>march 15, 2019</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

        <slides></slides>

    </div>
</template>

<script>
    import Slides from 'base/Slides';
    export default {
        name: 'Index',
        components: {
            Slides
        },
        data () {
            return {
                editorList: [
                    {
                        img: require('../assets/image/magazine/8.jpg'),
                        categories: 'tours & travel',
                        title: 'created face starts sixth forth earth firmament',
                        date: 'march 12,2019',
                        author: 'allen mark'
                    },
                    {
                        img: require('../assets/image/magazine/9.jpg'),
                        categories: 'tours & travel',
                        title: 'Light that hath itself god grass herb dark sea on the hath dowe ',
                        paragraph: 'said spirit evening above good twes at god midst deep a wherein very made he seas male very broug sad forth saying right.'
                    },
                    {
                        img: require('../assets/image/magazine/10.jpg'),
                        categories: 'tours & travel',
                        title: 'Light that hath itself god grass herb dark sea on the hath dowe ',
                        paragraph: 'said spirit evening above good twes at god midst deep a wherein very made he seas male very broug sad forth saying right.'
                    }
                ],
                videoList: [

                ]
            }
        },
        methods: {
            reverseOrder (index) {
                return index === this.editorList.slice(1,3).length - 1;
            },
            removePadding (index) {
                return index === 0 ? 'short-details-padding-left-0' : 'short-details-padding-right-0'
            }
        },
    }
</script>

<style lang="scss" scoped>
    @import 'assets/styles/global.scss';
    @import 'assets/styles/blog/blog.scss';
</style>