<template>
    <div class="card edit-field">
        <div class="card-body">

            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">发贴</label>
                <textarea v-model="content" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                <!--  text的内容和content绑定起来 即text=content-->
            </div>
            <button @click="post_a_post" tyep="button" class="btn btn-primary btn-sm">确认</button>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import $ from 'jquery';
import { useStore } from 'vuex';

export default {
    name: "UserProfileWrite",
    
    setup(props, context) {

        const store = useStore();

        // 必须要有props否则报错,context为第二个参数
        let content = ref('');

        const post_a_post = () => {
            $.ajax({
                url: "https://app165.acapp.acwing.com.cn/myspace/post/",
                type: "POST",
                data: {
                    content: content.value,
                }, headers: {
                    'Authorization': "Bearer " + store.state.user.access,
                }, success(resp) {
                    if (resp.result === "success") {
                        context.emit('post_a_post', content.value);
                        content.value = "";
                    }
                },error(){
                    console.log("error");
                }
            });

            // console.log(content.value);

        }

        return {
            post_a_post,
            content: content,
            // 可以直接写成content
        }
    }
}


</script>

<style scoped>
.edit-field {
    margin-top: 20px;
}

button {
    margin-top: 10px;
}
</style>
<!-- alt + shift + f -->