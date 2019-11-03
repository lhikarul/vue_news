<template>

    <div class="container">
        <div class="row">
            <div class="col-lg-5 col-xl-6">
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
            </div>
            <div class="col-lg-7 col-xl-6"></div>
        </div>
    </div>

</template>