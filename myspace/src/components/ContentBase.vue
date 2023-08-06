<template>
<div class = "home">
    <div class="container">
      <div class="card">
        <div class="card-body">
            <slot>
                <!-- slot可以获取元素 -->
            </slot>
        </div>
      </div>
    </div>
</div>
</template>

<script>
export default {
    name :"ContentBase",
}
</script>

<style scoped>

</style>