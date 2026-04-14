export const questions = [
  {
    id: 1,
    prompt: {
      en: "In a half-court possession, what do you naturally do first?",
      zh: "阵地进攻里，你最自然的第一反应是什么？",
    },
    options: [
      {
        key: "A",
        text: { en: "Call for the ball and attack", zh: "先要球，自己打" },
        dimensionWeights: {
          attack: 3,
          confidence: 2,
          ball_handling: 1,
        },
        personalityWeights: {
          star: 1,
          isoer: 2,
        },
      },
      {
        key: "B",
        text: { en: "Read the floor and create for others", zh: "先观察，给队友创造机会" },
        dimensionWeights: {
          playmaking: 3,
          willingness: 2,
          ball_IQ: 2,
          composure: 1,
        },
        personalityWeights: {
          mom: 1,
        },
      },
      {
        key: "C",
        text: { en: "Keep moving without the ball", zh: "不停无球跑动" },
        dimensionWeights: {
          speed: 2,
          energy: 2,
          attack: 1,
        },
        personalityWeights: {
          sneaker: 2,
        },
      },
      {
        key: "D",
        text: { en: "Stand somewhere and wait", zh: "先站着等球" },
        dimensionWeights: {
          attack: 0,
          energy: 0,
          focus: 1,
        },
        personalityWeights: {
          hider: 2,
        },
      },
    ],
  },
  {
    id: 2,
    prompt: {
      en: "How do you score most often?",
      zh: "你最常用什么方式得分？",
    },
    options: [
      {
        key: "A",
        text: { en: "Catch-and-shoot threes", zh: "接球三分" },
        dimensionWeights: {
          shot_accuracy: 3,
          shot_making: 2,
          touch: 1,
        },
        personalityWeights: {
          three: 2,
        },
      },
      {
        key: "B",
        text: { en: "Drive to the rim", zh: "突破到篮下" },
        dimensionWeights: {
          attack: 3,
          physicality: 2,
          confidence: 1,
        },
        personalityWeights: {
          star: 1,
          sgaer: 1,
        },
      },
      {
        key: "C",
        text: { en: "Isolation moves", zh: "单打解决" },
        dimensionWeights: {
          ball_handling: 3,
          confidence: 2,
          shot_making: 1,
        },
        personalityWeights: {
          isoer: 2,
          fake: 1,
        },
      },
      {
        key: "D",
        text: { en: "Questionable shots that somehow go in", zh: "乱出手但莫名其妙能进" },
        dimensionWeights: {
          confidence: 2,
          focus: 0,
          shot_accuracy: 1,
          energy: 1,
        },
        personalityWeights: {
          woc: 2,
        },
      },
    ],
  },
  {
    id: 3,
    prompt: {
      en: "How do you defend?",
      zh: "你通常怎么防守？",
    },
    options: [
      {
        key: "A",
        text: { en: "Very aggressive and physical", zh: "上强度，狠狠干" },
        dimensionWeights: {
          defence: 3,
          physicality: 3,
          foul: 2,
          focus: 1,
        },
        personalityWeights: {
          foul: 2,
        },
      },
      {
        key: "B",
        text: { en: "Solid and disciplined", zh: "稳扎稳打，认真防" },
        dimensionWeights: {
          defence: 3,
          focus: 2,
          composure: 1,
        },
        personalityWeights: {
          worker: 1,
        },
      },
      {
        key: "C",
        text: { en: "Mostly vibes", zh: "主要靠感觉防" },
        dimensionWeights: {
          defence: 1,
          energy: 1,
        },
        personalityWeights: {
          road: 1,
        },
      },
      {
        key: "D",
        text: { en: "Avoid contact whenever possible", zh: "能不碰就不碰" },
        dimensionWeights: {
          physicality: 0,
          defence: 1,
          confidence: 0,
        },
        personalityWeights: {
          soft: 2,
          tofu: 1,
        },
      },
    ],
  },
  {
    id: 4,
    prompt: {
      en: "What happens after a missed shot?",
      zh: "投丢之后你通常会？",
    },
    options: [
      {
        key: "A",
        text: { en: "Crash the glass hard", zh: "狠狠干前场板" },
        dimensionWeights: {
          rebounding: 3,
          physicality: 2,
          energy: 1,
        },
        personalityWeights: {
          baner: 2,
          worker: 1,
        },
      },
      {
        key: "B",
        text: { en: "Get back immediately on defense", zh: "立刻回防" },
        dimensionWeights: {
          defence: 2,
          conditioning: 1,
          focus: 1,
        },
        personalityWeights: {
          moper: 1,
        },
      },
      {
        key: "C",
        text: { en: "Stand there thinking about the miss", zh: "先在原地反思一下" },
        dimensionWeights: {
          emo_stability: 0,
          composure: 0,
          confidence: 0,
        },
        personalityWeights: {
          emoer: 2,
        },
      },
      {
        key: "D",
        text: { en: "Hope someone else handles it", zh: "希望别人来处理残局" },
        dimensionWeights: {
          rebounding: 0,
          defence: 0,
        },
        personalityWeights: {
          hider: 1,
          lost: 1,
        },
      },
    ],
  },
  {
    id: 5,
    prompt: {
      en: "How is your stamina after 10 minutes?",
      zh: "连续打十分钟后你的状态是？",
    },
    options: [
      {
        key: "A",
        text: { en: "Still flying around", zh: "还能满场飞" },
        dimensionWeights: {
          conditioning: 3,
          energy: 2,
          speed: 1,
        },
        personalityWeights: {
          moper: 1,
          sneaker: 1,
        },
      },
      {
        key: "B",
        text: { en: "A bit tired but fine", zh: "有点累，但还能打" },
        dimensionWeights: {
          conditioning: 2,
        },
        personalityWeights: {},
      },
      {
        key: "C",
        text: { en: "Battery warning", zh: "低电量提醒" },
        dimensionWeights: {
          conditioning: 1,
          energy: 1,
        },
        personalityWeights: {
          wbxl: 2,
        },
      },
      {
        key: "D",
        text: { en: "I need a sub immediately", zh: "快换我下去" },
        dimensionWeights: {
          conditioning: 0,
          energy: 0,
        },
        personalityWeights: {
          wbxl: 3,
        },
      },
    ],
  },
  {
    id: 6,
    prompt: {
      en: "How cleanly do you catch passes?",
      zh: "你接球稳不稳？",
    },
    options: [
      {
        key: "A",
        text: { en: "Very clean", zh: "稳稳接住" },
        dimensionWeights: {
          touch: 3,
          focus: 1,
        },
        personalityWeights: {
          three: 1,
        },
      },
      {
        key: "B",
        text: { en: "Usually fine", zh: "大多数时候没问题" },
        dimensionWeights: {
          touch: 2,
        },
        personalityWeights: {},
      },
      {
        key: "C",
        text: { en: "Occasional slips", zh: "偶尔黄油一下" },
        dimensionWeights: {
          touch: 1,
          focus: 1,
        },
        personalityWeights: {
          oil: 1,
        },
      },
      {
        key: "D",
        text: { en: "The ball has other plans", zh: "球总有自己的想法" },
        dimensionWeights: {
          touch: 0,
          focus: 0,
        },
        personalityWeights: {
          oil: 3,
        },
      },
    ],
  },
  {
    id: 7,
    prompt: {
      en: "After a turnover, what is most like you?",
      zh: "失误之后，最像你的反应是？",
    },
    options: [
      {
        key: "A",
        text: { en: "Stay calm and move on", zh: "立刻稳住，继续打" },
        dimensionWeights: {
          composure: 3,
          emo_stability: 3,
          focus: 1,
        },
        personalityWeights: {
          calm: 2,
        },
      },
      {
        key: "B",
        text: { en: "Replay it in your head for the next 20 minutes", zh: "脑子里循环播放这次失误" },
        dimensionWeights: {
          emo_stability: 0,
          composure: 1,
          confidence: 1,
        },
        personalityWeights: {
          emoer: 2,
        },
      },
      {
        key: "C",
        text: { en: "Say 'my bad' immediately", zh: "第一时间喊‘我的我的’" },
        dimensionWeights: {
          energy: 1,
          willingness: 1,
          confidence: 1,
        },
        personalityWeights: {
          mymy: 2,
        },
      },
      {
        key: "D",
        text: { en: "Start complaining out loud", zh: "开始嘴" },
        dimensionWeights: {
          emo_stability: 0,
          composure: 0,
          energy: 2,
        },
        personalityWeights: {
          damn: 2,
        },
      },
    ],
  },
  {
    id: 8,
    prompt: {
      en: "What kind of teammate are you off the court?",
      zh: "在场下你更像哪种队友？",
    },
    options: [
      {
        key: "A",
        text: { en: "The one who checks on everyone", zh: "照顾所有人" },
        dimensionWeights: {
          willingness: 3,
          energy: 2,
          composure: 1,
        },
        personalityWeights: {
          mom: 3,
          kind: 1,
        },
      },
      {
        key: "B",
        text: { en: "The one who always cheers", zh: "负责鼓掌和夸夸" },
        dimensionWeights: {
          energy: 3,
          willingness: 2,
        },
        personalityWeights: {
          claper: 2,
        },
      },
      {
        key: "C",
        text: { en: "The one who talks nonstop", zh: "一直输出的人" },
        dimensionWeights: {
          energy: 2,
          focus: 1,
        },
        personalityWeights: {
          damn: 2,
        },
      },
      {
        key: "D",
        text: { en: "The one who disappears quietly", zh: "默默消失的人" },
        dimensionWeights: {
          energy: 0,
        },
        personalityWeights: {
          hider: 2,
        },
      },
    ],
  },
  {
    id: 9,
    prompt: {
      en: "What best describes your finishing at the rim?",
      zh: "你在篮下终结更像哪种？",
    },
    options: [
      {
        key: "A",
        text: { en: "Strong through contact", zh: "顶着对抗也能打进" },
        dimensionWeights: {
          attack: 3,
          physicality: 3,
          shot_making: 1,
        },
        personalityWeights: {
          star: 1,
          sgaer: 1,
        },
      },
      {
        key: "B",
        text: { en: "Creative and tricky", zh: "花活多，骗得开" },
        dimensionWeights: {
          ball_handling: 2,
          touch: 2,
          smoothness: 2,
        },
        personalityWeights: {
          fake: 2,
        },
      },
      {
        key: "C",
        text: { en: "I avoid contact and float away", zh: "我会本能闪避对抗" },
        dimensionWeights: {
          physicality: 0,
          attack: 1,
          confidence: 1,
        },
        personalityWeights: {
          soft: 2,
          tofu: 1,
        },
      },
      {
        key: "D",
        text: { en: "Sometimes it goes in for mysterious reasons", zh: "偶尔能进，但原因不明" },
        dimensionWeights: {
          touch: 1,
          shot_making: 1,
          confidence: 1,
        },
        personalityWeights: {
          woc: 2,
        },
      },
    ],
  },
  {
    id: 10,
    prompt: {
      en: "What happens when you get an open lane?",
      zh: "面前出现突破通道时你会？",
    },
    options: [
      {
        key: "A",
        text: { en: "Attack immediately", zh: "立刻冲" },
        dimensionWeights: {
          attack: 3,
          confidence: 2,
          speed: 1,
        },
        personalityWeights: {
          star: 1,
          sgaer: 1,
        },
      },
      {
        key: "B",
        text: { en: "Hesitate, fake, then go", zh: "先晃两下再进去" },
        dimensionWeights: {
          ball_handling: 2,
          smoothness: 2,
          confidence: 1,
        },
        personalityWeights: {
          fake: 2,
        },
      },
      {
        key: "C",
        text: { en: "Pass it away", zh: "还是传了吧" },
        dimensionWeights: {
          willingness: 2,
          playmaking: 2,
          attack: 0,
        },
        personalityWeights: {
          mom: 1,
          kind: 1,
          lost: 1,
        },
      },
      {
        key: "D",
        text: { en: "Look surprised that the lane existed", zh: "先震惊一下怎么会这么空" },
        dimensionWeights: {
          focus: 0,
          confidence: 0,
          ball_IQ: 0,
        },
        personalityWeights: {
          lost: 2,
        },
      },
    ],
  },
  {
    id: 11,
    prompt: {
      en: "Your relationship with fouls is:",
      zh: "你和犯规的关系是？",
    },
    options: [
      {
        key: "A",
        text: { en: "I draw them", zh: "我擅长造犯规" },
        dimensionWeights: {
          foul: 3,
          attack: 2,
          confidence: 1,
        },
        personalityWeights: {
          sgaer: 3,
        },
      },
      {
        key: "B",
        text: { en: "I commit them", zh: "我擅长犯规" },
        dimensionWeights: {
          foul: 3,
          defence: 2,
          physicality: 1,
        },
        personalityWeights: {
          foul: 3,
        },
      },
      {
        key: "C",
        text: { en: "I mostly stay out of foul trouble", zh: "我一般比较干净" },
        dimensionWeights: {
          composure: 2,
          defence: 1,
          foul: 0,
        },
        personalityWeights: {
          calm: 1,
        },
      },
      {
        key: "D",
        text: { en: "I avoid contact too much to foul", zh: "我太怕碰撞了，基本不会犯规" },
        dimensionWeights: {
          physicality: 0,
          foul: 0,
        },
        personalityWeights: {
          soft: 1,
          tofu: 1,
        },
      },
    ],
  },
  {
    id: 12,
    prompt: {
      en: "What do you do when someone drives at you on defense?",
      zh: "有人正面冲你防线时，你通常会？",
    },
    options: [
      {
        key: "A",
        text: { en: "Meet them hard", zh: "正面顶上去" },
        dimensionWeights: {
          defence: 3,
          physicality: 2,
          focus: 1,
        },
        personalityWeights: {
          foul: 1,
          worker: 1,
        },
      },
      {
        key: "B",
        text: { en: "Slide with them and stay balanced", zh: "滑步跟住，保持平衡" },
        dimensionWeights: {
          defence: 3,
          composure: 2,
          speed: 1,
        },
        personalityWeights: {
          calm: 1,
        },
      },
      {
        key: "C",
        text: { en: "Open the gates", zh: "一路放行" },
        dimensionWeights: {
          defence: 0,
          focus: 0,
        },
        personalityWeights: {
          road: 2,
        },
      },
      {
        key: "D",
        text: { en: "Get bumped and disappear", zh: "一碰就没了" },
        dimensionWeights: {
          physicality: 0,
          defence: 1,
        },
        personalityWeights: {
          tofu: 2,
          soft: 1,
        },
      },
    ],
  },
  {
    id: 13,
    prompt: {
      en: "How much do you move without the ball?",
      zh: "你无球时跑动积极吗？",
    },
    options: [
      {
        key: "A",
        text: { en: "Constant cutting and relocating", zh: "疯狂切入和换位" },
        dimensionWeights: {
          speed: 3,
          energy: 2,
          ball_IQ: 1,
        },
        personalityWeights: {
          sneaker: 3,
        },
      },
      {
        key: "B",
        text: { en: "I move when needed", zh: "该动的时候会动" },
        dimensionWeights: {
          speed: 1,
          ball_IQ: 1,
        },
        personalityWeights: {},
      },
      {
        key: "C",
        text: { en: "I mostly stay put", zh: "我大多时候不怎么动" },
        dimensionWeights: {
          speed: 0,
          energy: 0,
        },
        personalityWeights: {
          hider: 1,
        },
      },
      {
        key: "D",
        text: { en: "I forget to move at all", zh: "我会忘记自己应该动" },
        dimensionWeights: {
          focus: 0,
          ball_IQ: 0,
          speed: 0,
        },
        personalityWeights: {
          lost: 2,
        },
      },
    ],
  },
  {
    id: 14,
    prompt: {
      en: "How much do you trust your handle?",
      zh: "你对自己的控球有多信任？",
    },
    options: [
      {
        key: "A",
        text: { en: "Very much", zh: "非常信" },
        dimensionWeights: {
          ball_handling: 3,
          confidence: 2,
          smoothness: 1,
        },
        personalityWeights: {
          fake: 1,
          isoer: 1,
        },
      },
      {
        key: "B",
        text: { en: "Enough for basics", zh: "够用" },
        dimensionWeights: {
          ball_handling: 2,
        },
        personalityWeights: {},
      },
      {
        key: "C",
        text: { en: "Not much", zh: "不太信" },
        dimensionWeights: {
          ball_handling: 1,
          confidence: 1,
        },
        personalityWeights: {
          lost: 1,
        },
      },
      {
        key: "D",
        text: { en: "The ball and I are in an unstable relationship", zh: "球和我关系不太稳定" },
        dimensionWeights: {
          ball_handling: 0,
          touch: 0,
        },
        personalityWeights: {
          oil: 1,
          lost: 1,
        },
      },
    ],
  },
  {
    id: 15,
    prompt: {
      en: "How do you react to an open three?",
      zh: "面对空位三分你会？",
    },
    options: [
      {
        key: "A",
        text: { en: "Shoot without hesitation", zh: "直接投" },
        dimensionWeights: {
          shot_accuracy: 3,
          confidence: 2,
          shot_making: 1,
        },
        personalityWeights: {
          three: 2,
          star: 1,
        },
      },
      {
        key: "B",
        text: { en: "Pump fake first", zh: "先假动作" },
        dimensionWeights: {
          smoothness: 2,
          confidence: 1,
          ball_handling: 1,
        },
        personalityWeights: {
          fake: 2,
        },
      },
      {
        key: "C",
        text: { en: "Pass it to someone else", zh: "传给别人" },
        dimensionWeights: {
          willingness: 2,
          confidence: 0,
        },
        personalityWeights: {
          mom: 1,
          kind: 1,
        },
      },
      {
        key: "D",
        text: { en: "Shoot and be surprised if it goes in", zh: "投了，但进了会先震惊" },
        dimensionWeights: {
          confidence: 1,
          shot_accuracy: 1,
          focus: 0,
        },
        personalityWeights: {
          woc: 2,
        },
      },
    ],
  },
  {
    id: 16,
    prompt: {
      en: "How present are you during a game?",
      zh: "比赛里你的存在感如何？",
    },
    options: [
      {
        key: "A",
        text: { en: "Very present, everyone feels me", zh: "存在感拉满" },
        dimensionWeights: {
          energy: 3,
          confidence: 2,
        },
        personalityWeights: {
          star: 1,
          damn: 1,
          claper: 1,
        },
      },
      {
        key: "B",
        text: { en: "Quiet but useful", zh: "安静但有用" },
        dimensionWeights: {
          focus: 2,
          willingness: 1,
        },
        personalityWeights: {
          worker: 1,
        },
      },
      {
        key: "C",
        text: { en: "Low-key", zh: "很低调" },
        dimensionWeights: {
          energy: 1,
        },
        personalityWeights: {
          hider: 1,
        },
      },
      {
        key: "D",
        text: { en: "Invisible", zh: "隐形" },
        dimensionWeights: {
          energy: 0,
          attack: 0,
          focus: 0,
        },
        personalityWeights: {
          hider: 3,
        },
      },
    ],
  },
  {
    id: 17,
    prompt: {
      en: "How often do you help others on the court or bench?",
      zh: "你会多主动照顾队友？",
    },
    options: [
      {
        key: "A",
        text: { en: "All the time", zh: "一直都在照顾" },
        dimensionWeights: {
          willingness: 3,
          energy: 2,
          composure: 1,
        },
        personalityWeights: {
          mom: 3,
          kind: 1,
        },
      },
      {
        key: "B",
        text: { en: "When needed", zh: "有需要时会" },
        dimensionWeights: {
          willingness: 2,
        },
        personalityWeights: {},
      },
      {
        key: "C",
        text: { en: "Not really, I focus on my own game", zh: "主要还是先顾自己" },
        dimensionWeights: {
          willingness: 0,
          attack: 1,
        },
        personalityWeights: {
          isoer: 1,
        },
      },
      {
        key: "D",
        text: { en: "I need someone to take care of me", zh: "我比较需要被照顾" },
        dimensionWeights: {
          willingness: 0,
          confidence: 0,
        },
        personalityWeights: {
          lost: 1,
          tofu: 1,
        },
      },
    ],
  },
  {
    id: 18,
    prompt: {
      en: "How athletic are you vertically?",
      zh: "你的弹跳和起跳能力怎么样？",
    },
    options: [
      {
        key: "A",
        text: { en: "Very explosive", zh: "很能跳" },
        dimensionWeights: {
          rebounding: 2,
          speed: 2,
          physicality: 1,
        },
        personalityWeights: {
          jumper: 3,
        },
      },
      {
        key: "B",
        text: { en: "Average", zh: "正常水平" },
        dimensionWeights: {
          rebounding: 1,
          speed: 1,
        },
        personalityWeights: {},
      },
      {
        key: "C",
        text: { en: "I mostly stay grounded", zh: "基本贴地飞行" },
        dimensionWeights: {
          rebounding: 0,
          speed: 0,
        },
        personalityWeights: {
          wbxl: 1,
        },
      },
      {
        key: "D",
        text: { en: "I jump at everything, even fakes", zh: "啥都跳，容易被骗飞" },
        dimensionWeights: {
          speed: 2,
          focus: 1,
          defence: 1,
        },
        personalityWeights: {
          jumper: 1,
          foul: 1,
        },
      },
    ],
  },
  {
    id: 19,
    prompt: {
      en: "What best describes your game rhythm?",
      zh: "你的比赛节奏感更像哪种？",
    },
    options: [
      {
        key: "A",
        text: { en: "Smooth and controlled", zh: "很顺，很松弛" },
        dimensionWeights: {
          smoothness: 3,
          composure: 2,
          ball_handling: 1,
        },
        personalityWeights: {
          calm: 1,
          fake: 1,
        },
      },
      {
        key: "B",
        text: { en: "Chaotic but alive", zh: "乱但很有活力" },
        dimensionWeights: {
          energy: 3,
          speed: 1,
          smoothness: 0,
        },
        personalityWeights: {
          woc: 1,
          moper: 1,
        },
      },
      {
        key: "C",
        text: { en: "Tense and rushed", zh: "紧张且急" },
        dimensionWeights: {
          smoothness: 0,
          composure: 0,
          focus: 1,
        },
        personalityWeights: {
          lost: 1,
        },
      },
      {
        key: "D",
        text: { en: "Emotionally unstable", zh: "情绪波动直接写在脸上" },
        dimensionWeights: {
          emo_stability: 0,
          energy: 2,
        },
        personalityWeights: {
          emoer: 2,
          damn: 1,
        },
      },
    ],
  },
  {
    id: 20,
    prompt: {
      en: "What role do you secretly think you are?",
      zh: "你心里最觉得自己像什么角色？",
    },
    options: [
      {
        key: "A",
        text: { en: "The star", zh: "核心" },
        dimensionWeights: {
          confidence: 3,
          attack: 2,
          shot_making: 1,
        },
        personalityWeights: {
          star: 3,
        },
      },
      {
        key: "B",
        text: { en: "The worker", zh: "脏活累活担当" },
        dimensionWeights: {
          willingness: 2,
          rebounding: 2,
          defence: 2,
        },
        personalityWeights: {
          worker: 2,
          moper: 1,
        },
      },
      {
        key: "C",
        text: { en: "The weird one", zh: "奇怪但有用的那种" },
        dimensionWeights: {
          energy: 2,
          smoothness: 1,
          confidence: 1,
        },
        personalityWeights: {
          woc: 1,
          fake: 1,
          sneaker: 1,
        },
      },
      {
        key: "D",
        text: { en: "Honestly? I'm not sure", zh: "说实话，我也不知道" },
        dimensionWeights: {
          confidence: 0,
          focus: 0,
          ball_IQ: 0,
        },
        personalityWeights: {
          lost: 2,
          hider: 1,
        },
      },
    ],
  },
];