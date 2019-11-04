<template>
          <div class="breadcrumb">
            <div class="container">
                <div class="breadcrumb-wrapper">
                         <div class="breadcrumb-title">
                            <h2>category</h2>
                        </div>
                        <div class="nav-wrapper">
                            <router-link to="/" class="nav-link">home</router-link>/
                            <router-link :to="'/' + currentPageName" class="nav-link">{{currentPageName}}</router-link>
                        </div>
                    </div>
            </div>
        </div>
</template>

<script>
export default {
    name: "breadcrumb",
    props: {
        currentPageName: {
            type: String,
            default: ''
        }
    }
}
</script>

<style lang="scss" scoped>
@import 'assets/styles/variables.scss';
@import 'assets/styles/placeholder';

    .breadcrumb {
        background: $baseColor;
        color: $white;
        &-wrapper {
            @extend %flex-between-center;
            min-height: 110px;
            text-transform: capitalize;

            .breadcrumb-title {
                h2 {
                    margin: 0;
                    font-size: 27px;
                    font-family: "Josefin Sans", sans-serif;
                    font-weight: bold;
                }
            }

            .nav-wrapper {
                padding: 25px;
                .nav-link {
                    margin-right: 7px;
                    color: $white;
                    font-size: 15px;
                    font-weight: 500;
                    @extend %transition;
                    
                    &:hover {
                        color: #000;
                    }
                }
            }

        }
    }

</style>