const poemData = [
    { text: "先生", py: "xiān sheng", zh: "先生，这里是陶渊明的自称。", en: "The gentleman" },
    { 
        text: "不知何许", 
        py: "bù zhī hé xǔ", 
        zh: "<strong>大意</strong>：不知道是什么地方的人。<br><strong>不知</strong>：动词短语，不知道。<br><strong>何许</strong>：何处、什么地方。", 
        en: "did not know what place he came from,", 
        exam: true 
    },
    { 
        text: "人也", 
        py: "rén yě", 
        zh: "<strong>大意</strong>：人。<br><strong>也</strong>：文言句末判断语气词，表陈述，通常不需要译出。", 
        en: "he was," 
    },
    { text: "，", punc: true },
    { 
        text: "亦不详其姓字", 
        py: "yì bù xiáng qí xìng zì", 
        zh: "<strong>大意</strong>：也不清楚他的姓名和表字。<br><strong>亦</strong>：也。<br><strong>不详</strong>：不知道、不详细。<br><strong>其</strong>：代词，他的。", 
        en: "nor was his name and courtesy name known.", 
        exam: true 
    },
    { text: "，", punc: true },
    { text: "宅边", py: "zhái biān", zh: "住宅旁边。", en: "Beside his house" },
    { 
        text: "有五柳树", 
        py: "yǒu wǔ liǔ shù", 
        zh: "<strong>大意</strong>：生长着五棵柳树。<br><strong>有</strong>：动词，存在、有。", 
        en: "there were five willow trees," 
    },
    { text: "，", punc: true },
    { 
        text: "因以为号焉", 
        py: "yīn yǐ wéi hào yān", 
        zh: "<strong>大意</strong>：就以此作为号。<br><strong>因</strong>：于是、就。<br><strong>以为</strong>：把……当作。<br><strong>焉</strong>：句末语气词，表陈述。", 
        en: "and therefore he used this as his nickname.", 
        exam: true 
    },
    { text: "。", punc: true },
    { text: "闲静少言", py: "xián jìng shǎo yán", zh: "<strong>成语大意</strong>：安闲沉静，很少说话。<br><strong>闲静</strong>：安闲沉静。<br><strong>少言</strong>：很少说话。", en: "He was quiet and spoke little," },
    { text: "，", punc: true },
    { 
        text: "不慕荣利", 
        py: "bú mù róng lì", 
        zh: "<strong>成语大意</strong>：不羡慕荣华利禄。<br><strong>不慕</strong>：不羡慕、不追求。<br><strong>荣利</strong>：荣誉与财利（名利）。", 
        en: "and did not long for honor and profit." 
    },
    { text: "。", punc: true },
    { text: "好读书", py: "hào dú shū", zh: "喜欢读书。<strong>好</strong>：多音字，这里读 hào，动词，喜欢。", en: "He loved reading books," },
    { text: "，", punc: true },
    { 
        text: "不求甚解", 
        py: "bù qiú shèn jiě", 
        zh: "<strong>成语古义</strong>：读书只求领会要旨，不在字句上过分深究。<br><strong>不求</strong>：不刻意追求。<br><strong>甚解</strong>：过分的理解、深究。", 
        en: "but did not seek shallow understandings of every single word;", 
        exam: true 
    },
    { text: "；", punc: true },
    { 
        text: "每有会意", 
        py: "měi yǒu huì yì", 
        zh: "<strong>大意</strong>：每当对书中的内容有所领会的时候。<br><strong>每</strong>：副词，每当。<br><strong>有会意</strong>：动宾短语，有所体会、心领神会。", 
        en: "whenever he captured the inner meaning of a text,", 
        exam: true 
    },
    { text: "，", punc: true },
    { text: "便欣然忘食", py: "biàn xīn rán wàng shí", zh: "<strong>词组大意</strong>：就高兴得忘记了吃饭。<br><strong>欣然</strong>：高兴的样子。<br><strong>忘食</strong>：忘记吃饭。", en: "he would be so happy that he forgot to eat." },
    { text: "。", punc: true },
    { text: "性嗜酒", py: "xìng shì jiǔ", zh: "<strong>词组大意</strong>：生性酷爱喝酒。<br><strong>性</strong>：天性、生性。<br><strong>嗜</strong>：酷爱、特别喜欢。", en: "By nature he was fond of wine," },
    { text: "，", punc: true },
    { 
        text: "家贫不能常得", 
        py: "jiā pín bù néng cháng dé", 
        zh: "<strong>大意</strong>：家里贫穷，不能经常得到酒喝。<br><strong>不能</strong>：副词短语，无法、不能。<br><strong>常得</strong>：经常得到。", 
        en: "but his family was poor and he could not get it often." 
    },
    { text: "。", punc: true },
    { 
        text: "亲旧知其如此", 
        py: "qīn jiù zhī qí rú cǐ", 
        zh: "<strong>大意</strong>：亲戚和老朋友知道他这个性格特点。<br><strong>亲旧</strong>：亲戚和老朋友。<br><strong>如此</strong>：像这样。", 
        en: "His relatives and old friends knew this,", 
        exam: true 
    },
    { text: "，", punc: true },
    { 
        text: "或置酒而招之", 
        py: "huò zhì jiǔ ér zhāo zhī", 
        zh: "<strong>大意</strong>：有时准备了酒并邀请他来喝。<br><strong>或</strong>：有时。<br><strong>置酒</strong>：准备酒席。<br><strong>招之</strong>：招揽、邀请他。", 
        en: "and sometimes they would prepare wine and invite him;" 
    },
    { text: "；", punc: true },
    { 
        text: "造饮辄尽", 
        py: "zào yǐn zhé jìn", 
        zh: "<strong>大意</strong>：他一去喝酒就一定要喝光。<br><strong>造</strong>：动词，往、到……去。<br><strong>辄</strong>：副词，就、总是。<br><strong>尽</strong>：喝光。", 
        en: "he would go and always drink until the cup was empty,", 
        exam: true 
    },
    { text: "，", punc: true },
    { text: "期在必醉", py: "qī zài bì zuì", zh: "<strong>词组大意</strong>：希望达到的目标是一定要喝醉。<br><strong>期</strong>：期望、希望。", en: "aiming only to get drunk." },
    { text: "。", punc: true },
    { text: "既醉而退", py: "jì zuì ér tuì", zh: "<strong>词组大意</strong>：喝醉了之后就主动告退离开。<br><strong>既</strong>：副词，已经。", en: "Once drunk, he would leave," },
    { text: "，", punc: true },
    { 
        text: "曾不吝情去留", 
        py: "céng bú lìn qíng qù liú", 
        zh: "<strong>大意</strong>：竟然从来不把委婉告辞或留下看得太重。<br><strong>曾不</strong>：加强否定短语，竟然不、从来不。<br><strong>吝情</strong>：舍不得、顾惜。<br><strong>去留</strong>：离去或留下。", 
        en: "never caring whether he went or stayed.", 
        exam: true 
    },
    { text: "。", punc: true },
    { 
        text: "环堵萧然", 
        py: "huán dǔ xiāo rán", 
        zh: "<strong>成语大意</strong>：四壁空空，极其冷清简陋。<br><strong>环堵</strong>：四周都是土墙，形容房屋狭小。<br><strong>萧然</strong>：冷清、空空荡荡的样子。", 
        en: "His small room was empty and cold,", 
        exam: true 
    },
    { text: "，", punc: true },
    { 
        text: "不蔽风日", 
        py: "bú bì fèng rì", 
        zh: "<strong>大意</strong>：遮挡不住风吹日晒。<br><strong>不蔽</strong>：动词短语，无法遮蔽、挡不住。<br><strong>风日</strong>：狂风和烈日。", 
        en: "failing to protect him from wind and sun;" 
    },
    { text: "；", punc: true },
    { 
        text: "短褐穿结", 
        py: "duǎn hè chuān jié", 
        zh: "<strong>成语大意</strong>：粗布短衣打满了补丁。<br><strong>短褐</strong>：粗布短衣（穷人的衣服）。<br><strong>穿</strong>：破了洞。<br><strong>结</strong>：打结、缝补。", 
        en: "his coarse clothing was torn and patched;", 
        exam: true 
    },
    { text: "，", punc: true },
    { 
        text: "箪瓢屡空", 
        py: "dān piáo lǚ kōng", 
        zh: "<strong>成语大意</strong>：竹篮和瓢里经常是空空如也，饭食常常断绝。<br><strong>箪</strong>：古代盛饭的竹器。<br><strong>瓢</strong>：盛水的瓢。<br><strong>屡</strong>：经常。", 
        en: "his food containers were often completely empty,", 
        exam: true 
    },
    { text: "，", punc: true },
    { text: "晏如也", py: "yàn rú yě", zh: "<strong>词组大意</strong>：却依然安然自若。晏如：安然自若、舒适自得的样子。", en: "yet he remained peaceful and self-satisfied." },
    { text: "。", punc: true },
    { text: "常著文章自娱", py: "cháng zhù wén zhāng zì yú", zh: "<strong>词组大意</strong>：经常写文章来娱乐自己。著：撰写；自娱：使自己快乐。", en: "He often wrote articles to amuse himself," },
    { text: "，", punc: true },
    // 🎯【精准修复硬伤】：彻底消灭“Ref”，换上微结构化精致排版！
    { 
        text: "颇示己志", 
        py: "pō shì jǐ zhì", 
        zh: "<strong>大意</strong>：很大程度上表达了自己的志向。<br><strong>颇</strong>：副词，很大程度上、非常。<br><strong>示</strong>：显露、表达。<br><strong>己志</strong>：自己的志向与抱负。", 
        en: "fully showing his inner ideals." 
    },
    { text: "。", punc: true },
    { text: "忘怀得失", py: "wàng huái dé shī", zh: "<strong>成语大意</strong>：不把名利的得失放在心上。<br><strong>忘怀</strong>：忘记、不放在心上。", en: "He forgot all about gain and loss," },
    { text: "，", punc: true },
    { text: "以此自终", py: "yǐ cǐ zì zhōng", zh: "<strong>词组大意</strong>：凭借这种生活态度过完自己的一生。自终：终老一生。", en: "and ended his life with this lifestyle." },
    { text: "。", punc: true },
    { text: "赞曰", py: "zàn yuē", zh: "<strong>大意</strong>：传记结尾的评论文字说。赞：历史传记结尾作者的总结性评论。", en: "The commentary says:" },
    { text: "：", punc: true },
    { text: "黔娄之妻", py: "qián lóu zhī qī", zh: "黔娄的妻子（黔娄是战国时著名的清高隐士）。", en: "The wife of Qian Lou" },
    { text: "有言", py: "yǒu y言", zh: "曾经说过这样的话。", en: "once said:" },
    { text: "：", punc: true },
    { text: "“", punc: true },
    { 
        text: "不戚戚于贫贱", 
        py: "bú qī qī yú pín jiàn", 
        zh: "<strong>名式大意</strong>：不为贫贱而感到忧愁焦虑。<br><strong>不戚戚</strong>：不忧愁、不焦虑。<br><strong>于贫贱</strong>：因为贫穷和卑贱。", 
        en: "Do not be anxious over poverty and low status,", 
        exam: true 
    },
    { text: "，", punc: true },
    { 
        text: "不汲汲于富贵", 
        py: "bù jí jí yú fù guì", 
        zh: "<strong>名式大意</strong>：不拼命去追求富贵名利。<br><strong>不汲汲</strong>：心情不急切、不狂热追求。<br><strong>于富贵</strong>：对于富贵名利。", 
        en: "do not be eager for wealth and rank.", 
        exam: true 
    },
    { text: "”", punc: true },
    { text: "。", punc: true },
    { 
        text: "其言兹若人之俦乎", 
        py: "qí yán zī ruò rén zhī chóu hū", 
        zh: "<strong>大意</strong>：这话大概说的是五柳先生这一类的人吧！<br><strong>兹</strong>：这。<br><strong>若人</strong>：这个人（指五柳先生）。<br><strong>俦</strong>：辈、同类人。<br><strong>乎</strong>：表推测的反问语气词，吗？", 
        en: "Do these words describe someone of the same kind as this gentleman?", 
        exam: true 
    },
    { text: "？", punc: true },
    { text: "衔觞赋诗", py: "xián shāng fù shī", zh: "<strong>成语大意</strong>：一边端着酒杯喝酒，一边作诗。<br><strong>衔</strong>：用嘴含着、端着。<br><strong>觞</strong>：古代的酒杯。<br><strong>赋</strong>：写作、创作。", en: "Holding a wine cup and composing poems," },
    { text: "，", punc: true },
    { text: "以乐其志", py: "yǐ lè qí zhì", zh: "<strong>词组大意</strong>：用来使自己的志向得到快乐。乐：意动用法，以……为乐。", en: "to make his inner ideals happy." },
    { text: "。", punc: true },
    { 
        text: "无怀氏之民欤", 
        py: "wú huái mìng jī mín yú", 
        zh: "<strong>大意</strong>：他是上古无怀氏社会的百姓吧？<br><strong>无怀氏</strong>：理想的远古和平乌托邦社会。<br><strong>欤</strong>：文言句末感叹推测语气词，吧。", 
        en: "Is he a citizen of the ancient peaceful clan of Wuhuai?", 
        exam: true 
    },
    { text: "？", punc: true },
    { 
        text: "葛天氏之民欤", 
        py: "gě tài mìng jī mín yú", 
        zh: "<strong>大意</strong>：他是上古葛天氏社会的百姓吧？<br><strong>葛天氏</strong>：另一个远古淳朴的乌托邦社会。<br><strong>欤</strong>：语气词，吧。", 
        en: "Or perhaps a citizen of the ancient clan of Getian?", 
        exam: true 
    },
    { text: "？", punc: true }
];
