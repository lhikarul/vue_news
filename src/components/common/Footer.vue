<template>
        <div class="footer-area">
            <div class="container">
                <div class="row">

                    <div class="col-sm-6 col-lg-3">
                        <h4 class="footer-title">about us</h4>
                        <p>Heaven fruitful doesn't over lesser days appear creeping seasons so behold bearing days open</p>
                        <div class="footer-logo">
                            <div class="img-wrapper-inline-block">
                                <img src="../../assets/image/logo.png" alt>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-6 col-lg-3">
                        <h4 class="footer-title">contact info</h4>
                        <p class="address">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, odio!</p>
                        <span>phone： +8880 33448899</span>
                        <span>email： info@colorlib.com</span>
                    </div>

                    <div class="col-sm-6 col-lg-3">
                        <h4 class="footer-title">important link</h4>
                        <ul>
                            <li><a href="javascript:;">WHMCS-brige</a></li>
                            <li><a href="javascript:;">Search Domain</a></li>
                            <li><a href="javascript:;">My Account</a></li>
                            <li><a href="javascript:;">Shoppint Cart</a></li>
                            <li><a href="javascript:;">Our Shop</a></li>
                        </ul>
                    </div>

                    <div class="col-sm-6 col-lg-3">
                        <h4 class="footer-title">newsletter</h4>
                        <p>Heaven fruitful doesn't over lesser days appear creeping seasons so behold bearing days open</p>
                        <div class="form">
                            <input type="email" placeholder="your email address" />
                            <div class="btn"><i class="fab fa-telegram-plane"></i></div>
                        </div>
                    </div>

                </div>
               <div class="footer-bottom no-gutters">
                   <p class="col-md-12 col-lg-8">Copyright ©2019 All rights reserved | This template is made with <i class="fa fa-heart"></i> by<em class="copyright"> Colorlib</em></p>
                   <div class="social-icons col-md-12 col-lg-4">
                       <a href="javascript:;"><i class="ti-facebook"></i></a>
                       <a href="javascript:;"><i class="ti-twitter"></i></a>
                       <a href="javascript:;"><i class="ti-dribbble"></i></a>
                       <a href="javascript:;"><i class="ti-linkedin"></i></a>
                   </div>
               </div>
            </div>
        </div>
</template>

<script>
    export default {
        name: 'VFooter'
    }
</script>

<style lang="scss" scoped>

    @import 'assets/styles/global.scss';
    @import 'assets/styles/blog/blog.scss';

    .footer-area {
        padding-top: 115px;

        .footer-title {
            margin-bottom: 25px;
            color: $dip;
            font-size: 20px;
            font-weight: 600;
            text-transform: capitalize;
        }

        .footer-logo {
            margin-top: 28px;
        }

        p {
            margin-bottom: 16px;
        }

        span {
            margin-bottom: 15px;
            display: block;
        }

        li {
            margin-bottom: 10px;
        }

        p,span,a {
            color: #888888;
        }

        .form {
            position: relative;
            input {
                border-radius: 25px;
                border: none;
                padding: 10px 22px;
                outline: none;
                width: 67%;
                height: 40px;
                font-weight: 400;
                font-size: 14px;
                color: #888888;
                text-transform: capitalize;
            }
            i {
                border-radius: 25px;
                padding: 6px 21px 4px 14px;
                position: absolute;
                top: 3px;
                right: 15%;
                background: $baseColor;
                color: $white;
                font-size: 18px;
            }
        }

        .footer-bottom {
            margin-top: 51px;
            border-top: 1px solid #ebedf1;
            padding: 20px 0;
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;

            .copyright {
                color: $baseColor;
                font-style: normal;
            }

            .social-icons {
                text-align: right;
                a {
                    display: inline-block;
                    width: 32px;
                    color: #8f919c;
                    text-align: center;
                }
            }
        }

        @media (max-width: 991px) {
            .footer-bottom, .footer-bottom .social-icons {
                text-align: center;
            }
        }
    }
</style>