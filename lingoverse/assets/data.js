/* 语宙 LINGOVERSE — 课程内容与社区种子数据 */

const LANGS = [
  {
    id: 'en', name: '英语', native: 'English', word: 'ENGLISH',
    greeting: 'Hello, world.', phonetic: 'Hel·lo, world',
    tagline: '从第一句问候，到自如表达观点。',
    accent: '#2C6E63', soft: '#E1ECE6', deep: '#123A33',
    levels: ['A1', 'A2', 'B1'],
    sample: { term: 'wander', reading: '/ˈwɑːndər/', meaning: '漫游；闲逛' },
    community: '21.4 万学习者', scenes: ['咖啡馆点单', '城市问路', '观点讨论']
  },
  {
    id: 'ja', name: '日语', native: '日本語', word: 'NIHONGO',
    greeting: 'はじめまして。', phonetic: 'Ha·ji·me·ma·shi·te',
    tagline: '在敬语与日常之间，听见另一种温度。',
    accent: '#C4472F', soft: '#F5E3DC', deep: '#5A2017',
    levels: ['N5', 'N4', 'N3'],
    sample: { term: '旅', reading: 'たび', meaning: '旅行；旅程' },
    community: '13.8 万学习者', scenes: ['便利店购物', '车站问路', '居酒屋闲聊']
  },
  {
    id: 'ko', name: '韩语', native: '한국어', word: 'HANGUGE',
    greeting: '안녕하세요.', phonetic: 'An·nyeong·ha·se·yo',
    tagline: '从谚文的形状开始，读懂首尔的一天。',
    accent: '#474C9C', soft: '#E5E5F2', deep: '#22254F',
    levels: ['TOPIK 1', 'TOPIK 2', 'TOPIK 3'],
    sample: { term: '여행', reading: 'yeohaeng', meaning: '旅行' },
    community: '9.7 万学习者', scenes: ['咖啡店点单', '地铁换乘', '朋友聚会']
  }
];

const LEVEL_META = {
  en: [
    {
      id: 'a1', label: 'A1 · 起步', code: 'A1', summary: '用最简单的句子，完成第一次真实对话。',
      units: [
        { title: '初见的温度', subtitle: '问候、自我介绍与日常寒暄', lessons: [
          { title: 'Hello, stranger', goal: '用三句话完成一次自然的自我介绍' },
          { title: 'Small talk, big door', goal: '用一般现在时聊起你的日常' }
        ] },
        { title: '城市漫步', subtitle: '问路、方向与场所描述', lessons: [
          { title: 'Lost in the city', goal: '礼貌地问路，并听懂方向指示' },
          { title: 'A slower afternoon', goal: '用形容词描绘一个让你放松的地方' }
        ] },
        { title: '味觉记忆', subtitle: '点单、礼貌请求与食物话题', lessons: [
          { title: 'At the counter', goal: '在咖啡馆完成一次完整的点单' },
          { title: 'The taste of home', goal: '谈论一道让你想起家的食物' }
        ] }
      ]
    },
    {
      id: 'a2', label: 'A2 · 进阶', code: 'A2', summary: '把零散的句子，连成有温度的故事。',
      units: [
        { title: '新的习惯', subtitle: '变化、频率与日常节奏', lessons: [
          { title: 'A fresh start', goal: '谈论最近发生的变化' },
          { title: 'Tiny rituals', goal: '描述你的小习惯与频率' }
        ] },
        { title: '旅途插曲', subtitle: '过去时、意外与讲述', lessons: [
          { title: 'When plans change', goal: '应对旅行中的计划变化' },
          { title: 'Stories from the road', goal: '用过去时讲一个旅途故事' }
        ] },
        { title: '表达立场', subtitle: '比较、观点与礼貌分歧', lessons: [
          { title: 'I see it differently', goal: '表达一个不同但礼貌的观点' },
          { title: 'A polite disagreement', goal: '在讨论中比较两种看法' }
        ] }
      ]
    },
    {
      id: 'b1', label: 'B1 · 独立', code: 'B1', summary: '不只说对话，还能说出你的想法。',
      units: [
        { title: '观点与论证', subtitle: '论证、让步与隐含态度', lessons: [
          { title: 'The case for curiosity', goal: '用理由支撑你的观点' },
          { title: 'Reading between lines', goal: '听懂话里没有明说的态度' }
        ] },
        { title: '文化与身份', subtitle: '归属感、语言与文化', lessons: [
          { title: 'Where do I belong', goal: '讨论身份与归属感' },
          { title: 'Words that travel', goal: '讨论语言如何塑造文化' }
        ] },
        { title: '未来工作', subtitle: '趋势、假设与愿景', lessons: [
          { title: 'Work, reimagined', goal: '讨论未来工作的变化' },
          { title: 'A letter to my future self', goal: '用条件句表达对未来的想象' }
        ] }
      ]
    }
  ],
  ja: [
    {
      id: 'n5', label: 'N5 · 入门', code: 'N5', summary: '从五十音到第一句完整的自我介绍。',
      units: [
        { title: 'はじめまして', subtitle: '问候、自我介绍与喜好', lessons: [
          { title: 'はじめまして', goal: '用です・ます体完成自我介绍' },
          { title: '好きなこと', goal: '谈论你喜欢与不喜欢的事' }
        ] },
        { title: '街を歩く', subtitle: '问路、场所与方向', lessons: [
          { title: '駅までの道', goal: '礼貌地询问去车站的路' },
          { title: '静かな喫茶店', goal: '用形容词描述一个安静的空间' }
        ] },
        { title: '日常の味', subtitle: '点单、食物与家的味道', lessons: [
          { title: '注文をお願いします', goal: '在店里完成一次点单' },
          { title: 'うちの味', goal: '谈论一道让你想起家的料理' }
        ] }
      ]
    },
    {
      id: 'n4', label: 'N4 · 进阶', code: 'N4', summary: '能讲清一件事，也能传达一份心情。',
      units: [
        { title: '新しい習慣', subtitle: '习惯、挑战与成长', lessons: [
          { title: '毎朝の十分', goal: '描述你的每日习惯' },
          { title: '小さな挑戦', goal: '谈论一次小小的挑战' }
        ] },
        { title: '旅の記憶', subtitle: '变化、经历与讲述', lessons: [
          { title: '予定が変わった日', goal: '讲述旅途中计划改变的一天' },
          { title: '旅の話', goal: '分享一段难忘的旅行记忆' }
        ] },
        { title: '気持ちを伝える', subtitle: '请求、感谢与礼貌', lessons: [
          { title: 'やさしいお願い', goal: '用委婉的方式提出请求' },
          { title: 'ありがとうの形', goal: '用不同层次表达感谢' }
        ] }
      ]
    },
    {
      id: 'n3', label: 'N3 · 独立', code: 'N3', summary: '读懂言外之意，表达自己的见地。',
      units: [
        { title: 'ことばと文化', subtitle: '语感、背景与翻译', lessons: [
          { title: '言葉の背景', goal: '讨论语言背后的文化背景' },
          { title: '翻訳できない言葉', goal: '谈论那些难以翻译的词' }
        ] },
        { title: '社会を見る', subtitle: '新闻、观点与讨论', lessons: [
          { title: 'ニュースを読む', goal: '抓住新闻中的关键信息' },
          { title: '意見を述べる', goal: '有条理地表达自己的观点' }
        ] },
        { title: '未来を語る', subtitle: '设想、变化与技术', lessons: [
          { title: '十年後の私', goal: '描述十年后的自己' },
          { title: '社会と技術', goal: '讨论技术如何改变社会' }
        ] }
      ]
    }
  ],
  ko: [
    {
      id: 't1', label: 'TOPIK 1 · 入门', code: 'TOPIK 1', summary: '读懂谚文，完成日常场景里的第一次对话。',
      units: [
        { title: '첫 만남', subtitle: '问候、自我介绍与喜好', lessons: [
          { title: '안녕하세요', goal: '用礼貌体完成自我介绍' },
          { title: '좋아하는 것', goal: '谈论你喜欢与不喜欢的事' }
        ] },
        { title: '거리 산책', subtitle: '问路、场所与方向', lessons: [
          { title: '길을 물어요', goal: '询问并听懂去某个地方的路' },
          { title: '조용한 카페', goal: '描述一个安静舒适的场所' }
        ] },
        { title: '매일의 맛', subtitle: '点单、食物与家的味道', lessons: [
          { title: '주문할게요', goal: '在咖啡店完成一次点单' },
          { title: '집의 맛', goal: '谈论一道让你想起家的料理' }
        ] }
      ]
    },
    {
      id: 't2', label: 'TOPIK 2 · 进阶', code: 'TOPIK 2', summary: '把句子连成故事，把心情说得清楚。',
      units: [
        { title: '새로운 습관', subtitle: '习惯、挑战与成长', lessons: [
          { title: '매일의 십 분', goal: '描述你的每日习惯' },
          { title: '작은 도전', goal: '谈论一次挑战带来的变化' }
        ] },
        { title: '여행의 기억', subtitle: '变化、经历与讲述', lessons: [
          { title: '계획이 바뀐 날', goal: '讲述旅途中计划改变的一天' },
          { title: '여행 이야기', goal: '分享一段难忘的旅行记忆' }
        ] },
        { title: '마음 전하기', subtitle: '请求、感谢与礼貌', lessons: [
          { title: '정중한 부탁', goal: '用委婉的方式提出请求' },
          { title: '고마움의 방식', goal: '用合适的方式表达感谢' }
        ] }
      ]
    },
    {
      id: 't3', label: 'TOPIK 3 · 独立', code: 'TOPIK 3', summary: '理解语境与言外之意，表达有层次的见解。',
      units: [
        { title: '말과 문화', subtitle: '语感、背景与翻译', lessons: [
          { title: '말의 배경', goal: '讨论语言背后的文化背景' },
          { title: '번역되지 않는 말', goal: '谈论那些难以翻译的词' }
        ] },
        { title: '사회 읽기', subtitle: '新闻、观点与讨论', lessons: [
          { title: '뉴스를 읽다', goal: '抓住新闻中的关键信息' },
          { title: '의견을 말하다', goal: '有条理地表达自己的观点' }
        ] },
        { title: '미래 이야기', subtitle: '设想、变化与技术', lessons: [
          { title: '십 년 뒤의 나', goal: '描述十年后的自己' },
          { title: '기술과 사회', goal: '讨论技术如何改变社会' }
        ] }
      ]
    }
  ]
};

const CONTENT = {
  en: {
    a1: {
      vocab: [
        { id: 'en-a1-v1', term: 'journey', reading: '/ˈdɜːrni/', pos: 'n.', meaning: '旅程；行程', example: 'The journey was long, but every mile was worth it.', exampleZh: '旅途漫长，但每一英里都值得。' },
        { id: 'en-a1-v2', term: 'curious', reading: '/ˈkjʊəriəs/', pos: 'adj.', meaning: '好奇的', example: 'Stay curious — every question opens a door.', exampleZh: '保持好奇，每个问题都会打开一扇门。' },
        { id: 'en-a1-v3', term: 'ordinary', reading: '/ˈɔːrdəneri/', pos: 'adj.', meaning: '平凡的；普通的', example: 'An ordinary morning can still feel like a gift.', exampleZh: '平凡的早晨也可以像一份礼物。' },
        { id: 'en-a1-v4', term: 'gather', reading: '/ˈɡæðər/', pos: 'v.', meaning: '聚集；聚在一起', example: 'Friends gather around the table on Sunday evenings.', exampleZh: '周日晚，朋友们围坐在桌旁。' },
        { id: 'en-a1-v5', term: 'whisper', reading: '/ˈwɪspər/', pos: 'v.', meaning: '低声说；耳语', example: 'She leaned in and whispered the good news.', exampleZh: '她凑近，低声说出了好消息。' },
        { id: 'en-a1-v6', term: 'courage', reading: '/ˈkɜːrɪdʒ/', pos: 'n.', meaning: '勇气', example: 'It takes courage to speak a new language out loud.', exampleZh: '大声说一门新语言需要勇气。' },
        { id: 'en-a1-v7', term: 'familiar', reading: '/fəˈmɪliər/', pos: 'adj.', meaning: '熟悉的', example: "That melody sounds familiar, like a place I've been.", exampleZh: '那段旋律很熟悉，像一个去过的地方。' },
        { id: 'en-a1-v8', term: 'wander', reading: '/ˈwɑːndər/', pos: 'v.', meaning: '漫步；闲逛', example: 'We wandered through the old town without a map.', exampleZh: '我们没带地图，在老城里漫步。' },
        { id: 'en-a1-v9', term: 'delight', reading: '/dɪˈlaɪt/', pos: 'n.', meaning: '喜悦；愉快', example: 'The children jumped with delight when it snowed.', exampleZh: '下雪时，孩子们高兴得跳起来。' }
      ],
      grammar: [
        {
          id: 'en-a1-g1', point: 'be 动词的三种人称', summary: 'I am / you are / he, she, it is。先把“是谁”说清楚，再补充信息。',
          examples: [{ target: 'I am a designer.', zh: '我是一名设计师。' }, { target: 'She is from Chengdu.', zh: '她来自成都。' }],
          question: { q: 'She ___ a designer at a small studio.', options: ['am', 'is', 'are', 'be'], answer: 1, explanation: '第三人称单数 she 搭配 is。' }
        },
        {
          id: 'en-a1-g2', point: '一般现在时：第三人称单数', summary: '描述习惯或事实时，he / she / it 后的动词要加 -s 或 -es。',
          examples: [{ target: 'He drinks coffee every morning.', zh: '他每天早晨喝咖啡。' }, { target: 'She walks to work.', zh: '她走路上班。' }],
          question: { q: 'He ___ coffee every morning before work.', options: ['drink', 'drinks', 'drinking', 'drank'], answer: 1, explanation: '主语 he 为第三人称单数，一般现在时动词加 -s。' }
        },
        {
          id: 'en-a1-g3', point: '冠词 a / an / the', summary: '首次提到可数名词单数用 a / an；双方都知道的特指对象用 the。',
          examples: [{ target: 'I saw an elephant at the zoo.', zh: '我在动物园看到一头大象。' }, { target: 'The elephant was eating.', zh: '那头大象正在吃东西。' }],
          question: { q: 'I saw ___ elephant at the zoo yesterday.', options: ['a', 'an', 'the', '—'], answer: 1, explanation: 'elephant 以元音音素开头，用 an。' }
        }
      ],
      listening: [
        {
          id: 'en-a1-l1', title: 'At the coffee shop', text: 'Good morning! Can I get a medium latte, please? With oat milk, if you have it. Oh, and could I have an extra shot? It is going to be a long day.',
          translation: '早上好！请给我一杯中杯拿铁。如果有燕麦奶的话。哦，可以再加一份浓缩吗？今天会是很长的一天。',
          question: { q: 'What does the customer add to the latte?', options: ['An extra shot', 'A slice of cake', 'A larger cup', 'Soy milk'], answer: 0, explanation: '顾客说 “could I have an extra shot”，即加一份浓缩。' }
        },
        {
          id: 'en-a1-l2', title: 'A small plan', text: 'I usually walk to work, but on Fridays I take the bus. It gives me twenty extra minutes to read. Today I am reading a story about a woman who travels by train.',
          translation: '我通常走路去上班，但周五会坐公交。这能多给我二十分钟阅读。今天我在读一个关于坐火车旅行的女人的故事。',
          question: { q: 'Why does the speaker take the bus on Fridays?', options: ['To read for twenty minutes', 'Because it is faster', 'To meet a friend', 'Because of the rain'], answer: 0, explanation: '说话者明确说这能多给二十分钟阅读时间。' }
        }
      ],
      speaking: [
        { id: 'en-a1-s1', text: "Hi, I'm Mei. Nice to meet you.", translation: '你好，我是梅。很高兴认识你。', tip: "I'm 读作 /aɪm/，与后面的 Mei 自然连读，不必逐词停顿。" },
        { id: 'en-a1-s2', text: 'Could I have a cup of coffee, please?', translation: '请给我一杯咖啡，可以吗？', tip: 'Could I 中的 d 与 I 连读成 /kʊdaɪ/，语气比 Can I 更委婉。' }
      ]
    },
    a2: {
      vocab: [
        { id: 'en-a2-v1', term: 'encounter', reading: '/ɪnˈkaʊntər/', pos: 'v.', meaning: '偶遇；遭遇', example: 'We encountered a street musician on the way home.', exampleZh: '回家路上，我们偶遇了一位街头音乐人。' },
        { id: 'en-a2-v2', term: 'resilient', reading: '/rɪˈzɪliənt/', pos: 'adj.', meaning: '有韧性的；能复原的', example: 'She is resilient; setbacks only make her more determined.', exampleZh: '她很有韧性，挫折只会让她更坚定。' },
        { id: 'en-a2-v3', term: 'perspective', reading: '/pərˈspektɪv/', pos: 'n.', meaning: '视角；看法', example: 'Travelling changed my perspective on what home means.', exampleZh: '旅行改变了我对“家”的理解。' },
        { id: 'en-a2-v4', term: 'hesitate', reading: '/ˈhezɪteɪt/', pos: 'v.', meaning: '犹豫', example: "Don't hesitate to ask if something is unclear.", exampleZh: '如果有不清楚的地方，别犹豫，尽管问。' },
        { id: 'en-a2-v5', term: 'meaningful', reading: '/ˈmiːnɪŋfl/', pos: 'adj.', meaning: '有意义的', example: 'A small, meaningful conversation can change a day.', exampleZh: '一次简短而有意义的对话能改变一整天。' },
        { id: 'en-a2-v6', term: 'adapt', reading: '/əˈdæpt/', pos: 'v.', meaning: '适应；调整', example: 'It took me a month to adapt to the new rhythm.', exampleZh: '我花了一个月才适应新的节奏。' },
        { id: 'en-a2-v7', term: 'atmosphere', reading: '/ˈætməsfɪr/', pos: 'n.', meaning: '氛围', example: 'The café has a warm, unhurried atmosphere.', exampleZh: '这家咖啡馆有一种温暖而不慌不忙的氛围。' },
        { id: 'en-a2-v8', term: 'vivid', reading: '/ˈvɪvɪd/', pos: 'adj.', meaning: '生动的；鲜明的', example: 'The memory is still vivid, even after ten years.', exampleZh: '十年过去，那段记忆依然鲜明。' },
        { id: 'en-a2-v9', term: 'unexpected', reading: '/ˌʌnɪkˈspektɪd/', pos: 'adj.', meaning: '意想不到的', example: 'The most unexpected moments often stay with us.', exampleZh: '最意想不到的时刻往往留在我们心里。' }
      ],
      grammar: [
        {
          id: 'en-a2-g1', point: '现在完成时 vs 一般过去时', summary: '现在完成时连接过去与现在（经历、结果）；一般过去时强调过去某个时间点。',
          examples: [{ target: 'I have seen this film three times.', zh: '这部电影我看过三遍。' }, { target: 'I saw it last Friday.', zh: '我上周五看了它。' }],
          question: { q: 'I ___ this film three times, and I still love it.', options: ['saw', 'have seen', 'see', 'am seeing'], answer: 1, explanation: '表示至今为止的经历，用现在完成时 have seen。' }
        },
        {
          id: 'en-a2-g2', point: '比较级与最高级', summary: '两者比较用 -er / more；三者及以上用 the -est / the most。',
          examples: [{ target: 'This route is more scenic than the other one.', zh: '这条路线比另一条风景更好。' }, { target: 'It is the most scenic route in the city.', zh: '这是城里风景最好的路线。' }],
          question: { q: 'This route is ___ than the one we took yesterday.', options: ['most scenic', 'more scenic', 'scenic', 'much scenic'], answer: 1, explanation: '两者比较用比较级 more scenic。' }
        },
        {
          id: 'en-a2-g3', point: 'will vs be going to', summary: 'be going to 表示已计划或已有明显迹象；will 表示临时决定或预测。',
          examples: [{ target: 'We are going to visit Kyoto next spring.', zh: '我们打算明年春天去京都。' }, { target: "I'll answer the phone.", zh: '我去接电话。' }],
          question: { q: "I've already booked the tickets. We ___ leave on Friday.", options: ['will', 'are going to', 'would', 'have'], answer: 1, explanation: '已经订好票，说明是既定计划，用 be going to。' }
        }
      ],
      listening: [
        {
          id: 'en-a2-l1', title: 'Weekend in the city', text: 'We were supposed to meet at the museum at ten, but the line was around the block. So we bought coffee instead and sat by the river, watching the boats. Honestly, it was better than any exhibition.',
          translation: '我们本来约好十点在博物馆碰面，但队伍排到了街角。于是我们改买咖啡，坐在河边看船。说实话，那比任何展览都好。',
          question: { q: 'What did they do instead of visiting the museum?', options: ['They queued for an hour', 'They sat by the river with coffee', 'They went on a boat tour', 'They visited another exhibition'], answer: 1, explanation: '他们改买咖啡，坐在河边看船。' }
        },
        {
          id: 'en-a2-l2', title: 'A change of plans', text: "I'd booked a train to the coast, but the storm cancelled it. A stranger offered me a ride, and we spent three hours talking about music. I never got to the sea, but I made a friend.",
          translation: '我订了去海边的火车，但暴风雨取消了班次。一位陌生人让我搭车，我们聊了三个小时音乐。我没到海边，却交了一个朋友。',
          question: { q: 'What happened to the train?', options: ['It was late', 'It was cancelled by the storm', 'It broke down', 'It was fully booked'], answer: 1, explanation: '“the storm cancelled it” 说明暴风雨取消了火车。' }
        }
      ],
      speaking: [
        { id: 'en-a2-s1', text: "I've always wanted to learn another language because it lets me see the world differently.", translation: '我一直想学另一门语言，因为它让我用不同的方式看世界。', tip: "I've 读作 /aɪv/；because 后的 it lets 连读成 /ɪtˈlets/。" },
        { id: 'en-a2-s2', text: 'If I had more time, I would spend it wandering through unfamiliar streets.', translation: '如果我有更多时间，我会用来漫步在陌生的街道上。', tip: 'would 的 d 常弱读；unfamiliar 重音在 fa 音节。' }
      ]
    },
    b1: {
      vocab: [
        { id: 'en-b1-v1', term: 'nuance', reading: '/ˈnuːɑːns/', pos: 'n.', meaning: '细微差别；语感', example: 'Native speakers hear nuances that learners often miss.', exampleZh: '母语者能听出学习者常忽略的细微差别。' },
        { id: 'en-b1-v2', term: 'articulate', reading: '/ˈɑːrtɪkjuleɪt/', pos: 'v.', meaning: '清晰表达', example: 'She articulated the idea more clearly than I could.', exampleZh: '她把这个想法表达得比我清楚。' },
        { id: 'en-b1-v3', term: 'inevitably', reading: '/ɪnˈevɪtəbli/', pos: 'adv.', meaning: '不可避免地', example: 'Learning a language inevitably means making mistakes.', exampleZh: '学语言不可避免地意味着犯错。' },
        { id: 'en-b1-v4', term: 'compelling', reading: '/kəmˈpelɪŋ/', pos: 'adj.', meaning: '引人入胜的；有说服力的', example: 'His argument was compelling because it began with a story.', exampleZh: '他的论点很有说服力，因为它从一个故事开始。' },
        { id: 'en-b1-v5', term: 'navigate', reading: '/ˈnævɪɡeɪt/', pos: 'v.', meaning: '导航；应对', example: 'We learned to navigate both the city and its courtesy rules.', exampleZh: '我们学会了穿梭于这座城市和它的礼节之间。' },
        { id: 'en-b1-v6', term: 'contradictory', reading: '/ˌkɑːntrəˈdɪktəri/', pos: 'adj.', meaning: '矛盾的', example: 'Two contradictory feelings can exist at the same time.', exampleZh: '两种矛盾的情感可以同时存在。' },
        { id: 'en-b1-v7', term: 'insight', reading: '/ˈɪnsaɪt/', pos: 'n.', meaning: '洞察；深刻见解', example: 'The interview gave me a new insight into her work.', exampleZh: '这次采访让我对她的工作有了新的洞察。' },
        { id: 'en-b1-v8', term: 'convey', reading: '/kənˈveɪ/', pos: 'v.', meaning: '传达', example: 'Tone of voice can convey more than words alone.', exampleZh: '语气能传达出比文字更多的东西。' },
        { id: 'en-b1-v9', term: 'spontaneous', reading: '/spɑːnˈteɪniəs/', pos: 'adj.', meaning: '自发的；即兴的', example: 'Our best evening was a spontaneous walk by the river.', exampleZh: '我们最棒的一晚是临时起意去河边散步。' }
      ],
      grammar: [
        {
          id: 'en-b1-g1', point: '第二条件句', summary: 'If + 过去时，would + 动词原形，用来谈论与现在事实相反的假设。',
          examples: [{ target: 'If I had more time, I would learn the violin.', zh: '如果我有更多时间，我会学小提琴。' }, { target: 'If I knew her number, I would call.', zh: '如果我知道她的号码，我会打电话。' }],
          question: { q: 'If I ___ more time, I would learn the violin.', options: ['have', 'had', 'will have', 'having'], answer: 1, explanation: '第二条件句从句用过去时 had，主句用 would + 原形。' }
        },
        {
          id: 'en-b1-g2', point: '关系从句 who / which / that', summary: 'who 指人，which 指物，that 两者皆可；关系词在从句中充当成分。',
          examples: [{ target: 'The artist who painted this mural is local.', zh: '画这幅壁画的艺术家是本地人。' }, { target: 'The book which changed my mind was a gift.', zh: '改变我想法的书是一份礼物。' }],
          question: { q: 'The notebook ___ she bought yesterday is on the desk.', options: ['who', 'which', 'where', 'whose'], answer: 1, explanation: '先行词 notebook 是物，关系词用 which（或 that）。' }
        },
        {
          id: 'en-b1-g3', point: '被动语态', summary: '强调动作承受者或动作本身时使用 be + 过去分词，常省略执行者。',
          examples: [{ target: 'The mural was painted by a local artist.', zh: '这幅壁画由一位本地艺术家绘制。' }, { target: 'The decision has been made.', zh: '决定已经做出。' }],
          question: { q: 'The mural ___ by a local artist last summer.', options: ['painted', 'was painted', 'is painting', 'paints'], answer: 1, explanation: '壁画是被绘制的，过去时被动语态为 was painted。' }
        }
      ],
      listening: [
        {
          id: 'en-b1-l1', title: 'The art of slowing down', text: "People often ask me how to be more productive. My answer surprises them: do less, but notice more. When you walk without headphones, you hear the city compose itself. Ideas rarely arrive when you're rushing.",
          translation: '人们常问我如何更高效。我的答案总让他们意外：做得少一点，但多留意一些。当你不戴耳机散步，会听见城市自己谱曲。匆忙时，想法很少会到来。',
          question: { q: "What is the speaker's advice?", options: ['Do less and notice more', 'Walk faster with headphones', 'Work longer hours', 'Avoid listening to music'], answer: 0, explanation: '说话者直接给出建议 “do less, but notice more”。' }
        },
        {
          id: 'en-b1-l2', title: 'An interview about travel', text: "Interviewer: What changed for you after travelling alone? Guest: I stopped waiting for permission. When the bus doesn't come, you learn to ask, to wait, to laugh. Travel didn't make me brave; it made me resourceful.",
          translation: '采访者：独自旅行后，你发生了什么变化？嘉宾：我不再等别人许可。公交不来时，你学会去问、去等、去笑。旅行没有让我变勇敢，它让我变得有办法。',
          question: { q: 'What does the guest say travel gave her?', options: ['Bravery', 'Resourcefulness', 'A new job', 'More free time'], answer: 1, explanation: '嘉宾说 “it made me resourceful”，即变得有办法、随机应变。' }
        }
      ],
      speaking: [
        { id: 'en-b1-s1', text: 'In my view, the most important thing is not how fast we learn, but how deeply we notice.', translation: '在我看来，重要的不是学得多快，而是我们观察得多深。', tip: 'In my view 后稍作停顿；not...but... 形成对比重音。' },
        { id: 'en-b1-s2', text: 'What fascinates me most about this city is the way old and new coexist.', translation: '这座城市最吸引我的是新旧共存的方式。', tip: 'What fascinates 的重音落在 fa；coexist 重音在 xist。' }
      ]
    }
  },
  ja: {
    n5: {
      vocab: [
        { id: 'ja-n5-v1', term: '旅', reading: 'たび', pos: '名', meaning: '旅行；旅程', example: '旅の途中で、思い出の写真を撮った。', exampleZh: '旅行途中，拍下了值得回忆的照片。' },
        { id: 'ja-n5-v2', term: '日常', reading: 'にちじょう', pos: '名', meaning: '日常', example: '日常の中に、小さな幸せがある。', exampleZh: '日常之中有小确幸。' },
        { id: 'ja-n5-v3', term: '出会う', reading: 'であう', pos: '动', meaning: '遇见；邂逅', example: '旅先で、素敵な人に出会った。', exampleZh: '在旅途中遇见了很棒的人。' },
        { id: 'ja-n5-v4', term: '静か', reading: 'しずか', pos: '形动', meaning: '安静的', example: 'この図書館はいつも静かだ。', exampleZh: '这家图书馆总是很安静。' },
        { id: 'ja-n5-v5', term: '味わう', reading: 'あじわう', pos: '动', meaning: '品味；体会', example: '地元の料理をゆっくり味わった。', exampleZh: '慢慢品味了当地料理。' },
        { id: 'ja-n5-v6', term: '景色', reading: 'けしき', pos: '名', meaning: '景色；风景', example: '山の上から見た景色は忘れられない。', exampleZh: '从山上看到的景色令人难忘。' },
        { id: 'ja-n5-v7', term: '言葉', reading: 'ことば', pos: '名', meaning: '语言；话语', example: '言葉の壁を越えて、友達になった。', exampleZh: '跨越语言的障碍成了朋友。' },
        { id: 'ja-n5-v8', term: '習慣', reading: 'しゅうかん', pos: '名', meaning: '习惯', example: '毎朝の散歩が、私の習慣になった。', exampleZh: '每天早晨散步成了我的习惯。' },
        { id: 'ja-n5-v9', term: '小さな', reading: 'ちいさな', pos: '连体', meaning: '小小的', example: '小さな一歩が、大きな変化を生む。', exampleZh: '小小的一步带来巨大的变化。' }
      ],
      grammar: [
        {
          id: 'ja-n5-g1', point: 'は 与 が', summary: 'は 提示话题（“至于……”），が 提示主语或新信息，常与疑问词搭配。',
          examples: [{ target: '私は学生です。', zh: '我是学生。' }, { target: '誰が来ましたか。', zh: '谁来了？' }],
          question: { q: '「私＿学生です。」', options: ['は', 'が', 'を', 'に'], answer: 0, explanation: '自我介绍时「私は」提示话题，用 は。' }
        },
        {
          id: 'ja-n5-g2', point: 'です・ます体', summary: '礼貌体的基本形式：名词/形容词 + です，动词用 ます 形。',
          examples: [{ target: '毎朝、コーヒーを飲みます。', zh: '每天早上喝咖啡。' }, { target: 'ここは静かです。', zh: '这里很安静。' }],
          question: { q: '「毎朝、コーヒーを＿＿。」', options: ['飲みます', '飲むです', '飲んで', '飲んだ'], answer: 0, explanation: '礼貌体动词用 ます 形：飲みます。' }
        },
        {
          id: 'ja-n5-g3', point: 'て形 + ください', summary: '把动词变成て形，加上 ください，构成礼貌的请求。',
          examples: [{ target: 'ちょっと待ってください。', zh: '请稍等一下。' }, { target: 'ここに座ってください。', zh: '请坐这里。' }],
          question: { q: '「窓を＿＿ください。」', options: ['開けて', '開く', '開いた', '開き'], answer: 0, explanation: '開ける 的て形是 開けて，接 ください 表示请求。' }
        }
      ],
      listening: [
        {
          id: 'ja-n5-l1', title: 'コンビニで', text: 'いらっしゃいませ。あちらに温めるレンジがございます。お弁当を温めますか。',
          translation: '欢迎光临。那边有加热用的微波炉。要帮您加热便当吗？',
          question: { q: '店員は何を聞いていますか。', options: ['弁当を温めるか', '弁当を買うか', 'レンジの場所', 'お金を払うか'], answer: 0, explanation: '店員说「お弁当を温めますか」，是在问是否需要加热便当。' }
        },
        {
          id: 'ja-n5-l2', title: '朝の予定', text: 'おはよう。今日は九時に図書館で会いましょう。その前に、駅の近くでパンを買っておきます。',
          translation: '早上好。今天九点在图书馆见吧。在那之前，我会先在车站附近买面包。',
          question: { q: '二人はどこで会いますか。', options: ['図書館', '駅', 'パン屋', '学校'], answer: 0, explanation: '「九時に図書館で会いましょう」说明在图书馆见面。' }
        }
      ],
      speaking: [
        { id: 'ja-n5-s1', text: 'はじめまして。私は林と申します。よろしくお願いします。', translation: '初次见面。我姓林。请多关照。', tip: '「はじめまして」的 ま 音节轻而短；句尾「お願いします」语调平稳。' },
        { id: 'ja-n5-s2', text: 'すみません、駅はどちらですか。', translation: '不好意思，请问车站在哪边？', tip: '「すみません」语速放慢，重音落在 み；どちら 的 ど 稍上扬。' }
      ]
    },
    n4: {
      vocab: [
        { id: 'ja-n4-v1', term: '経験', reading: 'けいけん', pos: '名', meaning: '经验；经历', example: '初めての海外経験が、私を変えた。', exampleZh: '第一次海外经历改变了我。' },
        { id: 'ja-n4-v2', term: '挑戦', reading: 'ちょうせん', pos: '名', meaning: '挑战', example: '新しい言語を学ぶことは、毎日の挑戦だ。', exampleZh: '学一门新语言是每天的挑战。' },
        { id: 'ja-n4-v3', term: '成長', reading: 'せいちょう', pos: '名', meaning: '成长', example: '失敗を通して、少しずつ成長した。', exampleZh: '通过失败，一点点成长了。' },
        { id: 'ja-n4-v4', term: '丁寧', reading: 'ていねい', pos: '形动', meaning: '礼貌的；细致的', example: '丁寧な言葉づかいが、相手を安心させる。', exampleZh: '礼貌的措辞让人安心。' },
        { id: 'ja-n4-v5', term: '文化', reading: 'ぶんか', pos: '名', meaning: '文化', example: '料理から、その土地の文化が見える。', exampleZh: '从料理能看出那片土地的文化。' },
        { id: 'ja-n4-v6', term: '伝える', reading: 'つたえる', pos: '动', meaning: '传达；转告', example: '気持ちを言葉で伝えるのは難しい。', exampleZh: '用语言传达心意很难。' },
        { id: 'ja-n4-v7', term: '迷う', reading: 'まよう', pos: '动', meaning: '迷路；犹豫', example: '駅で道に迷って、地元の人に助けられた。', exampleZh: '在车站迷路，得到当地人帮助。' },
        { id: 'ja-n4-v8', term: '続ける', reading: 'つづける', pos: '动', meaning: '继续；坚持', example: '毎日十分でも、続けることが大事だ。', exampleZh: '哪怕每天十分钟，坚持很重要。' },
        { id: 'ja-n4-v9', term: '印象', reading: 'いんしょう', pos: '名', meaning: '印象', example: 'その町の印象は、人のやさしさだった。', exampleZh: '那座城市给我的印象是人的温柔。' }
      ],
      grammar: [
        {
          id: 'ja-n4-g1', point: 'てしまう', summary: '表示动作完成，或带有“不小心、遗憾”的语气。',
          examples: [{ target: 'ケーキを全部食べてしまいました。', zh: '不小心把蛋糕全吃完了。' }, { target: '大事なことを忘れてしまった。', zh: '把重要的事忘掉了。' }],
          question: { q: '「ケーキを全部＿＿しまいました。」', options: ['食べて', '食べ', '食べる', '食べた'], answer: 0, explanation: 'てしまう 接在动词て形后：食べてしまいました。' }
        },
        {
          id: 'ja-n4-g2', point: 'たら（条件）', summary: '表示“如果……就……”或“……之后”，常用于假设与先后顺序。',
          examples: [{ target: '雨が降ったら、家にいます。', zh: '如果下雨，我就待在家。' }, { target: '駅に着いたら、電話します。', zh: '到车站后给你打电话。' }],
          question: { q: '「雨が＿＿、家にいます。」', options: ['降ったら', '降るなら', '降りながら', '降っても'], answer: 0, explanation: '假设条件「如果下雨」用 降ったら。' }
        },
        {
          id: 'ja-n4-g3', point: 'たことがある', summary: '表示曾经有过的经历，常与次数、时间搭配。',
          examples: [{ target: '富士山に登ったことがあります。', zh: '我爬过富士山。' }, { target: '納豆を食べたことがありません。', zh: '我没吃过纳豆。' }],
          question: { q: '「富士山に＿＿ことがありますか。」', options: ['登った', '登る', '登り', '登って'], answer: 0, explanation: '经历表达用动词过去式 + ことがある：登ったことがある。' }
        }
      ],
      listening: [
        {
          id: 'ja-n4-l1', title: '週末の計画', text: '土曜日は雨らしいから、映画を見てから、駅前の新しいカフェに行こうと思う。日曜日は天気が良ければ、山に登るつもりだ。',
          translation: '周六好像会下雨，所以打算看完电影后去车站前的新咖啡馆。周日如果天气好，打算去爬山。',
          question: { q: '日曜日の予定は何ですか。', options: ['山に登る', '映画を見る', 'カフェに行く', '家で休む'], answer: 0, explanation: '「天気が良ければ、山に登るつもりだ」说明周日的计划是爬山。' }
        },
        {
          id: 'ja-n4-l2', title: '電車のアナウンス', text: 'まもなく三番線に電車が到着します。この電車は各駅停車、京都方面です。お乗り間違いのないようご注意ください。',
          translation: '列车即将到达三号站台。本列车为各站停车，开往京都方向。请注意不要乘错。',
          question: { q: 'この電車について正しいのはどれですか。', options: ['各駅停車で京都方面', '快速で東京方面', '各駅停車で大阪方面', '特急で京都方面'], answer: 0, explanation: '广播明确说「各駅停車、京都方面」。' }
        }
      ],
      speaking: [
        { id: 'ja-n4-s1', text: '日本語を勉強するきっかけは、日本の映画でした。', translation: '我学日语的契机是日本电影。', tip: 'きっかけ 的 きっ 短促；句尾 でした 降调收束。' },
        { id: 'ja-n4-s2', text: '旅先で出会った人との会話が、今も心に残っています。', translation: '旅途中遇到的人与我的对话，至今仍留在心里。', tip: '「出会った人との」连读时保持每个音节清晰，不要吞音。' }
      ]
    },
    n3: {
      vocab: [
        { id: 'ja-n3-v1', term: '捉える', reading: 'とらえる', pos: '动', meaning: '理解；捕捉', example: '物事を別の角度から捉えると、新しい答えが見える。', exampleZh: '从另一个角度看待事物，会看到新的答案。' },
        { id: 'ja-n3-v2', term: '背景', reading: 'はいけい', pos: '名', meaning: '背景', example: '言葉の背景には、歴史がある。', exampleZh: '语言的背后有历史。' },
        { id: 'ja-n3-v3', term: '微妙', reading: 'びみょう', pos: '形动', meaning: '微妙的', example: '二つの言葉の間に、微妙な違いがある。', exampleZh: '两个词之间有微妙的差别。' },
        { id: 'ja-n3-v4', term: '表現', reading: 'ひょうげん', pos: '名', meaning: '表达；表现', example: '同じ気持ちでも、表現の仕方はさまざまだ。', exampleZh: '同样的心情，表达方式多种多样。' },
        { id: 'ja-n3-v5', term: '臨機応変', reading: 'りんきおうへん', pos: '名', meaning: '随机应变', example: '会話では、臨機応変な対応が求められる。', exampleZh: '对话中需要随机应变。' },
        { id: 'ja-n3-v6', term: '核心', reading: 'かくしん', pos: '名', meaning: '核心', example: '議論の核心は、信頼の問題にある。', exampleZh: '讨论的核心在于信任问题。' },
        { id: 'ja-n3-v7', term: '見解', reading: 'けんかい', pos: '名', meaning: '见解；看法', example: '専門家によって見解が異なる。', exampleZh: '专家的见解各不相同。' },
        { id: 'ja-n3-v8', term: '響き', reading: 'ひびき', pos: '名', meaning: '音韵；回响', example: '日本語の響きが好きで、勉強を始めた。', exampleZh: '因为喜欢日语的音韵，开始学习。' },
        { id: 'ja-n3-v9', term: '自然', reading: 'しぜん', pos: '形动', meaning: '自然的', example: '自然な会話を目指して、毎日練習している。', exampleZh: '以自然的对话为目标，每天练习。' }
      ],
      grammar: [
        {
          id: 'ja-n3-g1', point: 'てばかりいる', summary: '表示反复、持续做某事，常带有说话人的不满或强调。',
          examples: [{ target: '彼は毎日ゲームをしてばかりいる。', zh: '他每天净是打游戏。' }, { target: '文句を言ってばかりいないで。', zh: '别总是抱怨。' }],
          question: { q: '「彼は毎日ゲームをして＿＿います。」', options: ['ばかり', 'たびに', 'うちに', 'ように'], answer: 0, explanation: 'てばかりいる 表示“净是……”，用 ばかり。' }
        },
        {
          id: 'ja-n3-g2', point: 'によって', summary: '表示“由……（完成）”“根据……而不同”“由于……”。',
          examples: [{ target: 'この絵は有名な画家によって描かれました。', zh: '这幅画由著名画家绘制。' }, { target: '国によって習慣が違います。', zh: '习惯因国家而异。' }],
          question: { q: '「この絵は、有名な画家＿＿描かれました。」', options: ['によって', 'について', 'にとって', 'に応じて'], answer: 0, explanation: '被动句中表示动作执行者用 によって。' }
        },
        {
          id: 'ja-n3-g3', point: 'わけだ', summary: '表示从事实自然得出的结论：“难怪……”“也就是说……”。',
          examples: [{ target: '十年住んでいたなら、上手なわけだ。', zh: '住了十年，难怪很熟练。' }, { target: 'つまり、行かないわけだ。', zh: '也就是说，不去了。' }],
          question: { q: '「彼が怒るのも無理はない。何しろ約束を破った＿＿だ。」', options: ['わけ', 'つもり', 'ため', 'そう'], answer: 0, explanation: '由事实得出自然结论，用 わけだ。' }
        }
      ],
      listening: [
        {
          id: 'ja-n3-l1', title: '言葉についてのインタビュー', text: '子どものころ、言葉はただの道具だと思っていました。でも、外国で生活してから、言葉はその人の考え方そのものだと気づきました。',
          translation: '小时候，我以为语言只是工具。但在国外生活后，我意识到语言本身就是那个人的思维方式。',
          question: { q: '話し手の考えはどれですか。', options: ['言葉は考え方と深く結びついている', '言葉は単なる道具だ', '外国語は幼い頃しか学べない', '言葉より文化の方が大切だ'], answer: 0, explanation: '说话者认为「言葉はその人の考え方そのもの」，即语言与思维方式紧密相连。' }
        },
        {
          id: 'ja-n3-l2', title: '落とし物の案内', text: '先ほど、青い傘を電車の中に忘れてしまったようです。お手数ですが、忘れ物センターにご連絡ください。',
          translation: '刚才好像把蓝色的伞忘在电车里了。麻烦您联系失物招领中心。',
          question: { q: '何を忘れましたか。', options: ['青い傘', '黒いかばん', 'スマートフォン', '定期券'], answer: 0, explanation: '「青い傘を電車の中に忘れてしまった」说明忘的是蓝伞。' }
        }
      ],
      speaking: [
        { id: 'ja-n3-s1', text: '言葉は、文化を映す鏡だと思います。', translation: '我认为语言是映照文化的一面镜子。', tip: '「映す」的 す 轻而清；と思います 前稍作停顿。' },
        { id: 'ja-n3-s2', text: '相手の立場に立つと、見える景色が変わる気がします。', translation: '站在对方的立场上，会觉得看到的风景也变了。', tip: '「立場に立つと」连读自然；句尾 気がします 语气放轻。' }
      ]
    }
  },
  ko: {
    t1: {
      vocab: [
        { id: 'ko-t1-v1', term: '여행', reading: 'yeohaeng', pos: '名', meaning: '旅行', example: '여행에서 새로운 나를 만났어요.', exampleZh: '在旅行中遇见了新的自己。' },
        { id: 'ko-t1-v2', term: '만남', reading: 'mannam', pos: '名', meaning: '相遇；见面', example: '우연한 만남이 오래 기억에 남아요.', exampleZh: '偶然的相遇久久留在记忆里。' },
        { id: 'ko-t1-v3', term: '하루', reading: 'haru', pos: '名', meaning: '一天', example: '하루의 끝에 오늘을 적어 봐요.', exampleZh: '在一天结束时，写下今天。' },
        { id: 'ko-t1-v4', term: '고마워요', reading: 'gomawoyo', pos: '表达', meaning: '谢谢', example: '도와주셔서 정말 고마워요.', exampleZh: '谢谢你的帮助。' },
        { id: 'ko-t1-v5', term: '조용히', reading: 'joyonghi', pos: '副', meaning: '安静地', example: '조용히 앉아 창밖을 바라봤어요.', exampleZh: '安静地坐着望向窗外。' },
        { id: 'ko-t1-v6', term: '풍경', reading: 'punggyeong', pos: '名', meaning: '风景', example: '산 위에서 본 풍경이 잊히지 않아요.', exampleZh: '从山上看到的风景难以忘怀。' },
        { id: 'ko-t1-v7', term: '말', reading: 'mal', pos: '名', meaning: '话；语言', example: '말이 다르지만 마음은 통했어요.', exampleZh: '语言不同，但心意相通。' },
        { id: 'ko-t1-v8', term: '습관', reading: 'seupgwan', pos: '名', meaning: '习惯', example: '매일 아침 걷기가 습관이 되었어요.', exampleZh: '每天早晨散步成了习惯。' },
        { id: 'ko-t1-v9', term: '작은', reading: 'jageun', pos: '冠形', meaning: '小的', example: '작은 친절이 하루를 바꿔요.', exampleZh: '小小的善意能改变一天。' }
      ],
      grammar: [
        {
          id: 'ko-t1-g1', point: '은/는 与 이/가', summary: '은/는 提示话题（“至于……”），이/가 提示主语或新信息。',
          examples: [{ target: '저는 학생이에요.', zh: '我是学生。' }, { target: '누가 왔어요?', zh: '谁来了？' }],
          question: { q: '저___ 학생이에요.', options: ['는', '가', '를', '에'], answer: 0, explanation: '自我介绍时「저는」提示话题，用 는。' }
        },
        {
          id: 'ko-t1-g2', point: '-아요/어요 礼貌体', summary: '动词、形容词词干加 -아요 或 -어요，构成日常礼貌体。',
          examples: [{ target: '매일 커피를 마셔요.', zh: '每天喝咖啡。' }, { target: '여기가 조용해요.', zh: '这里很安静。' }],
          question: { q: '매일 커피를 ___.', options: ['마셔요', '마시어요', '마시요', '마셔서'], answer: 0, explanation: '마시다 的词干 마시- 加 -어요，缩约为 마셔요。' }
        },
        {
          id: 'ko-t1-g3', point: '-고 싶다', summary: '表示愿望：“想……”。接在动词词干后。',
          examples: [{ target: '한국에 가고 싶어요.', zh: '我想去韩国。' }, { target: '영화를 보고 싶어요.', zh: '我想看电影。' }],
          question: { q: '한국에 ___ 싶어요.', options: ['가고', '가서', '가는', '갔고'], answer: 0, explanation: '表达愿望用动词词干 + -고 싶다：가고 싶어요。' }
        }
      ],
      listening: [
        {
          id: 'ko-t1-l1', title: '카페에서', text: '어서 오세요. 주문하시겠어요? 아메리카노 두 잔 주세요. 따뜻한 거로 주세요.',
          translation: '欢迎光临。您要点单吗？请给我两杯美式咖啡。要热的。',
          question: { q: '손님이 주문한 것은 무엇입니까?', options: ['아메리카노 두 잔', '라테 한 잔', '차 두 잔', '주스 세 잔'], answer: 0, explanation: '顾客说「아메리카노 두 잔 주세요」，即两杯美式。' }
        },
        {
          id: 'ko-t1-l2', title: '주말 계획', text: '이번 주말에 친구와 같이 영화를 보려고 해요. 영화가 끝나면 근처에서 밥을 먹을 거예요.',
          translation: '这个周末打算和朋友一起看电影。电影结束后，会在附近吃饭。',
          question: { q: '이번 주말에 무엇을 할 계획입니까?', options: ['영화를 보고 밥을 먹는다', '여행을 간다', '친구 집에 간다', '운동을 한다'], answer: 0, explanation: '说话者提到看电影，之后在附近吃饭。' }
        }
      ],
      speaking: [
        { id: 'ko-t1-s1', text: '안녕하세요. 저는 린이라고 합니다. 잘 부탁드립니다.', translation: '你好。我叫林。请多关照。', tip: '「안녕하세요」的 녕 收音清晰；「부탁드립니다」语速稍慢更自然。' },
        { id: 'ko-t1-s2', text: '여기에서 지하철역까지 어떻게 가요?', translation: '从这里到地铁站怎么走？', tip: '「어떻게」的 떻게 紧音；句尾 가요 轻微上扬。' }
      ]
    },
    t2: {
      vocab: [
        { id: 'ko-t2-v1', term: '경험', reading: 'gyeongheom', pos: '名', meaning: '经验；经历', example: '첫 해외 경험이 저를 바꿨어요.', exampleZh: '第一次海外经历改变了我。' },
        { id: 'ko-t2-v2', term: '도전', reading: 'dojeon', pos: '名', meaning: '挑战', example: '새로운 언어를 배우는 건 매일의 도전이에요.', exampleZh: '学新语言是每天的挑战。' },
        { id: 'ko-t2-v3', term: '성장', reading: 'seongjang', pos: '名', meaning: '成长', example: '실패를 통해 조금씩 성장했어요.', exampleZh: '通过失败一点点成长。' },
        { id: 'ko-t2-v4', term: '정성', reading: 'jeongseong', pos: '名', meaning: '用心；诚意', example: '정성을 다해 만든 음식은 맛이 달라요.', exampleZh: '用心做的食物味道不一样。' },
        { id: 'ko-t2-v5', term: '문화', reading: 'munhwa', pos: '名', meaning: '文化', example: '음식에서 그 지역의 문화가 보여요.', exampleZh: '从食物能看出当地文化。' },
        { id: 'ko-t2-v6', term: '전하다', reading: 'jeonhada', pos: '动', meaning: '传达；转达', example: '마음을 말로 전하기는 어려워요.', exampleZh: '用心意用语言传达很难。' },
        { id: 'ko-t2-v7', term: '망설이다', reading: 'mangseorida', pos: '动', meaning: '犹豫', example: '망설이지 말고 먼저 말해 보세요.', exampleZh: '别犹豫，先开口试试。' },
        { id: 'ko-t2-v8', term: '계속하다', reading: 'gyesokhada', pos: '动', meaning: '继续；坚持', example: '매일 십 분씩 계속하는 게 중요해요.', exampleZh: '每天坚持十分钟很重要。' },
        { id: 'ko-t2-v9', term: '인상', reading: 'insang', pos: '名', meaning: '印象', example: '그 도시의 인상은 사람들의 따뜻함이었어요.', exampleZh: '那座城市的印象是人们的温暖。' }
      ],
      grammar: [
        {
          id: 'ko-t2-g1', point: '-아/어서（原因）', summary: '表示原因或先后顺序，不能与命令、劝诱句搭配。',
          examples: [{ target: '비가 와서 집에 있었어요.', zh: '因为下雨，待在家里。' }, { target: '친구를 만나서 이야기했어요.', zh: '见了朋友并聊了天。' }],
          question: { q: '비가 ___ 집에 있었어요.', options: ['와서', '오면', '오지만', '오니까'], answer: 0, explanation: '表示原因用 -아/어서：오다 → 와서。' }
        },
        {
          id: 'ko-t2-g2', point: '-(으)ㄴ 적이 있다', summary: '表示曾经有过的经历：“……过”。',
          examples: [{ target: '제주도에 가 본 적이 있어요.', zh: '我去过济州岛。' }, { target: '이 영화를 본 적이 있어요.', zh: '我看过这部电影。' }],
          question: { q: '저는 이 영화를 ___ 적이 있어요.', options: ['본', '보는', '보고', '봐'], answer: 0, explanation: '经历表达用动词过去冠形词形 + 적이 있다：본 적이 있어요。' }
        },
        {
          id: 'ko-t2-g3', point: '-겠-', summary: '表示说话人的意志、承诺，或礼貌的推测。',
          examples: [{ target: '내일 꼭 오겠습니다.', zh: '明天一定来。' }, { target: '제가 도와드리겠습니다.', zh: '我来帮您。' }],
          question: { q: '내일 꼭 ___.', options: ['오겠습니다', '왔습니다', '오고 있습니다', '오지 않습니다'], answer: 0, explanation: '表示意志与承诺用 -겠-：오겠습니다。' }
        }
      ],
      listening: [
        {
          id: 'ko-t2-l1', title: '여행 이야기', text: '작년에 부산에 갔을 때 비가 많이 왔어요. 그래서 해변 대신 시장에 갔는데, 오히려 더 재미있었어요.',
          translation: '去年去釜山时下了很大的雨。所以没去海边，改去了市场，反而更有意思。',
          question: { q: '여행 중에 왜 시장에 갔습니까?', options: ['비가 많이 와서', '시장이 유명해서', '친구가 추천해서', '해변이 멀어서'], answer: 0, explanation: '因为雨大，所以代替海边去了市场。' }
        },
        {
          id: 'ko-t2-l2', title: '길 찾기', text: '저기요, 서울역까지 어떻게 가요? 이 버스를 타고 세 번째 정류장에서 내리면 됩니다. 지하철로 갈아타도 돼요.',
          translation: '打扰一下，去首尔站怎么走？坐这辆公交，在第三站下车就行。也可以换乘地铁。',
          question: { q: '버스를 타고 몇 번째 정류장에서 내려야 합니까?', options: ['세 번째', '두 번째', '네 번째', '첫 번째'], answer: 0, explanation: '「세 번째 정류장에서 내리면 됩니다」即在第三站下车。' }
        }
      ],
      speaking: [
        { id: 'ko-t2-s1', text: '한국어를 공부하는 계기는 한국 드라마였어요.', translation: '我学韩语的契机是韩国电视剧。', tip: '「계기」的 계 发音清亮；「드라마였어요」连读自然。' },
        { id: 'ko-t2-s2', text: '여행에서 만난 사람과의 대화가 오래 기억에 남아요.', translation: '旅行中遇到的人与我的对话，久久留在记忆里。', tip: '「사람과의」的 과 与 의 轻读；句尾 남아요 平稳收束。' }
      ]
    },
    t3: {
      vocab: [
        { id: 'ko-t3-v1', term: '뉘앙스', reading: 'nyuangsseu', pos: '名', meaning: '语感；细微差别', example: '비슷한 단어도 뉘앙스가 달라요.', exampleZh: '相似的词，语感也不同。' },
        { id: 'ko-t3-v2', term: '배경', reading: 'baegyeong', pos: '名', meaning: '背景', example: '말의 배경에는 역사가 있어요.', exampleZh: '语言的背后有历史。' },
        { id: 'ko-t3-v3', term: '미묘하다', reading: 'mimyohada', pos: '形', meaning: '微妙的', example: '두 표현 사이에는 미묘한 차이가 있어요.', exampleZh: '两种表达之间有微妙的差异。' },
        { id: 'ko-t3-v4', term: '표현', reading: 'pyohyeon', pos: '名', meaning: '表达', example: '같은 마음도 표현 방식은 달라요.', exampleZh: '同样的心意，表达方式不同。' },
        { id: 'ko-t3-v5', term: '임기응변', reading: 'imgieungbyeon', pos: '名', meaning: '随机应变', example: '대화에서는 임기응변이 필요해요.', exampleZh: '对话中需要随机应变。' },
        { id: 'ko-t3-v6', term: '핵심', reading: 'haeksim', pos: '名', meaning: '核心', example: '토론의 핵심은 신뢰의 문제예요.', exampleZh: '讨论的核心是信任问题。' },
        { id: 'ko-t3-v7', term: '견해', reading: 'gyeonhae', pos: '名', meaning: '见解；看法', example: '전문가마다 견해가 달라요.', exampleZh: '专家的见解各不相同。' },
        { id: 'ko-t3-v8', term: '울림', reading: 'ullim', pos: '名', meaning: '回响；余韵', example: '그 문장의 울림이 오래 남았어요.', exampleZh: '那句话的余韵久久留存。' },
        { id: 'ko-t3-v9', term: '자연스럽다', reading: 'jayeonseureopda', pos: '形', meaning: '自然的', example: '자연스럽게 말하려면 많이 연습해야 해요.', exampleZh: '要自然地说话，需要多练习。' }
      ],
      grammar: [
        {
          id: 'ko-t3-g1', point: '-기 때문에', summary: '表示原因，语气比 -아/어서 更正式，可用于命令句。',
          examples: [{ target: '시험이 중요하기 때문에 열심히 공부했어요.', zh: '因为考试很重要，所以努力学习了。' }, { target: '비가 오기 때문에 우산을 가져가세요.', zh: '因为下雨，请带伞。' }],
          question: { q: '중요한 시험이 ___ 열심히 공부했어요.', options: ['기 때문에', '느라고', '도록', '면서'], answer: 0, explanation: '表示原因且语气正式，用 -기 때문에。' }
        },
        {
          id: 'ko-t3-g2', point: '-에 따라', summary: '表示“根据……”“随着……而不同”。',
          examples: [{ target: '사람에 따라 생각이 달라요.', zh: '每个人想法不同。' }, { target: '시간에 따라 분위기가 변해요.', zh: '气氛随时间变化。' }],
          question: { q: '사람___ 생각이 달라요.', options: ['에 따라', '에 비해', '에 대해', '에 의해'], answer: 0, explanation: '“根据人而不同”用 -에 따라。' }
        },
        {
          id: 'ko-t3-g3', point: '-다는 것', summary: '把句子名词化，表示“所谓……这件事”，常用于下定义。',
          examples: [{ target: '언어를 배운다는 것은 문화를 이해하는 일이에요.', zh: '学习语言这件事，就是理解文化。' }, { target: '기다린다는 것은 쉽지 않아요.', zh: '等待这件事并不容易。' }],
          question: { q: '언어를 배운다는 ___ 문화를 이해하는 것입니다.', options: ['것은', '게', '기는', '지'], answer: 0, explanation: '「-다는 것」名词化后作主语，用 것은。' }
        }
      ],
      listening: [
        {
          id: 'ko-t3-l1', title: '인터뷰', text: '저는 언어를 배울 때 실수를 두려워하지 않으려고 해요. 실수는 제가 아직 배우고 있다는 증거니까요.',
          translation: '我学语言时尽量不害怕犯错。因为犯错是我仍在学习的证据。',
          question: { q: '말하는 사람의 태도는 어떻습니까?', options: ['실수를 배움의 과정으로 생각한다', '실수를 완전히 피하려고 한다', '실수하면 바로 포기한다', '실수는 중요하지 않다고 본다'], answer: 0, explanation: '说话者把失误看作仍在学习的证据。' }
        },
        {
          id: 'ko-t3-l2', title: '라디오 방송', text: '최근 사람들은 짧은 영상을 통해 새로운 단어를 배웁니다. 하지만 반복해서 사용하지 않으면 금방 잊어버리기 쉽습니다.',
          translation: '最近人们通过短视频学习新词。但如果不反复使用，很容易很快忘记。',
          question: { q: '짧은 영상으로 배운 단어의 문제점은 무엇입니까?', options: ['반복하지 않으면 잊어버리기 쉽다', '발음이 정확하지 않다', '너무 어려운 단어만 나온다', '문법을 배울 수 없다'], answer: 0, explanation: '广播指出若不反复使用就很容易忘记。' }
        }
      ],
      speaking: [
        { id: 'ko-t3-s1', text: '말은 문화를 비추는 거울이라고 생각합니다.', translation: '我认为语言是映照文化的一面镜子。', tip: '「비추는」的 추 清晰；「생각합니다」结尾平稳。' },
        { id: 'ko-t3-s2', text: '상대의 입장에서 보면, 풍경이 달라진다고 느껴요.', translation: '站在对方的立场上看，会觉得风景不一样了。', tip: '「입장에서」连读时保持 입 的收音；句尾 느껴요 放轻。' }
      ]
    }
  }
};

/* ---------- 课程结构生成 ---------- */

function buildCurriculum() {
  const out = {};
  Object.keys(LEVEL_META).forEach(langId => {
    out[langId] = LEVEL_META[langId].map((meta, li) => {
      const levelContent = CONTENT[langId][meta.id];
      const totalVocab = levelContent.vocab.length;
      let lessonIndex = 0;
      const units = meta.units.map((unit, ui) => {
        const lessons = unit.lessons.map((lesson, lj) => {
          const idx = lessonIndex++;
          const vocabStart = [0, 2, 4, 6, 7, 8][idx] || 0;
          const vocabCount = idx < 3 ? 2 : 1;
          const vocab = levelContent.vocab.slice(vocabStart, Math.min(vocabStart + vocabCount, totalVocab));
          const grammar = levelContent.grammar[idx % levelContent.grammar.length];
          const listening = levelContent.listening[idx % levelContent.listening.length];
          const speaking = levelContent.speaking[idx % levelContent.speaking.length];
          return {
            id: `${langId}-${meta.id}-u${ui + 1}-l${lj + 1}`,
            title: lesson.title,
            goal: lesson.goal,
            minutes: 7,
            vocab, grammar, listening, speaking,
            index: idx
          };
        });
        return {
          id: `${langId}-${meta.id}-u${ui + 1}`,
          title: unit.title,
          subtitle: unit.subtitle,
          index: ui,
          lessons
        };
      });
      return {
        id: `${langId}-${meta.id}`,
        lang: langId,
        code: meta.code,
        label: meta.label,
        summary: meta.summary,
        index: li,
        units
      };
    });
  });
  return out;
}

const CURRICULUM = buildCurriculum();

const ACHIEVEMENTS = [
  { id: 'first_lesson', group: '里程碑', name: '第一声问候', desc: '完成第一节互动课', metric: 'lessons', threshold: 1, icon: 'spark' },
  { id: 'words_20', group: '里程碑', name: '词汇萌芽', desc: '掌握 20 个生词', metric: 'wordsMastered', threshold: 20, icon: 'sprout' },
  { id: 'words_50', group: '里程碑', name: '词语花园', desc: '掌握 50 个生词', metric: 'wordsMastered', threshold: 50, icon: 'leaf' },
  { id: 'level_clear', group: '里程碑', name: '跨过一道门', desc: '完成一个完整级别', metric: 'levelsCleared', threshold: 1, icon: 'door' },
  { id: 'polyglot', group: '里程碑', name: '两种世界', desc: '同时学习两门语言', metric: 'languages', threshold: 2, icon: 'globe' },
  { id: 'streak_3', group: '坚持', name: '三日不停', desc: '连续学习 3 天', metric: 'streak', threshold: 3, icon: 'flame' },
  { id: 'streak_7', group: '坚持', name: '一周节律', desc: '连续学习 7 天', metric: 'streak', threshold: 7, icon: 'flame' },
  { id: 'streak_30', group: '坚持', name: '月度旅人', desc: '连续学习 30 天', metric: 'streak', threshold: 30, icon: 'flame' },
  { id: 'xp_500', group: '坚持', name: '五百个瞬间', desc: '累计获得 500 XP', metric: 'xp', threshold: 500, icon: 'bolt' },
  { id: 'xp_2000', group: '坚持', name: '两千步之后', desc: '累计获得 2000 XP', metric: 'xp', threshold: 2000, icon: 'bolt' },
  { id: 'speak_5', group: '技能', name: '敢于开口', desc: '完成 5 次口语跟读', metric: 'speaking', threshold: 5, icon: 'mic' },
  { id: 'speak_20', group: '技能', name: '声音成形', desc: '完成 20 次口语跟读', metric: 'speaking', threshold: 20, icon: 'mic' },
  { id: 'listen_10', group: '技能', name: '听得见的细节', desc: '完成 10 次听力训练', metric: 'listening', threshold: 10, icon: 'headphones' },
  { id: 'grammar_3', group: '技能', name: '语法三连', desc: '三次语法练习全部答对', metric: 'grammarPerfect', threshold: 3, icon: 'brackets' },
  { id: 'community_1', group: '社区', name: '发出第一声', desc: '在社区发布一条动态', metric: 'posts', threshold: 1, icon: 'comment' },
  { id: 'community_loved', group: '社区', name: '被听见', desc: '收到 10 个赞', metric: 'likesReceived', threshold: 10, icon: 'heart' }
];

const SEED_POSTS = [
  {
    id: 'p1', author: 'Mina', avatar: 'M', color: '#C4472F', lang: 'ja', time: '12 分钟前',
    content: '今天在地铁上听到两个老奶奶聊天，居然听懂了「今日はいい天気ですね」！那一瞬间觉得这三个月没白学。',
    likes: 24, comments: [
      { author: 'Jun', avatar: 'J', color: '#474C9C', content: '就是这种瞬间让人上瘾！下次试试「そうですね」回应。' },
      { author: '阿澄', avatar: '澄', color: '#2C6E63', content: '太棒了，我还在背五十音，被鼓励到了。' }
    ]
  },
  {
    id: 'p2', author: 'Sora', avatar: 'S', color: '#474C9C', lang: 'ko', time: '1 小时前',
    content: '分享一个小方法：把每天学的韩语单词录音，睡前听一遍，第二天跟读。两周后发音自然了很多。',
    likes: 41, comments: [
      { author: '林野', avatar: '林', color: '#174E41', content: '试了三天，真的有用。尤其是收音部分。' }
    ]
  },
  {
    id: 'p3', author: 'Ethan', avatar: 'E', color: '#2C6E63', lang: 'en', time: '3 小时前',
    content: 'This week I finished the A2 travel unit. The listening about a cancelled train made me realize I can catch details now, not just the general idea.',
    likes: 18, comments: [
      { author: 'Mina', avatar: 'M', color: '#C4472F', content: 'That exercise was tricky! The storm detail is easy to miss.' }
    ]
  },
  {
    id: 'p4', author: '阿澄', avatar: '澄', color: '#C4472F', lang: 'ja', time: '昨天',
    content: '求一个日语搭子！每天早晨 7:30 在「日语晨读会」语音跟读 15 分钟，N5 水平，一起坚持。',
    likes: 33, comments: [
      { author: 'Jun', avatar: 'J', color: '#474C9C', content: '我加入了，明天见。' }
    ]
  },
  {
    id: 'p5', author: 'Jun', avatar: 'J', color: '#474C9C', lang: 'ko', time: '昨天',
    content: 'TOPIK 3 的新闻听力比想象中难，但把每段拆成「谁 + 做了什么 + 为什么」之后，正确率从 50% 到了 80%。',
    likes: 29, comments: []
  },
  {
    id: 'p6', author: '林野', avatar: '林', color: '#174E41', lang: 'en', time: '2 天前',
    content: '连续学习第 12 天。今天完成了 A2 的第一课，最惊喜的是口语跟读拿到了 92% 的匹配度。',
    likes: 52, comments: [
      { author: 'Ethan', avatar: 'E', color: '#2C6E63', content: '十二天很厉害，继续保持！' }
    ]
  }
];

const STUDY_GROUPS = [
  { name: '日语晨读会', lang: 'ja', members: 1284, schedule: '每天 07:30 · 跟读 15 分钟', color: '#C4472F' },
  { name: 'English Speaking Club', lang: 'en', members: 2160, schedule: '每周三 20:00 · 主题讨论', color: '#2C6E63' },
  { name: '首尔夜谈', lang: 'ko', members: 986, schedule: '每周五 21:00 · 情景对话', color: '#474C9C' }
];

const LEADERBOARD = [
  { name: 'Sora', avatar: 'S', xp: 3120, color: '#474C9C' },
  { name: 'Mina', avatar: 'M', xp: 2870, color: '#C4472F' },
  { name: 'Ethan', avatar: 'E', xp: 2410, color: '#2C6E63' },
  { name: '阿澄', avatar: '澄', xp: 1980, color: '#C4472F' },
  { name: 'Jun', avatar: 'J', xp: 1750, color: '#474C9C' },
  { name: 'Nora', avatar: 'N', xp: 1420, color: '#8A6A2F' }
];

window.LINGO = {
  LANGS, LEVEL_META, CONTENT, CURRICULUM, ACHIEVEMENTS,
  SEED_POSTS, STUDY_GROUPS, LEADERBOARD
};
