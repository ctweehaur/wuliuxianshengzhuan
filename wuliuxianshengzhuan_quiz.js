const quizQuestions = [
    {
        id: 1,
        textStructure: [{w: "下列", p: "xià liè"}, {w: "句子", p: "jù zi"}, "中，", {w: "成语", p: "chéng yǔ"}, "“", {w: "不求甚解", p: "bù qiú shèn jiě"}, "”", {w: "在文中的", p: "zài wén zhōng de"}, {w: "古典原意", p: "gǔ diǎn yuán yì"}, {w: "是", p: "shì"}, "？"],
        en: "What is the original classical meaning of 'bù qiú shèn jiě' in this text?",
        options: [
            { 
                textStructure: [{w: "读书", p: "dú shū"}, {w: "态度马虎", p: "tài du mǎ hu"}, "，", {w: "不愿花费时间", p: "bú yuàn huā fèi shí jiān"}, {w: "去理解文章", p: "qù lǐ jiě wén zhāng"}], 
                en: "Reading carelessly and refusing to spend time understanding the text.", 
                correct: false, 
                explanationStructure: [{w: "错误", p: "cuò wù"}, "，", {w: "这是本词的", p: "zhè shì běn cí de"}, {w: "现代贬义用法", p: "xiàn dài biǎn yì yòng fǎ"}, "，", {w: "不符合古文原意", p: "bù fú hé gǔ wén yuán yì"}, "。"], 
                explanationEn: "Incorrect. This is the modern corrupted meaning, not Tao's original positive reading method." 
            },
            { 
                textStructure: [{w: "读书", p: "dú shū"}, {w: "重在领会", p: "zhòng zài lǐng huì"}, "，", {w: "不在死字句上", p: "bú zài sǐ zì jù shàng"}, {w: "过分深究寻"}, "。"], 
                en: "Focusing on capturing the inner essence rather than over-analyzing word-for-word details.", 
                correct: true, 
                explanationStructure: [{w: "正确", p: "zhèng què"}, "，", {w: "文中指读书", p: "wén zhōng zhǐ dú shū"}, {w: "求精神共鸣", p: "qiú jīng shén gòng míng"}, "，", {w: "不流于死记硬背", p: "bù liú yú sǐ jì yìng bèi"}, "。"], 
                explanationEn: "Correct. Classical '不求甚解' is a positive method: grasping the main spirit without getting stuck in word details." 
            },
            { 
                textStructure: [{w: "读书", p: "dú shū"}, {w: "流于表面", p: "liú yú biǎo miàn"}, "，", {w: "因为资质有限", p: "yīn wèi zī zhì yǒu xiàn"}, {w: "无法深入了解", p: "wú fǎ shēn rù lǐ jiě"}], 
                en: "Reading superficially due to a lack of talent or limited capacity to comprehend deeply.", 
                correct: false, 
                explanationStructure: [{w: "错误", p: "cuò wù"}, "，", {w: "这误将“不求”", p: "zhè wù jiāng bù qiú"}, {w: "理解成了“不能”", p: "lǐ jiě chéng le bù néng"}, "，", {w: "曲解了作者性格", p: "qū jiě le zuò zhě xìng gé"}, "。"], 
                explanationEn: "Incorrect. This mistakes an intentional choice ('not seeking') for a lack of capability ('cannot understand')." 
            },
            { 
                textStructure: [{w: "读书", p: "dú shū"}, {w: "极少思考", p: "jí shǎo sī kǎo"}, "，", {w: "只盲目死记", p: "zhǐ máng mù sǐ jì"}, {w: "字面上的知识", p: "zì miàn shàng de zhī shi"}], 
                en: "Thinking very little while reading and only memorizing surface knowledge blindly.", 
                correct: false, 
                explanationStructure: [{w: "错误", p: "cuò wù"}, "，", {w: "这与五柳先生", p: "zhè yǔ wǔ lǔ xiān sheng"}, {w: "洒脱超然的个性", p: "sǎ tuō chāo rán de gè xìng"}, {w: "完全相反", p: "wán quán xiāng fǎn"}, "。"], 
                explanationEn: "Incorrect. This describes rigid memorization, which is the exact opposite of Tao's free-spirited style." 
            }
        ]
    },
    {
        id: 2,
        textStructure: [{w: "文中", p: "wén zhōng"}, "“", {w: "造饮辄尽，期在必醉", p: "zào yǐn zhé jìn qī zài bì zuì"}, "”", {w: "中的", p: "zhōng de"}, "“", {w: "造", p: "zào"}, "”", {w: "字正确的", p: "zì zhèng què de"}, {w: "词义是", p: "cí yì shì"}, "？"],
        en: "What does the character 'zào' mean in this sentence?",
        options: [
            { 
                textStructure: [{w: "动词", p: "dòng cí"}, "，", {w: "意思是", p: "yì si shì"}, "“", {w: "亲自动手", p: "qīn zì dòng shǒu"}, "”", {w: "准备酒席", p: "zhǔn bèi jiǔ xí"}], 
                en: "A verb, meaning 'to personally prepare' or set up the banquet.", 
                correct: false, 
                explanationStructure: [{w: "错误", p: "cuò wù"}, "，", {w: "这误用了现代汉语", p: "zhè wù yòng le xiàn dài hàn yǔ"}, {w: "“创造/造成”的", p: "chuàng zào zào chéng de"}, {w: "字面歧义", p: "zì miàn qí yì"}, "。"], 
                explanationEn: "Incorrect. This confuses the classical verb with modern definitions of making or fabricating things." 
            },
            { 
                textStructure: [{w: "动词", p: "dòng cí"}, "，", {w: "意思是", p: "yì si shì"}, "“", {w: "前往", p: "qián wǎng"}, "””、基“", {w: "到……去", p: "dào qù"}, "”"], 
                en: "A verb, meaning 'to go to' or 'to visit'.", 
                correct: true, 
                explanationStructure: [{w: "正确", p: "zhèng què"}, "，“", {w: "造饮", p: "zào yǐn"}, "”", {w: "意为去到那里喝酒", p: "yì wéi qù dào nà lǐ hē jiǔ"}, "，", {w: "是高频文言考点", p: "shì gāo pín wén yán kǎo diǎn"}, "。"], 
                explanationEn: "Correct. In classical text, 'zào' means to go to. '造饮' means he physically went to where the wine was offered." 
            },
            { 
                textStructure: [{w: "动词", p: "dòng cí"}, "，", {w: "意思是", p: "yì si shì"}, "“", {w: "特意邀请", p: "tè yì yāo qǐng"}, "”", {w: "朋友来喝", p: "péng you lái hē"}], 
                en: "A verb, meaning 'to specially invite' friends over to drink.", 
                correct: false, 
                explanationStructure: [{w: "错误", p: "cuò wù"}, "，", {w: "五柳先生是", p: "wǔ lǔ xiān sheng shì"}, {w: "被邀请的对象", p: "bèi yāo qǐng de duì xiàng"}, "，", {w: "不是主客主人", p: "bú shì zhǔ kè zhǔ rén"}, "。"], 
                explanationEn: "Incorrect. He was the guest responding to an invitation, not the host issuing it." 
            },
            { 
                textStructure: [{w: "动词", p: "dòng cí"}, "，", {w: "意思是", p: "yì si shì"}, "“", {w: "举杯", p: "jǔ bēi"}, "””、基“", {w: "互相敬酒", p: "hù xiāng jìng jiǔ"}, "”"], 
                en: "A verb, meaning 'to raise a cup' or toast each other.", 
                correct: false, 
                explanationStructure: [{w: "错误", p: "cuò wù"}, "，", {w: "语境上看似合理", p: "yǔ jìng shàng kàn sì hé lǐ"}, "，", {w: "但“造”字并无", p: "dàn zào zì bìng wú"}, {w: "敬酒的字义解释", p: "jìng jiǔ de zì yì jiě shì"}, "。"], 
                explanationEn: "Incorrect. While it sounds plausible in a party scene, the character 'zào' holds no such meaning." 
            }
        ]
    },
    {
        id: 3,
        textStructure: [{w: "下列", p: "xià liè"}, {w: "成语", p: "chéng yǔ"}, "中，", {w: "哪一个", p: "nǎ yí gè"}, {w: "不能用来", p: "bù néng yòng lái"}, {w: "形容五柳先生的", p: "xíng róng wǔ lǔ xiān sheng de"}, {w: "物质生活贫困", p: "wù zhì shēng huó pín kùn"}, "？"],
        en: "Which of the following idioms CANNOT describe Wuliu's poor physical life?",
        options: [
            { textStructure: [{w: "环堵萧然", p: "huán dǔ xiāo rán" }], en: "Huán Dǔ Xiāo Rán (empty walls).", correct: false, explanationStructure: [{w: "错误", p: "cuò wù"}, "，", {w: "这形容他家里", p: "zhè xíng róng tā jiā lǐ"}, {w: "土墙破旧空无一物", p: "tǔ qiáng pò jiù kōng wú yí wù"}, "，", {w: "属于物质贫困", p: "shǔ yú wù zhì pín kùn"}, "。"], explanationEn: "Incorrect. This details his bare, empty rooms, reflecting severe material poverty." },
            { textStructure: [{w: "短褐穿结", p: "duǎn hè chuān jié" }], en: "Duǎn Hè Chuān Jié (patched clothes).", correct: false, explanationStructure: [{w: "错误", p: "cuò wù"}, "，", {w: "这形容衣服破烂", p: "zhè xíng róng yī fu pò làn"}, "，", {w: "打满补丁", p: "dǎ mǎn bǔ dīng"}, "，", {w: "同样是贫困写照", p: "tóng yàng shì pín kùn xiě zhào"}, "。"], explanationEn: "Incorrect. This describes his worn-out, heavily patched clothes, standard proof of being poor." },
            { textStructure: [{w: "箪瓢屡空", p: "dān piáo lǚ kōng" }], en: "Dān Piáo Lǚ Kōng (empty bowls).", correct: false, explanationStructure: [{w: "错误", p: "cuò wù"}, "，", {w: "这形容吃饱穿暖", p: "zhè xíng róng chī bǎo chuān nuǎn"}, "，", {w: "常常面临断粮挨饿", p: "cháng cháng miàn lín duàn liáng ái è"}, "。"], explanationEn: "Incorrect. This points directly to the lack of food, meaning his containers were often bare." },
            { textStructure: [{w: "欣然忘食", p: "xīn rán wàng shí" }], en: "Xīn Rán Wàng Shí (happily forgetting food).", correct: true, explanationStructure: [{w: "正确", p: "zhèng què"}, "，“", {w: "欣然忘食", p: "xīn rán wàng shí"}, "”", {w: "形容读书快乐而忘我", p: "xíng róng dú shū kuài lè ér wàng wǒ"}, "，", {w: "属于精神世界的满足", p: "shǔ yú jīng shén shì jiè de mǎn zú"}, "。"], explanationEn: "Correct. This highlights his mental joy and deep focus on reading, rather than economic struggle." }
        ]
    },
    {
        id: 4,
        textStructure: [{w: "赞语中", p: "zàn yǔ zhōng"}, "“", {w: "不戚戚于贫贱，不汲汲于富贵", p: "bú qī qī yú pín jiàn bù jí jí yú fù guì"}, "”", {w: "展现了", p: "zhǎn xiàn le"}, {w: "怎样的人生态度", p: "zěnyàng de rén shēng tài du"}, "？"],
        en: "What life mindset does the quote '不戚戚于贫贱，不汲汲于富贵' show?",
        options: [
            { 
                textStructure: [{w: "虽生活清苦", p: "suī shēng huó qīng kǔ"}, "，", {w: "但内心仍期盼", p: "dàn nèi xīn réng qī pàn"}, {w: "有朝廷高薪重用", p: "yǒu cháo tíng gāo xīn zhòng yòng"}], 
                en: "Being clear-headed yet internally hoping for public recognition and fortune.", 
                correct: false, 
                explanationStructure: [{w: "错误", p: "cuò wù"}, "，", {w: "这完全低估了", p: "zhè wán quán dī gū le"}, {w: "作者隐逸不仕的", p: "zuò zhě yǐn yì bú shì de"}, {w: "坚贞骨气", p: "jiān zhēn gǔ qì"}, "。"], 
                explanationEn: "Incorrect. This projects opportunistic ambition onto Tao, who famously walked away from civil office." 
            },
            { 
                textStructure: [{w: "安贫乐道", p: "ān pín lè dào"}, "，", {w: "能忘怀得失", p: "néng wàng huái dé shī"}, {w: "且追求精神超脱", p: "qiě zhuī qiú jīng shén chāo tuō"}], 
                en: "Being content with a simple life, ignoring gain/loss, and seeking spiritual freedom.", 
                correct: true, 
                explanationStructure: [{w: "正确", p: "zhèng què"}, "，", {w: "不为贫困忧虑", p: "bù wèi pín qióng yōu lǜ"}, "，", {w: "不盲求名利富贵", p: "bù máng qiú míng lì fù guì"}, "，", {w: "是全篇精神核心", p: "shì quán piān jīng shén hé xīn"}, "。"], 
                explanationEn: "Correct. It perfectly maps his lifestyle: avoiding emotional worry over money while actively shunning fame." 
            },
            { 
                textStructure: [{w: "因不满现实", p: "yīn bù mǎn xiàn shí"}, "，", {w: "而选择采消极", p: "ér xuǎn zé cǎi xiāo jí"}, {w: "逃避生活的悲观态度", p: "táo bì shēng huó de bēi guān tài du"}], 
                en: "Choosing a passive, pessimistic retreat from real life due to deep social resentment.", 
                correct: false, 
                explanationStructure: [{w: "错误", p: "cuò wù"}, "，", {w: "这属于主观揣测", p: "zhè shǔ yú zhǔ guān chuāi cè"}, "，", {w: "陶渊明是豁达自得", p: "táo yuán míng shì huò dá zì dé"}, "，", {w: "而非消极悲观", p: "ér fēi xiāo jí bēi guān"}, "。"], 
                explanationEn: "Incorrect. This misreads his active philosophical joy as weak, bitter social withdrawal." 
            },
            { 
                textStructure: [{w: "对财富不屑", p: "duì cái fù bú xiè"}, "，", {w: "却崇尚通过", p: "què chóng shàng tōng guò"}, {w: "苦行来磨练意志", p: "kǔ xíng lái mó liàn yì zhì"}], 
                en: "Despising wealth while choosing asceticism purely to test his willpower.", 
                correct: false, 
                explanationStructure: [{w: "错误", p: "cuò wù"}, "，", {w: "五柳先生喝酒著文", p: "wǔ lǔ xiān sheng hē jiǔ zhù wén"}, "，", {w: "是为了自娱自乐", p: "shì wèi le zì yú zì lè"}, "，", {w: "绝非自我苦行", p: "jué fēi zì wǒ kǔ xíng"}, "。"], 
                explanationEn: "Incorrect. He drank and wrote to enjoy himself, not to undergo religious or painful physical discipline." 
            }
        ]
    },
    {
        id: 5,
        textStructure: [{w: "文章结尾", p: "wén zhāng jié wěi"}, {w: "连续使用两次", p: "lián xù shǐ yòng liǎng cì"}, "“", {w: "……之民欤？", p: "... zhī mín yú"}, "”", {w: "这一句式", p: "zhè yí jù shì"}, {w: "主要表明", p: "zhǔ yào biǎo míng"}, "？"],
        en: "Why did the text use the phrase '... zhī mín yú?' twice at the very end?",
        options: [
            { 
                textStructure: [{w: "对自身身世", p: "duì zì shēn shēn shì"}, "，", {w: "感到无法考证", p: "gǎn dào wú fǎ kǎo zhèng"}, {w: "而产生的迷茫感", p: "ér chǎn shēng de mí máng gǎn"}], 
                en: "Expressing personal confusion regarding his real lineage and historical roots.", 
                correct: false, 
                explanationStructure: [{w: "错误", p: "cuò wù"}, "，", {w: "这流于字面误解", p: "zhè liú yú zì miàn wù jiě"}, "，", {w: "结尾并非表达", p: "jié wěi bìng fēi biǎo dá"}, {w: "真正的身世迷茫", p: "zhēn zhèng de shēn shì mí máng"}, "。"], 
                explanationEn: "Incorrect. This takes the literal question mark too seriously, missing the rhetorical praise." 
            },
            { 
                textStructure: [{w: "对上古淳朴", p: "duì shàng gǔ chún pǔ"}, "，", {w: "社会生活的向往", p: "shè huì shēng huó de xiàng wǎng"}, {w: "与对现实的不满", p: "yǔ duì xiàn shí de bù mǎn"}], 
                en: "Longing for ancient utopian simplicity while silently critiquing current chaos.", 
                correct: false, 
                explanationStructure: [{w: "不准确", p: "bú zhǔn què"}, "，", {w: "这漏掉了对", p: "zhè lòu diào le duì"}, {w: "五柳先生个人境界的", p: "wǔ lǔ xiān sheng gè rén jìng jiè de"}, {w: "核心礼赞", p: "hé xīn lǐ zàn"}, "。"], 
                explanationEn: "Incorrect. While partly true regarding the eras, it shifts too far into social critique, missing the personal compliment to Wuliu." 
            },
            { 
                textStructure: [{w: "赞美五柳先生", p: "zàn měi wǔ lǔ xiān sheng"}, "，", {w: "境界高洁超脱", p: "jìng jiè gāo jié chāo tuō"}, {w: "活得像上古远古淳朴百姓", p: "huó de xiàng shàng gǔ chún pǔ bǎi xìng"}], 
                en: "Praising Wuliu's high-minded mindset as resembling that of legendary utopian citizens.", 
                correct: true, 
                explanationStructure: [{w: "正确", p: "zhèng què"}, "，", {w: "借理想社会的居民", p: "jiè lǐ xiǎng shè huì de jū mín"}, "，", {w: "高度赞美他", p: "gāo dù zàn měi tā"}, {w: "超越世俗的精神境界", p: "chāo yuè shì sú de jīng shén jìng jiè"}, "。"], 
                explanationEn: "Correct. Using these mythical utopias elevates Wuliu's personality to a historical golden standard of internal peace." 
            },
            { 
                textStructure: [{w: "表达对历史", p: "duì lǐ shǐ"}, "，", {w: "神话时代变迁", p: "shén huà shí dài biàn qiān"}, {w: "而产生的虚无与感叹", p: "ér chǎn shēng de xū wú yǔ gǎn tàn"}], 
                en: "Lamenting the unstoppable passage of time and historical decline with a sigh.", 
                correct: false, 
                explanationStructure: [{w: "错误", p: "cuò wù"}, "，", {w: "带入文末语境", p: "dài rù wén mò yǔ yìn"}, "，", {w: "完全不符合", p: "wán quán bù fú hé"}, {w: "礼赞名士的主旨", p: "lǐ zàn míng shì de zhǔ zhǐ"}, "。"], 
                explanationEn: "Incorrect. This injects heavy, existential grief that directly contradicts the serene, complimentary tone of the biography." 
            }
        ]
    }
];
