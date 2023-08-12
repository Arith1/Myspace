<template>
    <div class="card">
        <div class="card-body">
            <div v-for="post in posts.posts" :key="post.id">
                <!-- 遍历posts key必须唯一且必须绑定 -->
                <div class="card xx">
                    <div class="card-body">
                        {{ post.content }}
                        <button @click="delete_a_post(post.id)" v-if="is_me" type="button"
                            class="btn delete btn-danger btn-sm">删除</button>
                        <button  @click="update_a_post(post.id,post.content)" v-if="is_me" type="button"
                            class="btn update btn-info btn-sm">修改</button>

                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import $ from 'jquery';
import {ref} from 'vue';

export default {
    name: "UserProfilePosts",
    props: {
        posts: {
            type: Object,
            required: true,
            // required为必须传过来
        },
        user: {
            type: Object,
            required: true,
        }
    },
    setup(props, context) {
        const store = useStore();
        let is_me = computed(() => store.state.user.id === props.user.id);
        let content = ref("");
 

        const update_a_post = (post_id,post_content) => {

            // console.log(post_content);
            $.ajax({
                url: "https://app165.acapp.acwing.com.cn/myspace/post/",
                type: "DELETE",
                data: {
                    post_id,
                },
                headers: {
                    'Authorization': "Bearer " + store.state.user.access,
                }, success(resp) {
                    if (resp.result === "success") {
                        context.emit('delete_a_post', post_id);
                        console.log(post_content);
                        // context.emit('post_post', post_content);
                    }
                },
            })
        };

        const delete_a_post = post_id => {


            $.ajax({
                url: "https://app165.acapp.acwing.com.cn/myspace/post/",
                type: "DELETE",
                data: {
                    post_id,
                },
                headers: {
                    'Authorization': "Bearer " + store.state.user.access,
                }, success(resp) {
                    if (resp.result === "success") {
                        context.emit('delete_a_post', post_id)
                    }
                }, error() {
                    console.log("error");
                }
            })

        };

        return {
            content,
            update_a_post,
            delete_a_post,
            is_me,
        }
    }
}

</script>

<style scoped>
.xx {
    margin-top: 10px;
}

.update {
    float: right;
    margin-right: 20px;
}

.delete {
    float: right;
}

/* button {
    float: right;
} */
</style>