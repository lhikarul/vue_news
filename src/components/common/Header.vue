<template>
    <header class="header-wrapper">
        <div class="header-top">
            <div class="header-left">
               <ul class="header-social">
                   <li v-for="(icon,index) in iconList " :key="index" ><a href="javascript:;"><i :class="icon"></i></a></li>
               </ul>
            </div>
            <div class="header-middle">
                <a href="javascript:;"><img src="../../assets/image/logo.png" alt="logo"></a>
            </div>
            <div class="header-right">
                <ul class="header-right-wrapper">
                    <li><a href="javascript:;"><i class="fas fa-search"></i></a></li>
                    <li><a href="javascript:;">About</a></li>
                    <li><a href="javascript:;">Subscribe</a></li>
                </ul>
            </div>
        </div>
        <nav class="nav-wrapper">
            <li v-for="(item,index) in navList" :key='index'><a href="javascript:;" class="nav-text" :class="{active: item === 'Home'}">{{item}}</a></li>
        </nav>
    </header>
</template>

<script>
    import {SOCIAL_ICONS} from 'utils/icons.js'; 

    export default {
        name: 'VHeader',
        data () {
            return {
                iconList: SOCIAL_ICONS,
                navList: [
                    'Home','Categories','Archive','Blog','Latest News', 'Contact Us'
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import 'assets/styles/global.scss';

    .header-wrapper {
        @include respond;

        .header-top {
            display: flex;
            justify-content: space-between;
            align-items: center;
            line-height: 100px;

            > div {
                @include flex-item-width(0,0,33%);
            }

            .header-left {
                .header-social {
                    display: flex;

                    > li {
                        margin-right: 15px;

                        a {
                            font-size: 13px;
                            color: $pfont;
                            line-height: 42px;
                            @include transition;
                        }

                        a:hover {
                            color: $baseColor;
                        }
                    }

                }
            }

            .header-middle {
                text-align: center;
                img {
                    vertical-align: middle;
                }
            }
            
            .header-right {
                &-wrapper {
                    display: flex;
                    justify-content: flex-end;

                    > li {
                        margin-left: 19px;

                        a {
                            color: $dip;
                            font-size: 15px;
                            font-weight: 600;
                        }
                    }
                }
            }
        }

        .nav-wrapper {
            display: flex;
            justify-content: center;
            line-height: 80px;

            >li:not(:last-child) {
                margin-right: 45px;
            }

            .nav-text {
                font: 500 12px/80px "Josefin Sans", sans-serif;
                color: $dip;
                font-size: 15px;

                &.active,&:hover {
                    color: $baseColor;
                    @include transition;
                }
            }
        }

    }

</style>