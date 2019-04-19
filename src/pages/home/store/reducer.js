import {fromJS } from 'immutable';
const defaultState= fromJS({
    TopicList:[
        {
            id:1,
            title:'社会新闻',
            imgUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555668475588&di=08fad851b211b7e55b4b58fd3e3968ab&imgtype=0&src=http%3A%2F%2Fbpic.588ku.com%2Felement_origin_min_pic%2F16%2F10%2F23%2F4a685054217e290eab6bfcc9c4f85014.jpg'
        },
        {
            id:2,
            title:'手绘',
            imgUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555668475585&di=d54a988af75ed8bf0bdac706356e768c&imgtype=0&src=http%3A%2F%2Fpic77.nipic.com%2Ffile%2F20150908%2F3331970_114918706000_2.jpg'
        },
        {
            id:3,
            title:'简书电源',
            imgUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555668475584&di=20cf1916883b3424568000f94754fd8d&imgtype=0&src=http%3A%2F%2Fhomesitetask.zbjimg.com%2Fhomesite%2Ftask%2F1qa.jpg%2Forigine%2Fe83e54f8-f8a8-4172-8825-5e9f8ee1e05a'
        },
        {
            id:4,
            title:'摄影',
            imgUrl:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3376068333,972328707&fm=26&gp=0.jpg'
        },
        {
            id:5,
            title:'读书',
            imgUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555668475582&di=3f6a0fc93b5a1463e5dd9b41d95c0a56&imgtype=0&src=http%3A%2F%2Fwww.logofree.cn%2Fuploads%2Fimage%2F20171025%2F11%2F15.jpg'
        },
        {
            id:6,
            title:'历史',
            imgUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555668475582&di=7b737e421abf7f56e29fe5c768b00bae&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01d4f858292ab3a84a0e282b3c36fc.jpg'
        },
        {
            id:7,
            title:'旅行·在路上',
            imgUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555670709390&di=235a48eb18eb5031f3f05723a4a74e63&imgtype=0&src=http%3A%2F%2Fimg3.k68.cn%2Fk68over2010-05%2F114620%2Fk68_cn_201137165731_01.jpg'
        }
        
    ],
    list:[
        {
            id:1,
            title:'2018年我坚持养成了这些微习惯，宛如重生。',
            content:'文 / 南桑阿莉 始终坚信每一个想要变好的人，心里都会有一个想要成为的人，但若不行动，只不过是人们口中思想的巨人，行动的矮子而已。每一个人都希望...',
            imgUrl:'https://upload-images.jianshu.io/upload_images/3289907-3a5ee308f6ca2295.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
        },
        {
            id:2,
            title:'一个小城姑娘的上海十年',
            content:'走出办公室，已经是晚上十点，白天人声鼎沸的南京西路早已行人稀疏。深夜的热闹属于几百米外的张园和铜仁路酒吧，属于三公里外的新天地和衡山路。 上海的...',
            imgUrl:'https://upload-images.jianshu.io/upload_images/8296185-9e0cd296b1508d0d.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
        },
        {
            id:3,
            title:'作为骨科医生，我必须告诉所有女性这个真相！',
            content:'女性进化的程度远比男性更高"，这是近年来坊间广为流传的说法。随着文明和社会的发展，伟大的女性们通过自强不息的奋斗，证明着她们理应同男性一样被平...',
            imgUrl:'https://upload-images.jianshu.io/upload_images/4097754-9f1a263534c77db7.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
        },
        {
            id:4,
            title:'徒步香港 - 东澳古道浓浓港味之旅',
            content:'欢迎来到【薯片先森の城市徒步】-香港站，我是薯片先森。 也许，你曾从香港机场起飞在3000尺高空看过太平洋，在旺角人山人海的潮鞋店里买鞋，在尖沙...',
            imgUrl:'https://upload-images.jianshu.io/upload_images/5429138-82cf03e0c5ccfb8a.JPG?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
        },
        {
            id:5,
            title:'零基础自学画画三个多月，我卖出了21幅涂鸦',
            content:'去年十二月，我拿起自动铅笔，买了十几本书，怀揣成为插画师的梦想，决定自学画画。 一开始，连简笔画都画不好，还不如几岁的小孩子。 家人一直催促我去...',
            imgUrl:'https://upload-images.jianshu.io/upload_images/4474991-83de3d95b1577295.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
        },
        {
            id:6,
            title:'认真做早餐就是向生活致敬',
            content:'上周在下厨房美食APP看到第二届早餐马拉松活动，立即报名参加，活动口号是“坚持21天早餐打卡，养成自律习惯”，不禁莞尔一笑，早在去年我就参加两次...',
            imgUrl:'https://upload-images.jianshu.io/upload_images/5412749-7dca779718cd3d09.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
        },
        {
            id:7,
            title:'真实故事 | 从月薪1千到月薪3万 我都经历了什么',
            content:'01 大学刚毕业的时候，工作不好找。找自己的本专业工作找了很久，都需要经验，没公司要我。 后来，我干脆放弃了找自己本专业的工作。我找销售类的工作...',
            imgUrl:'https://upload-images.jianshu.io/upload_images/5440469-51c9d22950008274.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
        }
],
    RecImgList:[
        'https://cdn2.jianshu.io/assets/web/collect-note-955d8c71641a360924390da9da4b0151.png',
        'https://cdn2.jianshu.io/assets/web/collect-note-955d8c71641a360924390da9da4b0151.png',
        'https://cdn2.jianshu.io/assets/web/collect-note-955d8c71641a360924390da9da4b0151.png',
        'https://cdn2.jianshu.io/assets/web/collect-note-955d8c71641a360924390da9da4b0151.png',
        'https://cdn2.jianshu.io/assets/web/collect-note-955d8c71641a360924390da9da4b0151.png'
    ]

})

export default(state=defaultState,action)=>{
    switch(action.type){
        default:
            return state;
    }
}