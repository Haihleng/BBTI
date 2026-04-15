export const questions = [
  {
    id: 1,
    prompt: {
      en: "After an opponent finishes through strong contact against you, what's your first reaction?",
      zh: "对方选手在跟你进行了一个强硬对抗后完成上篮，你的第一反应是：",
    },
    options: [
      {
        key: "A",
        text: { en: "Annoyed — I want to hit back next possession", zh: "神烦！下回合想狠狠干回来" },
        dimensionWeights: {
          attack: 2,
          confidence: 1,
          emo_stability: -1,
          physicality: 1,
          energy: 1,
        },
        personalityWeights: {
          foul: 3,
          star: 1,
          damn: 1,
        },
      },
      {
        key: "B",
        text: { en: "Learn from it — can't get beat like that again", zh: "痛定思痛...下次一定不能再被这样过" },
        dimensionWeights: {
          defence: 1,
          ball_IQ: 1,
          composure: 1,
          focus: 1,
          emo_stability: -1,
        },
        personalityWeights: {
          emoer: 1,
          worker: 1,
        },
      },
      {
        key: "C",
        text: { en: "That was tough — fair play", zh: "这球牛逼，确实放不住" },
        dimensionWeights: {
          composure: 2,
          emo_stability: 1,
          ball_IQ: 1,
        },
        personalityWeights: {
          mymy: 0.5,
          calper: 1,
        },
      },
      {
        key: "D",
        text: { en: "Awkward... I just became the defensive weak point", zh: "有点尴尬，这波我成防守大漏勺了" },
        dimensionWeights: {
          confidence: -2,
          defence: -1,
          emo_stability: -1,
          focus: -1,
        },
        personalityWeights: {
          road: 5,
          lost: 1,
        },
      },
    ],
  },

  {
    id: 2,
    prompt: {
      en: "The night before a game, what are you thinking about before sleep?",
      zh: "明天要比赛了，睡前你在想：",
    },
    options: [
      {
        key: "A",
        text: { en: "I'm nervous... should I go shoot a little right now?", zh: "紧张啊....要不现在去投俩？" },
        dimensionWeights: {
          confidence: -1,
          energy: 1,
          attack: 1,
          emo_stability: -1,
          focus: 1,
        },
        personalityWeights: {
          emoer: 1,
        },
      },
      {
        key: "B",
        text: { en: "Scrolling for a bit, but I'm still thinking about the game", zh: "刷会儿手机，但脑子还在想比赛" },
        dimensionWeights: {
          focus: 1,
          ball_IQ: 1,
          composure: 0,
          emo_stability: 0,
        },
        personalityWeights: {
          star: 1,
        },
      },
      {
        key: "C",
        text: { en: "Just sleep. Tomorrow is tomorrow", zh: "直接睡，比赛明天再说" },
        dimensionWeights: {
          smoothness: 1,
          composure: 1,
          energy: -1,
        },
        personalityWeights: {
          lost: 1,
          hider: 1,
        },
      },
      {
        key: "D",
        text: { en: "Excited — already imagining my highlights", zh: "兴奋！已经在脑子里想象自己的比赛集锦了" },
        dimensionWeights: {
          confidence: 2,
          attack: 1,
          energy: 1,
          shot_making: 1,
        },
        personalityWeights: {
          star: 3,
          three: 3,
        },
      },
    ],
  },

  {
    id: 3,
    prompt: {
      en: "On the way to the game, your teammates are discussing tactics. What do you do?",
      zh: "去比赛场地的路上，队友在讨论战术，你会：",
    },
    options: [
      {
        key: "A",
        text: { en: "Actively join the discussion", zh: "主动加入讨论" },
        dimensionWeights: {
          playmaking: 1,
          ball_IQ: 2,
          willingness: 1,
          confidence: 1,
          focus: 1,
        },
        personalityWeights: {
          boss: 2,
        },
      },
      {
        key: "B",
        text: { en: "Listen carefully, but don't say much", zh: "认真听，但不太发言" },
        dimensionWeights: {
          ball_IQ: 1,
          focus: 1,
          composure: 1,
          willingness: 1,
        },
        personalityWeights: {
          worker: 1,
        },
      },
      {
        key: "C",
        text: { en: "Listen for a bit, then mentally drift away", zh: "听一会就开始放空" },
        dimensionWeights: {
          focus: -1,
          ball_IQ: 0,
          energy: -1,
        },
        personalityWeights: {
          lost: 2,
          hider: 1,
        },
      },
      {
        key: "D",
        text: { en: "Just fall asleep", zh: "直接睡过去" },
        dimensionWeights: {
          focus: -1,
          energy: -2,
          willingness: -1,
        },
        personalityWeights: {
          wbxl: 1,
          hider: 1,
        },
      },
    ],
  },

  {
    id: 4,
    prompt: {
      en: "You arrive at the gym. What's the first thing you usually do?",
      zh: "到赛场了，你第一件事通常是：",
    },
    options: [
      {
        key: "A",
        text: { en: "Find the bathroom / deal with real life first", zh: "找厕所 / 处理生理问题" },
        dimensionWeights: {
          focus: -1,
          smoothness: 0,
        },
        personalityWeights: {
          tofu: 3,
        },
      },
      {
        key: "B",
        text: { en: "Help carry stuff and get the team set up", zh: "帮队伍拿东西、一起准备" },
        dimensionWeights: {
          willingness: 2,
          energy: 1,
          focus: 1,
        },
        personalityWeights: {
          mom: 2,
        },
      },
      {
        key: "C",
        text: { en: "Change shoes and warm up immediately", zh: "迅速换鞋开始热身" },
        dimensionWeights: {
          conditioning: 1,
          focus: 1,
          energy: 1,
          attack: 1,
        },
        personalityWeights: {
          isoer: 1,
          three: 2,
        },
      },
      {
        key: "D",
        text: { en: "Still half asleep, need a second to wake up", zh: "还有点懵，先缓一会" },
        dimensionWeights: {
          focus: -1,
          energy: -1,
          smoothness: 0,
        },
        personalityWeights: {
          lost: 2,
        },
      },
    ],
  },

  {
    id: 5,
    prompt: {
      en: "While other teams are playing, what are you most likely doing?",
      zh: "别的队正在打比赛，此时你更可能：",
    },
    options: [
      {
        key: "A",
        text: { en: "I must cheer for the team I'm rooting for", zh: "必须得给我支持的队伍一些应援" },
        dimensionWeights: {
          energy: 2,
          willingness: 1,
          focus: 0,
        },
        personalityWeights: {
          claper: 3,
          mom: 1,
          kind: 2,
        },
      },
      {
        key: "B",
        text: { en: "Carefully observing and analyzing possible opponents", zh: "在一旁认真观察比赛，分析可能对手的打法" },
        dimensionWeights: {
          ball_IQ: 2,
          focus: 2,
          composure: 1,
        },
        personalityWeights: {
          calm: 1,
          boss: 3,
        },
      },
      {
        key: "C",
        text: { en: "No specific side, but good plays get applause", zh: "不一定有支持的队伍，但是有好球会叫好" },
        dimensionWeights: {
          energy: 1,
          smoothness: 1,
          willingness: 1,
        },
        personalityWeights: {
          claper: 3,
          kind: 1,
        },
      },
      {
        key: "D",
        text: { en: "Kind of bored, starting to zone out", zh: "有点无聊，开始走神" },
        dimensionWeights: {
          focus: -1,
          energy: -1,
        },
        personalityWeights: {
          lost: 1,
          deaf: 2,
        },
      },
    ],
  },

  {
    id: 6,
    prompt: {
      en: "You catch it wide open at the three-point line and the defense is still closing out. What do you do?",
      zh: "你在三分线接到球，完全空位，回防正在赶来，你会：",
    },
    options: [
      {
        key: "A",
        text: { en: "Shoot it. Simple", zh: "投就完了" },
        dimensionWeights: {
          confidence: 2,
          shot_accuracy: 1,
          shot_making: 1,
          attack: 1,
        },
        personalityWeights: {
          three: 3,
          star: 1,
        },
      },
      {
        key: "B",
        text: { en: "Hesitate a little, maybe dribble once first", zh: "有点犹豫，运一下再看" },
        dimensionWeights: {
          confidence: 0,
          ball_handling: 1,
          smoothness: 1,
          composure: 0,
        },
        personalityWeights: {
          fake: 2,
        },
      },
      {
        key: "C",
        text: { en: "Want to shoot, but pass it away instead", zh: "想投但还是把球传走" },
        dimensionWeights: {
          willingness: 1,
          playmaking: 1,
          confidence: -1,
          attack: -1,
        },
        personalityWeights: {
          mom: 1,
          kind: 1,
        },
      },
      {
        key: "D",
        text: { en: "Overthink it and lose the window", zh: "脑子想太多，机会没了" },
        dimensionWeights: {
          confidence: -2,
          focus: -1,
          composure: -1,
        },
        personalityWeights: {
          lost: 2,
        },
      },
    ],
  },

  {
    id: 7,
    prompt: {
      en: "You catch it at the three-point line again, but now the defender is right there. What do you do?",
      zh: "你又在三分线接到球，这次防守在你面前，你会：",
    },
    options: [
      {
        key: "A",
        text: { en: "Still shoot it", zh: "依然直接出手" },
        dimensionWeights: {
          confidence: 2,
          shot_making: 1,
          attack: 1,
        },
        personalityWeights: {
          three: 4,
          star: 3,
        },
      },
      {
        key: "B",
        text: { en: "Move it to someone else", zh: "找人传球" },
        dimensionWeights: {
          willingness: 1,
          playmaking: 1,
          attack: -1,
          confidence: -1,
        },
        personalityWeights: {
          kind: 2,
        },
      },
      {
        key: "C",
        text: { en: "Try attacking off the dribble", zh: "试一下突破" },
        dimensionWeights: {
          attack: 2,
          ball_handling: 1,
          confidence: 1,
        },
        personalityWeights: {
          star: 2,
          fake: 2,
        },
      },
      {
        key: "D",
        text: { en: "Call for a screen first", zh: "叫个挡拆再处理" },
        dimensionWeights: {
          playmaking: 1,
          ball_IQ: 1,
          composure: 1,
        },
        personalityWeights: {
          boss: 3,
        },
      },
    ],
  },

  {
    id: 8,
    prompt: {
      en: "You let it fly. What are you thinking in that instant?",
      zh: "你投了，出手那一瞬间你在想：",
    },
    options: [
      {
        key: "A",
        text: { en: "Whatever. Get back on defense", zh: "不管了，先回防" },
        dimensionWeights: {
          defence: 1,
          focus: 1,
          composure: 1,
        },
        personalityWeights: {
          worker: 1,
          foul: 2,
        },
      },
      {
        key: "B",
        text: { en: "That felt off — 'my bad, my bad!'", zh: "感觉没了，开始喊“我的我的”" },
        dimensionWeights: {
          emo_stability: -1,
          focus: -1,
          energy: 1,
        },
        personalityWeights: {
          mymy: 3,
        },
      },
      {
        key: "C",
        text: { en: "This one's good", zh: "这球稳了" },
        dimensionWeights: {
          confidence: 2,
          smoothness: 1,
        },
        personalityWeights: {
          three: 3,
          star: 2,
        },
      },
      {
        key: "D",
        text: { en: "No thoughts. Crash the glass", zh: "不想了，先冲板" },
        dimensionWeights: {
          rebounding: 2,
          energy: 1,
          attack: 1,
        },
        personalityWeights: {
          baner: 6,
          worker: 1,
        },
      },
    ],
  },

  {
    id: 9,
    prompt: {
      en: "The shot goes in. What's your first reaction?",
      zh: "球进了，你的第一反应是：",
    },
    options: [
      {
        key: "A",
        text: { en: "That felt GREAT", zh: "就这个进球爽！" },
        dimensionWeights: {
          energy: 2,
          confidence: 1,
        },
        personalityWeights: {
          star: 3,
          damn: 1,
        },
      },
      {
        key: "B",
        text: { en: "A little surprised, but happy", zh: "意外，但挺爽" },
        dimensionWeights: {
          confidence: 0,
          emo_stability: 0,
          smoothness: 0,
        },
        personalityWeights: {
          woc: 3,
        },
      },
      {
        key: "C",
        text: { en: "Relief — thank god it went in", zh: "松一口气，还好进了" },
        dimensionWeights: {
          composure: 1,
          emo_stability: 1,
          confidence: 0,
        },
        personalityWeights: {
          emoer: 1,
        },
      },
      {
        key: "D",
        text: { en: "No big reaction, keep playing", zh: "没太大反应，继续打" },
        dimensionWeights: {
          composure: 2,
          emo_stability: 1,
          energy: -1,
        },
        personalityWeights: {
          hider: 1,
        },
      },
    ],
  },

  {
    id: 10,
    prompt: {
      en: "Your shot misses, they push in transition, and you're almost not getting back. What do you do?",
      zh: "球没进，对面直接推快攻，而你快追不上了，你会：",
    },
    options: [
      {
        key: "A",
        text: { en: "Stop chasing and get ready for the next play", zh: "不追了，准备下一回合" },
        dimensionWeights: {
          defence: -1,
          conditioning: -1,
          energy: -1,
        },
        personalityWeights: {
          wbxl: 1,
          hider: 1,
        },
      },
      {
        key: "B",
        text: { en: "Try to stop it with a foul", zh: "想办法用犯规断掉" },
        dimensionWeights: {
          foul: 2,
          defence: 1,
          physicality: 1,
        },
        personalityWeights: {
          foul: 4,
        },
      },
      {
        key: "C",
        text: { en: "Still sprint back — maybe I can disrupt it", zh: "还是拼一下，说不定能干扰" },
        dimensionWeights: {
          defence: 2,
          conditioning: 1,
          energy: 1,
        },
        personalityWeights: {
          moper: 4,
          worker: 1,
          foul: 2,
        },
      },
      {
        key: "D",
        text: { en: "Chasing back while regretting the last shot", zh: "一边追一边后悔刚刚那球" },
        dimensionWeights: {
          emo_stability: -1,
          focus: -1,
          composure: -1,
        },
        personalityWeights: {
          emoer: 1,
        },
      },
    ],
  },

  {
    id: 11,
    prompt: {
      en: "Your teammate just shot it. What's your immediate reaction?",
      zh: "这次，你的队友投了，你看到 ta 出手了，你的第一反应是：",
    },
    options: [
      {
        key: "A",
        text: { en: "Crash in for the rebound", zh: "直接冲进去抢板" },
        dimensionWeights: {
          rebounding: 2,
          energy: 1,
          attack: 1,
        },
        personalityWeights: {
          baner: 5,
          worker: 1,
          moper: 3,
          jumper: 4,
        },
      },
      {
        key: "B",
        text: { en: "Turn and get back on defense", zh: "转身开始回防" },
        dimensionWeights: {
          defence: 1,
          focus: 1,
          composure: 1,
        },
        personalityWeights: {
          worker: 1,
        },
      },
      {
        key: "C",
        text: { en: "You know you should move... but watch for two extra seconds", zh: "感觉该动，但还是多看了两秒" },
        dimensionWeights: {
          focus: -1,
          ball_IQ: -1,
          composure: -1,
        },
        personalityWeights: {
          lost: 1,
          hider: 1,
        },
      },
    ],
  },

  {
    id: 12,
    prompt: {
      en: "You grab the offensive rebound under the rim. What next?",
      zh: "你在篮下抢到了进攻篮板，你会：",
    },
    options: [
      {
        key: "A",
        text: { en: "Go right back up", zh: "抢到就直接起" },
        dimensionWeights: {
          rebounding: 2,
          attack: 2,
          physicality: 1,
          shot_making: 1,
        },
        personalityWeights: {
          sgaer: 6,
          moper: 3,
        },
      },
      {
        key: "B",
        text: { en: "Kick it out to someone else", zh: "找机会传出去" },
        dimensionWeights: {
          willingness: 1,
          playmaking: 1,
          composure: 1,
        },
        personalityWeights: {
          mom: 1,
          kind: 2,
        },
      },
      {
        key: "C",
        text: { en: "Dribble out and reset", zh: "运出去重新组织" },
        dimensionWeights: {
          playmaking: 1,
          ball_IQ: 1,
          composure: 1,
          ball_handling: 1,
        },
        personalityWeights: {
          calm: 1,
        },
      },
      {
        key: "D",
        text: { en: "Hesitate and lose it", zh: "犹豫一下被对面抢走" },
        dimensionWeights: {
          focus: -1,
          composure: -1,
          confidence: -1,
        },
        personalityWeights: {
          lost: 2,
          oil: 2,
          tofu: 2,
        },
      },
    ],
  },

  {
    id: 13,
    prompt: {
      en: "You're holding it on the perimeter, your big comes up asking for the ball or a screen. What do you do?",
      zh: "你在三分线持球，中锋上来要球/做掩护，你会：",
    },
    options: [
      {
        key: "A",
        text: { en: "Ignore it and drive anyway", zh: "不管，直接自己突" },
        dimensionWeights: {
          attack: 2,
          confidence: 1,
          willingness: -1,
        },
        personalityWeights: {
          isoer: 4,
          star: 2,
        },
      },
      {
        key: "B",
        text: { en: "Use the screen first, then decide", zh: "让她来挡拆再决定" },
        dimensionWeights: {
          playmaking: 1,
          ball_IQ: 2,
          composure: 1,
        },
        personalityWeights: {
          fake: 2,
        },
      },
      {
        key: "C",
        text: { en: "Give it to the big", zh: "直接把球给她" },
        dimensionWeights: {
          willingness: 2,
          playmaking: 1,
          ball_IQ: 1,
        },
        personalityWeights: {
          mom: 1,
          kind: 1,
        },
      },
      {
        key: "D",
        text: { en: "Too crowded — just move the ball", zh: "觉得太挤了，先把球给出去" },
        dimensionWeights: {
          confidence: -1,
          willingness: 1,
          composure: 0,
        },
        personalityWeights: {
          lost: 1,
        },
      },
    ],
  },

  {
    id: 14,
    prompt: {
      en: "Two minutes left, down one. What are you most likely thinking?",
      zh: "比赛最后两分钟，落后一分，你更可能：",
    },
    options: [
      {
        key: "A",
        text: { en: "Give me the ball", zh: "主动要球处理这一回合" },
        dimensionWeights: {
          confidence: 2,
          attack: 2,
          composure: 1,
        },
        personalityWeights: {
          star: 2,
          isoer: 1,
        },
      },
      {
        key: "B",
        text: { en: "Run the play, take the shot if it comes to me", zh: "跟着战术走，机会到了再出手" },
        dimensionWeights: {
          ball_IQ: 2,
          composure: 1,
          willingness: 1,
          playmaking: 1,
        },
        personalityWeights: {
  
        },
      },
      {
        key: "C",
        text: { en: "Cut or move for an easier look", zh: "跑位找轻松机会" },
        dimensionWeights: {
          attack: 1,
          speed: 1,
          ball_IQ: 1,
          energy: 1,
        },
        personalityWeights: {
          sneaker: 6,
          tofu: 1,
        },
      },
      {
        key: "D",
        text: { en: "Please don't make me the one deciding this", zh: "希望不要轮到自己处理这个球" },
        dimensionWeights: {
          confidence: -2,
          composure: -1,
          attack: -1,
        },
        personalityWeights: {
          hider: 2,
          lost: 1,
          tofu: 1,
        },
      },
    ],
  },

  {
    id: 15,
    prompt: {
      en: "You lost the game. What are you most likely to do after?",
      zh: "这场比赛输了，赛后你更可能：",
    },
    options: [
      {
        key: "A",
        text: { en: "Be alone for a bit", zh: "自己待一会" },
        dimensionWeights: {
          energy: -1,
          composure: 0,
          emo_stability: 0,
        },
        personalityWeights: {
          isoer: 1,
          hider: 1,
        },
      },
      {
        key: "B",
        text: { en: "Go comfort teammates", zh: "主动去安慰队友" },
        dimensionWeights: {
          willingness: 2,
          emo_stability: 1,
          energy: 1,
        },
        personalityWeights: {
          mom: 2,
          kind: 1,
        },
      },
      {
        key: "C",
        text: { en: "Immediately start replaying what went wrong", zh: "开始复盘刚刚的问题" },
        dimensionWeights: {
          ball_IQ: 1,
          focus: 1,
          composure: 1,
        },
        personalityWeights: {
          calm: 1,
        },
      },
      {
        key: "D",
        text: { en: "I'm exhausted. Need a minute", zh: "好累，先缓一会儿" },
        dimensionWeights: {
          conditioning: -1,
          energy: -1,
          composure: 0,
        },
        personalityWeights: {
          wbxl: 1,
        },
      },
    ],
  },

  {
    id: 16,
    prompt: {
      en: "A teammate makes a ridiculous mistake. What's your first reaction?",
      zh: "看到队友出现离谱失误，你的第一反应是：",
    },
    options: [
      {
        key: "A",
        text: { en: "Encourage them immediately", zh: "立刻出声鼓励" },
        dimensionWeights: {
          willingness: 2,
          energy: 1,
          emo_stability: 1,
        },
        personalityWeights: {
          mom: 1,
          kind: 1,
          claper: 1,
        },
      },
      {
        key: "B",
        text: { en: "A little annoyed inside, but keep playing", zh: "心里有点无语，但继续打" },
        dimensionWeights: {
          composure: 1,
          emo_stability: 0,
          willingness: -1,
        },
        personalityWeights: {
          damn: 3,
          calm: 1,
        },
      },
      {
        key: "C",
        text: { en: "Say nothing and get back on defense", zh: "不说话，直接退防" },
        dimensionWeights: {
          composure: 1,
          defence: 1,
          energy: -1,
        },
        personalityWeights: {
          calm: 1,
          worker: 1,
        },
      },
      {
        key: "D",
        text: { en: "Honestly, I get it — I'd do that too sometimes", zh: "能理解，我自己也会这样" },
        dimensionWeights: {
          willingness: 1,
          emo_stability: 1,
          smoothness: 1,
        },
        personalityWeights: {
          mymy: 1,
          kind: 3,
        },
      },
    ],
  },
];