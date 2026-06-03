const translationData = [
    {
        zhStructure: [
            {w: "这位先生", p: "zhè wèi xiān sheng"}, {w: "不知道是什么地方的人", p: "bù zhī dào shì shén me dì fang de rén"}, "，",
            {w: "也不清楚他的姓名和表字", p: "yě bù qīng chu tā de xìng míng hé biǎo zì"}, "。",
            {w: "因为住宅旁边", p: "yīn wèi zhú zhái páng biān"}, {w: "长着五棵柳树", p: "zhǎng zhe wǔ kē liǔ shù"}, "，",
            {w: "就以此作为号", p: "jiù yǐ cǐ zuò wéi hào"}, {w: "称呼自己了", p: "chēng hū zì jǐ le"}, "。"
        ],
        en: "This gentleman did not know what place he came from, nor was his name known. Because there were five willow trees beside his house, he used this as his nickname."
    },
    {
        zhStructure: [
            {w: "他安闲沉静", p: "tā ān xián chén jìng"}, {w: "很少说话", p: "hěn shǎo shuō huà"}, "，",
            {w: "不羡慕和追求", p: "bù xiàn mù hé zhuī qiú"}, {w: "荣华利禄", p: "róng huá lì lù"}, "。",
            {w: "他非常喜欢读书", p: "tā fēi cháng xǐ huan dú shū"}, "，",
            {w: "但读书只求领会要旨", p: "dàn dú shū zhǐ qiú lǐng huì yào zhǐ"},
            {w: "不刻意在字句上过分深究", p: "bú kè yì zài zì jù shàng guò fèn shēn jiū"}, "；"
        ],
        en: "He was peaceful and quiet, seldom spoke, and did not long for fame or profit. He loved reading, but did not dwell deeply on every single word;"
    },
    {
        zhStructure: [
            {w: "每当对书中的内容", p: "měi dāng duì shū zhōng de nèi róng"}, {w: "有所心领神会", p: "yǒu suǒ xīn lǐng shén huì"}, "，",
            {w: "他就高兴得", p: "tā jiù gāo xìng de"}, {w: "忘记了吃饭", p: "wàng jì le chī fàn"}, "。",
            {w: "他生性酷爱喝酒", p: "tā shēng xìng kù ài hē jiǔ"}, "，",
            {w: "可是家里贫穷", p: "kě shì jiā lǐ pín qióng"}, {w: "不能经常得到酒喝", p: "bù néng jīng cháng dé dào jiǔ hē"}, "。"
        ],
        en: "whenever he understood the inner meaning of a book, he would be so happy that he forgot to eat. He was extremely fond of wine by nature, but his family was poor and he could not afford it regularly."
    },
    {
        zhStructure: [
            {w: "亲戚和老朋友", p: "qīn qi hé lǎo péng you"}, {w: "知道他这个特点", p: "zhī dào tā zhè gè tè diǎn"}, "，",
            {w: "有时准备了酒", p: "yǒu shí zhǔn bèi le jiǔ"}, {w: "就邀请他前来", p: "jiù yāo qǐng tā qián lái"}, "；",
            {w: "他只要去喝酒", p: "tā zhǐ yào qù hē jiǔ"}, {w: "就一定会喝光", p: "jiù yí dìng huì hē guāng"}, "，",
            {w: "期望的目标是一定要喝醉", p: "qī wàng de mù biāo shì yí dìng yào hē zuì"}, "。"
        ],
        en: "His relatives and friends knew this trait, and would sometimes prepare wine and invite him over. He always went and drank everything up, hoping only to get completely drunk."
    },
    {
        zhStructure: [
            {w: "喝醉了之后", p: "hē zuì le zhī hòu"}, {w: "他就主动告退离开", p: "tā jiù zhǔ dòng gào tuì lí kāi"}, "，",
            {w: "竟然从来不把", p: "jìng rán cóng lái bù bǎ"}, {w: "离去或留下", p: "lí qù huò liú xià"}, {w: "放在心上", p: "fàng zài xīn shàng"}, "。",
            {w: "简陋的房屋里", p: "jiǎn lòu de fáng wū lǐ"}, {w: "空空荡荡", p: "kōng kōng dàng dàng"}, "，",
            {w: "无法遮挡风吹日晒", p: "wú fǎ zhē dǎng fēng chuī rì shài"}, "；"
        ],
        en: "Once drunk, he would leave freely, never caring whether he left or stayed. His small mud house was empty and bare, failing to block out the wind and the hot sun;"
    },
    {
        zhStructure: [
            {w: "粗布短衣", p: "cū bù duǎn yī"}, {w: "破了洞、打满补丁", p: "pò le dòng dǎ mǎn bǔ dīng"}, "，",
            {w: "竹篮和瓢里经常空空如也", p: "zhú lán hé piáo lǐ jīng cháng kōng kōng rú yě"}, "，",
            {w: "他却依然安然自若", p: "tā què yī rán ān rán zì ruò"}, "。",
            {w: "经常写文章", p: "jīng cháng xiě wén zhāng"}, {w: "来娱乐自己", p: "lái yú lè zì jǐ"}, "，",
            {w: "很大程度上表达了", p: "hěn dà chéng dù shàng biǎo dá le"}, {w: "自己的志向", p: "zì jǐ de zhì xiàng"}, "。"
        ],
        en: "his coarse clothes were torn and patched, and his food bowl was often empty, yet he remained peaceful. He constantly wrote articles to entertain himself, fully expressing his own life ideals."
    },
    {
        zhStructure: [
            {w: "他不把得失放在心上", p: "tā bù bǎ dé shī fàng zài xīn shàng"}, "，",
            {w: "凭借这种态度", p: "píng jiè zhè zhǒng tài du"}, {w: "过完自己的一生", p: "guò wán zì jǐ de yì shēng"}, "。文赞",
            {w: "评论说", p: "píng lùn shuō"}, "：", {w: "黔娄的妻子", p: "qián lóu zhī qī"}, {w: "曾经说过", p: "céng jīng shuō guò"}, "：“",
            {w: "不为贫贱而感到忧愁", p: "bù wèi pín jiàn ér gǎn dào yōu chóu"}, "，",
            {w: "不拼命去急切追求富贵", p: "bù pīn mìng qù jí qiè zhuī qiú fù guì"}, "。”"
        ],
        en: "He completely forgot about gain and loss, and ended his life with this attitude. The commentary says: Qian Lou's wife once noted, 'Do not be anxious over poverty, and do not be eager for high ranks.'"
    },
    {
        zhStructure: [
            {w: "这话大概说的就是", p: "zhè huà dà gài shuō de jiù shì"}, {w: "五柳先生这一类的人吧", p: "wǔ lǔ xiān sheng zhè yí lèi de rén ba"}, "？",
            {w: "端着酒杯喝酒作诗", p: "duān zhe jiǔ bēi hē jiǔ zuò shī"}, "，",
            {w: "使自己的志向感到快乐", p: "shǐ zì jǐ de zhì xiàng gǎn dào kuài lè"}, "。",
            {w: "他难道是上古无怀氏的百姓吧", p: "tā nán dào shì shàng gǔ wú huái shì de bǎi xìng ba"}, "？",
            {w: "或者是上古葛天氏的百姓吧", p: "huò zhě shì shàng gǔ gě tiān shì de bǎi xìng ba"}, "？"
        ],
        en: "Do these words describe someone of the same kind as this gentleman? Drinking wine and composing poems to comfort his soul. Is he a citizen of the ancient peaceful Wuhuai clan? Or perhaps a citizen of the ancient Getian clan?"
    }
];
