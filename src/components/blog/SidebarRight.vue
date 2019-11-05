<template>
    <div class="col-lg-4">

        <div class="sidebar-right">

            <aside class="sidebar-right-inner">
                <div class="input-wrapper">
                    <input type="text" placeholder="Search Keyword" class="default-input-style">
                    <i class="ti-search"></i>
                </div>
                <a href="javascript:;" class="default-btn">SEARCH</a>
            </aside>

            <aside class="sidebar-right-inner">
                    <div class="category">
                        <h4 class="sidebar-right-title">category</h4>
                        <ul class="list">
                                <li class="list-item"><a href="javascript:;"><span>Resaurant food</span><span>(37)</span></a></li>
                                <li class="list-item"><a href="javascript:;"><span>Travel news</span><span>(37)</span></a></li>
                                <li class="list-item"><a href="javascript:;"><span>Modern technology</span><span>(37)</span></a></li>
                                <li class="list-item"><a href="javascript:;"><span>Product</span><span>(37)</span></a></li>
                                <li class="list-item"><a href="javascript:;"><span>Inspiration</span><span>(37)</span></a></li>
                                <li class="list-item"><a href="javascript:;"><span>Health Care</span><span>(37)</span></a></li>
                        </ul>
                    </div>
            </aside>

            <aside class="sidebar-right-inner">
                <div class="recent-post">
                    <h4 class="sidebar-right-title">recent post</h4>
                    <div class="post-item">
                        <div class="img-wrapper">
                            <img src="../../assets/image/blog/popular-post/post1.jpg" alt>
                        </div>
                        <div class="post-item-info">
                            <h3 class="post-item-info-title">From life wa you fish...</h3>
                            <p>02 Hours ago</p>
                        </div>
                    </div>

                    <div class="post-item">
                        <div class="img-wrapper">
                            <img src="../../assets/image/blog/popular-post/post2.jpg" alt>
                        </div>
                        <div class="post-item-info">
                            <h3 class="post-item-info-title">From life wa you fish...</h3>
                            <p>02 Hours ago</p>
                        </div>
                    </div>

                    <div class="post-item">
                        <div class="img-wrapper">
                            <img src="../../assets/image/blog/popular-post/post3.jpg" alt>
                        </div>
                        <div class="post-item-info">
                            <h3 class="post-item-info-title">From life wa you fish...</h3>
                            <p>02 Hours ago</p>
                        </div>
                    </div>

                    <div class="post-item">
                        <div class="img-wrapper">
                            <img src="../../assets/image/blog/popular-post/post4.jpg" alt>
                        </div>
                        <div class="post-item-info">
                            <h3 class="post-item-info-title">From life wa you fish...</h3>
                            <p>02 Hours ago</p>
                        </div>
                    </div>

                </div>
            </aside>

            <aside class="sidebar-right-inner">
                <h4 class="sidebar-right-title">tag clouds</h4>
                <div class="tag">
                    <ul class="list">
                        <li class="list-item"><a href="javascript:;">project</a></li>
                        <li class="list-item"><a href="javascript:;">love</a></li>
                        <li class="list-item"><a href="javascript:;">technology</a></li>
                        <li class="list-item"><a href="javascript:;">Travel</a></li>
                        <li class="list-item"><a href="javascript:;">reastaurant</a></li>
                        <li class="list-item"><a href="javascript:;">life style</a></li>
                        <li class="list-item"><a href="javascript:;">design</a></li>
                        <li class="list-item"><a href="javascript:;">illustration</a></li>
                    </ul>
                </div>
            </aside>

            <aside class="sidebar-right-inner">
                <h4 class="sidebar-right-title">instagram feeds</h4>
                <div class="instagram">
                    <ul class="list">
                        <li class="list-item">
                            <div class="img-wrapper">
                                <img src="../../assets/image/instagram/widget-i1.png" alt>
                            </div>
                        </li>
                        <li class="list-item">
                            <div class="img-wrapper">
                                <img src="../../assets/image/instagram/widget-i2.png" alt>
                            </div>
                        </li>
                        <li class="list-item">
                            <div class="img-wrapper">
                                <img src="../../assets/image/instagram/widget-i3.png" alt>
                            </div>
                        </li>
                        <li class="list-item">
                            <div class="img-wrapper">
                                <img src="../../assets/image/instagram/widget-i4.png" alt>
                            </div>
                        </li>
                        <li class="list-item">
                            <div class="img-wrapper">
                                <img src="../../assets/image/instagram/widget-i5.png" alt>
                            </div>
                        </li>
                        <li class="list-item">
                            <div class="img-wrapper">
                                <img src="../../assets/image/instagram/widget-i6.png" alt>
                            </div>
                        </li>
                    </ul>
                </div>
            </aside>

            <aside class="sidebar-right-inner">
                <h4 class="sidebar-right-title">instagram feeds</h4>
                <div class="newsletter">
                    <input type="email" placeholder="Enter email" class="default-input-style mb-16">
                    <a href="javascript" class="default-btn">SUBSCRIBE</a>
                </div>
            </aside>

        </div>

    </div>
</template>

<script>
export default {
    name: "SidebarRight"
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

.sidebar-right {
    &-inner {
        margin-bottom: 30px;
        padding: 30px;
        background: #fbf9ff;

        .input-wrapper {
            position: relative;
            margin-bottom: 16px;

            i.ti-search {
                position: absolute;
                top: 50%;
                right: 5%;
                transform: translateY(-50%);
            }
        }

        h4.sidebar-right-title {
            margin-bottom: 40px;
            color: #2a2a2a;
            font-size: 20px;
            text-transform: capitalize;

            &:after {
                content: '';
                display: block;
                border-bottom: 1px solid #f0e9ff;
                padding-top: 15px;
            }
        }

        .category {
            .list-item {
                border-bottom: 1px solid #f0e9ff;
                padding-bottom: 12px;

                &:not(:first-child) {
                    padding-top: 15px;
                }

                a {
                    color: #888888;
                }
            }
        }

        .recent-post {
            .post-item {
                display: flex;

                &:not(:first-child) {
                    margin-top: 20px;
                }

                &-info {
                    padding-left: 20px;
                    align-self: center;

                    p {
                        margin: 0;
                    }
                }
            }
        }

        .tag {
            .list-item {
                display: inline-block;

                a {
                    margin-right: 5px;
                    margin-bottom: 8px;
                    border: 1px solid #eeeeee;
                    padding: 4px 20px;
                    display: inline-block;
                    background: $white;
                    color: #888888;
                    font-size: 13px;
                }
            }
        }

        .instagram {
            .list {
                display: flex;
                flex-wrap: wrap;

                &-item {
                    @include flex-item-width(33.333333%);
                    margin-bottom: 15px;
                    padding-right: 6px;
                    padding-left: 6px;
                }
            }
        }

        // --- hover effect -----------

        .category a, .recent-post h3{
            @extend %transition;

            &:hover {
                color: $baseColor;
            }
        }

        .tag a {
            @extend %transition;

            &:hover {
                background: $baseColor;
                color: $white;
            }
        }

        //------------------------------
    }
}

</style>