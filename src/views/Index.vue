<template>
    <div class="index">
        <div class="first-block">
            <div class="block-1">
                <div class="wrapper">
                    <div class="thumb">
                        <img src="../assets/image/magazine/1.jpg" alt>
                    </div>
                    <div class="short-details">
                        <h3 class="short-details-categories">tours & travel</h3>
                        <div class="short-details-title">created face stars sixth forth fow earth firmament meat</div>
                        <div class="short-details-extra-info"><span>march 12, 2019.</span><span>by allen mark</span></div>
                    </div>
                </div>
            </div>
            <div class="block-2">
                <div class="wrapper">
                    <div class="thumb">
                        <img src="../assets/image/magazine/2.jpg" alt>
                    </div>
                    <div class="short-details">
                        <h3 class="short-details-categories">tours & travel</h3>
                        <div class="short-details-title">created face stars sixth forth fow earth firmament meat</div>
                        <div class="short-details-extra-info"><span>march 12, 2019.</span><span>by allen mark</span></div>
                    </div>
                </div>
            </div>
            <div class="block-3">

                <div class="wrapper">
                    <div class="thumb">
                        <img src="../assets/image/magazine/3.jpg" alt>
                    </div>
                    <div class="short-details">
                        <h3 class="short-details-categories">tours & travel</h3>
                        <div class="short-details-title">the abundantly brought after day fish there image</div>
                    </div>
                </div>

                <div class="wrapper">
                    <div class="thumb">
                        <img src="../assets/image/magazine/4.jpg" alt>
                    </div>
                     <div class="short-details">
                        <h3 class="short-details-categories">tours & travel</h3>
                        <div class="short-details-title">the abundantly brought after day fish there image</div>
                    </div>
                </div>
                
            </div>
        </div>

        <div class="second-block">
            <div class="block">
                <div>
                    <div class="img-wrapper">
                        <img src="../assets/image/magazine/5.jpg">
                    </div>
                    <div class="short-details">
                        <h3 class="short-details-categories">tours & travel</h3>
                        <div class="short-details-title">Brought all day dominion appear from subdue dominion firmament over face</div>
                        <div class="short-details-extra-info"><span>march 12, 2019.</span><span>by allen mark</span></div>
                    </div>
                </div>
            </div>
            <div class="block">
                <div>
                    <div class="img-wrapper">
                        <img src="../assets/image/magazine/6.jpg">
                    </div>
                    <div class="short-details">
                        <h3 class="short-details-categories">tours & travel</h3>
                        <div class="short-details-title">abundantly forth late appear fourth us.</div>
                    </div>
                </div>
            </div>
            <div class="block">
                <div>
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

                        <div class="single-blog row no-gutters"  v-for="(blog,index) in editorList.slice(1)" :key="index">
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

        <div class="forth-block area-padding background-one">
            <div class="area-heading">
                <h3 class="area-heading-title">Travel News</h3>
                <p class="area-heading-subtitle">Abundantly creeping saw forth spirit can made appear fourth us.</p>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-7">
                        <div class="single-blog">
                            <div class="img-wrapper">
                                <img src="../assets/image/magazine/11.jpg">
                            </div>
                            <div class="short-details position-relative-center-bottom" >
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
                        <div class="single-blog row mb-30">

                            <div class="video-img-wrapper col-12 col-sm-5 padding-right-0">
                                <img src="../assets/image/magazine/12.jpg">
                            </div>

                            
                            <div class="short-details short-details-video col-12 col-sm-7" >
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

                        <div class="single-blog row mb-30">

                            <div class="video-img-wrapper col-12 col-sm-5 padding-right-0">
                                <img src="../assets/image/magazine/13.jpg">
                            </div>

                            
                            <div class="short-details short-details-video col-12 col-sm-7" >
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

                        <div class="single-blog row">

                            <div class="video-img-wrapper col-12 col-sm-5 padding-right-0">
                                <img src="../assets/image/magazine/14.jpg">
                            </div>

                            
                            <div class="short-details short-details-video col-12 col-sm-7" >
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

    </div>
</template>

<script>
    // import SingleBlog from 'components/Blog/SingleBlog';
    export default {
        name: 'Index',
        components: {
            // SingleBlog
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
    
    .first-block {
        @include flex-between;
        padding-bottom: 100px;

        > div {
            padding: 0 15px;
        }

        .wrapper {
            position: relative;

            &:hover {
                img {
                    transform: scale(1.1);
                }
            }
        }

        .thumb {
            overflow: hidden;
            img {
                width: 100%;
                 @include transition;
            }
        }

        .short-details {
            box-sizing: border-box;
            background: $white;

            &-categories {
                margin-top: 0px;
                color: $baseColor;
                font-size: 11px;
                font-weight: 600;
                font-family: "Open Sans", sans-serif;
                text-transform: uppercase;
            }

            &-title {
                margin-bottom: 10px;
                cursor: pointer;
                color: $dip;
                font-size: 27px;
                font-weight: 600;
                line-height: 36px;
                text-transform: capitalize;
                                       
                @include transition;

                &:hover {
                    color: $baseColor;
                }
            }

            &-extra-info {
                font-size: 13px;
                text-transform: uppercase;

                span:first-child {
                   color: $pfont;
                   cursor: pointer;
                   @include transition;

                   &:hover {
                       color: $baseColor;
                   }
                }
                span:last-child {
                    color: $dip2;
                    font-weight: 600;
                }
            }
        }

        .block-1 {
            @include flex-item-width(0,0,41.666667%);
            .short-details {
                padding: 40px;
                width: 80%;
                position: absolute;
                bottom: 0;
                right: 0;
            }
        }

        .block-2 {
            @include flex-item-width(0,0,33.333333%);
            .short-details {
                padding: 0 65px;
                position: absolute;
                right: 0;
                bottom: 50%;
                background: transparent;
                color: $white;
                text-align: center;
                transform: translateY(50%);

                &-categories, &-title, &-extra-info span {
                    color: $white;

                    &:hover {
                        color: $baseColor;
                    }
                }
            }
        }

        .block-3 {
            @include flex-item-width(0,0,25%);
            .short-details {
                padding: 8px 10px;
                position: absolute;
                right: 5%;
                bottom: 0;
                width: 90%;
                
                &-title {
                    font-size: 16px;
                    line-height: 24px;
                    text-align: center;
                }
            }

            .wrapper:first-child {
                margin-bottom: 30px;
            }
        }
    }

    .second-block {
        @include respond() {
            padding: 0;
        };
        @include flex-between;

        .block {
            padding: 0 15px;
            .img-wrapper {
                height: 100%;
                overflow: hidden;
                img {
                    @include transition;
                    width: 100%;
                    height: 100%;
                }
            }

            &:hover {
                img {
                    transform: scale(1.1);
                }
            }
        }

        .block:first-child {
            @include flex-item-width(0,0,50%);

            > div {
                @include flex-between;
                border: 10px solid $baseColor;
                box-sizing: border-box;
                height: 100%;
            }

            .img-wrapper {
                @include flex-item-width(0,0,41.66667%);
            }

            .short-details {
                padding: 25px;
                @include flex-item-width(0,0,58.333333%);

                &-categories,&-extra-info {
                     text-transform: capitalize;
                }

                &-title {
                    margin-bottom: 10px;
                    font-size: 24px;
                    font-weight: 600;
                    line-height: 36px;
                    @include transition;
                }
            }
        }

        .block:not(:first-child) {
             @include flex-item-width(0,0,25%);
            
            > div {
                border: 6px solid #b9be7e;
                box-sizing: border-box;
                height: 100%;
            }

            position: relative;
            .short-details {
                padding: 0 18px;
                position: absolute;
                bottom: 0;
                color: $white;

                &-categories {
                    font-size: 11px;
                    text-transform: uppercase;
                }

                &-title {
                    margin-bottom: 10px;
                    font-size: 20px;
                    font-weight: 600;
                    line-height: 36px;
                    text-transform: capitalize;
                }
            }
        }
    }

</style>