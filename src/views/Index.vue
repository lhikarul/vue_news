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
    </div>
</template>

<script>
    export default {
        name: 'Index'
    }
</script>

<style lang="scss" scoped>
    @import 'assets/styles/global.scss';
    
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

</style>