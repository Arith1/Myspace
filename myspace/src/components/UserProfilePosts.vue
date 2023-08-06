<template>
<div class="card">
    <div class="card-body">
        <div v-for="post in posts.posts1" :key="post.id">
            <!-- 遍历posts key必须唯一且必须绑定 -->
            <div class="card xx">
                <div class="card-body">
                    {{ post.content }}
                </div>
            </div>
        </div>
        
    </div>
</div>

</template>

<script>
export default{
    name : "UserProfilePosts",
    props:{
        posts:{
            type:Object,
            required:true,
            // required为必须传过来
        }
    }
}

</script>

<style scoped>
.xx{
    margin-top: 10px;
}

</style>