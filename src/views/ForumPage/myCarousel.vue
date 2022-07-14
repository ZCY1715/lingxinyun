<script>



export default {
    data() {
        return {
            
        }
    },
    props:{
        imageArray:{
            default:[{
                url:'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
                id:0,
                title:'标题',
                describtion:'这是图片的描述',
                signature:'这是签名',
                author:'作者名'
            },
            {
                url:'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
                id:1,
                title:'标题',
                describtion:'这是图片的描述',
                signature:'这是签名',
                author:'作者名'
            },
             {
                url:'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
                id:1,
                title:'标题',
                describtion:'这是图片的描述',
                signature:'这是签名',
                author:'作者名'
            }
                
            ]
        }

    }
    
  
   
}
</script>

<template>
   
        <el-carousel :interval="7000" type="card" height="300px" indicator-position="none">
            <el-carousel-item v-for="item in imageArray" :key="item.id">
                <div :class="$style.carouselItem">
                    <div>
                        <el-image :src="item.url" :fit="contain" style="width:100%"></el-image>
                    </div>
                    <div>
                        <span>{{item.title}}</span>
                        <span>{{"作者:"+item.author}}</span>
                        <p>{{item.describtion}}</p>
                        <span>{{item.signature}}</span>
                    </div>
                </div>
            </el-carousel-item>
        </el-carousel>
 
</template>

<style module>
.carouselItem {
    background-color: rgba(255, 242, 227, 1);
    display: flex;
    flex-direction: row;
    margin: 0;
}
.carouselItem>:nth-child(1){
    flex: 1;
    padding: 10px;
    

}

.carouselItem>:nth-child(2){
    flex:1;
    padding: 20px;
}
.carouselItem>:nth-child(2)>span{
    display: block;
    overflow: hidden;
}

/* span1 */
.carouselItem>:nth-child(2)>:nth-child(1){
    color: rgba(59, 59, 59, 1);
    font-size: 1.3rem;
    font-weight: 600;
    
}

.carouselItem>:nth-child(2)>:nth-child(2){
    color: rgba(59, 59, 59, 1);
    font-size: 1rem;
    font-weight: 500;
    margin-top: 10px;
}
.carouselItem>:nth-child(2)>:nth-child(3){
    color: rgba(122, 122, 122, 1);
    margin-top: 10px;
    font-size:1rem;
}
.carouselItem>:nth-child(2)>:nth-child(4){
    color: rgba(122, 122, 122, 1);
    margin-top: 10px;
    font-size:1rem;
}

</style>