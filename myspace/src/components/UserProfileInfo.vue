<template>
    <div class="card">
        <div class="card-body">
            <div class="row">
                <div class="col-3 img-field">
                    <!-- img-fluid自适应图片 -->
                    <img width="500" class="img-fluid" :src="user.photo" alt="">
                    <!-- 冒号把引号里当作表达式 -->
                </div>
                <div class="col-9">
                    <div class="username">{{ user.username }}</div>
                    <div class="fans">粉丝数:
                        {{ user.followerCount }}</div>
                    <button v-if="!user.is_followed" v-on:click="follow" type="button"
                        class="btn btn-secondary btn-sm">+关注</button>
                    <button v-if="user.is_followed" @click="unfollow" type="button"
                        class="btn btn-secondary btn-sm">取消关注</button>
                    <!-- v-if是判断，v-on是绑定事件，@ 和 v-on:等价 -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import {computed } from 'vue';
import $ from 'jquery';
import { useStore } from 'vuex';

export default {
    name: "UserProfileInfo",

    props: {
        user: {
            tyep: Object,
            required: true,
        },
    },
    setup(props, context) {
        // let fullname = computed(() => props.user.lastname + ' ' + props.user.firstname);
        const store = useStore();
        const follow = () => {
            // console.log("follow");
            $.ajax({
                url: "https://app165.acapp.acwing.com.cn/myspace/follow/",
                type: "POST",
                data: {
                    target_id: props.user.id,
                }, headers: {
                    'Authorization': "Bearer " + store.state.user.access,
                }, success(resp) {
                    if (resp.result === "success") {
                        context.emit('follow');
                        console.log("success");
                    }
                    // 执行follow
                },error(){
                    console.log("error");
                }
            })

        };
        const unfollow = () => {
            // console.log("unfollow");
            $.ajax({
                url: "https://app165.acapp.acwing.com.cn/myspace/follow/",
                type: "POST",
                data: {
                    target_id: props.user.id,
                }, headers: {
                    'Authorization': "Bearer " + store.state.user.access,
                }, success(resp) {
                    if (resp.result === "success") {
                        context.emit('unfollow');
                        console.log("success");
                    }
                    // 执行follow
                }
            })
        };

        return {
            follow,
            unfollow,
            // fullname,
        }
    }
}

</script>

<style scoped>
img {
    border-radius: 50%;
    /* 变圆形 */
}

.fans {
    font-size: 12px;
    color: gray;
}

.username {
    font-weight: bold;
}

button {
    padding: 2px 4px;
    font-size: 12px;
}

.img-field {
    /* 照片纵向剧中 */
    display: flex;
    flex-direction: column;
    justify-content: center;
}
</style>