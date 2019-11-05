<template>
    <div>
        <breadcrumb currentPageName="Blog"></breadcrumb>
        <div class="area-padding">
            <div class="container">
                <div class="row">

                    <div class="col-lg-8">
                            <div class="single-blog">
                                <div class="img-wrapper">
                                    <img src="../assets/image/blog/main-blog/m-blog-1.jpg" alt>
                                    <div class="blog-date">
                                        <h3 class="num">15</h3>
                                        <p class="en">Jan</p>
                                    </div>
                                </div>
                                <div class="blog-details">
                                    <h2 class="blog-details-title">Google inks pact for new 35-storey office</h2>
                                    <p class="blog-details-text">That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.</p>
                                    <div class="blog-details-extra-info">
                                            <div class="icons">
                                                <span><i class="far fa-user"></i>Travel, Lifestyle</span>
                                                <span><i class="far fa-comments"></i>03 comments</span>
                                            </div>
                                    </div>
                                </div>
                            </div>

                            <div class="single-blog">
                                <div class="img-wrapper">
                                    <img src="../assets/image/blog/main-blog/m-blog-2.jpg" alt>
                                    <div class="blog-date">
                                        <h3 class="num">15</h3>
                                        <p class="en">Jan</p>
                                    </div>
                                </div>
                                <div class="blog-details">
                                    <h2 class="blog-details-title">Google inks pact for new 35-storey office</h2>
                                    <p class="blog-details-text">That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.</p>
                                    <div class="blog-details-extra-info">
                                        <div class="icons">
                                            <span><i class="far fa-user"></i>Travel, Lifestyle</span>
                                            <span><i class="far fa-comments"></i>03 comments</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="single-blog">
                            <div class="img-wrapper">
                                <img src="../assets/image/blog/main-blog/m-blog-3.jpg" alt>
                                <div class="blog-date">
                                    <h3 class="num">15</h3>
                                    <p class="en">Jan</p>
                                </div>
                            </div>
                            <div class="blog-details">
                                <h2 class="blog-details-title">Google inks pact for new 35-storey office</h2>
                                <p class="blog-details-text">That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.</p>
                                <div class="blog-details-extra-info">
                                        <div class="icons">
                                            <span><i class="far fa-user"></i>Travel, Lifestyle</span>
                                            <span><i class="far fa-comments"></i>03 comments</span>
                                        </div>
                                </div>
                            </div>
                            </div>

                            <div class="single-blog">
                                <div class="img-wrapper">
                                    <img src="../assets/image/blog/main-blog/m-blog-4.jpg" alt>
                                    <div class="blog-date">
                                        <h3 class="num">15</h3>
                                        <p class="en">Jan</p>
                                    </div>
                                </div>
                                <div class="blog-details">
                                    <h2 class="blog-details-title">Google inks pact for new 35-storey office</h2>
                                    <p class="blog-details-text">That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.</p>
                                    <div class="blog-details-extra-info">
                                            <div class="icons">
                                                <span><i class="far fa-user"></i>Travel, Lifestyle</span>
                                                <span><i class="far fa-comments"></i>03 comments</span>
                                            </div>
                                    </div>
                                </div>
                            </div>

                            <div class="single-blog">
                                <div class="img-wrapper">
                                    <img src="../assets/image/blog/main-blog/m-blog-5.jpg" alt>
                                    <div class="blog-date">
                                        <h3 class="num">15</h3>
                                        <p class="en">Jan</p>
                                    </div>
                                </div>
                                <div class="blog-details">
                                    <h2 class="blog-details-title">Google inks pact for new 35-storey office</h2>
                                    <p class="blog-details-text">That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.</p>
                                    <div class="blog-details-extra-info">
                                            <div class="icons">
                                                <span><i class="far fa-user"></i>Travel, Lifestyle</span>
                                                <span><i class="far fa-comments"></i>03 comments</span>
                                            </div>
                                    </div>
                                </div>
                            </div>

                    </div>
                    <sidebar-right></sidebar-right>

                </div>
            </div>
        </div>
        <slides></slides>
    </div>
</template>

<script>
import breadcrumb from 'base/breadcrumb';
import slides from 'base/Slides';

import SidebarRight from 'components/blog/SidebarRight';

export default {
    name: 'Blog',
    components: {
        breadcrumb,
        slides,
        SidebarRight
    }
}
</script>

<style lang="scss" scoped>
@import 'assets/styles/global.scss';

.default-input-style {
    border: 1px solid #f0e9ff;
    padding-left: 20px;
    width: 100%;
    height: 50px;
    color: #999999;
    font-size: 13px;
    outline: none;
}

.default-btn {
    @include createBtn(12px,54px,$baseColor,15px,block);
}

//-------------------------------------------------------//

.single-blog {
    margin-bottom: 50px;
    .img-wrapper {
        position: relative;

        .blog-date {
            border-radius: 5px;
            padding: 13px 30px;
            position: absolute;
            bottom: -20px;
            left: 40px;
            background: $baseColor;
            color: $white;

            h3.num {
                font-size: 30px;
                line-height: 1.2;
            }

            p.en {
                margin: 0;
                font-size: 18px;
            }
        }
    }
    .blog-details {
        padding: 60px 30px 35px 35px;

        &-title {
            margin-bottom: 15px;
            color: $title-color;
            font-size: 24px;
        }

        &-text {
            margin-bottom: 30px;
        }

        &-extra-info {
            color: #999999;
            font-size: 14px;

            span:first-child:after {
                content: '|';
                padding: 0 10px;
            }

            i.far {
                margin-right: 5px;
            }
        }
    }
}
</style>