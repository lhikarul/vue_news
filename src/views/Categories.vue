<template>
    <div>
        <breadcrumb currentPageName="categories"></breadcrumb>

        <div class="container area-padding">
            <div class="row">
                <div class="col-md-6 col-lg-4">
                    <div class="single-category">
                        <div class="img-wrapper">
                            <img src="../assets/image/category/1.jpg">
                        </div>
                        <div class="short-details" >
                            <h3 class="short-details-categories">shoes / MARCH 15, 2019</h3>
                            <div class="short-details-title">Shall for rule whose toge one may heaven to dat</div>
                            <div class="short-details-extra-info">
                                <div class="icons">
                                    <span><i class="ti-comment"></i>05 comment</span>
                                    <span><i class="ti-heart"></i>0 like</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-6 col-lg-4">
                    <div class="single-category">
                        <div class="img-wrapper">
                            <img src="../assets/image/category/2.jpg">
                        </div>
                        <div class="short-details" >
                            <h3 class="short-details-categories">shoes / MARCH 15, 2019</h3>
                            <div class="short-details-title">Shall for rule whose toge one may heaven to dat</div>
                            <div class="short-details-extra-info">
                                <div class="icons">
                                    <span><i class="ti-comment"></i>05 comment</span>
                                    <span><i class="ti-heart"></i>0 like</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-6 col-lg-4">
                    <div class="single-category">
                        <div class="img-wrapper">
                            <img src="../assets/image/category/3.jpg">
                        </div>
                        <div class="short-details" >
                            <h3 class="short-details-categories">shoes / MARCH 15, 2019</h3>
                            <div class="short-details-title">Shall for rule whose toge one may heaven to dat</div>
                            <div class="short-details-extra-info">
                                <div class="icons">
                                    <span><i class="ti-comment"></i>05 comment</span>
                                    <span><i class="ti-heart"></i>0 like</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-6 col-lg-4">
                    <div class="single-category">
                        <div class="img-wrapper">
                            <img src="../assets/image/category/4.jpg">
                        </div>
                        <div class="short-details" >
                            <h3 class="short-details-categories">shoes / MARCH 15, 2019</h3>
                            <div class="short-details-title">Shall for rule whose toge one may heaven to dat</div>
                            <div class="short-details-extra-info">
                                <div class="icons">
                                    <span><i class="ti-comment"></i>05 comment</span>
                                    <span><i class="ti-heart"></i>0 like</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-6 col-lg-4">
                    <div class="single-category">
                        <div class="img-wrapper">
                            <img src="../assets/image/category/5.jpg">
                        </div>
                        <div class="short-details" >
                            <h3 class="short-details-categories">shoes / MARCH 15, 2019</h3>
                            <div class="short-details-title">Shall for rule whose toge one may heaven to dat</div>
                            <div class="short-details-extra-info">
                                <div class="icons">
                                    <span><i class="ti-comment"></i>05 comment</span>
                                    <span><i class="ti-heart"></i>0 like</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-6 col-lg-4">
                    <div class="single-category">
                        <div class="img-wrapper">
                            <img src="../assets/image/category/6.jpg">
                        </div>
                        <div class="short-details" >
                            <h3 class="short-details-categories">shoes / MARCH 15, 2019</h3>
                            <div class="short-details-title">Shall for rule whose toge one may heaven to dat</div>
                            <div class="short-details-extra-info">
                                <div class="icons">
                                    <span><i class="ti-comment"></i>05 comment</span>
                                    <span><i class="ti-heart"></i>0 like</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="text-center col-12">
                    <a href="javascript:;" class="load-btn">Load More <i class="ti-angle-double-right"></i></a>
                </div>

            </div>
        </div>

        <slides></slides>
    </div>
</template>

<script>
import breadcrumb from 'base/breadcrumb';
import slides from 'base/Slides';
export default {
    name: 'Categories',
    components: {
        breadcrumb,
        slides
    }
}
</script>

<style lang="scss" scoped>
@import 'assets/styles/global.scss';
@import 'assets/styles/category/category';
// @import 'assets/styles/blog/blog.scss';
</style>