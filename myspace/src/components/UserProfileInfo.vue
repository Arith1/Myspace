<template>
    <div class="card">
        <div class="card-body">
            <div class="row">
                <div class="col-3">
                    <!-- img-fluid自适应图片 -->
                    <img width="500" class="img-fluid" src="https://cdn.acwing.com/media/user/profile/photo/49477_lg_d967aadaba.jpeg"
                        alt="">
                </div>
                <div class="col-9">
                    <div class="username">{{fullname}}</div>
                    <div class="fans">{{user.followercout }}</div>
                    <button v-if="!user.is_followed" v-on:click="follow" type="button" class="btn btn-secondary btn-sm">+关注</button>
                    <button v-if="user.is_followed" @click="unfollow" type="button" class="btn btn-secondary btn-sm">取消关注</button>
                <!-- v-if是判断，v-on是绑定事件，@ 和 v-on:等价 -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {computed } from 'vue';

export default {
    name: "UserProfileInfo",

    props : {
        user:{
            tyep:Object,
            required: true,
        },
    },
    setup(props, context){
        let fullname = computed(() => props.user.lastname + ' ' + props.user.firstname);

        const follow = () => {
            // console.log("follow");
            context.emit('follow1');
            // 执行follow
        };
        const unfollow = () => {
            // console.log("unfollow");
            context.emit("unfollow1");
        };

        return{
            follow,
            unfollow,
            fullname,
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
</style>