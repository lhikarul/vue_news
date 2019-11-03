<template>
    <div class="single-blog">
       <div class="img-wrapper">
           <img :src="img">
       </div>
       <div class="short-details" :class="positionCls" >
            <h3 class="short-details-categories">{{categories}}</h3>
            <div class="short-details-title">{{title}}</div>
            <div class="short-details-extra-info" v-show="date && author"><span>{{date}}.</span><span>by {{author}}</span></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'SingleBlog',
        props: {
            img: String,
            categories: String,
            title: String,
            date: String,
            author: String,
            shortDetailsPos: {
                type: String,
                default: 'position-right-bottom'
            }
        },
        computed: {
            positionCls () {
                return this.shortDetailsPos
            }
        }
    }
</script>

<style lang="scss" scoped>
@import 'assets/styles/global.scss';

    .single-blog {
        position: relative;

        .img-wrapper {
            img {
                width: 100%;
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

            &.position-right-bottom {
                padding: 40px;
                width: 80%;
                position: absolute;
                bottom: 0;
                right: 0;
            }
        }
    }
</style>