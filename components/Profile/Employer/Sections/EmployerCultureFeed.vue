<template>
    <div class="py-18">
        <div class="container mx-auto">
            <div class="flex items-center justify-between">
                <div class="base-title">Company feed</div>
                <button
                    class="primary-btn"
                    @click="$emit('open-modal-to-add-new-update')"
                >
                    Post update
                </button>
            </div>
            <!-- updates -->
            
        </div>
    </div>  
</template>

<script>
    export default {
        name: 'EmployerCultureFeed'
    }
</script>
