export type MediaItem = { src: string; type: "image" | "video"; label: string };

const A = "/assets";

export const assets = {
  background: `${A}/作品集网页底图参考.png`,
  introFolder: `${A}/初始页面/文件夹样式.png`,
  navFlower: `${A}/导航栏/左边的花图片.JPG`,
  portrait: `${A}/ME板块/首屏/个人照片.JPG`,
  resumeEvent: `${A}/ME板块/首屏/浦婧崟简历（活动策划执行）.pdf`,
  resumeMarketing: `${A}/ME板块/首屏/浦婧崟简历（营销）.pdf`,
  portfolioPdf: `${A}/浦婧崟作品集.pdf`,
};

export const featuredProjects = [
  {
    id: "gmix",
    title: "GMIX 年度大型舞蹈专场",
    role: "总策划／现场执行",
    summary: "结合社员偏好与平台热点优化节目、现场体验及传播链路。",
    metrics: "报名 58→124 人｜观众 120→200 人｜累计播放 10 万+",
    image: `${A}/ME板块/第二屏/精选项目按钮底图/GMIX年度大型舞蹈专场.jpg`,
  },
  {
    id: "livestream",
    title: "海外院校新生主题直播",
    role: "活动策划／直播执行／用户运营",
    summary: "针对新生信息需求及直播中途流失问题，优化内容流程、用户触达与互动机制。",
    metrics: "有效到场 37→78 人｜到场率约 38%→76%｜人均观看 24→56 分钟",
    image: `${A}/ME板块/第二屏/精选项目按钮底图/海外院校新生主题直播.png`,
  },
  {
    id: "random-dance",
    title: "随机舞蹈系列活动",
    role: "活动策划／现场执行／内容传播",
    summary: "围绕学生舞蹈社交需求，构建“线下参与—内容传播—后续引流”的持续运营链路。",
    metrics: "累计落地 13 场｜主导策划执行 7 场｜场均 90—100 人",
    image: `${A}/ME板块/第二屏/精选项目按钮底图/随机舞蹈系列活动.png`,
  },
];

export const skillFolders = [
  {
    key: "content",
    title: "Content",
    tags: "小红书｜公众号｜策划案",
    category: "内容运营",
    image: `${A}/SKILL板块/Content/Content文件夹样式参考.png`,
    media: [
      "IMG_0099.jpeg", "IMG_0100.jpeg", "截屏2026-09-11 19.39.24.png",
      "截屏2026-09-11 19.41.13.png", "截屏2026-09-11 19.41.33.png",
      "截屏2026-09-11 19.42.28.png", "截屏2026-09-11 19.42.56.png",
      "截屏2026-09-11 19.43.40.png", "截屏2026-09-11 19.47.04.png",
      "截屏2026-09-11 19.47.30.png",
    ].map((name) => ({ src: `${A}/SKILL板块/Content/卡片窗口中图片视频/${name}`, type: "image" as const, label: name })),
  },
  {
    key: "photography",
    title: "Photography",
    tags: "静态照片｜动态视频",
    category: "摄影摄像",
    image: `${A}/SKILL板块/Photography/photography文件夹样式参考.png`,
    media: [
      ["3c1bd830d5719824ddea3213b02163ee.jpg", "image"], ["510050082ebec011a64ddca88834460e.jpg", "image"],
      ["601092dd38b09853b66ce71e033c023c.jpg", "image"], ["61517700ce5621bb10b4995d80dff210.png", "image"],
      ["6d2ba542880d816d5cdd9a1931fab374.png", "image"], ["DSC06918.JPG", "image"], ["DSC06924.JPG", "image"],
      ["ba2808e1822ae02a3551a0c069aae4f2.png", "image"], ["df1f1d8568cb9b75491065db40157fc8.png", "image"],
      ["quality_restoration_20260825042823047.jpeg", "image"], ["截屏2026-09-11 19.58.22.png", "image"],
      ["截屏2026-09-11 19.59.42.png", "image"], ["酒馆故事.mp4", "video"],
      ["14230421李婉嘉14230430陈诗怡14230444浦婧崟14230447章朵灿-摄像作业短片2-First Love.mp4", "video"],
    ].map(([name, type]) => ({ src: `${A}/SKILL板块/Photography/卡片窗口中图片视频/${name}`, type: type as "image" | "video", label: name })),
  },
  {
    key: "editing",
    title: "Editing",
    tags: "综艺｜纪录片｜短视频｜AIGC",
    category: "剪辑",
    image: `${A}/SKILL板块/Editing/editing文件夹样式参考.png`,
    media: ["BIghit科普 短视频科普类剪辑练习.mp4", "wemmunity最终.mp4", "原生艺术科普视频.mp4", "微信视频2026-09-11_202916_166.mp4", "扬州-我眼中的运河.mp4", "搞怪借来的猫.mp4", "杨旻.mp4", "谎言，.mp4"]
      .map((name) => ({ src: `${A}/SKILL板块/Editing/卡片窗口中图片视频/${name}`, type: "video" as const, label: name })),
  },
  {
    key: "design",
    title: "Design",
    tags: "海报｜应援｜物料设计",
    category: "",
    image: `${A}/SKILL板块/Design/design文件夹样式参考.png`,
    media: ["IMG_3778.JPG", "IMG_5560.JPG", "libu姓名牌 拷贝.jpg", "立于应援set 拷贝.jpg", "立于杂志封面 拷贝.jpg", "闵运气生祝大屏 拷贝.jpg"]
      .map((name) => ({ src: `${A}/SKILL板块/Design/卡片窗口中图片视频/${name}`, type: "image" as const, label: name })),
  },
];

export const gmixGallery = ["主视觉.jpg", "1788926513694 3.JPG", "444c4b800iafae3381f8d26b3e575235.jpg", "IMG_0016.jpeg", "IMG_0074.jpeg", "IMG_0075.jpeg", "IMG_6535.jpeg", "ea1f22d76h5b432835f4efb3370ba855.jpg", "fbe72927a200e83d789da942851d5e41.jpg"]
  .map((name) => `${A}/WORK板块/GMIX年度大型舞蹈专场全案策划/第五屏/${name}`);

export const danceCarousel = ["640.jpeg", "IMG_0084.jpeg", "微信图片_2026-09-11_171815_824.jpg", "截屏2026-09-11 17.18.39.png", "随机舞蹈系列活动.jpg"]
  .map((name) => `${A}/WORK板块/随机舞蹈系列活动/第二屏/页面底部图片/${name}`);

export const danceGallery = ["640.jpeg", "640_副本.jpeg", "IMG_0820.PNG", "IMG_1328.JPG", "IMG_4039.JPG", "IMG_4593.jpeg", "a7c05e8453d70f702b0270c3d7ad253d.jpg", "c0d9c62151433f640f4f31d347a332d3.JPG", "e49e5dd6ccea9a3e9d4291e04ddb0329.png"]
  .map((name) => `${A}/WORK板块/随机舞蹈系列活动/第四屏/${name}`);

export const operaGallery = ["IMG_0097.JPG", "IMG_0098.JPG", "IMG_9985.jpeg", "IMG_9986.jpeg", "IMG_9987.jpeg", "IMG_9988.jpeg", "截屏2026-09-11 19.25.50.png"]
  .map((name) => `${A}/WORK板块/“小梅花”少儿戏曲选拔赛/第二屏（右下方错落排版照片）/${name}`);
