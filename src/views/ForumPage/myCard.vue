<script>
export default {
    data() {
        return {}
    },

    props: {
        title: {

            type: String,
            default: '标题'
        },
        dataList: {
          
            default: [
                { title: '四大名著' ,id:1},
                { title: '四大名著' ,id:2},
                { title: '四大名著' ,id:3},
                { title: '四大名著' ,id:4},
                { title: '四大名著' ,id:5},
                { title: '四大名著' ,id:6},

            ]
        }
    },
    components: {},
    computed: {},
    methods: {},
    watch: {},

    beforeCreate() { },
    created() { },
    beforeMount() { },
    mounted() { },
    beforeUpdate() { },
    updated() { },
    beforeUnmount() { },
    unmounted() { },
}
</script>

<template>
    <div :class="$style.cardBox">
        <div>
            <span>{{ title }}</span>
            <div></div>
        </div>

        <div>
            <div v-for="item in dataList" :key="item.id" :class="$style.commonCol">
                <div>
                    <div>{{ item.id }}</div>
                </div>
                <span>{{ item.title }}</span>

            </div>

        </div>
    </div>

</template>

<style module>
.cardBox {

    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    border-radius: 5px;

}

.cardBox:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.cardBox>:nth-child(1) {
    padding: 10px;
   
    margin-bottom: 5px;
}

.cardBox>:nth-child(1)>span {
    font-size: 1.2rem;
    color: rgba(82, 82, 82, 1);
    font-weight: 500;
     margin-left: 40%;
}

.cardBox>:nth-child(1)>:nth-child(2) {
    height: 0px;
    background: rgba(217, 217, 217, 1);
    border: 2px solid rgba(232, 232, 232, 1);
    box-shadow: 0px 0px 5px rgba(227, 227, 227, 0.25);
    margin-top: 1px;


}

.cardBOx>:nth-child(2) {
    display: flex;
    flex-direction: column;

}


.commonCol {
    display: flex;
    flex-direction: row;

}

.commonCol>:nth-child(1) {
    flex: 1;
    padding-left: 20px;
}


.commonCol>:nth-child(2) {
    flex: 2;
    text-shadow: 0px 0px 5px rgba(227, 227, 227, 0.25);
    color: rgba(82, 82, 82, 1);
    font-weight: 500;
}

/* 方形框的序列号 */
.commonCol>:nth-child(1)>:nth-child(1) {
    width: 25px;
    height: 25px;
    background: rgba(255, 125, 125, 1);
    box-shadow: 0px 0px 5px rgba(227, 227, 227, 0.25);
    border-radius: 2px;
    margin-bottom: 5px;
    color: rgba(255, 255, 255, 1);
    display:flex;
    align-items: center;
    justify-content: center;
}

.commonCol:nth-child(n+3)>:nth-child(1)>:nth-child(1) {
    background: #f9ca24;
}

.commonCol:nth-child(n+5)>:nth-child(1)>:nth-child(1) {

    background: #f6e58d;

}
</style>