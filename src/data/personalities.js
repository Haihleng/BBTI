export const personalities = [
  {
    id: "foul",
    category: "behavior",
    name: { en: "FOUL", zh: "午饭下场" },
    oneLiner: {
      en: "WE NEED YOU ON THE FLOOR, NOT IN THE BENCH!",
      zh: "强硬防守，但别下场啊！",
    },
    desc: {
      en: "The strongest defender, but often in foul trouble.",
      zh: "爱犯规的，容易犯规的，不知道为什么就犯规了。",
    },
    keywords: {
      en: ["Focus","Defense", "Foul"],
      zh: ["专注","防守", "犯规"],
    },
    profile: {
    foul: 0.8,
    physicality: 0.6,
    defence: 1.0,
    focus: 0.8,
    smoothness: 0.4,
    },
  },

  {
    id: "lost",
    category: "weakness",
    name: { en: "LOST", zh: "懵逼者" },
    oneLiner: {
      en: " Who am I? Where am I from? Where am I going?",
      zh: "感觉自己每天好呆萌，好懵逼呀，怎么就活成这样了？好疑惑呀，好困惑？我就这样呆呆地望着这个世界，懵逼死了。",
    },
    desc: {
      en: "The most lost player on the floor, often caught in the wrong place at the wrong time.",
      zh: "一上场就懵逼，不会说话不会运球，很急但不知道怎么办，果然还是先传回去吧。",
    },
    keywords: {
      en: ["Confused","Scared", "Where's my teammate?"],
      zh: ["困惑","害怕", "我队友呢？"],
    },
    profile: {
    focus: 0.2,
    attack: 0.2,
    smoothness: 0.2,
    confidence:0.2,
    ball_IQ: 0.1,
    willingness: 0.7,
    },
  },

  {
    id: "emoer",
    category: "behavior",
    name: { en: "EMO-er", zh: "鱿鱼丝" },
    oneLiner: {
      en: "If being emo is a talent.",
      zh: "如果鱿鱼丝一种天赋。",
    },
    desc: {
      en: "Gets very emotional after the game, often reflecting deeply on their mistakes and feeling like they could have done better.",
      zh: "打完球会emo，进行深刻反思，对自己的失误深恶痛绝，总觉得不够好。",
    },
    keywords: {
      en: ["Emotional","Reflective", "Self-critical"],
      zh: ["情感丰富","反思性强", "自我批评"],
    },
    profile: {
    emo_stability: 0.2,
    attack: 0.7,
    smoothness: 0.2,
    confidence:0.4,
    },
  },

  {
    id: "kind",
    category: "vibe",
    name: { en: "KIND", zh: "球场小天使" },
    oneLiner: {
      en: "The sweetest teammate you can ask for.",
      zh: "宝宝，你善。输赢看淡。",
    },
    desc: {
      en: "When an opponent falls down, they are the first one to help them up instead of rushing for a transition.",
      zh: "对手摔倒了不去快攻去扶对手的天使类球员",
    },
    keywords: {
      en: ["Kind","Supportive", "Team Player"],
      zh: ["善良","支持队友", "团队合作"],
    },
    profile: {
    emo_stability: 0.8,
    attack: 0.2,
    willingness: 1.0,
    },
  },

   {
    id: "damn",
    ccategory: "weakness",
    name: { en: "DAMN", zh: "弹～幕～" },
    oneLiner: {
      en: "West Coast player, always has 'Damn' on their lips, basketball comes with a rap song.",
      zh: "西海岸球员，Damn不离口，篮球附送rap一首",
    },
    desc: {
      en: "Doesn't know how they play, but they always have something to say about the game, teammates, opponents, referees, and even the basketball itself.",
      zh: "球不知道打得怎么样，但是嘴上一定骂骂咧咧型，嘴自己嘴队友嘴对手嘴球框嘴地板，啥都想嘴",
    },
    keywords: {
      en: ["Vocal","Opinionated", "Damn!"],
      zh: ["爱说话","有主见", "Damn!"],
    },
    profile: {
    emo_stability: 0.3,
    focus: 0.7,
    willingness: 0.2,
    composure:0.2,
    },
  },

  {
    id: "calm",
    category: "behavior",
    name: { en: "CALM", zh: "卡皮巴拉" },
    oneLiner: {
      en: "The calmest player on the court, nothing seems to rattle them.",
      zh: "淡淡的就会顺顺的",
    },
    desc: {
      en: "The calmest player on the court, nothing seems to rattle them, they are not too high when winning, nor too low when losing. It's like they have a capybara living inside them.",
      zh: "保持冷静没有情绪起伏的球员，感觉什么都不会影响到他们，赢了不骄傲输了不沮丧，感觉他们的内心住着一只卡皮巴拉",
    },
    keywords: {
      en: ["Calm","Steady", "Peaceful"],
      zh: ["冷静","稳重", "平和"],
    },
    profile: {
    emo_stability: 0.9,
    ball_IQ: 0.7,
    smoothness: 0.8,
    willingness: 0.7,
    composure:0.9,
    },
  },

  {
    id: "ISO-er",
    category: "ability",
    name: { en: "ISO-er", zh: "单挑王" },
    oneLiner: {
      en: "When the ball is in their hands, you can forget about it.",
      zh: "拿球就是干！别管！",
    },
    desc: {
      en: "The player who loves to isolate and take over the game.",
      zh: "有实力，爱单打。",
    },
    keywords: {
      en: ["ISO","Ball Dominance", "Takeover"],
      zh: ["单挑","球权", "接管"],
    },
    profile: {
    attack: 0.9,
    ball_dominance: 0.9,
    confidence: 0.8,
    conditioning: 0.7,
    physicality: 0.8,
    shot_accuracy: 0.7,
    shot_making: 0.8,
    },
  },

  {
  id: "star",
  category: "ability",
  name: { en: "STAR", zh: "得分王" },
  oneLiner: {
    en: "The scoreboard moves because of you.",
    zh: "比分动，是因为你动了。",
  },
  desc: {
    en: "Primary scoring option, consistent and reliable bucket-getter.",
    zh: "稳定输出的核心得分点，球队第一火力来源。",
  },
  keywords: {
    en: ["Scoring", "Clutch", "Reliable"],
    zh: ["得分", "关键球", "稳定"],
  },
  profile: {
    attack: 1.0,
    shot_making: 0.9,
    shot_accuracy: 0.8,
    confidence: 0.9,
    ball_handling: 0.7,
    playmaking: 0.7,
  },
}
,
  {
  id: "moper",
  category: "behavior",
  name: { en: "MOP-er", zh: "拖把精" },
  oneLiner: {
    en: "Every possession leaves a mark on the floor.",
    zh: "每一回合都在地上留下痕迹。",
  },
  desc: {
    en: "Dives, hustles, crashes—leaves everything on the court.",
    zh: "拼命型选手，满地飞，场地都被你拖干净了。",
  },
  keywords: {
    en: ["Hustle", "Effort", "Dive"],
    zh: ["拼命", "努力", "飞扑"],
  },
  profile: {
    energy: 1.0,
    defence: 0.9,
    rebounding: 0.8,
    conditioning: 0.9,
    willingness: 0.8,
  },
}
,
{
  id: "hider",
  category: "weakness",
  name: { en: "HIDE-r", zh: "隐形人" },
  oneLiner: {
    en: "You were there... right?",
    zh: "人呢？在吗？",
  },
  desc: {
    en: "Low presence, rarely involved in plays.",
    zh: "存在感极低，仿佛隐形。",
  },
  keywords: {
    en: ["Invisible", "Quiet"],
    zh: ["隐形", "低存在感"],
  },
  profile: {
    attack: 0.2,
    willingness: 0.3,
    energy: 0.2,
    ball_handling: 0.2,
  },
}
,
{
  id: "fake",
  category: "ability",
  name: { en: "FAKE", zh: "假动作大师" },
  oneLiner: {
    en: "One move is never enough.",
    zh: "你看到的是假动作。",
  },
  desc: {
    en: "Lives on fakes, hesitations, and breaking ankles.",
    zh: "一身假动作，脚踝收集者。",
  },
  keywords: {
    en: ["Fake", "Footwork", "Crafty"],
    zh: ["假动作", "脚步", "技巧"],
  },
  profile: {
    ball_handling: 0.9,
    smoothness: 0.9,
    shot_making: 0.7,
    confidence: 0.7,
    playmaking: 0.6,
  },
}
,
{
  id: "mymy",
  category: "behavior",
  name: { en: "MYMY", zh: "我的我的" },
  oneLiner: {
    en: "My bad... again.",
    zh: "我的我的…但下次还是这样。",
  },
  desc: {
    en: "Takes responsibility quickly, fixes nothing.",
    zh: "认领最积极，但改不了一点。",
  },
  keywords: {
    en: ["Responsibility", "Chaos"],
    zh: ["认领", "失误"],
  },
  profile: {
    confidence: 0.4,
    ball_iq: 0.3,
    focus: 0.3,
    energy: 0.6,
  },
}
,

{
  id: "tofu",
  category: "weakness",
  name: { en: "TOFU", zh: "豆腐人" },
  oneLiner: {
    en: "Contact? System error.",
    zh: "一碰就碎。",
  },
  desc: {
    en: "Low physical resistance, injury-prone.",
    zh: "不受力，容易受伤。",
  },
  keywords: {
    en: ["Soft", "Fragile"],
    zh: ["软", "脆"],
  },
  profile: {
    physicality: 0.2,
    conditioning: 0.3,
    defence: 0.3,
    attack: 0.4,
  },
}
,

{
  id: "woc",
  category: "vibe",
  name: { en: "WOC!", zh: "懵一个！" },
  oneLiner: {
    en: "Wait… that went in?",
    zh: "？？？进了？？",
  },
  desc: {
    en: "Random shots, random success, occasional god mode.",
    zh: "管他呢，懵一个。偶尔的神。",
  },
  keywords: {
    en: ["Luck", "Chaos"],
    zh: ["运气", "随机"],
  },
  profile: {
    shot_accuracy: 0.5,
    confidence: 0.6,
    focus: 0.3,
    energy: 0.7,
  },
}
,

{
  id: "baner",
  category: "ability",
  name: { en: "BAN-er", zh: "篮板王" },
  oneLiner: {
    en: "Every miss is yours.",
    zh: "队友一个，你一个；对手一个，你一个；刘星分饼，你分板er。",
  },
  desc: {
    en: "Dominates the glass on both ends.",
    zh: "篮板控制者。",
  },
  profile: {
    rebounding: 1.0,
    physicality: 0.8,
    conditioning: 0.7,
    defence: 0.7,
  },
}
,

{
  id: "claper",
  category: "vibe",
  name: { en: "CLAP-er", zh: "鼓掌王" },
  oneLiner: {
    en: "Good play is good play.",
    zh: "好球必须鼓掌。",
  },
  desc: {
    en: "Claps for everything, even opponents.",
    zh: "不分敌我，都是好球。",
  },
  profile: {
    energy: 0.8,
    willingness: 0.7,
    focus: 0.5,
  },
}
,

{
  id: "wbxl",
  category: "weakness",
  name: { en: "WBXL", zh: "俺不中了" },
  oneLiner: {
    en: "Low battery at tip-off.",
    zh: "开局就低电量。",
  },
  desc: {
    en: "Gets tired quickly, struggles to keep up.",
    zh: "体能不足，跑两步就累。",
  },
  profile: {
    conditioning: 0.2,
    speed: 0.3,
    energy: 0.3,
    defence: 0.3,
  },
}
,
{
  id: "three",
  category: "ability",
  name: { en: "THREE-s", zh: "三分雨" },
  oneLiner: {
    en: "If it's open, it's over.",
    zh: "只要空位，就是三分。",
  },
  desc: {
    en: "Elite shooter, spacing threat.",
    zh: "外线火力点。",
  },
  profile: {
    shot_accuracy: 1.0,
    shot_making: 0.9,
    attack: 0.7,
    confidence: 0.8,
  },
}
,
{
  id: "oil",
  category: "weakness",
  name: { en: "OIL", zh: "黄油手" },
  oneLiner: {
    en: "Catch? Optional.",
    zh: "球：你接一下？ 我：不了。",
  },
  desc: {
    en: "Struggles to catch passes cleanly.",
    zh: "接球困难户。",
  },
  profile: {
    touch: 0.2,
    ball_handling: 0.3,
    focus: 0.4,
  },
}
,

{
  id: "mom",
  category: "vibe",
  name: { en: "MOM", zh: "妈妈型人格" },
  oneLiner: {
    en: "Someone has to take care of everyone.",
    zh: "总要有人照顾大家。",
  },
  desc: {
    en: "Supports, organizes, encourages, off-court MVP.",
    zh: "医疗包/安慰/订饭/情绪管理全包。",
  },
  profile: {
    willingness: 1.0,
    energy: 0.8,
    focus: 0.7,
    composure: 0.8,
  },
}
,

{
  id: "jumper",
  category: "ability",
  name: { en: "JUMP-er", zh: "弹跳怪" },
  oneLiner: {
    en: "Up before you react.",
    zh: "你还没跳，我已经下来了。",
  },
  desc: {
    en: "Explosive vertical athlete.",
    zh: "能飞，但也容易被点飞。",
  },
  profile: {
    speed: 0.8,
    rebounding: 0.8,
    defence: 0.8,
    physicality: 0.7,
  },
}
,
{
  id: "sgaer",
  category: "behavior",
  name: { en: "SGAer", zh: "造规大师" },
  oneLiner: {
    en: "Contact is the plan.",
    zh: "对抗是战术的一部分。",
  },
  desc: {
    en: "Draws fouls consistently.",
    zh: "专注造犯规。",
  },
  profile: {
    foul: 1.0,
    attack: 0.8,
    ball_handling: 0.7,
    confidence: 0.8,
  },
}
,

{
  id: "soft",
  category: "weakness",
  name: { en: "SOFT", zh: "球场肌无力" },
  oneLiner: {
    en: "Avoids contact at all cost.",
    zh: "能不碰就不碰。",
  },
  desc: {
    en: "Avoids contact at all cost, hesitant on both ends.",
    zh: "不敢进攻，不敢防守，怕碰撞。",
  },
  profile: {
    physicality: 0.2,
    defence: 0.3,
    attack: 0.1,
    confidence: 0.3,
  },
}
,
{
  id: "road",
  category: "weakness",
  name: { en: "ROAD", zh: "清晨马路" },
  oneLiner: {
    en: "No resistance detected.",
    zh: "像过清晨的马路一样过你。",
  },
  desc: {
    en: "Offers little defensive resistance.",
    zh: "防守形同虚设。防守黑洞",
  },
  profile: {
    defence: 0.2,
    focus: 0.3,
    physicality: 0.2,
  },
}
,
{
  id: "worker",
  category: "behavior",
  name: { en: "WORK-er", zh: "蓝领" },
  oneLiner: {
    en: "No spotlight, all impact.",
    zh: "没有球权，但有作用。",
  },
  desc: {
    en: "Does the dirty work.",
    zh: "顶中锋，抢篮板，干脏活。",
  },
  profile: {
    rebounding: 0.9,
    defence: 0.8,
    physicality: 0.8,
    willingness: 0.7,
  },
}
,
{
  id: "sneaker",
  category: "behavior",
  name: { en: "SNEAKER", zh: "溜底狂魔" },
  oneLiner: {
    en: "Always somewhere else.",
    zh: "你永远不知道他下一秒在哪。",
  },
  desc: {
    en: "Moves constantly, cuts everywhere.",
    zh: "疯狂跑位乱窜。",
  },
  profile: {
    speed: 0.9,
    attack: 0.7,
    energy: 0.8,
    ball_iq: 0.7,
  },
}
,

];